<template>
  <section class="role-switch">
      <ul>
          <li
             v-on:click="$emit('changeRole', 'EPlayerRole::VE_Slasher')"
             v-bind:class="{active: role == 'EPlayerRole::VE_Slasher'}"
              >
              <img src="@/assets/images/icon-killer.png" alt="Survivor">
              <span>Killer</span>
          </li>
          <li
             v-on:click="$emit('changeRole', 'EPlayerRole::VE_Camper')"
             v-bind:class="{active: role == 'EPlayerRole::VE_Camper'}"
              >
              <img src="@/assets/images/icon-survivor.png" alt="Survivor">
              <span>Survivor</span>
          </li>
      </ul>
  </section>
</template>

<script>
export default {
    name: 'Role-Switch',
    props: ['role'],

}
</script>

<style lang="stylus" scoped>
.role-switch
  user-select none
  width 300px
  margin 0 0 1em 0
  padding .5em
  border-radius 3px
  & ul
    display flex
    font-size 1.45em
    justify-content space-around
    & li
      display flex
      align-items center
      cursor pointer
      opacity .6
      padding .25em 1em
      border-bottom 1px solid transparent
      & img
        height 1.25em
      &.active
        opacity 1
        border-bottom 1px solid var(--border-accent)

</style>