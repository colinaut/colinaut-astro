---
title: 'CatCubed redesign'
date: '2009-11-28T22:45:21+00:00'
status: publish
permalink: /2009/11/28/catcubed-redesign
author: Colin
excerpt: ''
type: post
layout: '../../layouts/BlogPost.astro'
id: 995
category:
    - code
    - design
tag:
    - catcubed
    - css3
    - design
    - html5
    - life
    - sass
    - 'web design'
post_format: []
image:
    - ''
---
I’ve been inspired… and I have a long weekend, which means that I’ve spent the last couple days buried in my laptop. My back aches, my eyes are screen burned, but nothing stops the freight train called inspiration.

[![Cube The Cat](https://catcubed.com/wp-content/uploads/2009/11/cube-the-cat.png "Cube The Cat")](/stuff/catcubed-papercraft.pdf)I give you the new and improved [CatCubed.com](https://catcubed.com)! Also, I’m releasing **Mr. Cube the Cat** as an adorable papercraft doll that you can make yourself! Like the new version of the site, he’s still in beta but he’s stable and I’m releasing him into the world anyway!

Download the **[Cube the Cat, papercraft](/stuff/catcubed-papercraft.pdf) PDF** (version 0.6 beta).

Yep, I’ve gone and scratched that designer itch that has been bugging me for a while. I’ve decided to use CatCubed as a means to experiment with new web techniques. Besides the cute little paper Cube the Cat, the new site includes:

- HTML5 semantic structural elements – minimizing the use of divs except where appropriate. *I’m still not perfectly happy with the semantic structure of the HTML. Some limitations were due to the layout particulars and the wordpress CMS. I will revisit this at a later point so that it is more in line with proper [HTML5 semantics](https://catcubed.com/2009/10/15/the-semantics-of-html5-structural-elements/).*
- Extensive use of new CSS3 styles – *multiple background images, rounded corners, rgba, box shadows, etc.*
- CSS built using SASS
- Simplified navigation – *Got rid of the sidebar modules clutter. Also, post categories have been reorganized with a focus on the three main things I write about* [*art*](/art/)*,* [*code*](/code/)*,* [*design*](/design/)*.*
- Coming Soon – *more robust art, code, and design sections with highlights of my various projects. Mobile version of the site (it’s a image heavy site now, so I think a mobile version is in order.)*

The site works best in webkit browsers (e.g., [Safari](https://www.apple.com/safari/), [Chrome](https://www.google.com/chrome), or [Internet Explorer with Chrome Frame](https://code.google.com/chrome/chromeframe/)). If you are on a gecko browser ([Firefox](https://www.mozilla.com/en-US/firefox/personal.html), [Camino](https://caminobrowser.org/)) everything works but you are missing a few design elements due to lack of Firefox’s ability to use multiple background images (this is supposed to be added in Firefox 3.6). I have not tested the site in Opera, but Opera is decent so it should work (except for some of the CSS3 styles). I also haven’t tested in any version of Internet Explorer, and I don’t plan on it. I’ve added the HTML5 shiv so that IE will recognize the HTML5 elements, but considering the fancy things I’m doing with floats, it likely fails pretty bad.

I’ve kicked this whole thing out fairly quickly and I’m experimenting with a few things so there are likely a few issues here or there. If you are running webkit (Safari, Chrome) or gecko (Firefox) and run across any bugs let me know.

I have a few additional things I want to do to this site over the coming weeks and months. So expect to see more changes.