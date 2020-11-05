<template>
    <div class="page">
        <div class=posting>
        <textarea class="textarea" id= "message" placeholder="Enter Excersize"></textarea>
        <div class="file">
            <label class="file-label">
            <input class="file-input" type="file" name="resume">
                <span class="file-cta">
                <span class="file-icon">
                    <i class="fas fa-upload"></i>
                </span>
                <span class="file-label">
                    Add image
                </span>
                </span>
            </label>
            <button class="button" @click="addPost()"> Post </button>
        </div>
        </div>

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
    methods: {
        addPost(){
            var z ;
            var x = document.getElementById("message").value;
            feed.addPost(x,z);
        },
    }
}
</script>
<style>
.content{
    text-align: start;
}
.button:focus{
  box-shadow: 0 0 5px pink;
  border: 1px solid pink;
}
.file{
    margin-top : 5px;
}
.button{
    margin-left: 7px;
}
#btn2,#edit2{
    margin-top : 5px;
}
.content{
    position: relative;
    
}
</style>