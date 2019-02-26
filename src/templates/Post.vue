<template>
  <Layout>
    <Tier element="main" modifiers="post">
      <Container element="section">
        <Row>
          <Column modifiers="post">
            <div class="post">
              <Heading element="h1" modifiers="post-title" v-html="$page.post.title"/>
              <div class="post__content" v-html="$page.post.content"/>
              <Heading element="h5" modifiers="byline">
                Posted by <Link url="/" modifiers="inline">Gus Childs</Link> on {{ this.$page.post.date }}
              </Heading>
            </div>
          </Column>
        </Row>
      </Container>
    </Tier>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    description
    title
    content
    date(format: "MMMM D, YYYY", locale: "en-us")
  }
}
</page-query>

<script>
import Column from '~/components/Column.vue'
import Container from '~/components/Container.vue'
import Heading from '~/components/Heading.vue'
import Link from '~/components/Link.vue'
import Row from '~/components/Row.vue'
import Tier from '~/components/Tier.vue'

export default {
  components: {
    Column,
    Container,
    Heading,
    Link,
    Row,
    Tier
  },
  metaInfo () {
    return {
      titleTemplate: this.$page.post.title + ' | %s',
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$page.post.description
        }
      ]
    }
  }
};
</script>

<style lang="scss">
.post__content {
  h2 {
    line-height: 128%;
    position: relative;

    // Section links.
    a[href^="#"] {
      background-color: #E66039;
      display: block;
      height: 100%;
      left: -16px;
      margin: 0;
      padding: 0;
      position: absolute;
      width: 4px;

      &:hover {
        color: #E66039;
      }

      @media only screen and (min-width: 680px) {
        left: -24px;
      }

      @media only screen and (min-width: 960px) {
        left: -40px;
      }
    }
  }

  h2 {
    font-size: 21px;
    margin: 32px 0 24px;

    @media only screen and (min-width: 960px) {
      font-size: 28px;
      margin-top: 48px;
    }
  }

  p,
  ul {
    font-size: 16px;
    font-weight: 400;
    line-height: 158%;
    margin: 24px 0;

    @media only screen and (min-width: 960px) {
      font-size: 18px;
      margin: 32px 0;
    }
  }

  li {
    margin: 8px 0;
  }

  a {
    background-color: #FCEFEB;
    color: #385559;
    font-weight: 600;
    margin: -2px;
    padding: 2px;
    text-decoration: none;
    text-shadow: 1px 1px 0 #FFF8ED;

    &:hover {
      color: #E66039;
    }
  }

  code {
    background-color: #EEEEEE;
    font-size: .9em;
    letter-spacing: -.02em;
    margin: -2px 0;
    padding: 2px;
    text-shadow: 1px 1px 0 #FFF8ED;
  }
}

</style>
