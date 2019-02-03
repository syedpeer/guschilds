<script>
import Element from '~/components/mixins/Element.mixin.vue'

export default {
  mixins: [Element],
  props: {
    'element': {
      'type': String,
      'default': 'p'
    },
  },
  data: function () {
    return {
      'base': 'txt'
    }
  }
}
</script>

<style>
.txt--intro {
  font-size: 16px;
  line-height: 150%;
}

.txt--copyright {
  font-size: 14px;
  margin: 0 0 24px;
  text-shadow: 1px 1px 0 #FFF;
}
</style>
