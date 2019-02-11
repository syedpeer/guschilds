<template>
  <div class="layout">
    <Tier element="header" modifiers="header">
      <Container>
        <Row>
          <Column>
            <Heading element="h1" modifiers="page-title">
              <Link url="/">Gus Childs</Link>
            </Heading>
            <Heading element="h2" modifiers="page-slogan">Front-End Developer, Drupal Expert, Project Lead, Writer, and Speaker</Heading>
          </Column>
        </Row>
      </Container>
    </Tier>
    <slot/>
    <Tier element="section" modifiers="intro">
      <Container>
        <Row modifiers="flex--md center--md">
          <Column modifiers="3 2--md 1-5--lg center--smo">
            <Img modifiers="headshot" src="/images/headshot.jpg" alt="Gus Childs headshot" width="400"/>
          </Column>
          <Column modifiers="6--md 4--lg">
            <Callout>
              <Heading element="h4" modifiers="aside">Nice to meet you!</Heading>
              <Txt modifiers="intro">I’m Gus, a Senior Software Engineer at <Link url="http://mondorobot.com/" modifiers="inline" external>Mondo Robot</Link>. I build complex websites with component-based design systems and open source technologies. That's also what I write and speak about. I'm a fan of fresh air and live in Golden, CO. <Link url="https://twitter.com/guschilds" modifiers="inline" external>Say hi!</Link></Txt>
            </Callout>
          </Column>
        </Row>
      </Container>
    </Tier>
    <Tier element="section">
      <Container>
        <Row modifiers="flex--md">
          <Column element="aside" modifiers="4--md">
            <Heading element="h4" modifiers="aside">Writing</Heading>
            <PostList :data="$static.posts.edges.map(post => post.node).concat([
              {
                'title': 'Questions To Ask Before Building a Component Library',
                'path': 'https://chromatichq.com/blog/questions-ask-building-component-library',
                'date': 'February 22, 2018',
                'source': 'chromatichq.com'
              },
              {
                'title': 'Evaluating Tools For Building a Component Library',
                'path': 'https://chromatichq.com/blog/evaluating-tools-building-component-library',
                'date': 'January 23, 2017',
                'source': 'chromatichq.com'
              },
              {
                'title': 'The Road to Speaking at DrupalCon',
                'path': 'https://chromatichq.com/blog/the-road-to-speaking-at-drupalcon',
                'date': 'August 5, 2016',
                'source': 'chromatichq.com'
              }
            ])"/>
          </Column>
          <Column element="aside" modifiers="4--md">
            <Heading element="h4" modifiers="aside">Speaking</Heading>
            <PostList :data="[
              {
                'title': 'Finding Your Way: Practical Strategies for Navigating Your Career',
                'path': 'https://events.drupal.org/seattle2019/sessions/finding-your-way-practical-strategies-navigating-your-career',
                'date': 'April 10, 2019',
                'source': 'DrupalCon Seattle'
              },
              {
                'title': 'Everybody Loves Performance: Easy Audits and Low-Hanging Fruit',
                'path': 'https://events.drupal.org/nashville2018/sessions/everybody-loves-performance-easy-audits-and-low-hanging-fruit',
                'date': 'April 10, 2018',
                'source': 'DrupalCon Nashville'
              },
              {
                'title': 'Aha! Understanding and Using Render Arrays in Drupal 8',
                'path': 'https://events.drupal.org/neworleans2016/sessions/aha-understanding-and-using-render-arrays-drupal-8',
                'date': 'May 10, 2016',
                'source': 'DrupalCon New Orleans'
              }
            ]"/>
          </Column>
        </Row>
      </Container>
    </Tier>
    <Tier element="footer" modifiers="footer">
      <Container>
        <Row modifiers="flex--md">
          <Column modifiers="4--md">
            <p class="text text--copyright">© 2019 Gus Childs</p>
          </Column>
          <Column modifiers="4--md">
            <ServiceList/>
          </Column>
        </Row>
      </Container>
    </Tier>
  </div>
</template>

<static-query>
query Posts {
  posts: allPost {
    edges {
      node {
        title
        path
        date(format: "MMMM D, YYYY", locale: "en-us")
      }
    }
  }
}
</static-query>

<script>
import Callout from '~/components/Callout.vue'
import Column from '~/components/Column.vue'
import Container from '~/components/Container.vue'
import Heading from '~/components/Heading.vue'
import Img from '~/components/Img.vue'
import Link from '~/components/Link.vue'
import PostItem from '~/components/PostItem.vue'
import PostList from '~/components/PostList.vue'
import Row from '~/components/Row.vue'
import ServiceList from '~/components/ServiceList.vue'
import Txt from '~/components/Txt.vue'
import Tier from '~/components/Tier.vue'

export default {
  components: {
    Callout,
    Column,
    Container,
    Heading,
    Img,
    Link,
    PostItem,
    PostList,
    Row,
    ServiceList,
    Txt,
    Tier
  }
}
</script>

<style>
body {
  background-color: #FFF8ED;
  color: #1E1E1E;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
}
</style>
