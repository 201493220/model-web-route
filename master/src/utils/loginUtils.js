//import RndNum from './ranNum'
var loginUtil = {
  login: function(vue) {
    localStorage.setItem('token', '9eahshdjfsfsbf878788hk99')
    vue.$router.push('/' + vue.$store.getters.defaultApp)
    // vue.$config.code = RndNum(4)
    // var authorUrl = vue.$config.userAuthorizationUri
    // authorUrl =
    //   authorUrl +
    //   ('?' +
    //     vue.$querystring.stringify({
    //       client_id: vue.$config.clientId,
    //       response_type: vue.$config.response_type,
    //       scope: vue.$config.scope,
    //       state: vue.$config.state,
    //       redirect_uri: vue.$config.redirect_uri
    //     }))
    // location.href = authorUrl
  },
  logout: function(vue) {
    vue.$router.push('/login')
    localStorage.removeItem('token')
  }
}

export default loginUtil
