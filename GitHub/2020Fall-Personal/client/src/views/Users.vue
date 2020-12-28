<template>
  <div class="page">
    <h2 class="title is-2">Users Page</h2>

    <table class="table is-narrow is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Password</th>
          <th>DOB</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(x, i) in list" :key="i" :i="i" :post="x">
          <th>{{ x.id }}</th>
          <td>{{ x.FirstName }}</td>
          <td>{{ x.LastName }}</td>
          <td>{{ x.Password }}</td>
          <td>{{ x.DOB }}</td>
          <td>{{ x.Type }}</td>
        </tr>
      </tbody>
    </table>
    <div>
      <section>
        <b-field id="searchbar" label="Find a post">
          <b-autocomplete
            v-model="search"
            placeholder="Search key words in a post to find..."
            :data="filteredDataArray"
            @typing="getAsyncData"
            @select="(option) => (selected = option)"
          >
          </b-autocomplete>
        </b-field>
        <p class="content"><b>Selected Post:</b> {{ selected }}</p>
      </section>
    </div>
  </div>
</template>

<script>
import { getList } from "@/models/users";
import { getPosts} from "@/models/users";
import Vue from "vue";
import Buefy from "buefy";

Vue.use(Buefy, { defaultIconPack: "fa" });
window.Vue = Vue;
export default {
  data() {
    return {
      list: [],
      data: [],
      search: "",
      selected: null,
    };
  },
  async created() {
    this.list = await getList();
    this.data = await getPosts();
  },
  methods: {
    filteredDataArray() {
      return this.data.filter((option) => {
        return (
          option.toString().toLowerCase().indexOf(this.search.toLowerCase()) >=
          0
        );
      });
    },
  },
};
</script>
<style>
#searchbar {
  margin-right: 100%;
}
</style> 
