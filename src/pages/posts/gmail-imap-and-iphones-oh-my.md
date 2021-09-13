---
title: 'Gmail, IMAP, and iPhones oh my!'
date: '2007-07-19T00:27:50+00:00'
status: publish
permalink: /2007/07/19/gmail-imap-and-iphones-oh-my
author: Colin
excerpt: ''
type: post
layout: '../../layouts/BlogPost.astro'
id: 70
category:
    - code
tag:
    - email
    - gmail
    - IMAP
    - iphone
post_format: []
aktt_notify_twitter:
    - 'no'
---
I’m full of big geeky joy because I got my convoluted email situation all working exactly how I wanted it!

<ins class="insertBlock" datetime="2007-07-26T21:05:38+00:00">**On Edit:** I’ve updated my approach to this and written a [better description plus tutorial in a new post](https://catcubed.com/2007/07/23/gmail-imap-and-iphones-part-2-the-tutorial/). I suggest you read the new post and skip this one unless you are interested in the process I went through to get to my current solution.</ins>

### The solution

Behind the scenes it’s convoluted, but it’s fairly transparent in day to day use, and as far as everyone else knows I’m still using my gmail address.

All mail goes through gmail, gets filtered so that mailing lists are kept on gmail, and mail from individuals is sent on to my iphone/apple mail. Also, it’s still all archived on gmail, so I can just delete email off my iphone safe in the knowledge that it’s all archived.

Sent mail is also sent through gmail which archives it and links it into conversation threads like normal. This way I can still use gmail for all my email archiving and searching.

### What the problem was

As [others](https://ask.metafilter.com/66186/Gmail-amp-iPhone-Problem) [have](https://www.intuitive.com/blog/gmail_on_apple_iphone_sucks.html) pointed out gmail sucks on the iphone—both the web interface and via pop3. There are ways to sorta fix this by [tweaking the settings](https://www.tuaw.com/2007/07/11/tuaw-tip-tell-gmail-not-to-send-your-iphone-a-copy-of-sent-mail/) or [setting up gmail through the Add Account &gt; Other](https://www.applegazette.com/iphone/the-true-fix-for-the-gmail-problem-on-the-iphone/). I combined this last option with the [gmail through IMAP](https://www.downloadsquad.com/2007/07/11/how-to-use-gmail-over-imap-and-tag-your-mail-too/) trick so that iPhone mail syncs nicely with Apple Mail (emails deleted on one are deleted on the other).

### The literal setup

1. My gmail account is still my main account and all emails still go to gmail
2. gmail’s built-in spam blocker captures the crap
3. my own gmail filter forwards all email — except mailing lists and spam — to a separate IMAP email account I set up\*
4. forwarded email is then removed from the gmail inbox, archived, and tagged “iphone”
5. Apple Mail on my powerbook and iphone are set to use the IMAP account for it’s incoming server and gmail’s STMP for outgoing messages
6. outgoing messages are sent to gmail’s STMP so that gmail retains a copy of the outgoing email.

\* alternatively, I could limit the email further by creating a white-list filter — it’s pretty extensible.

Now watch Google’s gonna turn around tomorrow and offer an built-in iphone gmail app with push functionality that solves all my previous issues.

### Errata &amp; Update:

Came across one problem with this setup. Because the outgoing messages are going towards gmail instead of the IMAP server, your send messages do not show up in the iphone’s (or Apple Mail’s) sent folder. Also, this makes it impossible to save drafts as it’s expecting a IMAP server to save the drafts to.

To solve this I could just send through the IMAP server, but with the gmail addy in the header. However, that would skip gmail and I wanted all my emails, including sent ones, to be archived there. Instead, I think I’m just gonna ignore this issue since it has the advantage of not storing sent emails on my phone — nothing to delete! I’d like to have a drafts function, but I can use notes for that.

I’m really liking using the iphone as a simple and clean email system. I get messages and then read, possibly respond, and then delete it. No emails are kept for more than a day or two and most are deleted immediately. A very GTD approach.

### Errata &amp; Update #2

Figured out I could also have it send to the IMAP and auto cc: all emails back to myself. That would do the trick of getting it into gmail. I could also have the gmail forwarding skip those auto cc: emails. Hmmmmm…. I might try that. Though a part of me still likes being forced to simplify all my emails with nothing being saved and having to just write emails and send.