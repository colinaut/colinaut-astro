---
title: 'CeeBox 1.2 Upgrade'
date: '2009-09-14T22:03:46+00:00'
status: publish
permalink: /2009/09/14/ceebox-1-2-upgrade
author: Colin
excerpt: ''
type: post
layout: '../../layouts/BlogPost.astro'
id: 603
category: []
tag:
    - ceebox
    - javascript
    - jquery
post_format: []
aktt_notify_twitter:
    - 'no'
---
I guess I needed to exercise the geek part of my brain after all that art recently. Last Friday and today I dove into upgrading CeeBox to 1.2. This release includes a bunch of fixes and uses the swfobject jquery plugin instead of the normal swfobject.js which allows it to be much smaller and cleaner. As a result, with the use of the jquery plugin and with the new minified version of ceebox.js it saves 13KB which is huge.

The new version supports vimeo and daily motion along with all the others it did before. Also, it allows for flexible auto sizing of the modules (video or html) based on the browser window or you can set a static base size for either.

There are also a bunch of little bug fixes and code cleanup. CeeBox may be based on a mashup of Thickbox and Videobox but most of the code is radically changed and I feel improved.

You can download the new version and find more details at: [CeeBox – Thickbox/videobox mashup for jquery](https://catcubed.com/2008/12/23/ceebox-a-thickboxvideobox-mashup/).

My next step with this is that I’d like to make a wordpress plugin version of ceebox. Not any time soon though.