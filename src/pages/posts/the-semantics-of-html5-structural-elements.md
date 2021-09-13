---
title: 'The Semantics of HTML5 Structural Elements'
date: '2009-10-15T19:06:01+00:00'
status: publish
permalink: /2009/10/15/the-semantics-of-html5-structural-elements
author: Colin
excerpt: ''
type: post
layout: '../../layouts/BlogPost.astro'
id: 644
category:
    - code
tag:
    - development
    - html
    - html5
    - semantics
    - structure
    - 'web design'
    - webdev
post_format: []
aktt_notify_twitter:
    - 'no'
---
I’ve recently decided it was time to revamp catcubed.com. The design will be overhauled and it will be developed using new HTML5 structural elements. I’ve begun this process by researching the proper semantics and layout techniques for these new elements. The W3C HTML5 specs are vague in spots and this is all fairly new so there is some disagreement among the supposed “experts.” There are already a couple wordpress HTML5 templates out there, but they also differ in many ways.

What follows is the guidelines I’ve devised based on both the W3C HTML5 specs (I usually refer to the [latest draft](https://www.w3.org/html/wg/html5/) and then review any differences with the older [last published version](https://www.w3.org/TR/html5/)) and the collective opinions of the various “experts”—not all of whom I agree with. A list of reference links is included at the bottom of this article. I’m fairly new to all this too so I could be wrong about a few things so please let me know if you find any flaws in these guidelines.

Semantics of New HTML5 Structural elements
------------------------------------------

As I mentioned, there are differences between how people think HTML5 elements should be used. What follows it what I consider the best usage guidelines for the main new HTML5 structural elements. There are a number of other new elements that I am not discussing in this post.

### The demotion of the meaningless div

With HTML4, the mighty div was the hammer that nailed everything together. HTML5 has added several new more targeted semantic tags which replace the blunt div. However, we won’t be completely throwing away the div as it is still useful for grouping tags when you don’t want the grouping to have semantic meaning, and more importantly when you don’t want to changing the depth of your *HTML5 outline* (more on this concept later). Basically, the handy dandy div page wrapper will still be very useful.

### Structural “Sectioning Content” Elements

These new HTML5 elements increase the outline depth (see [The HTML5 Outline](#html5outline) below)

- **section**: a thematic grouping of content, typically with a heading. 
  - Can be nested inside sections, articles, or asides.
  - For example: can be used to group a bunch of articles or a create chapters or sections in a longer article.
- **article**: a self-contained composition that is intended to be independently distributable or reusable 
  - Can be nested inside sections, articles, or asides.
  - For example: a document, article, blog post, etc.
  - Note: comments are technically (according to the W3C specs) sub-articles which are nested under the main article. In your code this may look like so:  
      `<h1>[post title]</h1><p>[post content]</p><h1>Comments</h1><p></p>`` [comment 1 content]   [comment 2 content] `
- **aside**: content that is tangentially related to the content around the aside element. 
  - Can be nested inside sections, articles, or asides.
  - when an aside is at the base level of your page it is related to the page as a whole; thus, this is your basic sidebar tag (ads, link lists, or other page related info)
  - when an aside is nested in a section or article it represents content that is related to the article (article related info, links, ads, pull quotes etc.)
- **nav**: A collection of links (basically a wrapper for a ul list of links). 
  - Can be nested inside sections, articles, or asides.
  - when a nav is at the base level of your page the links should relate to the page as a whole.
  - when an aside is nested in a section or article the links should relate to the containing element.

### Structural “Flow Content” Elements

These new HTML5 elements do not affect the outline depth (see [The HTML5 Outline](#html5outline) below)

- **header**: the titling elements 
  - can contain nav elements or other structural elements if appropriate.
  - Should relate to the containing element (thus when used on the page level it is a page header and when used inside an article it is a article header)
- **footer**: the ending elements 
  - can contain nav elements or other structural elements if appropriate.
  - Should relate to the containing element (thus when used on the page level it is a page footer with copyright info or footer nav items and when used inside an article it is a article footer with metadata or footnotes)

The HTML5 Outline: ie, flow content vs sectioning content
---------------------------------------------------------

One of the big changes with HTML5 is the introduction of the concept of [flow content](https://dev.w3.org/html5/spec/Overview.html#flow-content-0) and [sectioning content](https://dev.w3.org/html5/spec/Overview.html#sectioning-content-0). With HTML4 we were told to only use one h1 tag per page and use h2,h3,etc in order beneath. As such, there was always a big (annoying) debate over what tag to use for the site title/logo.

With HTML5 we now have what are called sectioning content elements (section, article, nav, and aside). In order to understand how these elements effect your semantic structure you should create an outline of your sectioning content, which we will call your ***HTML5 outline***. Every time you nest a sectioning element it increases the outline depth by one. And whenever you increase the outline depth you technically should restart your header levels from the top again at h1. *I know this gets your* <span class="caps">*SEO*</span> *panties in a bunch but get used to it—using only one h1 is the HTML4 way to do things because there were no sectional elements*. As you can surmise, this means that your *HTML5 outline* will look flatter than how your html tags are nested.

To give an example of this difference, I’ve drawn up a possible blog layout using HTML5. I’ve added id tags, class names, and \[notes\] to help denote what the individual areas are used for:

### HTML5 Blog Post: *How the <span class="caps">HTML5</span> is actually nested*

- body 
  - div #wrapper 
      - header #pgheader 
            - h1 #sitetitle
            - p #tagline
      - nav #pgnav 
            - ul \[list of page nav links; possibly nested\]
      - div #maincontent 
            - article .post #post1 
                    - header 
                              - h1 .posttitle
                              - time .postdate
                              - p .byline
                    - p,ul,ol,h1,h2,q,etc. \[text post content\]
                    - figure 
                              - img
                              - legend
                    - aside .pullquote 
                              - blockquote
                              - cite
                    - footer 
                              - p \[metadata\]
                              - nav 
                                          - ul \[tag or catagory links\]
                    - section .comments 
                              - h1 \[“Comments”\]
                              - article .comment #comment1 
                                          - h1 \[comment title ie, “Comment by name\_of author”\]
                                          - time
                                          - p,ul,ol,h1,h2,q,etc. \[comment text\]
                              - article .comment #comment2 
                                          - h1 \[comment title ie, “Comment by name\_of\_author”\]
                                          - time
                                          - p,ul,ol,h1,h2,q,etc. \[comment text\]
      - aside #pgsidebar 
            - nav or section \[multiple for each chunk of content or list of links in aside\] 
                    - header 
                              - h1 
                                          - p,ul,ol,h1,h2,q,etc. \[sidebar element text or link list\]
      - footer #pgfooter 
            - p #copyright
            - nav 
                    - ul \[list of footer nav links\]

### HTML5 Blog Post: *How it looks in the HTML5 outline*

*NOTE: this is not how the tags are nested in the code! It is only a representation of the sections of content as the browser sees it in regards to headers and semantic relationships.*

- body
- div #wrapper
- header #pgheader
- h1 #sitetitle
- p #tagline
- nav #pgnav 
  - ul \[list of page nav links; possibly nested\]
- div #maincontent
- article .post #post1 
  - header
  - h1 .posttitle
  - time .postdate
  - p .byline
  - p,ul,ol,h1,h2,q,etc. \[text post content\]
  - figure
  - img
  - legend
  - aside .pullquote 
      - blockquote
      - cite
  - footer
  - p \[metadata\]
  - nav 
      - ul \[tag or catagory links\]
  - section .comments 
      - h1 \[“Comments”\]
      - article .comment #comment1 
            - h1 \[comment title ie, “Comment by name\_of\_author”\]
            - time
            - p,ul,ol,h1,h2,q,etc. \[comment text\]
      - article .comment #comment2 
            - h1 \[comment title ie, “Comment by name\_of author”\]
            - time
            - p,ul,ol,h1,h2,q,etc. \[comment text\]
- aside #pgsidebar 
  - nav or section \[multiple for each chunk of content or list of links in aside\] 
      - header
      - h1
      - p,ul,ol,h1,h2,q,etc. \[sidebar element text or link list\]
- footer #pgfooter
- p #copyright
- nav 
  - ul \[list of footer nav links\]

Other Notes
-----------

Got all that? As I mentioned, there are a number of other new HTML5 elements that I have not specifically mentioned but I have referenced in the above example.

If you disagree with me please let me know in the comments. I’m new to all this too so I could be wrong about a few things. Also, I’ve prefer it if you were to add references (namely to the W3C specs) to back up why you think I’m wrong. You are free to disagree with me without backing up your comment but I am also free to ignore you.

HTML5 Resources: specs, tips, and blog templates
------------------------------------------------

*Note: the W3C specs should be considered the main reference. Other blog sites listed below are opinions—some of which I disagree with.*

- [W3C HTML5 Spec latest editor’s draft](https://www.w3.org/html/wg/html5/)
- [W3C HTML5 Spec latest published version](https://www.w3.org/TR/html5/)
- [whatwg HTML5 demo site](https://www.whatwg.org/demos/company-home)
- [Dive Into HTML5](https://diveintohtml5.org/)
- A List Apart: [Preview of HTML5](https://www.alistapart.com/articles/previewofhtml5/) (*written a while ago and may be a bit off*)
- Boblet [HTML5 Structure](https://boblet.tumblr.com/post/141239118/html5-structure4) (*lots of good stuff beyond what I have written here*)
- [HTML5 Super Friends Guide to HTML5 Hiccups](https://www.zeldman.com/superfriends/guide/)
- HTML5 Doctor: [Designing a Blog with HTML5](https://html5doctor.com/designing-a-blog-with-html5) (*I do not agree with everything in this article, and most notably nor does the W3C specs*)
- [The Power of HTML5 and CSS3](https://perishablepress.com/press/2009/07/19/power-of-html5-css3/)
- [HTML5 Structure: div, section &amp; article](https://boblet.tumblr.com/post/130610820/html5-structure1)
- [HTML5 Naked Theme](https://jpmcgarrity.com/blog/index.php/2009/07/html-5-wordpress-theme-naked/)
- [H5 Theme](https://digwp.com/2009/07/free-html-5-wordpress-theme/)
- [Basis <span class="caps">HTML</span> Theme](https://wpengineer.com/wordpress-basis-theme-html5/)
- [Brave New World Theme](https://www.thatstandardsguy.co.uk/2009/04/brave-new-world-wordpress-theme/)
- [Anatomy of a HTML5 WP Theme](https://nicolasgallagher.com/anatomy-of-an-html5-wordpress-theme/)