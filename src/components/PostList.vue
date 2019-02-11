<template>
  <ul class="post-list">
    <li v-for="post in data">
      <PostItem
        :title="post.title"
        :url="post.path"
        :date="post.date"
        :source="post.source"
      />
    </li>
  </ul>
</template>

<script>
import PostItem from '~/components/PostItem.vue'

export default {
  components: {
    PostItem
  },
  props: {
    'data': {
      'type': Array
    }
  }
}
</script>

<style>
.post-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
</style>
