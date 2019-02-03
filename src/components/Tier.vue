<script>
import Element from '~/components/mixins/Element.mixin.vue'

export default {
  mixins: [Element],
  data: function () {
    return {
      'base': 'tier'
    }
  }
}
</script>

<style>
.tier {
  padding: 24px 0;
}

.tier--header {
  background-color: #FFF8ED;
  border-top: 4px solid #E66039;
  text-shadow: 1px 1px 0 #FFF;
}

.tier--intro {
  background: #6CC4E9;
}
</style>
