<template>
<div id = "LoginBadge" >
  <div class="media" v-if="session.user">
    <div class="dropdown" :class = "{ 'is-active': isActive }" @click = "isActive = !isActive">
  <div class="dropdown">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
      <span>{{session.user.name}}</span>
      <span class="icon is-small">
          <img :src="session.user.profile" alt="Profile Picture">
      </span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <router-link to="/login"  id = "button" class="button">Sign Out</router-link>
  </div>
</div>
    </div>



    <div class="buttons" v-else>
          <router-link to="/Signup" class="button is-dark">
            <strong>Sign up</strong>
          </router-link>
            <router-link to="/Login" class="button is-light">
            Log in
            </router-link>
    </div>
    </div>

</template>

<script> 
import session from "@/models/session";
export default {
    data: ()=> ({
        session,
        isActive : false
    }),
    methods: {
    signout(){

      }
    }
}
</script>

<style>

</style>