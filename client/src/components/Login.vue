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
        name: 'Maria Hernandez',
        handle: 'm11hern24',
        profile:"https://mail.google.com/mail/u/1?ui=2&ik=fdc8bf2c36&attid=0.1&permmsgid=msg-a:r4432692003323843178&th=17589f806c709fd0&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ9zbt-HM5tNOD9huzPb4NO0uv8Bsf3ES72VF0N6qlvMYr55eP2LUtuGV-8yWBk9d-glE25vT9kPGFUj8KOgBBIinuqrKm2jEE7TmkPOErQmGOizksX2vqqCEIA&disp=emb&realattid=17589f7fad245554d281"
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