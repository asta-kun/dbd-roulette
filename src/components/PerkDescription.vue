<template>
  <div class="description-container" :class="'description-'+id">
     <div class="description">
         <div class="image">
             <figure>
                 <img :src="perk.iconPathList[0]" :alt="perk.displayName">
             </figure>
         </div>
   
         <div class="info">
             <p v-html="description">
             </p>
         </div>
   
         <div class="character">
                 <!-- show character -->
                 <figure v-if="charactersData.data[perk.associatedPlayerIndex].iconPath != 'None'">
                    <img :src="charactersData.data[perk.associatedPlayerIndex].iconPath" :alt="charactersData.data[perk.associatedPlayerIndex].idName">
                 </figure>
                 <!-- show default (not icon) -->
                 <figure v-else>
                    <img v-if="perk.role == 'EPlayerRole::VE_Camper'" src="@/assets/images/icon-survivor.png" alt="Available with any survivor">
                    <img v-else  src="@/assets/images/icon-killer.png" alt="Available with any killer">
                 </figure>
         </div>
     </div>

     <div class="remove" v-on:click="$emit('getNewPerk', id)">
       <span>Remove</span>
     </div>
  </div>
</template>

<script>
import CharactersData from '@/db/characters.ts';
import { gsap } from "gsap";
export default {
  props: ['perk', 'firstMounted', 'id'],
  data: function () {
    // description
    let description = this.perk.perkDefaultDescription || this.perk.perkLevel3Description;
    const levels = [[],[],[],[],[],[],[]];
        this.perk.perkLevelTunables.map( (level, index) => {
          level.map( (subLevel, subIndex) => {
            levels[subIndex].push(subLevel)
           } )
        })

          // console.log(levels)
        levels.map( (level, index) => {
          // console.log(level)
          description = description.replace(`{${index}}`, level.map( (item, index) => {
            return `<span class="${this.perk.perkLevelRarity[index].replace('EItemRarity::', '')}">${item}</span>`
          }).join('/') );
        } )
    return  {
      charactersData: new CharactersData(),
      description
    }
  },
  mounted: function(){
    // init animation
    this.firstMounted ? gsap.to(`.description-${this.id}`, {
          opacity:1, 
          scale: 1,
          duration: 0.15,
          delay: 0.1 * this.id
       }) : gsap.to(`.description-${this.id}`, {
          opacity:1, 
          scale: 1,
          duration: 0.15,
       });
  }
}
</script>

<style lang="stylus" >
.description-container
  position relative
  border-radius 4px
  background var(--primary-color)
  border-radius 4px
  margin 1em .5em
  transition 1s
  opacity 0
  padding 1em 0
  transform scale(.85)
  & .remove
    position absolute
    top 3%
    right .5%
    cursor pointer
    background red
    font-size 1em
    padding .5em .75em
    opacity 0
    border-radius 3px
    transition .5s
  &:hover
    box-shadow 0px 0px 10px #00000094
    & img
      filter contrast(115%)
    & .remove
      opacity 1

.description
  display flex
  justify-content space-between
  align-items center
  & .image
    width 10%
    & figure
      height 6em
      width 6em
      & img
        height inherit
        width inherit
  & .info
    width 60%
    font-size .9em
    & .Rare
      color #0c4e0f !important
      font-size 1.2em
    & .Uncommon
      color #fb9031 !important
      font-size 1.2em
    & .Common
      color #e9c459 !important
      font-size 1.2em
    & .VeryRare
      color #b24be5  !important
      font-size 1.2em
    & .FlavorText
      color #8e8e8e !important
      font-size .8em
      font-style italic
      display block
      margin-top 1em
  & .character
    width 20%
    display flex
    justify-content center
    & figure
      height 7.5em
      width 7.7em
      & img
        height inherit
        width inherit
        transition .5s


@media screen and (max-width:1050px)
  .description-container
    & .description
      flex-direction column
      text-align center
      & > *
        width 95%  !important
        & > *
          width auto !important
    & .remove
      opacity 1 !important
      right 2%


</style>