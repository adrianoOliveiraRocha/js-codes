<template>
  <div class="container">

    <table class="table tab-striped mt-4">
      <thead>
        <tr>
          <th scope="col">User ID</th>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.id">
          <th scope="row">{{post.userId}}</th>
          <th>{{post.id}}</th>
          <td>{{post.title}}</td>
          <td>{{post.body}}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>

import axios from 'axios';

export default {
  data() {
    name: 'PostsExample';
    return {
      posts: []
    };
  },

  created() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(posts => {
      this.posts = posts.data
    });
  }

}
</script>

<style>

</style>
