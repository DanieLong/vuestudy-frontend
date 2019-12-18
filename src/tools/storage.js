export let LocalStorage = {
  get: function(key) {
    return JSON.parse(window.localStorage.getItem(key))
  },

  set: function(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  },

  clear: function() {
    window.localStorage.clear()
  },

  remove: function(key) {
    window.localStorage.removeItem(key)
  }
}

export let SessionStorage = {
  get: function(key) {
    return JSON.parse(window.sessionStorage.getItem(key))
  },

  set: function(key, value) {
    window.sessionStorage.setItem(key, JSON.stringify(value))
  },

  clear: function() {
    window.sessionStorage.clear()
  },

  remove: function(key) {
    window.sessionStorage.removeItem(key)
  }
}

export let CookieStorage = {
  get: function(key) {
    let cValue = ''
    let cookies = document.cookie.split(';')
    cookies.forEach(c => {
      c = c.trim()
      if (c.indexOf(key) === 0) {
        cValue = c.substring(key.length + 1, c.length)
      }
    })
    return cValue
  },
  getSdk: function() {
    let cookies = document.cookie.split(';')
    return cookies
  },
  set: function(key, value, exdays) {
    if (exdays === undefined) {
      exdays = 1
    }
    let nowDate = new Date()
    nowDate.setTime(nowDate.getTime() + exdays * 24 * 60 * 60 * 1000)
    let expires = 'expires=' + nowDate.toUTCString()
    document.cookie = key + '=' + value + '; ' + expires
  }
}
