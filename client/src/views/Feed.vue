<template>
  <div class="page">
    <div class="posting">
      <textarea
        class="textarea"
        id="message"
        placeholder="Tell us about your exercise"
      ></textarea>
      <button @click="showPics()">
        <strong> <i class="fas fa-upload"></i> Add Picture </strong>
      </button>
      <div class="picture" ref="hide">
        <figure
          v-for="p in fbpics"
          :key="p.id"
          class="image is-64x64"
          @click.prevent="add(p)"
        >
          <img :src="p.picture" alt="" />
        </figure>
      </div>
      <label id="exercise" for="exercise">Choose Exercise:</label>
      <select id="exer">
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
      <select id="loc">
        <option value="empty">None Selected</option>
        <option value="Home">Home</option>
        <option value="Gym">Gym</option>
        <option value="Outside">Outside</option>
      </select>
      <button class="button" id="postBtn" @click="addItem()">Post</button>
    </div>
    <img id="output" />
    <p id="status"></p>
    <div class="columns">
      <div class="column is-one-quarter">
        <Sidebar />
      </div>
      <div class="column is-one-half">
        <Post v-for="(x, i) in posts" :key="i" :post="x" :i="i" />
      </div>
      <div class="column is-one-quarter">
        <Sidebar />
      </div>
    </div>
  </div>
</template>

<script>
import Post from "@/components/Post";
import Sidebar from "@/components/Sidebar";
import { getPosts } from "@/models/feed";
export default {
  data() {
    return {
      posts: [],
      fbpics: [],
      picDisplay: "block",
      loc: "",
      exer: "",
      mess: "",
    };
  },
  components: {
    Post,
    Sidebar,
  },
  async created() {
    this.posts = await getPosts();
    FB.api("me/photos?fields=link,images,picture", (x) => {
      this.fbpics = x.data;
    });
  },
  methods: {
    showPics: function () {
      this.$refs.hide.style.display = this.picDisplay;
      if (this.picDisplay == "none") {
        this.picDisplay = "block";
      } else {
        this.picDisplay = "none"; // when we make a post, then it will disappear
      }
    },
    add(p){
      this.posts.push({ 
      URL : p.images[0].source})
    },
    addItem() {
      var loc = document.getElementById("loc").value;
      var excer = document.getElementById("exer").value;
      var mess = document.getElementById("message").value;
      document.getElementById("exer").selectedIndex = 0;
      document.getElementById("loc").selectedIndex = 0;
      document.getElementById("message").value = "";
    },
  },
};
</script>
<style>
.content {
  text-align: start;
}
.button:focus {
  box-shadow: 0 0 5px pink;
  border: 1px solid pink;
  outline: 0px;
}
#postBtn {
  margin-left: 7px;
}
#btn2,
#edit2 {
  margin-top: 5px;
}
#exercise,
#location {
  margin-top: 5px;
  margin-right: 5px;
  margin-left: 5px;
}
#exer:focus,
#loc:focus {
  box-shadow: 0 0 5px pink;
  border: 1px solid pink;
  outline: 0px;
}
.content {
  position: relative;
}
.picture {
  display: none;
}
</style> 