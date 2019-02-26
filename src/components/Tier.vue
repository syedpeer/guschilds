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

<style lang="scss">
.tier {
  padding: 24px 0;
}

.tier--header {
  background-color: #FFF8ED;
  border-top: 4px solid #E66039;
}

.tier--intro {
  background: #6CC4E9;
}

.tier--post {
  @media only screen and (max-width: 679px) {
    padding: 0;
  }

  @media only screen and (min-width: 680px) {
    padding: 8px 0 48px;
  }

  @media only screen and (min-width: 960px) {
    padding: 32px 0 48px;
  }
}
</style>
