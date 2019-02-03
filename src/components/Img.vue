<template>
  <span>
    <g-image :src="src" :alt="alt" :width="width" :class="classes"/>
  </span>
</template>

<script>
import Element from '~/components/mixins/Element.mixin.vue'

export default {
  mixins: [Element],
  props: {
    'alt': {
      'type': String
    },
    'src': {
      'type': String
    },
    'width': {
      'type': String
    }
  },
  data: function () {
    return {
      'base': 'image'
    }
  }
}
</script>

<style lang="scss">
.image--headshot {
  border-radius: 50%;
  display: block;
  height: auto;
  position: relative;
  width: 100%;
  z-index: 2;

  @media only screen and (max-width: 679px) {
    margin-bottom: -24px;
  }
}
</style>
