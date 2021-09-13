---
title: 'CeeBox &#8211; a Thickbox/Videobox mashup'
date: '2008-12-23T18:37:22+00:00'
status: publish
permalink: /2008/12/23/ceebox-a-thickboxvideobox-mashup
author: Colin
excerpt: ''
type: post
layout: '../../layouts/BlogPost.astro'
id: 256
category:
    - code
tag:
    - ceebox
    - flash
    - javascript
    - jquery
    - tutorial
    - webdev
post_format: []
aktt_notify_twitter:
    - 'no'
image:
    - ''
---
***Please Note, I do not have time to support CeeBox at the moment (haven’t had time for the past year to be honest) but I am now working on fixing some of the bugs that have reared their nasty heads. If you have bug reports please submit them on [Github](https://github.com/catcubed/CeeBox/issues) and I will try and work them into the next release (planning for ***Nov 2011).******

**Problem:** Need to easily embed flash videos which hosting on Google Video/YouTube by using an overlay popup. Site uses the [jQuery](https://jquery.com/) framework thus [Videobox](https://videobox-lb.sourceforge.net/) isn’t an option. [Thickbox](https://jquery.com/demo/thickbox/) is nice but doesn’t work with flash movies.

**Solution:** Create a new script based on Thickbox but with Videobox’s sweet video embeds.

I give you **CeeBox**. An overlay popup script for easily embedding flash video, displaying images, or showing html (either external sites via iframe or content on your own site via AJAX). *Tested in Safari(4)/Chrome/FireFox(3.5)/Internet Explorer(6–8)/Opera(10). Note: Mobile Safari has an issue with fixed position.*

### Examples of CeeBox in Action

- Daily Motion Video popup: [Outkast “Atliens”](https://www.dailymotion.com/video/x220un_outkast-atliens_music "OutKast - Atliens")
- Single Image Popup: [Dapper Qarly](/uploads/2009/01/qarly-tweed-ready.jpg)
- iFrame popup: [NifNaks.com](https://www.nifnaks.com "NifNaks.com")
- Ajax popup: [Ajax link to above paragraph](https://catcubed.com/2008/12/23/ceebox-a-thickboxvideobox-mashup/#ceeAjaxExample "Ajax popup") set to 400×300 using rel.
- Mixed Gallery popup (class applied on the parent ul tag): 
  - [Mobius Sock Monkey](https://canade.org/images/mobiusmonkey.jpg) image
  - [Prim Queer Tea](https://farm4.static.flickr.com/3281/2902372542_7962148b9c.jpg) image
  - [No More Hipster Scum](https://farm4.static.flickr.com/3085/3246931916_9b98dd07bc.jpg) image
  - [Mr. B Gentleman Rhymer](https://www.youtube.com/watch?v=6t28COxEp2k "Mr. B Gentleman Rhymer") youtube video
  - [SFtweed.com](https://sftweed.com "San Francisco Tweed ~ Home of the SF Tweed Ride") iframe
- *more examples are on the test file which is included in the download.*

### How To Install On Your Site

1. Firstly, you must be using the [jQuery](https://jquery.com/) framework (one of the better frameworks in my opinion)\* **NOTE: CeeBox does work with jQuery 1.4 but has not yet been rigorously tested**
2. Secondly, you will also need the [swfobject jquery plugin](https://jquery.thewikies.com/swfobject//) which is used for embedding the flash video players.\*
3. Thirdly, you will need to the jquery.ceebox.js and ceebox.css and the graphic button and animation files (**download** **[CeeBox 2.1.5](https://github.com/catcubed/CeeBox/zipball/v2.1.5)**). I have included a minified version jquery.ceebox-min.js (14KB) as well as the full uncompacted version jquery.ceebox.js which is throughly commented.
4. Link all this javascript up with your site and add **`$(document).ready(function(){ $("<em>your selector here</em>").ceebox();});`** to your global .js file. *More on how this “selector” works below.*
  - Or if you already have a document ready function, just add the ceebox function.
  
  
  - Note: If you are adding this to wordpress you will need to write it using “no conflict” syntax: **`jQuery(document).ready(function(){ jQuery("your selector here").ceebox();});`**

\**I have included all the dependent jQuery js files in the CeeBox archive. However, you may want to check to make sure you are using the most current versions.*

### How CeeBox Works

Once the scripts are installed, no knowledge of javascript is required to use CeeBox.

- Links to images are created as **image popups**
- Links to video sites are created as auto-embeded **video player popups**. 
  - If flash plugin isn’t installed a message is presented to the user.
  - iPhone users are automatically redirected to link, (youtube movies launch the youtube app)
- Just use the normal page url and CeeBox does the rest.
- CeeBox currently supports **Google Video, YouTube, Metacafe, Vimeo, Dailymotion, Spike, iFilm, CNN, Facebook videos and swf files**.
- With a bit of regex knowhow you can add support yourself for other sites (see [Adding More Video Support](#morevideosupport) below)

- Links to html pages on the same domain are added as **ajax popups** (*you can override this by adding “iframe” to the rel attribute for the link*) 
  - if you want to only display a portion of a page just link to it with the id in the link like a normal anchor link. For instance, href=”cute-cats/index.html#fluffy”
- Links to html pages on another domain are added as an **iframe popup**.
- Title attribute is used for the caption/header on the popup.
- Optionally popups can be made modal (*more on this below*)
- **Galleries**are created automatically by applying CeeBox to a parent object with links underneath. 
  - if you want to stop a specific link from activating CeeBox add class=”{html:false,image:false,video:false}” to the link (*you will need the* [*metadata plugin*](https://docs.jquery.com/Plugins/Metadata) *for this to work.*)
- onload and unload callback functions can be added via the options (see below).

### Multiple ways of setting it up

Since the upgrade to 2.0 CeeBox has become a very flexible plugin. As such there are several ways you can set up CeeBox to suit your needs. I’ve included a few examples below to give you ideas.

1. **<span style="color: #333300;">Class Name Method:</span>** Add **$(document).ready(function(){ $(“.classname”).ceebox();});** to your global .js file and then add **class=”classname”** to any link you want it to work on. To make a it act like a gallery with next/prev links just add the class name to a parent object, like a list (this is how the above example works).
2. **<span style="color: #333300;">Blog Post Gallery</span>:** Instead of using a unique class, use the same class as your blog article class but limit it to images/video only by turning off html ceebox popups using the optional parameters. CeeBox will then attach itself to every image/video link with next/prev links. For Example: **$(document).ready(function(){ $(“.post”).ceebox({html:false});});**
3. **<span style="color: #333300;">Auto Video Popups:</span>** Attach CeeBox to the body tag to make every video link use the popup. Like so: **$(document).ready(function(){ $(“body”).ceebox({html:false;image:false;videoGallery:false});});**
4. **<span style="font-weight: normal;"><span style="color: #333300;">**<span style="color: #333300;">Mix &amp; Match:</span>** </span>CeeBox can be applied multiple times in different ways to the page so you can mix and match methods. For instance, you can make every video link popup and then add the *class name method* for specific image or html links. Note, if your selectors overlap than the last instance of ceebox applies.</span>**

### Changing The Default Settings

CeeBox 2.0 includes a huge number of settings which can be easily changed when you call the ceebox function, like so: **`$("selector").ceebox({optionName:setting});`<span style="font-weight: normal;">. I’ve included a list of every default setting below with guidance notes:</span>**

- html:true, *// set to false to turn off html popups*
- image:true,
- video:true,
- modal:false, *// if set to true all ceebox links are modal (unless you add modal:false in the rel);*
- titles: true, *//set to false if you don’t want titles/captions*
- htmlGallery:true, *// set to false to turn of gallery functionality for html popups*
- imageGallery:true,
- videoGallery:true,
- videoWidth: false, *// set max width for all video links*
- videoHeight: false,
- videoRatio: “16:9”, *// common ratios are included “4:3”, “3:2”, “16:9”, or ratio can also be set to a decimal amount (i.e., “3:2” is the same as 1.5).*
- htmlWidth: false, *//set max width for all html links*
- htmlHeight: false,
- htmlRatio: false,
- imageWidth: false, *//set max size for all image links (image ratio is determined by the image itself)*
- imageHeight: false,
- animSpeed: “normal”, *// animation resize transition speed (can be set to “slow”,”normal”,”fast”, or in milliseconds like 1000)*
- easing: “swing”, *// can be set to “linear” — also supports use of the* [*easing plugin*](https://gsgd.co.uk/sandbox/jquery/easing/) *for resize anim*
- fadeOut: 400, *// speed that ceebox fades out when closed or advancing through galleries (same as animSpeed)*
- fadeIn: 400, *// speed that ceebox fades in when opened or advancing through galleries*
- overlayColor:”#000″, *// color of the overlay*
- overlayOpacity:0.8,
- boxColor:””, *//background color for ceebox. This overrides css styles. This and the next two options are really only useful in combination with the [color animation plugin](https://plugins.jquery.com/project/color)—if you are changing globally just set it in the CSS.*
- textColor:””, *//color for text in ceebox. This overrides css styles.*.
- borderColor:””, *//outside border color. This overrides css styles. **Note: ONLY use hex values!** Varying colors can be set like css (ie, “#aaa #666”);*
- padding: 15, *//ceebox popup padding. Single value only.*
- borderWidth: “3px”, *//the border width on ceebox. Varying widths can be set like css (ie, “4px 2px”) (color and style controled in css file)*
- margin: 150, *//margin between ceebox content and browser frame (used for max size)*
- onload:null, *//callback function once ceebox popup is fully loaded.*
- unload:null, **//callback function once ceebox popup is fully unloaded (ie closed).**
- videoJSON:null*, **//file url for adding video support via JSON.(see [Adding More Video Support](#morevideosupport) below)***
- iPhoneRedirect:true*//detect’s iPhone/iPod Touch and redirects all video popups to video site (this allows youtube links to open in youtube player)*

### Link Specific Parameters

You can also change some settings on a link by link basis by adding them to the rel attribute. For example **`rel="modal:true width:600 height:400"`** would create a modal popup that measures 600 x 400.

**CeeBox also supports the [jQuery metadata plugin](https://docs.jquery.com/Plugins/Metadata)** so if you have it installed you can set any of the default settings by adding them directly to the class attribute. For instance: class=”{padding:50,onload:function(){$(‘p’).remove();}}” would set the padding really high for just that link, and add the callback function once the popup loads.

### Modal popups

Popups can be made to require a button press to proceed. This is useful for login popups or disclaimer text.

- To close a modal ajax popup add **`class="cee_close"`** or **`onclick="$.fn.ceebox.closebox();"`** to a link/button in the ajax area
- To close a modal iframe popup add **`onclick="parent.$.fn.ceebox.closebox();"`** to a link/button in the iframe

**Optional Functionally**

As mentioned, CeeBox also supports use of three over jQuery plugins which expand the functionality of CeeBox:

- [jQuery metadata plugin](https://docs.jquery.com/Plugins/Metadata): when added allows options to be changed on a per link basis by adding them to the class attr like so `class="{padding:50}"`
- [Color Animation plugin](https://plugins.jquery.com/project/color): allows colors (on background,text,border) to animate. Requires metadata plugin. (NOTE: the Color Animation plugin is a bit buggy and sometimes doesn’t work properly. Unfortunately it’s owner hasn’t updated it in a while. If anyone has a better plugin or a fixed version of this one let me know.)
- [Easing plugin](https://gsgd.co.uk/sandbox/jquery/easing/): allows an assortment of ways to make the animated transitions look different (from smooth to bounce and more)
- [CeeTip plugin](https://catcubed.com/2009/11/23/ceetip-basic-tool-tip/): creates simple tooltips for links which works with CeeBox. *Some tooltip plugins hide the title tag which CeeBox needs for captions.*

I have included the latest releases of all these plugins with the download. However, they are not necessary for CeeBox’s main functionality.

### More functionality for those that like to dig in the code

CeeBox contains a whole lot more functionality under the surface though the use of public variables and public functions.

- You can add more ratio names to **$.fn.ceebox.ratios**
- The rel attribute regex functions for sizes and modal are listed in **$.fn.ceebox.relMatch**, which is useful if you are changing from another popup script
- The ceebox loader html can be changed via **$.fn.ceebox.loader** (*don’t change the id or things will get screwy*)
- Also you can use the public function **$.fn.ceebox.popup(html,options)**to create a ceebox styled popup containing whatever html you throw at it by doing the following: 
  1. Run the main CeeBox function once prior to using the popup function to initialize it. *You can run it empty* ***$().ceebox(options)*** *and it will not attach itself to any links.*
  2. Use **$.fn.ceebox.popup(“whatever html you want”, options)** to load any html in the CeeBox popup
  3. Or use **`$.fn.ceebox.popup("<a href='https://someurl.com'>link</a>", options)`**to load the link in an iframe. 
      - If the link is a video or image you will need to set it to load as such via options, i.e., {type:image} or {type:video}
      - *NOTE:* image preload only happens in the main function, so if you are sending $.fn.ceebox.popup() an image link you will need to add size in the options {width:600, height:400} or else it will size itself to the browser window.
- The popup function also loads the overlay; however, if you want to preload the overlay for whatever reason you can call **$.fn.ceebox.overlay(options)**.
- **$.fn.ceebox.closebox()** can be used to close an open ceebox popup. If you want to call this from a iframe you must call it as **parent.$.fn.ceebox.closebox().**

### Adding More Video Support

<span style="font-weight: normal;">The public variable **$.fn.ceebox.video** is used to add support for video players from different sites. This is a bit complicated but doable for anyone with a bit of regex knowhow.</span>

- If you want to add a site yourself you will need to look at how the site sets up their embed code and then either: 
  1. extend the $.fn.ceebox.videos variable directly. For example if facebook video wasn’t supported we could add it like so:`$.extend($.fn.ceebox.videos,{facebook:{siteRgx: /facebook\.com\/video/i, idRgx: /(?:v=)([a-zA-Z0-9_]+)/g, src: "https://www.facebook.com/v/[id]"}});`
  2. add a JSON file with your added support via the *videoJSON* option when you call the functionl. For example : `$("yourselector").ceebox({videoJSON:"js/humor.json"})` *NOTE: I’ve included humor.json along with the download as an example which adds support for Daily Show and Colbert Report videos*
- The name for the new video support is not important, but the underlying options (siteRgx, idRgx, and src) are. The options for each site’s player are as follows: 
  - **siteRgx:** regex for testing which site it is. *(NOTE: Remember to add subfolders if video pages are always under /video/ or else ceebox will think even the main page is a video link)*
  - **idRgx:** non-capturing style regex for finding the video’s id in a link *(NOTE: if a site does not include an id in their link, then it can’t be supported by ceebox without extra help. For more on this see below)*
  - **src:** typical src url for a video embed. Add \[id\] where the id goes and ceebox will replace it via the result from idRgx
  - **param:** optional *(some base parameters are already added)*
  - **flashvars:** optional *(some base flashvars are already added)*
  - **width:** optional *(forces a set width, required by some video players like CNN)*
  - **height:** optional *(forces a set height, required by some video players like CNN)*
- Sites that don’t include the id in the link to their video page (e.g., atom.com, Comedy Central, or any site that uses media.mtvnservices.com to serve up video) can’t be supported easily with CeeBox. However, if you’re tenacious you can still support them like so: 
  - Add support for a site via the extend method but only add the **siteRgx** and the **src**.
  - Add `rel="videoId:id-goes-here"` to the link itself.
  - Or if the src doesn’t use an id tag then you can just add `rel="videoSrc:https://entire-videosrc-url-goes-here"` to the link
  - *an example of this is in the JSON file because Daily Show video clips require that the videoId be added to the links (see test.html file for example)*

*For more on all of this, I recommend looking at the uncompressed jquery.ceebox.js file which is heavily commented*

### Upgrading from CeeBox 1.4

If you are using an old version of CeeBox, you will need to replace your copy of jquery.ceebox.js, ceebox.css, and all the image graphics. The CeeBox function call in your $(document).ready section can remain the same and it should just work. If you were modifying any links via the rel attribute or using ajax please note that the syntax for these parameters has changed.

I highly recommend upgrading as it’s easy and several things have been added and fixed, like it now supports jquery chaining, multiple ceebox function calls on the same page, onload callbacks, and more.

### Known Bugs with CeeBox 2.1

- when scrolling in iPhone, popup is fixed to near top of the screen rather than the middle of the viewport as expected. This is due to the fact that iPhone uses fixed positioning more like absolute positioning.
- Setting any color via options requires the jquery color animation plugin be installed. Or else IE will crash.
- As of CeeBox 1.4, CeeBox failed with the [Opentracker](https://www.opentracker.net/) web site tracking tool. The Opentracker script causes Safari (and Chrome) to behave as if the link was clicked twice, which causes the movie to load twice. At this time, I do not have a solution for people using Opentracker—other than to remove the Opentracker script from pages that use CeeBox. *NOTE: I have not tested this since 1.4 so it may have fixed itself, but I doubt it.*

### IE graceful degradation in CeeBox 2.0

Due to the constraints with IE, you will notice that CeeBox has some differences in IE. My motto is as long as it works in IE6/7/8 I’m good, and I’m fine with it not looking the same. That said there are a number of small issues which you may or may not care about depending on your site’s audience.

- **IE6:**loading animation is missing. This is a IE6 css issue. I could probably fix it, but at the moment I don’t care.
- **IE6 (and sometimes IE7/8):** Animation transitions are a bit jerky since IE’s javascript engine sucks
- **IE6 (and sometimes IE7/8):** While a video is playing the close and prev/next buttons are finicky and sometimes don’t work until you stop the video. This is also dependent on the type of player—youtube player seems particularly prone to this. I’m guessing this is due to IE’s javascript engine being overwhelmed by the flash player hogging resources. *This issue I’d like to fix but at the moment I don’t have a solution.*
- **IE6/7/8, Opera:** CSS rounded corners don’t work in IE (nor do they in Opera). There are [ways using javascript to get rounded corners working in all browsers](https://www.smashingshare.com/2009/11/10/best-collection-of-css-rounded-corners-tutorials/), but I haven’t implemented them because frankly I don’t really care.
- **IE6/7/8:** top left close btn graphic is placed inside the box rather than hanging off the corner. This is due to the fact that IE doesn’t like negative positioning.

Release History
---------------

- [2.1.5](https://github.com/catcubed/CeeBox/zipball/v2.1.5): can now force CeeBox to treat a link as an image with rel=”image”
- [2.1.4](https://github.com/catcubed/CeeBox/zipball/v2.1.4): Esc key now closes popup
- [2.1.3](https://github.com/catcubed/CeeBox/zipball/v2.1.3): fix for another gallery bug which was introduced in 2.1.1
- [2.1.2](https://github.com/catcubed/CeeBox/zipball/v2.1.2): fix for gallery bug which was introduced in 2.1.1
- [2.1.1](https://github.com/catcubed/CeeBox/zipball/v2.1.1): code tidying up.
- [2.1](https://github.com/catcubed/CeeBox/zipball/v2.1.0): uses event bubbling via jQuery live. Also detects for flash plugin and iphone
- [2.0.11](https://github.com/catcubed/CeeBox/zipball/v2.0.11): Changes iframe loader anim close to use no-conflict which fixes wordpress issue
- [2.0.10](https://github.com/catcubed/CeeBox/zipball/v2.0.10): Added fix which allows ceebox to run without attaching itself to any links. This is useful for using the public popup function standalone.
- [2.0.9](https://github.com/catcubed/CeeBox/zipball/v2.0.9): fixed enter key bug, google video player bug, minor ajax detection bug, and added support for [CeeTip](https://catcubed.com/2009/11/23/ceetip-basic-tool-tip/) \*
- [2.0.8](https://github.com/catcubed/CeeBox/zipball/v2.0.8): fixed youtube video player bug (some youtube video ids include a dash which wasn’t accounted for) \*
- [2.0.7](https://github.com/catcubed/CeeBox/zipball/v2.0.7): fixed Safari video player bug (Note to self: Safari wrongly considers RegExp objects to be functions) \*
- [2.0.6](https://github.com/catcubed/CeeBox/zipball/v2.0.6): fixed video player bug (gallery of videos from same site was broke). Also added ability to add video support via JSON
- [2.0.5](https://github.com/catcubed/CeeBox/zipball/v2.0.5): fixed iframe bug, added unload callback, improved video player support
- [2.0.4](https://github.com/catcubed/CeeBox/zipball/v2.0.4): added support for color animations
- [2.0.3](https://github.com/catcubed/CeeBox/zipball/v2.0.3): added ability to change background color and border color via the options
- [2.0.2](https://github.com/catcubed/CeeBox/zipball/v2.0.2): Massive battery of testing and fixes. CeeBox 2.0 is outta beta!
- 2.0.1: code fixins
- 2.0.0: First beta release of the new and improved CeeBox.
- [1.4.3](https://github.com/catcubed/CeeBox/zipball/v1.4.3): Added transition animation for popups!, Also includes further code optimization and reorganization (minimized version of jquery.ceebox.js is 7.8KB)
- [1.4.2](https://github.com/catcubed/CeeBox/zipball/v1.4.2): Fixed/improved modal functionality. Also changed how overlay is built which simplified js and css.
- [1.4.1](https://github.com/catcubed/CeeBox/zipball/v1.4.1): Fixed small error in minimized css file. Also reorganized css file to allow easier changing of graphics.
- [1.4](https://github.com/catcubed/CeeBox/zipball/v1.4 "CeeBox jQuery Plugin 1.3.5"): Now a full fledged jquery plugin! Also includes some optimization (minimized version of jquery.ceebox.js is 8.4KB)
- [1.3.4](https://catcubed.com/stuff/ceebox-1.3.4.zip "CeeBox 1.3.4"):New pretty graphic buttons for Close, Next, and Prev links! Further Code optimization (file size now 14.2KB uncompressed; 9.5KB compressed)
- 1.3.3:Code optimization. fix for another Opera display bug (really Opera just die). Facebook video embedding added
- 1.3.2: includes Opera fix which is admittedly a bit hacky.
- 1.3.1: includes iE6 fixes by [Mark Elphinstone-Hoadley](https://www.t-six.com/). Thanks Mark!
- 1.3: code cleanup and optimization, bringing the file size down to 16KB uncompressed and 10KB compressed.
- 1.2: uses the much smaller jquery swfobject plugin, adds flexible auto size for video and html boxes, and fixes a few bugs.
- 1.1: includes fix for JQuery 1.3.2 and adds support for Vimeo and Dailymotion
- 1.0: initial release.

### More Information &amp; Credit

CeeBox relies on the [JQuery framework](https://docs.jquery.com/Main_Page) and [swfobject jquery plugin](https://jquery.thewikies.com/swfobject/) to work. CeeBox is created by Colin Fahrion and was originally inspired by and adapted from [Thickbox](https://jquery.com/demo/thickbox/) and [Videobox](https://videobox-lb.sourceforge.net/). Early iterations of CeeBox borrowed heavily from these two sources; however, since then CeeBox has been completely rewritten with original code.

CeeBox is licensed under the [opensource MIT License](https://www.opensource.org/licenses/mit-license.php).

If you are grateful for the work I put into CeeBox send me an email to say hi with any site links. Of course donations are, while unnecessary, never turned down. I have a tip jar on the right column for those generous souls who would like to buy me a drink or two.

### Footnotes

CeeBox was the first name that came to me. It is a phonetic play on the word “see” which works as it was initially built many to support flash video.