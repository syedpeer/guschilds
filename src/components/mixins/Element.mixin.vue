<template>
  <component :is="element" :class="classes">
    <slot/>
  </component>
</template>

<script>
export default {
  data: function () {
    return {
      'base': ''
    }
  },
  props: {
    'element': {
      'type': String,
      'default': 'div'
    },
    'modifiers': {
      'type': String
    }
  },
  computed: {
    classes() {
      let modifiers = [];

      if (this.modifiers) {
        modifiers = this.modifiers.split(' ').map(modifier => this.base + "--" + modifier);
      }

      return [this.base].concat(modifiers).join(' ');
    }
  }
}
</script>
