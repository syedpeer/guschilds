<script>
import Element from '~/components/mixins/Element.mixin.vue'

export default {
  mixins: [Element],
  data: function () {
    return {
      'base': 'heading'
    }
  }
}
</script>

<style lang="scss">
.heading {
  font-weight: 400;
  line-height: 150%;
  margin: 0;
}

.heading--page-title {
  font-size: 28px;
  line-height: 1;
  margin-bottom: 8px;
}

.heading--page-slogan {
  font-size: 16px;
}

.heading--aside {
  margin: 12px 0;
  font-size: 18px;
  font-weight: 700;
  text-shadow: 1px 1px 0 #FFF;

  @media only screen and (min-width: 680px) {
    font-size: 21px;
  }
}
</style>
