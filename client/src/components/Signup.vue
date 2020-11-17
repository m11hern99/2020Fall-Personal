<template>
  <div class="field">
    <label class = "label"> Name</label>
    <div class="control has-icons-left has-icons-right">
        <input id = "input" class="input" type="text" placeholder="Name">
      <span id = "icon" class = "icon is-small is-left">
         <i class="fas fa-address-card"></i>
      </span>
    </div>
    <label class="label">Username</label>
      <div class="control has-icons-left has-icons-right">
        <input id = "input" class="input" type="text" placeholder="Create Username">
        <span id = "icon" class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </div>
    <label class="label">Password</label>
    <div class="control has-icons-left has-icons-right">
      <input id = "input"  class="input " type="password" placeholder="Enter a Password">
      <span id = "icon" class = "icon is-small is-left">
        <i class="fas fa-key"></i>
      </span>
    </div>
    <div class="control">
      <label class="checkbox">
        <input type="checkbox">
        I agree to the <a id = "terms" href="#">terms and conditions</a>
      </label>
    </div>
    <div class="field is-grouped">
      <div class="control">
          <button id = "submit" class="button is-dark">Submit</button>
      </div>
      <div class="control">
        <button id  = "submit" class="button is-light">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.field{
  text-align: left;
}
#icon{
  margin-top: 5px;;
}
.checkbox{
  margin-left: 5px;
}
</style>