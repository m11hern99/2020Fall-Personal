<template>
  <div id = "LoginBadge" >
    <div class="media" v-if="session.user">
      <div class="dropdown" :class = "{ 'is-active': isActive }" @click = "isActive = !isActive">
        <div class="dropdown">
          <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
            <router-link to="/feed">
            <span>{{session.user.name}}</span>
            <span class="icon is-small" id = "pfp">
              <img :src="session.user.profile" alt="Profile Picture">
            </span>
            </router-link>
          </button>
        </div>
      </div>
      <div class="dropdown-content">
      <a href="/signup">Sign Out</a>
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
}
</script>

<style>
.button:focus{
  box-shadow: 0 0 5px pink;
  border: 1px solid pink;
}
</style>