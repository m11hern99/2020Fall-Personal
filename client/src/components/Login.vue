<template>
  <div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="text" placeholder="Email">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
    </span>
  </p>
  <p class="control has-icons-left">
    <input class="input" type="password" placeholder="Password">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
  <p class="control">
    <button class="button" id = "btn" @click="login">
     <strong> Login </strong>
    </button>
  </p>
</div>
</template>

<script>
import session from "@/models/session"

export default {
  methods: {
    login(){
      session.user= {
        name: 'John Smith',
        handle: 'johnsmith',
        profile:" https://images-na.ssl-images-amazon.com/images/I/31NXhN9iZoL._AC_SY355_.jpg"
      }
      this.$router.push('Feed');
    }
  }
}
</script>

<style>
.input{
  margin: 5px;
}
.input[type=text]:focus{
  box-shadow: 0 0 5px pink;
  padding: 3px 0px 3px 3px;
  margin: 5px 1px 3px 0px;
  border: 1px solid pink;
}
.input[type=password]:focus{
  box-shadow: 0 0 5px pink;
  padding: 3px 0px 3px 3px;
  margin: 5px 1px 3px 0px;
  border: 1px solid pink;
}

.field{
  text-align: center; 
  margin: auto;
  width: 50%;
  }
#login:focus{
  box-shadow: 0 0 5px pink;
  border: 1px solid pink;
}
#btn{
  margin-left: 200px;
}
</style>