<template>
<div class="page">
    
      <div class="columns">
        <div class = "column is-two-third">
            <Post v-for="(x,i) in feed.post" :key = "i" :post = "x" />
        </div>
         <div class = "column is-one-third">
            <Sidebar/>
        </div>
    </div>

    </div>
</template>

<script>
import Post from "@/components/Post";
import Sidebar from "@/components/Sidebar";
import feed from "@/models/feed";
export default {
    data: ()=> ({
        feed,
    }),
    components: {
        Post,
        Sidebar
    },
}
</script>

<style>
</style>