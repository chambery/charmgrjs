(($) ->
  _init = ->
    if window.localStorage
      try
        _storage_service = window.localStorage
    else if window.globalStorage
      try
        _storage_service = window.globalStorage[window.location.hostname]
    else
      _storage_elm = document.createElement("link")
      if _storage_elm.addBehavior
        _storage_elm.style.behavior = "url(#default#userData)"
        document.getElementsByTagName("head")[0].appendChild _storage_elm
        _storage_elm.load "jStorage"
        data = "{}"
        try
          data = _storage_elm.getAttribute("jStorage")
        _storage_service.jStorage = data
      else
        _storage_elm = null
        return
    if _storage_service.jStorage
      try
        _storage = json_decode(_storage_service.jStorage)
      catch E3
        _storage_service.jStorage = "{}"
    else
      _storage_service.jStorage = "{}"
  _save = ->
    try
      _storage_service.jStorage = json_encode(_storage)
      if _storage_elm
        _storage_elm.setAttribute "jStorage", _storage_service.jStorage
        _storage_elm.save "jStorage"
  _checkKey = (key) ->
    throw new TypeError("Key name must be string or numeric")  if not key or (typeof key != "string" and typeof key != "number")
    true
  throw new Error("jQuery, MooTools or Prototype needs to be loaded before jStorage!")  if not $ or not ($.toJSON or Object.toJSON or window.JSON)
  _storage = {}
  _storage_service = jStorage: "{}"
  _storage_elm = null
  json_encode = $.toJSON or Object.toJSON or (window.JSON and (JSON.encode or JSON.stringify))
  json_decode = $.evalJSON or (window.JSON and (JSON.decode or JSON.parse)) or (str) ->
    String(str).evalJSON()
  
  $.jStorage = 
    version: "0.1.3"
    set: (key, value) ->
      _checkKey key
      _storage[key] = value
      _save()
      value
    
    get: (key, def) ->
      _checkKey key
      return _storage[key]  if key of _storage
      (if typeof (def) == "undefined" then null else def)
    
    deleteKey: (key) ->
      _checkKey key
      if key of _storage
        delete _storage[key]
        
        _save()
        return true
      false
    
    flush: ->
      _storage = {}
      _save()
      if window.localStorage
        try
          localStorage.clear()
      true
    
    storageObj: ->
      F = ->
      F:: = _storage
      new F()
  
  _init()
) window.jQuery or window.$
