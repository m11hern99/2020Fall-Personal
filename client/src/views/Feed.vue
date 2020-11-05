<template>
    <div class="page">
        <div class=posting>
        <textarea class="textarea" id= "message" placeholder="Enter Exercise"></textarea>
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
            <label id="exercise" for="exercise">Choose exercise:</label>
            <select id="excer" >
                <option value="empty">None Selected</option>
                <option value="Crunch">Crunch</option>
                <option value="Leg Curl">Leg Curl</option>
                <option value="Lunge">Lunge</option>
                <option value="Plank">Plank</option>
                <option value="Pull-up">Pull-up</option>
                <option value="Push-up">Push-up</option>
                <option value="Squat">Squat</option>
                <option value="Stretch">Stretch</option>
                <option value="Wall Sit">Wall Sit</option>
            </select>
            <label id="location" for="location">Location:</label>
                <select id="loc" >
                <option value="empty">None Selected</option>
                <option value="Home">Home</option>
                <option value="Gym">Gym</option>
                <option value="Outside">Outside</option>
            </select>
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
            var t =document.getElementById("loc").value
            var y; // wil be used for url to image
            var z = document.getElementById("excer").value;
            var x = document.getElementById("message").value;
            feed.addPost(x,z,y,t);
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
#exercise,#location{
    margin-top : 5px;
    margin-right: 5px;
    margin-left: 5px;
}
.content{
    position: relative;
}
</style>