<template>
  <div :class="'perk ' + 'perk-'+id" 
     v-on:click="$emit('getNewPerk', id)"
      >
      <img :class="data.perkLevelRarity[2].replace('EItemRarity::', '').toLowerCase()" :src="data.iconPathList[0]" :alt="data.displayName">
  </div>
</template>

<script>
import { gsap, Bounce } from "gsap";
export default {
  props: ['data', 'id', 'firstMounted'],
  data: () => {
    return {
    }
  },
  mounted: function(){
    // init animation
    this.firstMounted ? gsap.to(`.perk-${this.id}`, {
          opacity:1, 
          scale: 1,
          ease: Bounce.easeIn,
          duration: 0.35,
          delay: 0.1 * this.id
       }) : gsap.to(`.perk-${this.id}`, {
          opacity:1, 
          scale: 1,
          ease: Bounce.easeIn,
          duration: 0.35,
       });
  }
}

</script>

<style lang="stylus" scoped>
.perk
  display inline-block
  margin-right 3em
  user-select none
  transform rotate(45deg) scale(.5)
  position relative
  height 4.5em
  width 4.5em
  cursor pointer
  overflow hidden
  transition 1s
  opacity 0
  // animation init .35s linear forwards
  & img
    height inherit
    width inherit
    transition inherit
    position absolute
    transform rotate(-45deg) scale(1.5)
    background-size cover !important
    // kinds
    &.common
      background url(./../assets/images/perks-brackground/common.png)
    &.uncommon
      background url(./../assets/images/perks-brackground/uncommon.png)
    &.rare
      background url(./../assets/images/perks-brackground/rare.png)
    &.veryrare
      background url(./../assets/images/perks-brackground/veryRare.png)
  &:hover
    background #6f0b0b
    transform rotate(45deg) scale(1.15)
    &::before
       position absolute
       content 'X'
       width 100%
       height 100%
       display flex
       justify-content center
       align-items center
       font-size 2.5em
       font-family Arial, Helvetica, sans-serif
       transform rotate(-45deg)
    & img 
      opacity 0
      
@keyframes init
   from 
      opacity 0
      transform scale(.5)  rotate(45deg)
   to
      opacity 1
      transform scale(1) rotate(45deg)
</style>


<style lang="stylus" scoped>

</style>