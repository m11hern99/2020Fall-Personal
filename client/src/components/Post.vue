<template>
  <div class="card">
    
    <div class="card-image">
        <figure class="image is-4by3">          <img :src="item.url" alt="picture">
        </figure>
    </div>
    <div class="card-content">

      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="item.owner.profile" alt="Profile image">
          </figure>
        </div>

        <div class="media-content">
            <p class="title is-4"> {{item.owner.name}} </p>
            <p class="subtitle is-6">@{{item.owner.handle}}</p>
            <div ref="edit" id = "edit" contentEditable = true >
              {{item.message}}
            </div>
            <div >
             <p> Exercise Name: </p> 
             {{item.exercise}}
             <p> Location: </p> 
             {{item.location}}
            </div>
            <div class="content">
                    <button class="button" id="btn2" @click ="editItem(i)"> Edit </button>
                    <button class="button" id= "btn2" @click="deleteItem(i)"> Delete </button>
               <div id ="time">
             <i> {{item.time}} </i>
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
    item: Object,
    i: Number
  },
      data: ()=> ({
        feed,
    }),
    methods:{
        deleteItem(i){
          feed.deleteItem(i);
        },
        editItem(i){
          //this works. find a way to make it editable on click of edit button 
         feed.editItem(i,this.$refs.edit.innerText);
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
p{
  font-weight: bold;
}
#time{
  text-align: right;
}
#edit:focus{
  box-shadow: 0 0 5px pink;
  border-color: 1px solid pink;
  outline: 0;
}
</style>