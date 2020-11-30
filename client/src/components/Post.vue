<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title"></p>
      <a href="#" class="card-header-icon" aria-label="more options">
        <span class="icon">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </a>
    </header>
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="post.URL" />
      </figure>
    </div>
    <div class="content2">
      {{ post.Reactions }} people reacted to this post.
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img
              :src="`http://localhost:3001/public/profiles/${post.Owner_id}.jpg`"
              alt="Profile image"
            />
          </figure>
        </div>

        <div class="media-content">
          <p class="title is-4">{{ post.FirstName }} {{ post.LastName }}</p>
          <p class="subtitle is-6">@{{ post.PrimaryEmail }}</p>
          <div ref="edit" id="edit">
            <p>
              {{ post.Text }}
            </p>
          </div>
          <div>
            <select
              id="exer2"
              ref="exer2"
              disabled
              @change="onChangeEx($event)"
            >
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
            <br />
            <p>
              {{ post.ExerciseName }}
            </p>
            <br />
            <select id="loc2" ref="loc2" disabled @change="onChangeLoc($event)">
              <option value="Location" diabled>Location</option>
              <option value="Home">Home</option>
              <option value="Gym">Gym</option>
              <option value="Outside">Outside</option>
            </select>
            <br />
            <p>
              {{ post.LocationName }}
            </p>
          </div>
          <div class="content">
            <div class="buttons">
              <button
                class="button"
                id="btn2"
                ref="btnEdit"
                @click="editItem(i)"
              >
                Edit
              </button>
              <button class="button" id="btn2" @click="deleteItem(i)">
                Delete
              </button>
            </div>
            <time :datetime="post.created_at">{{ post.created_at }}</time>
          </div>
        </div>
      </div>
    </div>

      <div class="media-content2" v-for="c in post.Comments" :key="c.id">
        <b>{{ c.FirstName }} {{ c.LastName }} : </b>
        <span> {{ c.Text }} </span>
      </div>
    <footer class="card-footer"></footer>
    <div class="field has-addons">
      <div class="control">
        <input class="input" type="text" placeholder="Add a comment" v-model="commentText"/>
      </div>
      <div class="control">
        <a class="button" id="btn3" @click.prevent="comment"> Post </a>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">
        <span class="icon">
          <i class="fas fa-reply" aria-hidden="true"></i>
        </span>
        Reply
      </a>
      <a href="#" class="card-footer-item">
        <span class="icon">
          <i class="fas fa-retweet" aria-hidden="true"></i>
        </span>
        Repost
      </a>
      <a href="#" class="card-footer-item" @click.prevent="react">
        <span class="icon">
          <i class="fas fa-heart" aria-hidden="true"></i>
        </span>
        React
      </a>
    </footer>
  </div>
</template>

<script>
import session from "@/models/session";
import {react, comment} from "../models/feed";

export default {
  props: {
    post: Object,
    i: Number,
  },
  data: () => ({
    isEdit: false,
    enable: true,
    Location: "Location",
    newExer: "",
    newLoc: "",
    commentText: '',
  }),
  methods: {
    /*deleteItem(i) {
      feed.deleteItem(i);
    },
    onChangeEx(event) {
      this.newExer = event.target.value;
    },
    onChangeLoc(event) {
      this.newLoc = event.target.value;
    },
    editItem(i) {
      this.isEdit = !this.isEdit;
      this.enable = !this.enable;
      this.$refs.edit.contentEditable = this.isEdit;
      this.$refs.exer2.disabled = this.enable;
      this.$refs.loc2.disabled = this.enable;
      if (this.isEdit == true) {
        this.$refs.btnEdit.innerText = "Finish";
        this.$refs.edit.focus();
      }
      if (this.isEdit == false) {
        this.$refs.btnEdit.innerText = "Edit";
        document.getElementById("exer2").selectedIndex = 0;
        document.getElementById("loc2").selectedIndex = 0;
        if (this.newExer == "") {
          this.newExer = this.item.exercise;
        }
        if (this.newLoc == "") {
          this.newLoc = this.item.location;
        }
        feed.editItem(i, this.$refs.edit.innerText, this.newExer, this.newLoc);
      }
    },*/
    async react() {
        const that = this;
        react(this.post.id)
        .then(x=> that.post.Reactions += 1)
        .catch(err=> console.error(err))
    },
    async comment() {
        const response = await comment(this.post.id, this.commentText);
        this.post.Comments.push(response);
    },
  },
};
</script>

<style >
.card {
  margin-bottom: 15px;
}
.posting {
  margin-bottom: 5px;
}
.input {
  font-weight: bold;
}
p {
  font-weight: bold;
}
#time {
  text-align: right;
}
#edit:focus {
  box-shadow: 0 0 5px pink;
  border-color: 1px solid pink;
  outline: 0;
}
#exer2:disabled,
#loc2:disabled {
  font-size: 16px;
  background: white;
  color: black;
  font-weight: bold;
  border: none;
  appearance: none;
}
#exer2:enabled,
#loc2:enabled {
  font-size: 15px;
  background: white;
  color: black;
}
.content2 {
  margin-left: 10px;
  margin-top: 5px;
}
.media-content2 {
  margin-left: 10px;
}
#btn3 {
  margin-top: 5px;
}
</style> 