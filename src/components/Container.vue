<script>
import Element from '~/components/mixins/Element.mixin.vue'

export default {
  mixins: [Element],
  data: function () {
    return {
      'base': 'container'
    }
  }
}
</script>

<style>
.container {
  /* 8 112px columns, 8 32px gutters */
  max-width: 1152px;
  margin: 0 auto;
}
</style>
