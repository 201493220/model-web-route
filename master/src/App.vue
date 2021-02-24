<template>
  <div id="root">
    <frame />
    <router-view></router-view>
  </div>
</template>
<script>
import Frame from '../src/views/Frame'
import * as theme from './utils/theme'
export default {
  components: {
    Frame
  },
  created() {
    theme.chooseTheme('gnblue')
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>
