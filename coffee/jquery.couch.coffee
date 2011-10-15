(($) ->
  encodeDocId = (docID) ->
    parts = docID.split("/")
    if parts[0] == "_design"
      parts.shift()
      return "_design/" + encodeURIComponent(parts.join("/"))
    encodeURIComponent docID
  prepareUserDoc = (user_doc, new_password) ->
    if typeof hex_sha1 == "undefined"
      alert "creating a user doc requires sha1.js to be loaded in the page"
      return
    user_prefix = "org.couchdb.user:"
    user_doc._id = user_doc._id or user_prefix + user_doc.name
    if new_password
      user_doc.salt = $.couch.newUUID()
      user_doc.password_sha = hex_sha1(new_password + user_doc.salt)
    user_doc.type = "user"
    user_doc.roles = []  unless user_doc.roles
    user_doc
  ajax = (obj, options, errorMessage, ajaxOptions) ->
    options = $.extend(successStatus: 200, options)
    ajaxOptions = $.extend(contentType: "application/json", ajaxOptions)
    errorMessage = errorMessage or "Unknown error"
    $.ajax $.extend($.extend(
      type: "GET"
      dataType: "json"
      cache: not $.browser.msie
      beforeSend: (xhr) ->
        if ajaxOptions and ajaxOptions.headers
          for header of ajaxOptions.headers
            xhr.setRequestHeader header, ajaxOptions.headers[header]
      
      complete: (req) ->
        try
          resp = httpData(req, "json")
        catch e
          if options.error
            options.error req.status, req, e
          else
            alert errorMessage + ": " + e
          return
        options.ajaxStart resp  if options.ajaxStart
        if req.status == options.successStatus
          options.beforeSuccess req, resp  if options.beforeSuccess
          options.success resp  if options.success
        else if options.error
          options.error req.status, resp and resp.error or errorMessage, resp and resp.reason or "no response"
        else
          alert errorMessage + ": " + resp.reason
    , obj), ajaxOptions)
  fullCommit = (options) ->
    options = options or {}
    if typeof options.ensure_full_commit != "undefined"
      commit = options.ensure_full_commit
      delete options.ensure_full_commit
      
      (xhr) ->
        xhr.setRequestHeader "Accept", "application/json"
        xhr.setRequestHeader "X-Couch-Full-Commit", commit.toString()
  encodeOptions = (options) ->
    buf = []
    if typeof (options) == "object" and options != null
      for name of options
        continue  if $.inArray(name, [ "error", "success", "beforeSuccess", "ajaxStart" ]) >= 0
        value = options[name]
        value = toJSON(value)  if $.inArray(name, [ "key", "startkey", "endkey" ]) >= 0
        buf.push encodeURIComponent(name) + "=" + encodeURIComponent(value)
    (if buf.length then "?" + buf.join("&") else "")
  toJSON = (obj) ->
    (if obj != null then JSON.stringify(obj) else null)
  $.couch = $.couch or {}
  uuidCache = []
  $.extend $.couch, 
    urlPrefix: ""
    activeTasks: (options) ->
      ajax url: @urlPrefix + "/_active_tasks", options, "Active task status could not be retrieved"
    
    allDbs: (options) ->
      ajax url: @urlPrefix + "/_all_dbs", options, "An error occurred retrieving the list of all databases"
    
    config: (options, section, option, value) ->
      req = url: @urlPrefix + "/_config/"
      if section
        req.url += encodeURIComponent(section) + "/"
        req.url += encodeURIComponent(option)  if option
      if value == null
        req.type = "DELETE"
      else if value != undefined
        req.type = "PUT"
        req.data = toJSON(value)
        req.contentType = "application/json"
        req.processData = false
      ajax req, options, "An error occurred retrieving/updating the server configuration"
    
    session: (options) ->
      options = options or {}
      $.ajax 
        type: "GET"
        url: @urlPrefix + "/_session"
        beforeSend: (xhr) ->
          xhr.setRequestHeader "Accept", "application/json"
        
        complete: (req) ->
          resp = httpData(req, "json")
          if req.status == 200
            options.success resp  if options.success
          else if options.error
            options.error req.status, resp.error, resp.reason
          else
            alert "An error occurred getting session info: " + resp.reason
    
    userDb: (callback) ->
      $.couch.session success: (resp) ->
        userDb = $.couch.db(resp.info.authentication_db)
        callback userDb
    
    signup: (user_doc, password, options) ->
      options = options or {}
      user_doc = prepareUserDoc(user_doc, password)
      $.couch.userDb (db) ->
        db.saveDoc user_doc, options
    
    login: (options) ->
      options = options or {}
      $.ajax 
        type: "POST"
        url: @urlPrefix + "/_session"
        dataType: "json"
        data: 
          name: options.name
          password: options.password
        
        beforeSend: (xhr) ->
          xhr.setRequestHeader "Accept", "application/json"
        
        complete: (req) ->
          resp = httpData(req, "json")
          if req.status == 200
            options.success resp  if options.success
          else if options.error
            options.error req.status, resp.error, resp.reason
          else
            alert "An error occurred logging in: " + resp.reason
    
    logout: (options) ->
      options = options or {}
      $.ajax 
        type: "DELETE"
        url: @urlPrefix + "/_session"
        dataType: "json"
        username: "_"
        password: "_"
        beforeSend: (xhr) ->
          xhr.setRequestHeader "Accept", "application/json"
        
        complete: (req) ->
          resp = httpData(req, "json")
          if req.status == 200
            options.success resp  if options.success
          else if options.error
            options.error req.status, resp.error, resp.reason
          else
            alert "An error occurred logging out: " + resp.reason
    
    db: (name, db_opts) ->
      maybeApplyVersion = (doc) ->
        if doc._id and doc._rev and rawDocs[doc._id] and rawDocs[doc._id].rev == doc._rev
          if typeof Base64 == "undefined"
            alert "please include /_utils/script/base64.js in the page for base64 support"
            false
          else
            doc._attachments = doc._attachments or {}
            doc._attachments["rev-" + doc._rev.split("-")[0]] = 
              content_type: "application/json"
              data: Base64.encode(rawDocs[doc._id].raw)
            
            true
      db_opts = db_opts or {}
      rawDocs = {}
      name: name
      uri: @urlPrefix + "/" + encodeURIComponent(name) + "/"
      compact: (options) ->
        $.extend options, successStatus: 202
        ajax 
          type: "POST"
          url: @uri + "_compact"
          data: ""
          processData: false
        , options, "The database could not be compacted"
      
      viewCleanup: (options) ->
        $.extend options, successStatus: 202
        ajax 
          type: "POST"
          url: @uri + "_view_cleanup"
          data: ""
          processData: false
        , options, "The views could not be cleaned up"
      
      compactView: (groupname, options) ->
        $.extend options, successStatus: 202
        ajax 
          type: "POST"
          url: @uri + "_compact/" + groupname
          data: ""
          processData: false
        , options, "The view could not be compacted"
      
      create: (options) ->
        $.extend options, successStatus: 201
        ajax 
          type: "PUT"
          url: @uri
          contentType: "application/json"
          data: ""
          processData: false
        , options, "The database could not be created"
      
      drop: (options) ->
        ajax 
          type: "DELETE"
          url: @uri
       , options, "The database could not be deleted"
      
      info: (options) ->
        ajax url: @uri, options, "Database information could not be retrieved"
      
      changes: (since, options) ->
        triggerListeners = (resp) ->
          $.each listeners, ->
            this resp
        getChangesSince = ->
          opts = $.extend(heartbeat: 10 * 1000, options, 
            feed: "longpoll"
            since: since
          )
          ajax url: db.uri + "_changes" + encodeOptions(opts), options, "Error connecting to " + db.uri + "/_changes."
        options = options or {}
        timeout = 100
        db = this
        active = true
        listeners = []
        promise = 
          onChange: (fun) ->
            listeners.push fun
          
          stop: ->
            active = false
        
        options.success = (resp) ->
          timeout = 100
          if active
            since = resp.last_seq
            triggerListeners resp
            getChangesSince()
        
        options.error = ->
          if active
            setTimeout getChangesSince, timeout
            timeout = timeout * 2
        
        if since
          getChangesSince()
        else
          db.info success: (info) ->
            since = info.update_seq
            getChangesSince()
        promise
      
      allDocs: (options) ->
        type = "GET"
        data = null
        if options["keys"]
          type = "POST"
          keys = options["keys"]
          delete options["keys"]
          
          data = toJSON(keys: keys)
        ajax 
          type: type
          data: data
          url: @uri + "_all_docs" + encodeOptions(options)
        , options, "An error occurred retrieving a list of all documents"
      
      allDesignDocs: (options) ->
        @allDocs $.extend(
          startkey: "_design"
         endkey: "_design0"
        , options)
      
      allApps: (options) ->
        options = options or {}
        self = this
        if options.eachApp
          @allDesignDocs success: (resp) ->
            $.each resp.rows, ->
              self.openDoc @id, success: (ddoc) ->
                appName = ddoc._id.split("/")
                appName.shift()
                appName = appName.join("/")
                index = ddoc.couchapp and ddoc.couchapp.index
                if index
                  appPath = [ "", name, ddoc._id, index ].join("/")
                else appPath = [ "", name, ddoc._id, "index.html" ].join("/")  if ddoc._attachments and ddoc._attachments["index.html"]
                options.eachApp appName, appPath, ddoc  if appPath
        else
          alert "Please provide an eachApp function for allApps()"
      
      openDoc: (docId, options, ajaxOptions) ->
        options = options or {}
        if db_opts.attachPrevRev or options.attachPrevRev
          $.extend options, beforeSuccess: (req, doc) ->
            rawDocs[doc._id] = 
              rev: doc._rev
              raw: req.responseText
        else
          $.extend options, beforeSuccess: (req, doc) ->
            if doc["jquery.couch.attachPrevRev"]
              rawDocs[doc._id] = 
                rev: doc._rev
                raw: req.responseText
        ajax url: @uri + encodeDocId(docId) + encodeOptions(options), options, "The document could not be retrieved", ajaxOptions
      
      saveDoc: (doc, options) ->
        options = options or {}
        db = this
        beforeSend = fullCommit(options)
        if doc._id == undefined
          method = "POST"
          uri = @uri
        else
          method = "PUT"
          uri = @uri + encodeDocId(doc._id)
        versioned = maybeApplyVersion(doc)
        $.ajax 
          type: method
          url: uri + encodeOptions(options)
          contentType: "application/json"
          dataType: "json"
          data: toJSON(doc)
          beforeSend: beforeSend
          complete: (req) ->
            resp = httpData(req, "json")
            if req.status == 200 or req.status == 201 or req.status == 202
              doc._id = resp.id
              doc._rev = resp.rev
              if versioned
                db.openDoc doc._id, 
                  attachPrevRev: true
                  success: (d) ->
                    doc._attachments = d._attachments
                    options.success resp  if options.success
              else
                options.success resp  if options.success
            else if options.error
              options.error req.status, resp.error, resp.reason
            else
              alert "The document could not be saved: " + resp.reason
      
      bulkSave: (docs, options) ->
        beforeSend = fullCommit(options)
        $.extend options, 
          successStatus: 201
          beforeSend: beforeSend
        
        ajax 
          type: "POST"
          url: @uri + "_bulk_docs" + encodeOptions(options)
          contentType: "application/json"
          data: toJSON(docs)
        , options, "The documents could not be saved"
      
      removeDoc: (doc, options) ->
        ajax 
          type: "DELETE"
          url: @uri + encodeDocId(doc._id) + encodeOptions(rev: doc._rev)
        , options, "The document could not be deleted"
      
      bulkRemove: (docs, options) ->
        docs.docs = $.each(docs.docs, (i, doc) ->
          doc._deleted = true
        )
        $.extend options, successStatus: 201
        ajax 
          type: "POST"
          url: @uri + "_bulk_docs" + encodeOptions(options)
          data: toJSON(docs)
        , options, "The documents could not be deleted"
      
      copyDoc: (docId, options, ajaxOptions) ->
        ajaxOptions = $.extend(ajaxOptions, complete: (req) ->
          resp = httpData(req, "json")
          if req.status == 201
            options.success resp  if options.success
          else if options.error
            options.error req.status, resp.error, resp.reason
          else
            alert "The document could not be copied: " + resp.reason
        )
        ajax 
          type: "COPY"
          url: @uri + encodeDocId(docId)
        , options, "The document could not be copied", ajaxOptions
      
      query: (mapFun, reduceFun, language, options) ->
        language = language or "javascript"
        mapFun = (if mapFun.toSource then mapFun.toSource() else "(" + mapFun.toString() + ")")  if typeof (mapFun) != "string"
        body = 
          language: language
          map: mapFun
        
        if reduceFun?
          reduceFun = (if reduceFun.toSource then reduceFun.toSource() else "(" + reduceFun.toString() + ")")  if typeof (reduceFun) != "string"
          body.reduce = reduceFun
        ajax 
          type: "POST"
          url: @uri + "_temp_view" + encodeOptions(options)
          contentType: "application/json"
          data: toJSON(body)
        , options, "An error occurred querying the database"
      
      list: (list, view, options) ->
        list = list.split("/")
        options = options or {}
        type = "GET"
        data = null
        if options["keys"]
          type = "POST"
          keys = options["keys"]
          delete options["keys"]
         
          data = toJSON(keys: keys)
        ajax 
          type: type
          data: data
          url: @uri + "_design/" + list[0] + "/_list/" + list[1] + "/" + view + encodeOptions(options)
        , options, "An error occured accessing the list"
      
      view: (name, options) ->
       name = name.split("/")
        options = options or {}
        type = "GET"
        data = null
        if options["keys"]
          type = "POST"
          keys = options["keys"]
          delete options["keys"]
          
          data = toJSON(keys: keys)
        ajax 
          type: type
          data: data
          url: @uri + "_design/" + name[0] + "/_view/" + name[1] + encodeOptions(options)
        , options, "An error occurred accessing the view"
      
      getDbProperty: (propName, options, ajaxOptions) ->
        ajax url: @uri + propName + encodeOptions(options), options, "The property could not be retrieved", ajaxOptions
      
      setDbProperty: (propName, propValue, options, ajaxOptions) ->
        ajax 
          type: "PUT"
          url: @uri + propName + encodeOptions(options)
          data: JSON.stringify(propValue)
        , options, "The property could not be updated", ajaxOptions
    
    encodeDocId: encodeDocId
    info: (options) ->
      ajax url: @urlPrefix + "/", options, "Server information could not be retrieved"
    
    replicate: (source, target, ajaxOptions, repOpts) ->
      repOpts = $.extend(
        source: source
        target: target
      , repOpts)
      ajaxOptions.successStatus = 202  if repOpts.continuous
      ajax 
        type: "POST"
        url: @urlPrefix + "/_replicate"
        data: JSON.stringify(repOpts)
        contentType: "application/json"
      , ajaxOptions, "Replication failed"
    
    newUUID: (cacheNum) ->
      cacheNum = 1  if cacheNum == undefined
      unless uuidCache.length
        ajax 
          url: @urlPrefix + "/_uuids"
          data: count: cacheNum
          async: false
        , success: (resp) ->
          uuidCache = resp.uuids
        , "Failed to retrieve UUID batch."
      uuidCache.shift()
  
  httpData = $.httpData or (xhr, type, s) ->
    ct = xhr.getResponseHeader("content-type") or ""
    xml = type == "xml" or not type and ct.indexOf("xml") >= 0
    data = (if xml then xhr.responseXML else xhr.responseText)
    $.error "parsererror"  if xml and data.documentElement.nodeName == "parsererror"
    data = s.dataFilter(data, type)  if s and s.dataFilter
    if typeof data == "string"
      if type == "json" or not type and ct.indexOf("json") >= 0
        data = $.parseJSON(data)
      else $.globalEval data  if type == "script" or not type and ct.indexOf("javascript") >= 0
    data
) jQuery
