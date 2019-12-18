export let Auth = {
  checkUser: function(cname) {
    let name = cname + '='
    let ca = document.cookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim()
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length)
      }
    }
    return ''
  },
  login: function(cname, cvalue, expireTime) {
    let d = new Date()
    d.setTime(d.getTime() + expireTime * 24 * 60 * 60 * 1000)
    let expires = 'expires=' + d.toGMTString()
    document.cookie = cname + '=' + cvalue + '; ' + expires
  },
  logout: function(name) {
    document.cookie = name + '=;expires=' + new Date(0).toGMTString()
  }
}
