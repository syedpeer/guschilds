<template>
  <h5 class="post-item">
    <Link :url="url" modifiers="post-item" :external="external">
      <span class="post-item__title">{{ title }}</span>
      <span class="post-item__date">{{ date }}</span>
      <span class="post-item__source" v-if="source"> at {{ source }}</span>
    </Link>
  </h5>
</template>

<script>
import Link from '~/components/Link.vue'

export default {
  components: {
    Link
  },
  props: {
    'date': {
      'type': String
    },
    'source': {
      'type': String
    },
    'title': {
      'type': String
    },
    'url': {
      'type': String
    }
  },
  computed: {
    external() {
      return !!this.source;
    }
  }
}
</script>

<style>
.post-item {
  margin: 24px 0;
}

.post-item__title {
  display: block;
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 8px;
}

.post-item__date,
.post-item__source {
  font-size: 14px;
  font-weight: 400;
}
</style>
