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
      </div>
    </div>

    <div class="content">
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>
</template>

<script>
import session from "@/models/session";

export default {
  props: {
    post: Object,
    i: Number
  }
}
</script>

<style>

</style>