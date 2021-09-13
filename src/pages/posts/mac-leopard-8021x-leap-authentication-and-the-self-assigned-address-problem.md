---
title: 'Mac Leopard, 802.1x LEAP authentication, and the self-assigned address problem'
date: '2009-02-04T13:46:09+00:00'
status: private
permalink: /2009/02/04/mac-leopard-8021x-leap-authentication-and-the-self-assigned-address-problem
author: Colin
excerpt: ''
type: post
layout: '../../layouts/BlogPost.astro'
id: 345
category:
    - code
    - design
tag:
    - 802.1x
    - Cisco
    - LEAP
    - Leopard
    - osx
    - troubleshooting
    - WEP
    - wifi
post_format: []
aktt_notify_twitter:
    - 'no'
---
Just a quick post here to get this info out there in the Google sea so that others hopefully can find this solution easier — *note the highly googleable title*. I was having loads of trouble connecting my MacBook Pro to the wifi network here at work. IT was no help because “we don’t support macs.”

Basically when trying to use our Cisco WEP-based LEAP security wifi network, it would seem to connect but sometimes throw up authentication errors, and it would never give me a real ip address, just self-assigned.

Then after much digging through the fields of Google, I found Hokietux.net’s [Fix: OS X‚Äôs ‚Äôself-assigned IP‚Äô Problem](https://hokietux.net/blog/?p=34). Seems adding a $ to the front of your password makes it all work. It authenticated fine and gave me a proper IP address.

**UPDATE: This worked yesterday and now it is not working!** Arg! This is really infuriating! I thought I had this solved. The iPhone solution still works.

Specific Mac Instructions (OS X 10.5):  
1\. From the Airport menu select ‚ÄúJoin other Network‚Äù  
2\. Select/Add SSID  
3\. Select LEAP security  
4\. User Name: \[user name\] or \[domain name\\user name\]  
5\. Password: $\[password\]

That did the trick for me and hopefully will work for any others with Macs

p.s. You can also connect via iPhone even though LEAP is not a visible option:  
1\. Settings -&gt; Network  
2\. Choose a Network -&gt; Other  
3\. Enter SSID  
4\. For security choose WPA Enterprise  
5\. User name: \[user name\] or \[domain name\\user name\]  
6\. Password: \[password\] (no $ needed; don‚Äôt ask me why)