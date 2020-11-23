<template>
  <div class="card">
    
    <div class="card-image">
        <figure class="image is-4by3">          
          <img :src="post.URL" >
        </figure>
    </div>
    <div class="card-content">

      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="`http://localhost:3001/public/profiles/${post.Owner_id}.jpg`" alt="Profile image">
          </figure>
        </div>

        <div class="media-content">
            <p class="title is-4"> {{post.FirstName}} {{post.LastName}}</p>
            <p class="subtitle is-6">@{{post.PrimaryEmail}}</p>
            <div ref="edit" id = "edit">
              <p1>
              {{post.Text}}
              </p1>
            </div>
            <div >
            <select id="exer2" ref="exer2" disabled @change="onChangeEx($event)">
                <option value="Exercise Name">Exercise Name</option>
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
            <br>
            <p1>
            {{post.ExerciseName}}
            </p1>
            <br>
              <select id="loc2" ref="loc2" disabled @change="onChangeLoc($event)">
                <option value="Location" diabled >Location</option>
                <option value="Home">Home</option>
                <option value="Gym">Gym</option>
                <option value="Outside">Outside</option>
            </select>             
            <br>
            <p1>
             {{post.LocationName}}
             </p1>
            </div>
            <div class="content" >
              <div class ="buttons" >
                    <button class="button" id="btn2" ref="btnEdit" @click ="editItem(i)"> Edit </button>
                    <button class="button" id="btn2" @click="deleteItem(i)"> Delete </button>
              </div>
              <time :datetime="post.created_at">{{post.created_at}}</time>
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
        feed, isEdit : false, enable : true,
         Location: "Location", newExer: '', newLoc: '',
    }),
    methods:{
        deleteItem(i){
            feed.deleteItem(i);
        },
        onChangeEx(event) {
              this.newExer = event.target.value;
        },
        onChangeLoc(event) {
             this.newLoc = event.target.value;

        },
        editItem(i){
          this.isEdit = !this.isEdit;
          this.enable = !this.enable;
          this.$refs.edit.contentEditable = this.isEdit;
          this.$refs.exer2.disabled = this.enable;
          this.$refs.loc2.disabled = this.enable;
           if(this.isEdit == true){
            this.$refs.btnEdit.innerText = "Finish";
            this.$refs.edit.focus();
          }
          if(this.isEdit == false){  
            this.$refs.btnEdit.innerText = "Edit";
            document.getElementById("exer2").selectedIndex =0;
            document.getElementById("loc2").selectedIndex= 0;
            if(this.newExer == ''){
              this.newExer = this.item.exercise;
            }
            if(this.newLoc == ''){
              this.newLoc = this.item.location;
            }
            feed.editItem(i,this.$refs.edit.innerText,this.newExer,this.newLoc);
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
#exer2:disabled, #loc2:disabled{
  font-size: 16px;
  background: white;
  color: black;
  font-weight: bold;
  border: none;
  appearance: none;
}
#exer2:enabled, #loc2:enabled{
  font-size: 15px;
  background: white;
  color: black;
}
</style> 