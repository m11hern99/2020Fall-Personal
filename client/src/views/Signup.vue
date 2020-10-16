<template>
    <div class="container">
          <Signup />
         <router-view/>
     </div>
</template>

<script>
import Signup from "@/components/Signup";
export default {
    components: {
        Signup
    }

}
</script>

<style>

</style>