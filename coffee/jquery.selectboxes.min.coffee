((h) ->
  h.fn.addOption = ->
    j = (a, f, c, g) ->
      d = document.createElement("option")
      d.value = f
      d.text = c
      
      b = a.options
      e = b.length
      unless a.cache
        a.cache = {}
        i = 0
        
        while i < e
          a.cache[b[i].value] = i
          i++
      a.cache[f] = e  if typeof a.cache[f] == "undefined"
      a.options[a.cache[f]] = d
      d.selected = true  if g
    
    k = arguments
    return this  if k.length == 0
    l = true
    m = false
    
    if typeof (k[0]) == "object"
      m = true
      n = k[0]
    if k.length >= 2
      if typeof (k[1]) == "boolean"
        l = k[1]
      else l = k[2]  if typeof (k[2]) == "boolean"
      unless m
        o = k[0]
        p = k[1]
    @each ->
      return  unless @nodeName.toLowerCase() == "select"
      if m
        for a of n
          j this, a, n[a], l
      else
        j this, o, p, l
    
    this
  
  h.fn.ajaxAddOption = (c, g, d, b, e) ->
    return this  unless typeof (c) == "string"
    g = {}  unless typeof (g) == "object"
    d = true  unless typeof (d) == "boolean"
    @each ->
      f = this
      h.getJSON c, g, (a) ->
        h(f).addOption a, d
        if typeof b == "function"
          if typeof e == "object"
            b.apply f, e
          else
            b.call f
    
    this
  
  h.fn.removeOption = ->
    d = arguments
    return this  if d.length == 0
    b = typeof (d[0])
    
    if b == "string" or b == "object" or b == "function"
      e = d[0]
      if e.constructor == Array
        j = e.length
        k = 0
        
        while k < j
          @removeOption e[k], d[1]
          k++
        return this
    else if b == "number"
      i = d[0]
    else
      return this
    @each ->
      return  unless @nodeName.toLowerCase() == "select"
      @cache = null  if @cache
      a = false
      f = @options
      unless not e
        c = f.length
        g = c - 1
        
        while g >= 0
          if e.constructor == RegExp
            a = true  if f[g].value.match(e)
          else a = true  if f[g].value == e
          a = f[g].selected  if a and d[1] == true
          f[g] = null  if a
          a = false
          g--
      else
        if d[1] == true
          a = f[i].selected
        else
          a = true
        @remove i  if a
    
    this
  
  h.fn.sortOptions = (e) ->
    i = h(this).selectedValues()
    j = (if typeof (e) == "undefined" then true else not not e)
    @each(->
      return  unless @nodeName.toLowerCase() == "select"
      c = @options
      g = c.length
      d = []
      b = 0
      
      while b < g
        d[b] = 
          v: c[b].value
          t: c[b].text
        b++
      d.sort (a, f) ->
        o1t = a.t.toLowerCase()
        o2t = f.t.toLowerCase()
        
        return 0  if o1t == o2t
        if j
          (if o1t < o2t then -1 else 1)
        else
          (if o1t > o2t then -1 else 1)
      
      b = 0
      
      while b < g
        c[b].text = d[b].t
        c[b].value = d[b].v
        b++
    ).selectOptions i, true
    this
  
  h.fn.selectOptions = (g, d) ->
    b = g
    e = typeof (g)
    if e == "object" and b.constructor == Array
      i = this
      h.each b, ->
        i.selectOptions this, d
    j = d or false
    return this  if e != "string" and e != "function" and e != "object"
    @each ->
      return this  unless @nodeName.toLowerCase() == "select"
      a = @options
      f = a.length
      c = 0
      
      while c < f
        if b.constructor == RegExp
          if a[c].value.match(b)
            a[c].selected = true
          else a[c].selected = false  if j
        else
          if a[c].value == b
            a[c].selected = true
          else a[c].selected = false  if j
        c++
    
    this
  
  h.fn.copyOptions = (g, d) ->
    b = d or "selected"
    return this  if h(g).size() == 0
    @each ->
      return this  unless @nodeName.toLowerCase() == "select"
      a = @options
      f = a.length
      c = 0
      
      while c < f
        h(g).addOption a[c].value, a[c].text  if b == "all" or (b == "selected" and a[c].selected)
        c++
    
    this
  
  h.fn.containsOption = (g, d) ->
    b = false
    e = g
    i = typeof (e)
    j = typeof (d)
    return (if j == "function" then this else b)  if i != "string" and i != "function" and i != "object"
    @each ->
      return this  unless @nodeName.toLowerCase() == "select"
      return false  if b and j != "function"
      a = @options
      f = a.length
      c = 0
      
      while c < f
        if e.constructor == RegExp
          if a[c].value.match(e)
            b = true
            d.call a[c], c  if j == "function"
        else
          if a[c].value == e
            b = true
            d.call a[c], c  if j == "function"
        c++
    
    (if j == "function" then this else b)
  
  h.fn.selectedValues = ->
    a = []
    @selectedOptions().each ->
      a[a.length] = @value
    
    a
  
  h.fn.selectedTexts = ->
    a = []
    @selectedOptions().each ->
      a[a.length] = @text
    
    a
  
  h.fn.selectedOptions = ->
    @find "option:selected"
) jQuery
