---
title: 'Comparing Open Source Fonts'
date: '2010-05-19T23:33:26+00:00'
status: publish
permalink: /2010/05/19/comparing-open-source-fonts
author: Colin
excerpt: ''
type: post
layout: '../../layouts/BlogPost.astro'
id: 1276
category:
    - design
tag:
    - cleartype
    - fonts
    - google
    - mac
    - typography
    - 'web design'
    - webfonts
    - windows
post_format: []
image:
    - ''
---
Oh what a happy day to be a Web Developer! Google has released their [Google Font API](https://code.google.com/apis/webfonts/docs/getting_started.html) and the [Google Font Directory](https://code.google.com/webfonts) with a number of Open Source Fonts. Also released in cooperation with [TypeKit](https://typekit.com/) is the WebFont Loader which helps the FOUT (Flash of Unstyled Content) which is an issue with how Firefox handles downloaded fonts ( for more on FOUT and why WebLoader is a good thing see Paul Irish’s [Details on the New Google WebFont API](https://paulirish.com/2010/details-on-the-new-google-webfont-api/)).

All this is great as it make it a snap to use open source fonts, either the [one’s Google hosts](https://code.google.com/webfonts) (fast download! easy!) or you use WebFont Loader to make it simple to add other Open Source Fonts such as some of the great ones offered by [The League of Movable Type](https://www.theleagueofmoveabletype.com). If there are licensed fonts you want to use, I recommend looking into [TypeKit](https://typekit.com/)‘s services.

CrossPlatform Rendering Issues in a NutShell
--------------------------------------------

So now that the issue of web fonts is more or less solved, the next big issue is cross-platform font rendering. The best way to sum up the difference :

> **Mac:** the goal of font rendering is to preserve the design of the typeface as much as possible, even at the cost of a little bit of blurriness.
> 
> **Windows ClearType (Vista,Windows 7, anyone using IE7/8, and XP users smart enough to turn on ClearType):** the shape of each letter should be hammered into pixel boundaries to prevent blur and improve readability, even at the cost of not being true to the typeface. It is up to the font designers to build ClearType hinting into the font—without it the font may become illegible at small sizes.
> 
> **Windows no anti-aliasing (XP default):** pixels, pixels, pixels.
> 
> *much of the above was paraphrased from a great post by Paul Irish: [Font Rendering: Respecting The Pixel Grid](https://www.codinghorror.com/blog/2007/06/font-rendering-respecting-the-pixel-grid.html)*

In practice this means that Windows users tend to think type on a Mac looks blurry and Mac users think that type on Windows looks jagged and crappy. Also, and more important is that a font needs to be hinted for Windows ClearType renderer or else at sizes under 20px it becomes ugly and often illegible at smaller sizes.

For a more detailed breakdown of how fonts are rendered check out this awesome [font rendering chart](/uploads/2010/05/aaaaaa_4787.png) by Miha.

What does this mean for the typefaces in the Google Font Directory?
-------------------------------------------------------------------

So if you are a Mac user without a Windows box around you’ll mostly want to know which fonts are ugly/illegible at small sizes. I’ve taken a brief look at the fonts Google offers on my Windows PC here at work and came up with the following list. Note that some of these typefaces are meant as display only so they shouldn’t be used small anyway:

**UPDATE:**  for a more complete chart with screenshots including Windows Standard Mode and no anti-aliasing check out [**Comparing Open Source Fonts – Part 2**](https://catcubed.com/2010/05/20/comparing-open-source-fonts-part-2/)

### Open Source Fonts Appearance With Windows ClearType

<table border="0" class="comparison"><tbody><tr><th scope="col">Font</th><th scope="col">Best at or above</th><th scope="col">Ugly at</th><th scope="col">Illegible at</th></tr><tr><td>[Cantarell](https://code.google.com/webfonts/family?family=Cantarell)</td><td>14px</td><td>12px</td><td>11px</td></tr><tr><td>[Cardo](https://code.google.com/webfonts/family?family=Cardo)</td><td>18px</td><td>14px</td><td>12px</td></tr><tr><td>[Crimson Text](https://code.google.com/webfonts/family?family=Crimson+Text)</td><td>21px</td><td>18px</td><td>12px</td></tr><tr><td>[Droid Sans](https://code.google.com/webfonts/family?family=Droid+Sans)</td><td>12px</td><td>8px</td><td>8px</td></tr><tr><td>[Droid Sans Mono](https://code.google.com/webfonts/family?family=Droid+Sans+Mono)</td><td>12px</td><td>8px</td><td>8px</td></tr><tr><td>[Droid Serif](https://code.google.com/webfonts/family?family=Droid+Serif)</td><td>12px</td><td>11px</td><td>8px</td></tr><tr><td>[IM Fell](https://code.google.com/webfonts/list?family=IM+Fell) (depends on the version)</td><td>30-24px</td><td>21-18px</td><td>14-12px</td></tr><tr><td>[Inconsolata](https://code.google.com/webfonts/family?family=Inconsolata)\*</td><td>30px</td><td>24px</td><td>14px</td></tr><tr><td>[Josefin Sans Std Light](https://code.google.com/webfonts/family?family=Josefin+Sans+Std+Light)</td><td>36px</td><td>24px</td><td>16px</td></tr><tr><td>[Lobster](https://code.google.com/webfonts/family?family=Lobster)</td><td>24px</td><td>11px</td><td>11px</td></tr><tr><td>[Molengo](https://code.google.com/webfonts/family?family=Molengo)</td><td>24px</td><td>12px</td><td>9px</td></tr><tr><td>[Nobile](https://code.google.com/webfonts/family?family=Nobile)</td><td>16px</td><td>11px</td><td>8px</td></tr><tr><td>[OFL Sorts Mill Goudy TT](https://code.google.com/webfonts/family?family=OFL+Sorts+Mill+Goudy+TT)</td><td>18px</td><td>12px</td><td>10px</td></tr><tr><td>[Old Standard TT](https://code.google.com/webfonts/family?family=Old+Standard+TT)</td><td>14px</td><td>12px</td><td>9px</td></tr><tr><td>[Reenie Beanie](https://code.google.com/webfonts/family?family=Reenie+Beanie)</td><td>24px</td><td>16px</td><td>12px</td></tr><tr><td>[Tangerine](https://code.google.com/webfonts/family?family=Tangerine)</td><td>36px</td><td>24px</td><td>18px</td></tr><tr><td>[Vollkorn](https://code.google.com/webfonts/family?family=Vollkorn)</td><td>21px</td><td>18px</td><td>14px</td></tr><tr><td>[Yanone Kaffeesatz](https://code.google.com/webfonts/family?family=Yanone+Kaffeesatz)</td><td>24px</td><td>21px</td><td>12px</td></tr></tbody></table>

### Open Source Fonts Appearance With a Mac

You’ll notice that I haven’t compiled a table like I did for Windows. That’s because Mac font rendering stays true to the font; thus, you can assume that display type fonts look bad at small sizes and fonts made for body text are good down to at least 12px. Also if you are on a Windows box you can easily see what it looks like on a Mac: Download Safari and turn on it’s font smoothing (Preferences &gt; Appearance &gt; Font Smoothing &gt; Light or Medium) which makes the font rendering behave (mostly) like a Mac.

*\*Inconsolata is a good example of a font not hinted for ClearType which looks ugly on Windows below 24px and becomes illegible at 14px; however, on a Mac it looks good even at 11px.*