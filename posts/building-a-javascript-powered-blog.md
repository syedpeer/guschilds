---
title: "Building a JavaScript-Powered Blog: What I Used and How It Went"
date: 2019-02-25 21:30:00
description: "Outlines my journey of deciding to build a blog with JavaScript, how I chose which tool to use, and how it went."
slug: building-a-javascript-powered-blog
---

I’ve recently been trying to be more mindful about what I consume and create online. I’m aiming to trade mindless scrolling for meaningful and productive uses of my time. An important piece of that equation, I’ve decided, is to start writing more often. Doing so would give me more opportunities to learn, to share that knowledge, and to improve my writing.

So I set out to start a personal blog. The result? You’re looking at it. This post is hopefully the first of many and I’m going to start simple. I’ll spend it discussing why I decided to build the blog, what I used to build it, and how that went.

## Choosing to build the blog
It’s hard not to notice that so many in the web development community are moving away from [Medium](https://medium.com/). It’s also not hard to see why. It started as a great experience, but now everyone’s posts look exactly the same. Also, readers are now bombarded with a multitude of popups and modals on every visit. I get the need to monetize and how effective those can be, but it’s quickly making it difficult to want to keep going back.

I don’t need to monetize my content and I want to be able to experiment with my blog’s design and technology. Sure, Medium and building from scratch aren’t the only two options, but I decided it was all or nothing. I wanted to build it.

## Choosing what to build it with
Being a front-end developer, I built the first iteration of my site with static, hand-coded HTML and CSS. I didn’t want wrestling with an unfamiliar tool to get in the way of design and markup decisions. But from there I had to decide how I was going to support posts. I didn’t want to be copying and pasting that static code. And while I’m quite comfortable with Drupal, a CMS felt like overkill.

I wanted Markdown files to be my CMS, which sounded like a job for a [static site generator](https://www.staticgen.com/). But which one? I wanted to use a tool built in a language I’m both familiar with and excited by, and that meant JavaScript.

A blog is definitely [not the typical use case](https://jasonformat.com/application-holotypes/) for a JavaScript framework, but tools built on top of them are bridging that gap. Still, I was wary of overcomplicating things for myself and of taking unnecessary hits in page performance. I explored my options with those hesitations in mind and I’ll revisit them later.

I decided to prioritize tools built with [React](https://reactjs.org/) and [Vue.js](https://vuejs.org/), which would align with what I encounter professionally. [Next.js](https://nextjs.org/) and [Nuxt.js](https://nuxtjs.org/), for React and Vue respectively, are popular Server Side Rendering frameworks that can generate static sites. But the fact that they can do so much more makes them a wiser choice for larger, more complex applications. I decided to take a pass on them and explore tools that focused solely on static site generation.

[GatsbyJS](https://www.gatsbyjs.org/), a React-based static PWA generator, has been the talk of the town recently, and I’ve liked what I’ve heard. But I’ve actually followed Vue closer and have more experience with it than React. I knew that I’d be able to build my blog faster with Vue, so I looked to see what the Vue community had to offer. That’s how I found [VuePress](https://vuepress.vuejs.org/) and [Gridsome](https://gridsome.org/).

The Vue core team built and maintains Vuepress, which makes it an attractive option. But its original purpose was to generate documentation websites. While it is broadening its support for use cases like a blog, it wasn’t clear how opinionated it would be. I didn’t want to have to bend it to achieve a completely custom design.

Gridsome, on the other hand, was heavily inspired by Gatsby. This means that my experience with it could translate to Gatsby on a client project. While Gridsome has a smaller team maintaining it, I can afford to take that risk on something like this. I decided that I’d try Gridsome first and switch gears if it wasn’t going well.

## Building a blog with Gridsome
To get started, I followed [the documentation](https://gridsome.org/docs) and a [two](https://alligator.io/vuejs/gridsome-blog/)-[part](https://alligator.io/vuejs/gridsome-list-posts/) article that walks through building a Markdown-powered blog. After installing Gridsome, I split my static HTML and CSS into Vue components, arranged within Gridsome’s folder structure. I also converted my CSS to Sass while doing so. The result was a `Default.vue` layout that powered my homepage’s `Index.vue` file. I built and deployed that first.

Next I added a `Post.vue` template, powered by my Default layout, and a GraphQL query to pull the data. I also added another query that will list my posts as they’re added. Those changes will go live alongside this post. The hardest part about this step was writing the post itself!

As for deployments, I’ve had a really basic hosting plan for years. I wanted to use what I’ve already paid for, so I’m using `rsync` to send the result of `gridsome build` to the server. I put a free [Cloudflare](https://www.cloudflare.com/) plan in front of my domain and a few tweaks later, I’m seeing all green on [WebPageTest](http://webpagetest.org/). (Had I not been in this position, a free [Netlify](https://www.netlify.com/) plan would likely have been the way to go.)

## The end result
I really enjoyed using Gridsome. I’m a sucker for a minimal, straightforward directory structure, so I was in love from the beginning. I didn’t even end up installing the other options because it ended up being exactly what I needed. It was simple to get started and I appreciated the opinions it did have.

Not only is generating post pages now a breeze, but Gridsome added a lot of value that I wouldn’t have had the energy to implement otherwise. Prefetching, hydration, lazyloading, PWA support, favicon generation, and more. I was worried that using a JavaScript framework would overcomplicate everything, but it’s hard the opposite effect. I’ve really enjoyed working with it and the user experience is phenomenal!

The only real challenge along the way was the lack of information available when I ran into issues that the documentation wasn’t clear about. I got stuck on a few little things and solving simple problems meant more digging than the quick search I was accustomed to. I don’t want to get into those in this post, but I’ll aim to do so in the future. That, or contribute to the documentation itself. It is open source, after all!

In the end, I’m glad I used Gridsome and would recommend trying it or something similar. While I didn’t share the specific steps I took, [my code is in a public GitHub repository](https://github.com/guschilds/guschilds) (beware: I’m far from a Vue.js/Gridsome expert). Have a look if it helps - the articles linked above should fill in the gaps. Let me know how it goes!

_Be sure to reach out on [Twitter (@guschilds)](https://twitter.com/guschilds) if you’d like to share any thoughts. Give me a follow if you’d like to hear about more posts like this in the future!_
