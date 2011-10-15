(($) ->
  height = $.fn.height
  width = $.fn.width
  $.fn.extend 
    height: ->
      return self.innerHeight or $.boxModel and document.documentElement.clientHeight or document.body.clientHeight  if this[0] == window
      return Math.max(document.body.scrollHeight, document.body.offsetHeight)  if this[0] == document
      height.apply this, arguments
    
    width: ->
      return self.innerWidth or $.boxModel and document.documentElement.clientWidth or document.body.clientWidth  if this[0] == window
      return Math.max(document.body.scrollWidth, document.body.offsetWidth)  if this[0] == document
      width.apply this, arguments
    
    innerHeight: ->
      (if this[0] == window or this[0] == document then @height() else (if @is(":visible") then this[0].offsetHeight - num(this, "borderTopWidth") - num(this, "borderBottomWidth") else @height() + num(this, "paddingTop") + num(this, "paddingBottom")))
    
    innerWidth: ->
      (if this[0] == window or this[0] == document then @width() else (if @is(":visible") then this[0].offsetWidth - num(this, "borderLeftWidth") - num(this, "borderRightWidth") else @width() + num(this, "paddingLeft") + num(this, "paddingRight")))
    
    outerHeight: ->
      (if this[0] == window or this[0] == document then @height() else (if @is(":visible") then this[0].offsetHeight else @height() + num(this, "borderTopWidth") + num(this, "borderBottomWidth") + num(this, "paddingTop") + num(this, "paddingBottom")))
    
    outerWidth: ->
      (if this[0] == window or this[0] == document then @width() else (if @is(":visible") then this[0].offsetWidth else @width() + num(this, "borderLeftWidth") + num(this, "borderRightWidth") + num(this, "paddingLeft") + num(this, "paddingRight")))
    
    scrollLeft: (val) ->
      unless val == undefined
        return @each(->
          if this == window or this == document
            window.scrollTo val, $(window).scrollTop()
          else
            @scrollLeft = val
        )
      return self.pageXOffset or $.boxModel and document.documentElement.scrollLeft or document.body.scrollLeft  if this[0] == window or this[0] == document
      this[0].scrollLeft
    
    scrollTop: (val) ->
      unless val == undefined
        return @each(->
          if this == window or this == document
            window.scrollTo $(window).scrollLeft(), val
          else
            @scrollTop = val
        )
      return self.pageYOffset or $.boxModel and document.documentElement.scrollTop or document.body.scrollTop  if this[0] == window or this[0] == document
      this[0].scrollTop
    
    position: (options, returnObject) ->
      elem = this[0]
      parent = elem.parentNode
      op = elem.offsetParent
      options = $.extend(
        margin: false
        border: false
        padding: false
        scroll: false
      , options or {})
      x = elem.offsetLeft
      y = elem.offsetTop
      sl = elem.scrollLeft
      st = elem.scrollTop
      if $.browser.mozilla or $.browser.msie
        x += num(elem, "borderLeftWidth")
        y += num(elem, "borderTopWidth")
      if $.browser.mozilla
        loop
          if $.browser.mozilla and parent != elem and $.css(parent, "overflow") != "visible"
            x += num(parent, "borderLeftWidth")
            y += num(parent, "borderTopWidth")
          break  if parent == op
          break unless (parent = parent.parentNode) and (parent.tagName.toLowerCase() != "body" or parent.tagName.toLowerCase() != "html")
      returnValue = handleOffsetReturn(elem, options, x, y, sl, st)
      if returnObject
        $.extend returnObject, returnValue
        this
      else
        returnValue
    
    offset: (options, returnObject) ->
      x = 0
      y = 0
      sl = 0
      st = 0
      elem = this[0]
      parent = this[0]
      elemPos = $.css(elem, "position")
      mo = $.browser.mozilla
      ie = $.browser.msie
      sf = $.browser.safari
      oa = $.browser.opera
      absparent = false
      relparent = false
      options = $.extend(
        margin: true
        border: false
        padding: false
        scroll: true
        lite: false
      , options or {})
      return @offsetLite(options, returnObject)  if options.lite
      if elem.tagName.toLowerCase() == "body"
        x = elem.offsetLeft
        y = elem.offsetTop
        if mo
          x += num(elem, "marginLeft") + (num(elem, "borderLeftWidth") * 2)
          y += num(elem, "marginTop") + (num(elem, "borderTopWidth") * 2)
        else if oa
          x += num(elem, "marginLeft")
          y += num(elem, "marginTop")
        else if ie and jQuery.boxModel
          x += num(elem, "borderLeftWidth")
          y += num(elem, "borderTopWidth")
      else
        loop
          parPos = $.css(parent, "position")
          x += parent.offsetLeft
          y += parent.offsetTop
          if mo or ie
            x += num(parent, "borderLeftWidth")
            y += num(parent, "borderTopWidth")
            absparent = true  if mo and parPos == "absolute"
            relparent = true  if ie and parPos == "relative"
          op = parent.offsetParent
          if options.scroll or mo
            loop
              if options.scroll
                sl += parent.scrollLeft
                st += parent.scrollTop
              if mo and parent != elem and $.css(parent, "overflow") != "visible"
                x += num(parent, "borderLeftWidth")
                y += num(parent, "borderTopWidth")
              parent = parent.parentNode
              break unless parent != op
          parent = op
          if parent.tagName.toLowerCase() == "body" or parent.tagName.toLowerCase() == "html"
            if (sf or (ie and $.boxModel)) and elemPos != "absolute" and elemPos != "fixed"
              x += num(parent, "marginLeft")
              y += num(parent, "marginTop")
            if (mo and not absparent and elemPos != "fixed") or (ie and elemPos == "static" and not relparent)
              x += num(parent, "borderLeftWidth")
              y += num(parent, "borderTopWidth")
            break
          break unless parent
      returnValue = handleOffsetReturn(elem, options, x, y, sl, st)
      if returnObject
        $.extend returnObject, returnValue
        this
      else
        returnValue
    
    offsetLite: (options, returnObject) ->
      x = 0
      y = 0
      sl = 0
      st = 0
      parent = this[0]
      options = $.extend(
        margin: true
        border: false
        padding: false
        scroll: true
      , options or {})
      loop
        x += parent.offsetLeft
        y += parent.offsetTop
        op = parent.offsetParent
        if options.scroll
          loop
            sl += parent.scrollLeft
            st += parent.scrollTop
            parent = parent.parentNode
            break unless parent != op
        parent = op
        break unless parent and parent.tagName.toLowerCase() != "body" and parent.tagName.toLowerCase() != "html"
      returnValue = handleOffsetReturn(this[0], options, x, y, sl, st)
      if returnObject
        $.extend returnObject, returnValue
        this
      else
        returnValue
  
  num = (el, prop) ->
    parseInt($.css((if el.jquery then el[0] else el), prop)) or 0
  
  handleOffsetReturn = (elem, options, x, y, sl, st) ->
    unless options.margin
      x -= num(elem, "marginLeft")
      y -= num(elem, "marginTop")
    if options.border and ($.browser.safari or $.browser.opera)
      x += num(elem, "borderLeftWidth")
      y += num(elem, "borderTopWidth")
    else if not options.border and not ($.browser.safari or $.browser.opera)
      x -= num(elem, "borderLeftWidth")
      y -= num(elem, "borderTopWidth")
    if options.padding
      x += num(elem, "paddingLeft")
      y += num(elem, "paddingTop")
    if options.scroll
      sl -= elem.scrollLeft
      st -= elem.scrollTop
    (if options.scroll then 
      top: y - st
      left: x - sl
      scrollTop: st
      scrollLeft: sl
     else 
      top: y
      left: x
    )
) jQuery
