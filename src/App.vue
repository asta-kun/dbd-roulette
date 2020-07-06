<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<style lang="stylus">
@import url('assets/styles/reset.styl')
@import url('assets/styles/fonts.styl')
@import url('assets/styles/themes.css')
</style>



<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>
