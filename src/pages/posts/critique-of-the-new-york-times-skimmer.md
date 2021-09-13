---
title: 'Critique of The New York Times Skimmer'
date: '2009-12-03T12:18:57+00:00'
status: publish
permalink: /2009/12/03/critique-of-the-new-york-times-skimmer
author: Colin
excerpt: ''
type: post
layout: '../../layouts/BlogPost.astro'
id: 1074
category:
    - design
tag:
    - ajax
    - critique
    - jquery
    - 'new york times'
    - 'user interface'
    - 'web design'
post_format: []
image:
    - ''
---
Gruber posted today on [Daring Fireball](https://daringfireball.net). That the The New York [Times Skimmer prototype](https://daringfireball.net/linked/2009/12/03/article-skimmer) is still available. It’s rare fascinating look at the the process that likely went through to in development of this new site:

- [The New York Times Skimmer (launch version)](https://www.nytimes.com/timesskimmer/)
- [The New York Times Skimmer (prototype version)](https://prototype.nytimes.com/gst/articleSkimmer/)

Who knows how long the prototype will remain up so go now. I’ve also added screenshots below in case the prototype goes away.

<div class="ceebox"><figure aria-describedby="caption-attachment-1076" class="wp-caption alignleft" id="attachment_1076" style="width: 150px">[![Prototype - home page](https://catcubed.com/wp-content/uploads/2009/12/ScreenHunter_06-Dec.-03-11.18-150x150.jpg "Prototype - home page")](https://catcubed.com/wp-content/uploads/2009/12/ScreenHunter_06-Dec.-03-11.18.jpg)<figcaption class="wp-caption-text" id="caption-attachment-1076">Prototype - home page</figcaption></figure><figure aria-describedby="caption-attachment-1077" class="wp-caption alignleft" id="attachment_1077" style="width: 150px">[![Launch Version - homepage](https://catcubed.com/wp-content/uploads/2009/12/ScreenHunter_07-Dec.-03-11.18-150x150.jpg "Final Version - homepage")](https://catcubed.com/wp-content/uploads/2009/12/ScreenHunter_07-Dec.-03-11.18.jpg)<figcaption class="wp-caption-text" id="caption-attachment-1077">Final Version - home page</figcaption></figure><figure aria-describedby="caption-attachment-1078" class="wp-caption alignleft" id="attachment_1078" style="width: 150px">[![Prototype - article](https://catcubed.com/wp-content/uploads/2009/12/ScreenHunter_08-Dec.-03-11.19-150x150.jpg "Prototype - article")](https://catcubed.com/wp-content/uploads/2009/12/ScreenHunter_08-Dec.-03-11.19.jpg)<figcaption class="wp-caption-text" id="caption-attachment-1078">Prototype - article</figcaption></figure><figure aria-describedby="caption-attachment-1079" class="wp-caption alignleft" id="attachment_1079" style="width: 150px">[![Final Version - Article](https://catcubed.com/wp-content/uploads/2009/12/ScreenHunter_09-Dec.-03-11.19-150x150.jpg "Final Version - article")](https://catcubed.com/wp-content/uploads/2009/12/ScreenHunter_09-Dec.-03-11.19.jpg)<figcaption class="wp-caption-text" id="caption-attachment-1079">Final Version - article</figcaption></figure></div>First of all i gotta say that this is an excellent use of modern javascript techniques. They are using the awesome [jquery](https://jquery.com/) framework to pull in their RSS feeds and populate the skimmer ad for the animation effects.

The two versions seem to be mostly different aesthetically. There are differences between the two javascript functions but I haven’t dug into them. The most obvious UI changes with the final version are:

- Moved the nav to the right
- Removed the dark top bar and lightened the palette as a whole
- Added raised dropshadow effect around main content area
- Use of the nyt font for headlines (using [Typekit.com](https://typekit.com/) service)
- Altered the typography (all caps for nav, removed blue from headlines, increased line-height slightly for excerpt text)
- Addition of a byline with the journalist’s name
- Articles now load in a overlay popup with the skimmer remaining visible behind it, rather than a slidedown which covers everything except the nav.
- Home Page name changed to Top Stories

All in all it’s a excellent improvement between the prototype and the final version. They went from what was essentially a mock iTunes app to a more readable approach that focuses more on the content than the navigation.

The final design recalls more the feeling of a paper, while still maintaining the clean webified rss reader approach. I especially love the use of their typeface for the headlines and the removal of the blue link color which makes it feel less like a list of links to be clicked though immediately and more like a something that deserves to be read throughly.

***Still however I do have two main critiques from a UI perspective…***

First a small critique: The only way to close the popup are to use the “Back to Section” button or to hit the Esc key. Instead of this approach, they should have used a simple close button on the upper right. Also clicking on the background should close the popup as well (this is how most overlay popups work).

The biggest issue however is that clicking on an article loads iframe to load the entire page. It’s a shame really. They’ve gone through all this effort to create a clean ajax approach which makes the online version of their paper fun to use and then they ruin it by dragging the user back to their cluttered site. It would have been simple to use ajax to show only the article content in a clean easy to read manner. Maybe they did this because of advertising or maybe it was because they thought iframes would be easier to code—whatever their reason, it turns the Skimmer into nothing more than a gimmick.