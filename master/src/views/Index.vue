<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      state: '',
      code: ''
    }
  },
  methods: {
    getToken: function() {
      let _this = this
      this.$ajax
        .post(
          _this.$config.accessTokenUri,
          {
            client_id: _this.$config.clientId,
            client_secret: _this.$config.client_secret,
            code: _this.code,
            redirect_uri: _this.$config.redirect_uri,
            grant_type: _this.$config.grant_type
          },
          {
            headers: { Accept: 'application/json' }
          }
        )
        .then(response => {
          if (!response.data.error) {
            localStorage.setItem('token', response.data.access_token)
            _this.$router.push('/' + _this.$store.getters.defaultApp)
          } else {
            localStorage.setItem('token', null)
            _this.$router.push('/login')
            alert(response.data.error)
          }
        })
        .catch(error => {
          alert(error)
        })
    }
  },
  mounted: function() {
    this.code = this.$route.query.code
    this.state = this.$route.query.state
    this.getToken()
  }
}
</script>

<style></style>
