<template>
  <main class="home">

    <!-- switcher -->
    <role-switch  
       :role="role" 
       v-on:changeRole="changeRole"
       />

    <!-- perks container -->
    <perks-container 
       :role="role" 
       />

  </main>
</template>


<script>
import RoleSwitch from '@/components/RoleSwitch'
import PerksContainer from '@/components/PerksContainer'
export default {
  name: 'Home',
  components: {
    RoleSwitch,
    PerksContainer
  },
  data: () => {
    return {
      role: localStorage.getItem('role') || 'EPlayerRole::VE_Slasher'
    }
  },
  methods: {
    changeRole: function (role) {
      // update role
      this.role = role
      localStorage.setItem('role', role);
    }
  }
}
</script>


<style lang="stylus" scoped>
.home
  width 1200px
  max-width 95%
  margin 2em auto
</style>