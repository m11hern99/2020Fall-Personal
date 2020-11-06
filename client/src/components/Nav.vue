<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div id="top" class="navbar-brand">
    <a href="/">
      <img src = "@/assets/Circle2.jpg" alt = "logo" width="70" height="15" >
    </a>
    <a role="button" class="navbar-burger burger" :class = "{ 'is-active': isActive }" @click = "isActive = !isActive" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu" :class = "{ 'is-active': isActive }" @click = "isActive = !isActive" >
    <div class="navbar-start">
      <router-link to="/" class="navbar-item" id="item" > <i id= "icon2" class = "fas fa-home" ></i>Home</router-link>
      <router-link to="/feed" class="navbar-item" id="item" >Feed</router-link>
    </div>
    <LoginBadge/>
  </div>
</nav>

</template>

<script>
import LoginBadge from "@/components/LoginBadge";
export default {
  data: () => ({
        isActive : false
  }),
  components: {
    LoginBadge
  }
}
</script>

<style>
#top{
    margin-top: 13px;
    margin-right: 10px;
}
#navbarBasicExample{
  margin-top: 30px;
}
#button:focus{
  box-shadow: 0 0 5px pink;
  border: 1px solid pink;
}
#button{
  margin-right: 7px;
}
#icon2{
  margin-right: 5px;
}
.badge{
  margin-top: 15px;
  margin-left:500px;
}
.navbar-item:focus{
  box-shadow: 0 0 5px pink;
  border: 1px solid pink;
}
#item:hover{
  color: pink;
}
</style>