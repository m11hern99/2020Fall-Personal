<template>
<div class="page">
      <div class="columns">
        <div class = "column is-two-third">
            <Post v-for="(x,i) in posts" :key = "i" :post = "x" />
            <router-view/>
             </div>
         <div class = "column is-one-third">
            <Sidebar/>
            <router-view/>
        </div>
    </div>

    </div>
</template>

<script>
import Post from "@/components/Post";
import Sidebar from "@/components/Sidebar";
import {posts} from "@/models/feed";
export default {
    data(){
        return {
            posts
        }
    },
    components: {
        Post,
        Sidebar
    }
}
</script>

<style>

</style>