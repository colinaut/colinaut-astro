---
title: 'CatCubed QA'
date: '2009-12-01T14:15:04+00:00'
status: publish
permalink: /2009/12/01/catcubed-qa
author: Colin
excerpt: ''
type: post
layout: '../../layouts/BlogPost.astro'
id: 1067
category:
    - code
    - design
tag:
    - browsers
    - catcubed
    - css
    - html
post_format: []
image:
    - ''
---
So I’ve done a bit of cross-browser testing for my new CatCubed design:

- **Safari, Chrome (i.e., Webkit):** works perfect
- **iPhone Mobile Safari (i.e., Webkit):** works but any fixed attachment is ignored (this is due to how the iphone browser works)
- **Firefox, Camino (i.e., Gecko)**: works except for multiple background images
- **Internet Explorer 8:** Works (after a small fix) but is ugly due to lack of CSS3 support
- **Internet Explorer 7**: fails dramatically because of IE float bugs
- **Internet Explorer 6**: fails dramatically because of IE float bugs and lack of CSS2 support
- **Opera 10:** fails somewhat due to a bug in how Opera handles floats. Also is ugly due to lack of CSS3 support

Also, thanks to Jason I found (and fixed) a bug that only occured on large monitors (24″ or more).

As I mentioned, I added a small fix for IE so it’s readable, <del datetime="2009-12-02T02:04:07+00:00">but I’m not bothering to fix the IE6 or IE7 massive fails</del> <ins datetime="2009-12-02T02:04:07+00:00">and I added a very basic stylesheet for IE6/7 so they could at least read the content</ins>. Also, I added a “why don’t you try another browser” warning to the site for IE users.

Just thought I’d mention that this redesign is meant as a means for me to experiment with new techniques and do so quickly, which is why I am no longer fully supporting IE with this site. There are workarounds for many of the techniques that I am using on this site, but it would take me at least twice as long to implement. All my real work projects will continue to be built with a graceful degradation / progressive enhancement process in mind.