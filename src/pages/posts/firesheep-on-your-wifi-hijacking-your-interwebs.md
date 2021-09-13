---
title: 'Firesheep &#8211; On Your Wifi Hijacking Your Interwebs'
date: '2010-10-30T00:55:47+00:00'
status: publish
permalink: /2010/10/30/firesheep-on-your-wifi-hijacking-your-interwebs
author: Colin
excerpt: ''
type: post
layout: '../../layouts/BlogPost.astro'
id: 1351
category:
    - code
tag: []
post_format: []
image:
    - ''
---
I recently composed a layman’s description of Firesheep and the dangers it brings for my coworkers. Here is for those of you who also need to explain it to others who are low on the geek quotient:

This is an important security announcement for anyone who uses your laptop/iPad at coffee shops and other places with open wifi networks to surf the web.

***If you are on an open wifi network and use a website that does not use https your login can be easily hijacked by anyone on the same wifi network.***

**What this means:**
--------------------

If you sit down at a coffee shop and use Facebook, Facebook sends a cookie (a bit of info identifying you as you). A nefarious person at the same coffee shop can snatch this cookie using a new hacker tool called Firesheep and immediately hijack your session pretending to be you on Facebook. Once they have access to your Facebook they can easily get the password, which is why it is recommended not to use the same password for all websites. Firesheep also works for any website that does not use https for login like Twitter, Amazon, yahoo, etc.

- **Wifi Networks that are NOT secure:** any open wifi that does not use a password, this includes networks that only use a browser password like many coffee shop wifi networks
- **Wifi Networks that are secure:** any WEP/WPA encrypted network.
- **Sites that are NOT secure:** any site that uses only http can be hijacked (Facebook, Twitter, Myspace, Flickr, Amazon, Yahoo, Yelp, Windows Live, NY Times, CNET, etc.)
- **Sites that are secure:** sites that use https encryption for everything are safe from being hijacked (bank and credit card sites, paypal, <del datetime="2010-10-30T16:47:38+00:00">gmail</del>\*, ebay).

\*Gmail may not be secure even with HTTPS. I’ve been told that it leaks the cookies possibly due to chat.

Open wifi networks have always been unsecure in this way but there hasn’t been a tool this easy to use before. The new tool Firesheep is so simple an 8 year old can hack your account. It should be noted that even WEP/WPA networks are not truly secure but they are at least secure from Firesheep (WPA2 Enterprise is a better solution).

**How to be safe from being hijacked:**
---------------------------------------

Obviously avoiding open wifi networks protects from all this, but if you are on a open wifi there are other ways:

1. The best solution is to use VPN. Firesheep cannot hijack your session if you are using VPN! This creates a secure tunnel to the web which goes through the UCSF network and works regardless of what browser you are using. It also protects all your traffic including email/etc.
2. Another solution is to force https encryption on sites using a browser plugin: this only works for Chrome and Firefox and while effective this breaks aspects of some sites such as Facebook’s chat, and Google maps. Also it is [not always secure either](https://www.digitalsociety.org/2010/10/even-forced-ssl-is-broken-for-facebook-google-twitter/) as Facebook sends a lot of stuff unsecurely even if you force https. 
  1. Chrome browser plugin KB SSL Enforcer [download here](https://chrome.google.com/extensions/detail/flcpelgcagfhfoegekianiofphddckof)
  2. Firefox browser plugin HTTPS Everywhere [https-everywhere](https://www.eff.org/https-everywhere)
3. Another solution is to use a SOCKS Proxy and SSH tunnel, which is too geektastically complicated to go into here.

Reference:
----------

- [firesheep-will-permanently-scare-you-from-hotspots](https://www.digitalsociety.org/2010/10/firesheep-will-permanently-scare-you-from-hotspots/)
- [even-forced-ssl-is-broken-for-facebook-google-twitter](https://www.digitalsociety.org/2010/10/even-forced-ssl-is-broken-for-facebook-google-twitter/)
- [new\_tool\_automates\_webmail](https://blog.washingtonpost.com/securityfix/2007/08/new_tool_automates_webmail_acc.html) (this news article says it works on gmail. This is wrong.)
- [firesheep-in-wolves-clothing](https://techcrunch.com/2010/10/24/firesheep-in-wolves-clothing-app-lets-you-hack-into-twitter-facebook-accounts-easily/)
- [five-ways-to-shear-firesheep](https://www.zdnet.com/blog/networking/five-ways-to-shear-firesheep/283?tag=content;feature-roto)
- [how-to-guard-yourself-and-your-mac-from-firesheep](https://www.tuaw.com/2010/10/26/how-to-guard-yourself-and-your-mac-from-firesheep-and-wi-fi-snoo/)