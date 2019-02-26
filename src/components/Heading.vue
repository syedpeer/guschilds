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
  text-shadow: 1px 1px 0 #FFF;
}

.heading--page-title {
  font-size: 28px;
  line-height: 1;
  margin-bottom: 8px;

  .link {
    color: #1E1E1E;
    text-shadow: 1px 1px 0 #FFF;
  }
}

.heading--page-slogan {
  font-size: 16px;
}

.heading--post-title {
  font-size: 24px;
  font-weight: 700;
  line-height: 128%;
  margin: 24px 0;

  @media only screen and (min-width: 960px) {
    font-size: 32px;
    margin: 40px 0;
  }
}

.heading--aside {
  margin: 12px 0;
  font-size: 18px;
  font-weight: 700;

  @media only screen and (min-width: 680px) {
    font-size: 21px;
  }
}

.heading--byline {
  font-size: 14px;
  font-weight: 300;
  margin: 48px 0 32px;

  @media only screen and (min-width: 960px) {
    font-size: 16px;
  }
}
</style>
