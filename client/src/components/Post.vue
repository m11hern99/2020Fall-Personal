<template>
  <div class="card">
    
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
            <div id="edit" contentEditable="false">
                  {{post.message}}
            </div>
            <div class="content">
                <div v-for="(x,i) in feed.post" :key="i" 
                    :class="`is-${x.type}`" >
                    <button class="button" id= "btn2" @click="deletePost(i)"> Delete </button>
                    <button class="button" id="edit2" @click ="editPost(i)"> Edit </button>
                    {{x.text}}
                </div>
            </div> 

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
        feed,
    }),
    methods:{
        deletePost(j){
          feed.deletePost(j);
        },
                        editPost(i){
          var x = document.getElementById('edit').contentEditable;
          if(x == 'inherit' || x == 'false'){
            document.getElementById('edit').contentEditable = true;
            document.getElementById('edit2').innerHTML = "Make Change";
          }
          else{
            var text = document.getElementById('edit').innerHTML;
            feed.editPost(i,text);
            document.getElementById('edit2').innerHTML = "Edit";
            document.getElementById('edit').contentEditable = false;
          }
        }
    }
}
</script>

<style>
.card{
  margin-bottom: 15px;
}
.posting{
  margin-bottom: 5px;
}
.input{
  font-weight: bold;
}
</style>