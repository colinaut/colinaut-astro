---
title: 'CeeTip &#8211; basic tool tip'
date: '2009-11-23T22:12:41+00:00'
status: publish
permalink: /2009/11/23/ceetip-basic-tool-tip
author: Colin
excerpt: ''
type: post
layout: '../../layouts/BlogPost.astro'
id: 774
category:
    - code
tag:
    - ceebox
    - javascript
    - jquery
    - plugin
    - tooltip
post_format: []
aktt_notify_twitter:
    - 'no'
image:
    - ''
---
<ins class="block" datetime="2010-01-21T06:48:54+00:00">Small Fix for IE. CeeTip v1.0.1</ins>

Announcing without much fanfare CeeTip, a basic jquery tooltip plugin which works smoothly with [CeeBox](https://catcubed.com/2008/12/23/ceebox-a-thickboxvideobox-mashup/) (v2.0.9 and higher).

<span style="line-height: 18px;">I couldn’t find one I wanted\* which also worked properly with CeeBox\*\*, so I borrowed code from [vTip](https://www.vertigo-project.com/projects/vtip), turned into a jquery plugin and modified it as follows:</span>

- moved all the css to the javascript (it’s so minimal that it seemed silly to have another css file.)
- added some optional settings.
- added a minimized version (only 1.6KB).

**Download** [CeeTip 1.0.1](https://github.com/catcubed/CeeTip/zipball/v1.0.1)

**You can also find** [CeeTip on Github](https://github.com/catcubed/CeeTip)

\* the problem I was having finding a tooltip is that several were either ugly or their file size was way too big.

\*\* Other tooltips can work as long as they either somehow keep the title tag intact or they store the title in linkelement.t on the link in question.