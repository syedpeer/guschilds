<script>
import Element from '~/components/mixins/Element.mixin.vue'

export default {
  mixins: [Element],
  props: {
    'element': {
      'type': String,
      'default': 'aside'
    },
  },
  data: function () {
    return {
      'base': 'callout'
    }
  }
}
</script>

<style lang="scss">
.callout {
  background-color: white;
  padding: 16px 24px;
  position: relative;

  &:after {
    background-color: #6690A5;
    bottom: -4px;
    content: '';
    left: 4px;
    position: absolute;
    right: 4px;
    top: 100%;
  }

  @media only screen and (min-width: 680px) {
    padding: 8px 24px;
  }
}
</style>
