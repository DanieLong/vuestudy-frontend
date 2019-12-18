export let CookieOpt = {
  set: function(userInfo) {
    var Days = 30
    var exp = new Date()
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
    document.cookie = userInfo + '=' + escape(userInfo) + ';expires=' + exp.toGMTString()
  },
  get: function() {}
}
