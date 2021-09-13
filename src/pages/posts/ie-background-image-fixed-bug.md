---
title: 'IE Background Image Fixed bug'
date: '2010-11-09T01:44:06+00:00'
status: publish
permalink: /2010/11/09/ie-background-image-fixed-bug
author: Colin
excerpt: ''
type: post
layout: '../../layouts/BlogPost.astro'
id: 1359
category:
    - code
tag:
    - 'css bug IE9'
post_format: []
image:
    - ''
---
Noticed an odd and annoying bug in IE9 beta 64-bit (version 9.0.7930.16406). Images placed in the background using css with background-attachment fixed do this odd up &amp; down jiggle dance when scrolling. It primarily happens when using the scroll wheel or when using the arrow buttons on the scroll bar. if you scroll by dragging the scroll bar it doesn’t seem to happen. To see it yourself point IE9 to this [background image fixed test page](https://catcubed.com/test/bg-img-fixed.html) I made. I’ve already sent feedback to Microsoft, let’s hope they fix it.