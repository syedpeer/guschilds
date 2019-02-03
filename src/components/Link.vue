<template>
  <span>
    <a :class="classes" :href="url" target="_blank" v-if="external">
      <slot/>
    </a>
    <g-link :class="classes" :to="url" v-if="!external">
      <slot/>
    </g-link>
  </span>
</template>

<script>
import Element from '~/components/mixins/Element.mixin.vue'

export default {
  mixins: [Element],
  props: {
    'external': {
      'type': Boolean,
      'default': false
    },
    'url': {
      'type': String
    }
  },
  data: function () {
    return {
      'base': 'link'
    }
  }
}
</script>

<style lang="scss">
.link {
  color: #385559;
  display: block;
  position: relative;
  text-decoration: none;
  text-shadow: 1px 1px 0 #FFF8ED;
  transition: .2s all;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    background-color: #E66039;
    z-index: -1;
    display: block;
    opacity: 0.1;
    transition: .2s all;
  }

  &:hover {
    color: #E66039;
  }
}

.link--inline {
  display: inline-block;
  font-weight: 700;

  &:before {
    height: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% + 4px);
  }

  &:hover {
    &:before {
      height: calc(100% + 2px);
      width: calc(100% + 8px);
    }
  }
}

.link--post-item {
  &:before {
    height: calc(100% + 2px);
    left: -8px;
    top: -8px;
    width: 160px;
  }

  &:hover {
    &:before {
      width: 168px;
    }
  }
}

.link--service {
  font-size: 14px;
  font-weight: 600;

  &:before {
    height: 24px;
    left: -8px;
    top: -4px;
    width: 24px;
  }

  &:hover {
    &:before {
      width: 32px;
    }
  }
}
</style>
