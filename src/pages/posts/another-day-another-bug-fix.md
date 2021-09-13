---
title: 'Another day another bug fix'
date: '2009-11-22T12:27:57+00:00'
status: publish
permalink: /2009/11/22/another-day-another-bug-fix
author: Colin
excerpt: ''
type: post
layout: '../../layouts/BlogPost.astro'
id: 743
category:
    - code
tag:
    - bug
    - ceebox
    - code
    - jquery
    - safari
    - webkit
post_format: []
aktt_notify_twitter:
    - 'no'
---
Erg. Note to self Safari (webkit) wrongly considers typeof /regexp/ == ‘function’ when all the other browsers use typeof /regexp/ == ‘object’

[CeeBox 2.0.7](https://github.com/catcubed/CeeBox/zipball/v2.0.7) released with bug fix for Safari/webkit that effected video embedding. Hopefully that’s the last of the bugs.

On a side note, I changed comments on my blog to be in reverse chronological order and put the comment field at the top as a temporary fix to the *“OMG there are so many damned comments!”* issue on some of the posts. I will likely revamp comments with a nested comments plugin or something when I revamp catcubed.com.