<script>
import Element from '~/components/mixins/Element.mixin.vue'

export default {
  mixins: [Element],
  data: function () {
    return {
      'base': 'row'
    }
  }
}
</script>

<style>
@media only screen and (min-width: 680px) {
  .row--flex--md {
    display: flex;
  }

  .row--center--md {
    justify-content: center;
    align-items: center;
  }
}
</style>
