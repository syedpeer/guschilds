<template>
  <ul class="service-list">
    <li v-for="service in data">
      <Link :url="service.url" modifiers="service" external>{{ service.name }}</Link>
    </li>
  </ul>
</template>

<script>
import Link from '~/components/Link.vue'

export default {
  components: {
    Link
  },
  props: {
    'data': {
      'type': Array,
      'default': () => [
        {
          'url': 'https://twitter.com/guschilds',
          'name': 'Twitter'
        },
        {
          'url': 'https://github.com/guschilds',
          'name': 'GitHub'
        },
        {
          'url': 'https://www.drupal.org/u/guschilds',
          'name': 'Drupal.org'
        },
        {
          'url': 'https://www.linkedin.com/in/guschilds',
          'name': 'LinkedIn'
        }
      ]
    }
  }
}
</script>

<style>
.service-list {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  margin: 0 0 24px;
  padding: 0;
}
</style>
