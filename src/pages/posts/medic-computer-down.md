---
title: 'Medic Computer Down!'
date: '2007-11-15T13:22:53+00:00'
status: publish
permalink: /2007/11/15/medic-computer-down
author: Colin
excerpt: ''
type: post
layout: '../../layouts/BlogPost.astro'
id: 117
category:
    - life
tag:
    - IT
    - mac
    - osx
    - troubleshooting
post_format: []
aktt_notify_twitter:
    - 'no'
---
Been in self tech support hell lately. A couple weeks ago, a power outage switched off my external drive in the middle of it being used which destroyed the file hierarchy. For various reasons it took about a week to recover all the data which didn’t live elsewheres. I restored the hard drive and copied everything back on to it.

Then just a couple days ago, my laptop froze up and then refused to boot again. I launched it in firewire target disk mode — which thankfully worked — attached it to Nifer’s machine, and backed up everything in my home folder to my external. Then I rebooted with a bootable DiskWarrior cd and set it to repair. This seemed to work. My machine booted, I immediately installed superduper and did a full clone of my laptop.

The next day, it froze again. I ran DiskWarrior again and it repaired a couple useless permissions but that was about it. Interestingly, it would boot in safe mode fine, but normal boots always resulted in either a generic lockup or this lovely corrupt stack kernel panic message: [![Kernel Panic wrecks havoc](https://catcubed.com/wp-content/uploads/2007/11/img_0895-t.jpg)](https://catcubed.com/wp-content/uploads/2007/11/img_0895.jpg)

Last night, I tried doing a fresh install of the operating system just in case. Unfortunately, the install process just errored out every time.

At this point, it’s looking like a hardware issue, so tonight I’ll run TechTool on it.

I’m glad I can do my own tech support, but I really wish I didn’t have to — I don’t have time for this.

<ins class="insertBlock" datetime="2007-11-16T08:30:44+00:00">**UPDATE:** TechTool was worthless as it said everything was peachy. I tried removing the one 3rd party RAM chip I have in there and sure enough that seems to have done the trick so far. Install completed fine and it loaded alright. Now I’m just restoring block-level from my superduper backup as I figure it wasn’t a software problem. </ins>

I’ll need to get some more RAM though as 256MB is just not enough. Interestingly it says lifetime warranty on the chip so I’ll have to look into that.