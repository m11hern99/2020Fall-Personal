<template>
  <div class="card">
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
                Choose a file…
              </span>
            </span>
        </label>

        <button class="button" @click="addPost()"> Post </button>
      </div>
    </div>
    
    <div class="card-image">
        <figure class="image is-4by3">
          <img :src="post.url" alt="picture">
        </figure>
    </div>

    <div class="card-content">

      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="post.owner.profile" alt="Profile image">
          </figure>
        </div>

        <div class="media-content">
            <p class="title is-4"> {{post.owner.name}} </p>
            <p class="subtitle is-6">@{{post.owner.handle}}</p>
            <p class="subtitle is-6">{{post.message}}</p>
        </div>
      </div>
      <div class="content">
        <div    v-for="(x,i) in feed.post" :key="i"
          :class="`is-${x.type}`">
           <button align=right class="button" @click="deletePost(i)"> Delete </button>
           <button align=right class="button"> Edit </button>
          {{x.text}}
        </div>
      </div> 

    </div> 

  </div>
</template>

<script>

import feed from "@/models/feed";
import session from "@/models/session";


export default {
  props: {
    post: Object,
    i: Number
  },
      data: ()=> ({
        feed
    }),
    methods: {
        deletePost(j){
            feed.deletePost(j);
        },
        addPost(){

        },
        editPost(){

        }
    },
}
</script>

<style>
.card{
  margin-bottom: 15px;
}
.posting{
  margin-bottom: 5px;
}
</style>