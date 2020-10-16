<template>
      <div class="container">
          <Profile />
         <router-view/>
     </div>
</template>

<script>
import Profile from "@/components/Profile"
export default {
      components:{
            Profile
      }

}
</script>

<style>

</style>