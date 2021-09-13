---
title: 'iPhone IMAP/Gmail email hybrid issues &#038; fix'
date: '2007-07-31T11:33:21+00:00'
status: publish
permalink: /2007/07/31/iphone-imapgmail-hybrid-issues
author: Colin
excerpt: ''
type: post
layout: '../../layouts/BlogPost.astro'
id: 81
category:
    - code
tag:
    - gmail
    - IMAP
    - iphone
    - tutorial
post_format: []
aktt_notify_twitter:
    - 'no'
---
Seth reported problems with sending through their IMAP account do to the email in the header being different. This was mentioned in the comments section of my [Gmail, IMAP, and iPhones – Part 2 – The Tutorial](https://catcubed.com/2007/07/23/gmail-imap-and-iphones-part-2-the-tutorial/) post.

I’m assuming that some ISPs allow this and some don’t. Fortunately, as [Jared](https://jaredandtina.com/) mentioned, there is an easy way around this by using Gmail as your outgoing SMTP server. This also has the advantage that you don‚Äôt need to CC yourself on all emails, and as such you might want to set it up this way anyway. However, it has the disadvantage that sent mail is not also stored on your IMAP account‚Äîthis is not a big deal as it is stored in gmail.

I’ve updated my old post with this option.