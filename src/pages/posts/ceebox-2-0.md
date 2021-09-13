---
title: 'CeeBox 2.0'
date: '2009-11-19T16:36:01+00:00'
status: publish
permalink: /2009/11/19/ceebox-2-0
author: Colin
excerpt: ''
type: post
layout: '../../layouts/BlogPost.astro'
id: 731
category:
    - code
tag:
    - ceebox
    - 'javascript learning'
    - jquery
post_format: []
aktt_notify_twitter:
    - 'no'
image:
    - ''
---
I released version 2.0 of [CeeBox](https://catcubed.com/2008/12/23/ceebox-a-thickboxvideobox-mashup/) earlier this month. On the way to 2.0, I most likely completely rewrote the thing 3–4 times as I learned new and better ways to do things. Numerous times I would be riding on my bike and suddenly have inspiration for a new solution. Other times I would just dive into another javascript tutorial and find the answer laying there.

The development of CeeBox It’s been a long road and has taken a lot more of my time than I originally anticipated, but it’s been a great learning experience. I highly recommend anyone who wants to learn more javascript to create a plugin for their favorite framework. Personally I recommend [jQuery](https://jquery.com/) though they all have their strengths. Tripwire magazine has a great writeup on all of the [main javascript frameworks](https://www.tripwiremagazine.com/tools/developer-toolbox/top-10-javascript-frameworks-by-google.html).

I just released [2.0.5](https://github.com/catcubed/CeeBox/zipball/v2.0.5) today which fixes a bug that was submitted by one of my readers (I am thankful for everyone who submits bugs) and adds the last bit of functionality I wanted to include: namely, the ability to add additional video player support (relatively) easily. This last bit was made possible by some knowledge I gained from John Resig’s awesome and simple [Learning Advanced Javascript](https://ejohn.org/apps/learn/) tutorial and a better grasp of regular expressions.

Anyway, I think I’m finally happy with CeeBox as it stands:

- It’s pretty small for a script with this much functionality (12KB minimized). There are lightbox style scripts which are smaller but they have less functionality.
- And there are lightbox style scripts that are bigger and also have less functionality
- Really, I think it has become is one of the best full functional lightbox clone scripts out there for two main reasons: 
  - The only one that tops it for support of various video sites is the mootools based [mediabox advanced](https://iaian7.com/webcode/mediaboxAdvanced) which is a pretty impressive plugin (though it’s 18KB). But then again additional support can be easily added to CeeBox.
  - There are few that offer galleries for videos and none that I’ve seen that make it so easy to create galleries (there is no need to add gallery names in the class or rel for every damned link, just activate the ceebox function on a parent element)

There are a couple things it can’t do which I may add later, but I don’t need them at the moment, so I’m solidly gonna take a break from adding more functionality:

- It doesn’t currently support direct links to quicktime, wmv, or mp3 natively but you can use the public function $.fn.ceebox.popup to do that if you want.
- A number of video players are difficult if not impossible to add native ceebox support for because of the automatic detection method I use for video embeding. 
  - Daily Show (and a number of other sites) don’t include a id in the link to their video page, so I can’t automatically create the src link.
  - Flickr video does include the id, but there is no way to differentiate from the link itself which is a page with a photo and which is a page with a video. It would be fairly easy to add support for video but then it would assume every link to flickr was a video link. Clumsy to say the least.

I will continue to issue bug fixes when required, but the feature additions will slow to a trickle. Most likely I I will let it sit at 2.0.x for a while until I’m confident that every bug is squashed, and then I will promote it to 2.1.

With CeeBox wrapping up, I have a number of additional personal web projects that I’d like to get to.

- CeeTip – a basic small tooltip that works with CeeBox. (I already have a working version of this that I use, but I’d like to rework it and release it officially)
- CeeBox wordpress plugin – I have a half-assed CeeBox WP plugin that I use for this site, but I need to learn more php to do it right. If anyone with more WordPress plugin knowhow wants to help with this that would be great.
- Color Animation – I have an inkling to improve the [color animation](https://plugins.jquery.com/project/color) plugin, as it has been sitting there stagnant since 2007. It’s got a few issues that others have submitted and could use a little improvement, but it’s been ignored by it’s creator. Supposedly the jQuery UI has better color animation support, but I don’t need the whole UI library for every project.
- CatCubed overhaul – In the upcoming months I will be overhauling this site.

Anyways, I’m out. This post turned into something much longer than expected, but then again I’ve been working on this a while so it deserves a solid post to mark the conclusion.