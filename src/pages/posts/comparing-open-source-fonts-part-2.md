---
title: 'Comparing Open Source Fonts &#8211; Part 2'
date: '2010-05-20T19:56:20+00:00'
status: publish
permalink: /2010/05/20/comparing-open-source-fonts-part-2
author: Colin
excerpt: ''
type: post
layout: '../../layouts/BlogPost.astro'
id: 1298
category:
    - design
tag:
    - cleartype
    - google
    - typography
    - 'web design'
    - webfonts
    - windows
post_format: []
image:
    - ''
---
The web has been alive with discussion on web fonts after yesterday’s announcement of the [Google Font API](https://code.google.com/apis/webfonts/docs/getting_started.html). I wrote about it [myself yesterday](https://catcubed.com/2010/05/19/comparing-open-source-fonts/ "comparing open source fonts") and here is just a quick sample of some of the more interesting articles and discussions:

- [Real Fonts and Rendering: The New Elephant in the Room](https://24ways.org/2009/real-fonts-and-rendering) – Jeffery Zeldman, 24 Ways
- [Google getting into the Web Fonts game?](https://typophile.com/node/70557) – Typophile Discussion
- [Details on the new Google Webfont API](https://paulirish.com/2010/details-on-the-new-google-webfont-api/) – Paul Irish
- [@font-face rendering flow chart](https://typophile.com/node/70216) – Typophile Discussion

Yesterday I commented on the legibility of the fonts in [Google’s Font Directory](https://code.google.com/webfonts) on Windows with ClearType turned on. After seeing Miha’s awesome [font rendering chart](/uploads/2010/05/aaaaaa_4787.png), I can see that my run down of Windows font rendering is only partially correct: Windows XP on default renders in “standard” mode which allows for a limited anti-aliasing smoothing but only at large font sizes or for fonts with proper Windows hinting—unless you are using IE6 and then no anti-aliasing occurs and it’s pixels, pixels, pixels.

As Zeldman [points out](https://24ways.org/2009/real-fonts-and-rendering "Real Fonts and Rendering: The New Elephant in the Room") there are more issues between browsers as well, with each browser handling font hinting a little differently, but that’s a mess I’m not about to get into. What I will do is expand my review of Windows font rendering to cover what it looks link with standard mode and no anti-aliasing. Also for your convince, I’ve added screenshots showing what it looks like with each mode (each font name links to it’s corresponding screenshot):

### Windows ClearType

Vista, Windows 7, Windows XP with IE7/8, XP with ClearType turned on

<table border="0" class="comparison ceebox"><tbody><tr><th scope="col">Font</th><th scope="col">Best at or above</th><th scope="col">Ugly at</th><th scope="col">Illegible at</th></tr><tr><td>[Cantarell](/images/google-fonts/cleartype-00.jpg)</td><td>14px</td><td>12px</td><td>11px</td></tr><tr><td>[Cardo](/images/google-fonts/cleartype-01.jpg)</td><td>18px</td><td>14px</td><td>12px</td></tr><tr><td>[Crimson Text](/images/google-fonts/cleartype-02.jpg)</td><td>21px</td><td>18px</td><td>12px</td></tr><tr><td>[Droid Sans](/images/google-fonts/cleartype-03.jpg)</td><td>12px</td><td>8px</td><td>8px</td></tr><tr><td>[Droid Sans Mono](/images/google-fonts/cleartype-04.jpg)</td><td>12px</td><td>8px</td><td>8px</td></tr><tr><td>[Droid Serif](/images/google-fonts/cleartype-05.jpg)</td><td>12px</td><td>11px</td><td>8px</td></tr><tr><td>[IM Fell](/images/google-fonts/cleartype-06.jpg) (depends on the version)</td><td>30-24px</td><td>21-18px</td><td>14-12px</td></tr><tr><td>[Inconsolata](/images/google-fonts/cleartype-07.jpg)\*</td><td>30px</td><td>24px</td><td>14px</td></tr><tr><td>[Josefin Sans Std Light](/images/google-fonts/cleartype-08.jpg)</td><td>36px</td><td>24px</td><td>16px</td></tr><tr><td>[Lobster](/images/google-fonts/cleartype-09.jpg)</td><td>24px</td><td>11px</td><td>11px</td></tr><tr><td>[Molengo](/images/google-fonts/cleartype-10.jpg)</td><td>24px</td><td>12px</td><td>9px</td></tr><tr><td>[Nobile](/images/google-fonts/cleartype-11.jpg)</td><td>16px</td><td>11px</td><td>8px</td></tr><tr><td>[OFL Sorts Mill Goudy TT](/images/google-fonts/cleartype-12.jpg)</td><td>18px</td><td>12px</td><td>10px</td></tr><tr><td>[Old Standard TT](/images/google-fonts/cleartype-13.jpg)</td><td>14px</td><td>12px</td><td>9px</td></tr><tr><td>[Reenie Beanie](/images/google-fonts/cleartype-14.jpg)</td><td>24px</td><td>16px</td><td>12px</td></tr><tr><td>[Tangerine](/images/google-fonts/cleartype-15.jpg)</td><td>36px</td><td>24px</td><td>18px</td></tr><tr><td>[Vollkorn](/images/google-fonts/cleartype-16.jpg)</td><td>21px</td><td>18px</td><td>14px</td></tr><tr><td>[Yanone Kaffeesatz](/images/google-fonts/cleartype-17.jpg)</td><td>24px</td><td>21px</td><td>12px</td></tr></tbody></table>

### Windows Standard Mode

Windows XP default with Firefox or Chrome

<table border="0" class="comparison ceebox"><tbody><tr><th scope="col">Font</th><th scope="col">Best at or above</th><th scope="col">Ugly at</th><th scope="col">Illegible at</th></tr><tr><td>[Cantarell](/images/google-fonts/standard-00.jpg)</td><td>21px</td><td>16px</td><td>11px</td></tr><tr><td>[Cardo](/images/google-fonts/standard-01.jpg)</td><td>36px</td><td>30px</td><td>12px</td></tr><tr><td>[Crimson Text](/images/google-fonts/standard-02.jpg)</td><td>24px</td><td>18px</td><td>12px</td></tr><tr><td>[Droid Sans](/images/google-fonts/standard-03.jpg)</td><td>12px</td><td>8px</td><td>8px</td></tr><tr><td>[Droid Sans Mono](/images/google-fonts/standard-04.jpg)</td><td>12px</td><td>8px</td><td>8px</td></tr><tr><td>[Droid Serif](/images/google-fonts/standard-05.jpg)</td><td>12px</td><td>11px</td><td>8px</td></tr><tr><td>[IM Fell](/images/google-fonts/standard-06.jpg) (depends on the version)</td><td>30-21px</td><td>21-18px</td><td>12-11px</td></tr><tr><td>[Inconsolata](/images/google-fonts/standard-07.jpg)\*</td><td>21px</td><td>16px</td><td>11px</td></tr><tr><td>[Josefin Sans Std Light](/images/google-fonts/standard-08.jpg)</td><td>36px</td><td>24px</td><td>14px</td></tr><tr><td>[Lobster](/images/google-fonts/standard-09.jpg)</td><td>24px</td><td>11px</td><td>11px</td></tr><tr><td>[Molengo](/images/google-fonts/standard-10.jpg)</td><td>21px</td><td>16px</td><td>10px</td></tr><tr><td>[Nobile](/images/google-fonts/standard-11.jpg)</td><td>24px</td><td>12px</td><td>9px</td></tr><tr><td>[OFL Sorts Mill Goudy TT](/images/google-fonts/standard-12.jpg)</td><td>21px</td><td>16px</td><td>12px</td></tr><tr><td>[Old Standard TT](/images/google-fonts/standard-13.jpg)</td><td>30px</td><td>18px</td><td>12px</td></tr><tr><td>[Reenie Beanie](/images/google-fonts/standard-14.jpg)</td><td>24px</td><td>18px</td><td>16px</td></tr><tr><td>[Tangerine](/images/google-fonts/standard-15.jpg)</td><td>36px</td><td>24px</td><td>18px</td></tr><tr><td>[Vollkorn](/images/google-fonts/standard-16.jpg)</td><td>21px</td><td>14px</td><td>11px</td></tr><tr><td>[Yanone Kaffeesatz](/images/google-fonts/standard-17.jpg)</td><td>24px</td><td>21px</td><td>14px</td></tr></tbody></table>

### Windows No Anti-Aliasing

Windows XP default with IE6

<table border="0" class="comparison ceebox"><tbody><tr><th scope="col">Font</th><th scope="col">Best at or above</th><th scope="col">Ugly at</th><th scope="col">Illegible at</th></tr><tr><td>[Cantarell](/images/google-fonts/none-00.jpg)</td><td>36px</td><td>30px</td><td>11px</td></tr><tr><td>[Cardo](/images/google-fonts/none-01.jpg)</td><td>36px</td><td>21px</td><td>12px</td></tr><tr><td>[Crimson Text](/images/google-fonts/none-02.jpg)</td><td>24px</td><td>21px</td><td>18px</td></tr><tr><td>[Droid Sans](/images/google-fonts/none-03.jpg)</td><td>12px</td><td>8px</td><td>8px</td></tr><tr><td>[Droid Sans Mono](/images/google-fonts/none-04.jpg)</td><td>12px</td><td>8px</td><td>8px</td></tr><tr><td>[Droid Serif](/images/google-fonts/none-05.jpg)</td><td>12px</td><td>11px</td><td>8px</td></tr><tr><td>[IM Fell](/images/google-fonts/none-06.jpg) (depends on the version)</td><td>30-21px</td><td>21-18px</td><td>14-12px</td></tr><tr><td>[Inconsolata](/images/google-fonts/none-07.jpg)\*</td><td>30px</td><td>24px</td><td>14px</td></tr><tr><td>[Josefin Sans Std Light](/images/google-fonts/none-08.jpg)</td><td>36px</td><td>30px</td><td>24px</td></tr><tr><td>[Lobster](/images/google-fonts/none-09.jpg)</td><td>24px</td><td>21px</td><td>14px</td></tr><tr><td>[Molengo](/images/google-fonts/none-10.jpg)</td><td>21px</td><td>16px</td><td>10px</td></tr><tr><td>[Nobile](/images/google-fonts/none-11.jpg)</td><td>30px</td><td>21px</td><td>14px</td></tr><tr><td>[OFL Sorts Mill Goudy TT](/images/google-fonts/none-12.jpg)</td><td>24px</td><td>16px</td><td>12px</td></tr><tr><td>[Old Standard TT](/images/google-fonts/none-13.jpg)</td><td>21px</td><td>14px</td><td>11px</td></tr><tr><td>[Reenie Beanie](/images/google-fonts/none-14.jpg)</td><td>30px</td><td>21px</td><td>16px</td></tr><tr><td>[Tangerine](/images/google-fonts/none-15.jpg)</td><td>42px</td><td>36px</td><td>24px</td></tr><tr><td>[Vollkorn](/images/google-fonts/none-16.jpg)</td><td>24px</td><td>18px</td><td>14x</td></tr><tr><td>[Yanone Kaffeesatz](/images/google-fonts/none-17.jpg)</td><td>24px</td><td>18px</td><td>14px</td></tr></tbody></table>

Again I didn’t bother creating a list for Mac. If you are working on Windows you can use Safari to see what the rendering will look like on a Mac. Macs render type in a more consistent manner: as it decreases in size at worst it becomes a little more anemic and fuzzy. In the main, if your type is legible on Windows it is legible on a Mac.

Conclusion
----------

Now looking at all these Windows rendering styles you can see how varying typeface legibility is: some fonts behave well across all rendering like Droid and others preform only good with one type of rendering like Inconsolata, which looks good in standard mode but terrible in ClearType and with font smoothing off.

The Droid Family is the only font in this set that I would use for body text. All others are only suitable for headers or display text. And I would avoid using Inconsolata, Tangerine, Josefin, and Cardo except at really large display sizes (36px or larger).