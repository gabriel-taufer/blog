---
title: "TIL that I can rewrite an entire website in under an hour"
slug: "TIL-ai-website-building-and-procrastination"
author: "Gabriel Taufer"
pubDatetime: 2026-01-28T19:45:00Z
lang: en
featured: true
draft: false
tags: 
  - til
  - ai
  - astro
  - claude
  - career
  - personal
description: "How I figured out you can build a website astronomically faster using AI - if you know what you are doing."
---

![Stone head](@/assets/images/stone-head-from-somewhere-in-paris.png)
<figcaption class="text-center">
  Random image I found in my gallery.
</figcaption>


For some time I procrastinated creating a portfolio and some sort of writing space. In 2023/2024, I finally built a first version - hosted on <a href="https://taufer.dev" target="_blank">taufer.dev</a>, using create-react-app with some manually written components and whatever I could grab from random libraries.

It was full of flaws, and things didn't connect well. That's what you get from someone who always preferred backend over frontend and hadn't touched much frontend code in a while. But I hosted it anyway and linked it to my social media, just to have something there.

Fast forward about a year.

I'm in the middle of the usual AI news cycle - new launches, people going crazy over beta products, happily giving their personal data to services that launched yesterday - when I got myself thinking:

> What if I use AI to get over the boring job of porting my site to a new framework?

I wanted to use <a href="https://astro.build/" target="_blank">Astro</a>. I'd played with it before and liked it for practicality and SEO. So I set sail with Claude Code.
I started without much direction. Some veeeery loose prompts, closer to "here is the old structure, recreate this in Astro and keep the content intact" than anything fancy. No prompt engineering at all - I could probably have saved some water at a data center somewhere.

About an hour later, I had a new version published:
* Rewritten in Astro
* SEO optimized
* Better UI
* Same core functionality (multi-language, career/skills/contact sections)
* Much smoother than my original static page

I've seen more impressive achievements made possible by people using AI. But honestly? I was pretty impressed with this one also.

The first time I built this site, it took me a couple of days, so the contrast was brutal - ignoring the fact that I chose one of the worst approaches possible.

**What I liked most:** trying different ideas by just prompting and waiting. I could focus on the creative part - how I wanted things to look - while Claude handled the manual work of writing code and building layouts. Then I just made minor fine tuning tweaks.

---

The interesting part is not that AI can write code. It is that it changes where your attention goes.

When the *"boring"* parts are reduced or eliminated, you spend more time making decisions, refining, and shipping. And sometimes, that is all a side project needs to finally exist.