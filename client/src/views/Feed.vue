<template>
    <div class="page">
        <div class=posting>
            <textarea class="textarea" id= "message" placeholder="Tell us about your exercise"></textarea>
            <div class="file">
                <label class="file-label">
                    <input class="file-input" type="file" id="file-selector">
                    <span class="file-cta">
                        <span class="file-icon">
                            <i class="fas fa-upload"></i>
                        </span>
                        <span class="file-label" >
                            Add image
                        </span>
                    </span>
                </label>
                <label id="exercise" for="exercise">Choose Exercise:</label>
                <select id="exer" >
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
                    <option value="Lifting">Lifting</option>
                </select>
                <label id="location" for="location">Location:</label>
                <select id="loc" >
                    <option value="empty">None Selected</option>
                    <option value="Home">Home</option>
                    <option value="Gym">Gym</option>
                    <option value="Outside">Outside</option>
                </select>
                <button class="button" id="postBtn" @click="addItem()"> Post </button>
            </div>
        </div>
        <img id="output">
        <p id="status"></p>
        <div class="columns">
            <div class = "column is-two-third">
                <Post v-for="(x,i) in feed.item" :key = "i" :item = "x" :i="i" />
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
        feed, output: '',
    }),
    components: {
        Post,
        Sidebar
    },
    methods: {
        addItem(){
            var l =document.getElementById("loc").value
            var y;
            var z = document.getElementById("exer").value;
            var x = document.getElementById("message").value;
            document.getElementById("exer").selectedIndex= 0;
            document.getElementById("loc").selectedIndex= 0;
            document.getElementById("message").value = '';
            feed.addItem(x,z,y,l);
        },
        /*readFile(){
             this.output = document.getElementById('output');
            if (window.FileList && window.File && window.FileReader) {
                document.getElementById('file-selector').addEventListener('change', event => {
                output.src = '';
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.addEventListener('load', event => {
                    this.output.src= event.target.result;
                });
                reader.readAsDataURL(file);
                }); 
            }
        }*/
        // Work on reading in file
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
    outline:0px;
}
.file{
    margin-top : 5px;
}
#postBtn{
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
#exer:focus,#loc:focus{
    box-shadow: 0 0 5px pink;
    border: 1px solid pink;
    outline: 0px;
}
.content{
     position: relative;
}
</style> 