<template>
  <header>


      <!-- logo -->
      <div class="logo">
          <figure>
              <img src="@/assets/images/logo.png" alt="">
          </figure>
      </div>

      <!-- external links -->
      <nav class="external-links">
          <ul>
              <li>
                  <a href="/" title="Github"><FontAwesomeIcon :icon="['fab', 'github']" size="lg" /></a>
              </li>
          </ul>
      </nav>

  </header>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faGithub)

export default {
    components: { FontAwesomeIcon }
}
</script>


<style lang="stylus" scoped>
header
  background var(--primary-color)
  display flex
  justify-content space-between
  align-items center
  padding .25em 5%
  & .logo
      & figure
          height 2em
          & img
              height inherit
  & .external-links
      display flex
      align-items center
      font-size 1.2em
      & ul
          display flex
          & li
              margin-right .5em
</style>