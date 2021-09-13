---
title: 'Gmail, IMAP, and iPhones &#8211; Part 2 &#8211; The Tutorial'
date: '2007-07-23T14:18:59+00:00'
status: publish
permalink: /2007/07/23/gmail-imap-and-iphones-part-2-the-tutorial
author: Colin
excerpt: ''
type: post
layout: '../../layouts/BlogPost.astro'
id: 72
category:
    - code
tag:
    - email
    - gmail
    - IMAP
    - iphone
    - productivity
    - tutorial
post_format: []
aktt_notify_twitter:
    - 'no'
---
<ins class="block" datetime="2009-09-18T20:12:24+00:00">**UPDATE \[09/18/2009\]:** While this technique still has it’s uses, I no longer use it myself. For various reasons I have switched to using gmail’s normal imap, which was put in place several months after I created this system. So don’t be looking for this page to be updated. Also, I have closed comments on this post as it receives more spam than real comments these days.</ins>

As I [posted previously](https://catcubed.com/2007/07/19/gmail-imap-and-iphones-oh-my/), I’ve been experimenting with finding a my perfect iPhone email set up. Since then I’ve made a few changes and I’m really happy with the results. As such, I thought I’d post a bit better of a tutorial since it’s a bit convoluted from the back-end—though still simple to use and the complexity is invisible during daily use.  
<ins class="insertBlock" datetime="2007-08-03T01:51:51+00:00">This post has been modified since it was first published to reflect alternate approaches and improved techniques. I will continue to improve this post in the future to fix any bugs that emerge.</ins>  
<ins class="insertBlock" datetime="2007-08-21T23:11:35+00:00">**Tutorial Revision (8/21/07):** Because of a discovered issue with MS Exchange, I have revised how outgoing emails are handled.</ins>

### Benefits to this system

- Spam trapped via gmail’s awesome spam filter
- Use your personal domain name address as your public-facing address (i.e. from and reply)
- Read and send email using iPhone and Mail.app with
- Email marked as read, deleted, or moved is automatically synced between iPhone and Mail.app via IMAP
- Gmail archives all email both received and sent

### How it works from the front-end

- My catcubed.com email is my main public email address, but I also still receive messages sent to my Gmail.
- All incoming messages (including my catcubed.com account) are spam filtered via gmail’s fabulous spam filter
- I use my iPhone and/or Apple Mail for normal day to day email reading/sending
- Personally, I read email, reply if needed, and then delete; thus, keeping my inbox clutter-free (in keeping with a [GTD approach](https://en.wikipedia.org/wiki/Getting_Things_Done)). If I need to review an old email, I go to Gmail where all my emails both incoming and outgoing are automatically archived.
- Alternately, if deleting is not your style, you can set up your Mail.app to automatically move mail to an archive folder on your computer.
- Additionally to reduce digital clutter, I’ve manually set it up so that all mailing lists are filter to remain in gmail instead of forwarding my iPhone. I go to gmail to check mailing lists.

### Email account cast of characters:

- **catcubed.com account** – public email addy (also used as your outgoing mail server)
- **Gmail.com account** – main email reservoir, spam filter, and archiver
- **private iPhone IMAP account** – secondary email reservoir receives mail after it has been filtered via gmail. This account name is not used publically. <ins class="insertBlock" datetime="2007-08-21T20:55:01+00:00">**.Mac IMAP Issues:**Numerous people with .Mac accounts have had problems. I have not fully tested this yet, so I don’t know what the problem is; however using .Mac for your IMAP is not recommended at this time.</ins>

<ins class="insertBlock" datetime="2007-08-21T23:11:35+00:00">**Variant Setup – Gmail as public facing:** You can use your gmail addy as your public facing. In which case, you only need the gmail and the IMAP account</ins>

### Behind the scenes: What happens to incoming messages

1. Emails sent to catcubed.com account are set on the server to auto-forward to gmail
2. Gmail spam filter does it’s thing
3. Manually created gmail filter filters out all mailing lists and then forwards the remaining emails to the iPhone IMAP account; in gmail the emails are also archived (skip inbox) and labeled “iphone” (this labeling makes for easier searching later)
4. iPhone and Apple Mail check for mail on this IMAP account
5. Emails read on iPhone are labeled read in Mail and vice versa thanks to IMAP (deleted mail, saved drafts, are also synced)

### Behind the scenes: What happens to outgoing messages (Ver. 2.2)

1. Email sent from iPhone/Mail goes out through your public facing email account STMP (this email is also synced to the IMAP in my sent folder)
2. All email is auto BCCed back to yourself so that sent mail can be archived in gmail (mail sent back this way appears as sent mail in gmail and is connected to conversation threads like normal — gmail’s magic that way)

<ins class="insertBlock" datetime="2007-08-21T23:11:35+00:00">**Varient Setup – Using Gmail as public facing:** If you are using gmail as your public facing it will be your SMTP.</ins>  
<ins class="insertBlock" datetime="2007-08-21T23:11:35+00:00">**Note on 8/21/07 Revision:**Until today, I had been recommending using Gmail as your SMTP even for use with a different public facing email, however MS Exchange handles emails routed in this manner bizarrely (see comments for details), so this is not recommended.</ins>

### Setup Tutorial

1. Create 3 email accounts: 
  - Your gmail address
  - Your public facing address (a normal POP is fine) \[this account is not required if you are using gmail as your public facing\]
  - your private IMAP account used only for retrieval on messages for your iPhone/Mail.app
2. Set your public facing account to auto-forward all emails to your gmail account (this should be done server-side; you can set it to delete the emails too since there is no need to store emails here)
3. Set up a manual filter on gmail to forward on all mail — except mail sent from yourself — to your IMAP account, skip inbox, and label “iphone”
4. You can also set this same filter to filter out mailing lists like I did (i.e. does not include \[mailinglist email\] or \[other mailing list email\] or \[Uncle George who sends all those bad email jokes\]) <ins class="insertBlock" datetime="2007-08-04T19:42:32+00:00">For info on advanced gmail filtering techniques read [Lifehacker’s advanced gmail filter article](https://lifehacker.com/software/hack-attack/build-advanced-gmail-filters-and-persistent-searches-276499.php)</ins>
5. Set up your Mail/iPhone programs. You will only need to set up one and the other will copy the settings. However it only copies the settings initially so any later changes after this will have to be replicated on both. 
  1. In the address field use your public facing email addy
  2. For incoming use your private iPhone IMAP account configuration (read your email server’s instructions for proper settings).  
      <ins class="insertBlock" datetime="2007-08-21T23:11:35+00:00">While it depends on your particular email server, you will most likely need to set IMAP Path Prefix to “INBOX”; this is found in your account settings under Advanced. Also select “auto synchronize changed mailboxes” is selected in Mail.app</ins>
  3. Use your public facing email as your outgoing SMTP account  
      <ins class="insertBlock" datetime="2007-08-21T23:11:35+00:00">You may need to set the port number. On an iPhone the port number is appended after the server url (i.e., mail.domainname.com:26) YPNMV</ins>
  4. Set iPhone/Mail.app mail settings to “Always BCC Myself” (this makes sure it gets into gmail) <ins class="insertBlock" datetime="2007-08-14T03:57:22+00:00">Sent messages are also saved to your iPhone sent folder and synced magically to your Mail.app (and vice versa) via the IMAP server. Yes this works even though you are not sending out through this server.</ins>
6. Optionally Step: you can go back to gmail and set it up to allow you to send emails from it as your public facing account. This way you can also use it as your complete webmail client. Instructions on how to do this are [here](https://mail.google.com/support/bin/answer.py?hl=en&answer=20616 "Gmail Help: How do I customize the From: address on outgoing mail?")
7. Optional Step 2: Setup rules on your Mail.app for incoming mail. Note, these rules will only take effect when you return to you machine and start Mail.app. You can these rules this to move mail off the server folder and into local folders for archiving.

That’s it! Not too bad really! Granted it’s a bit confusing to setup with all those accounts, but it’s invisible during daily use. You have the benefits of using the iPhone for email, but also have Gmail as your main email repository, spam filter, and optional webmail client.

<ins class="insertBlock" datetime="2007-08-17T22:10:22+00:00">**Did this improve your iPhone experience?**  
By request of one of my visitors, I’ve now added a PayPal Tip Jar to my blog over in the right hand sidebar under my photo. It did take me a bit of effort to figure all this out and write it up. And I’ve been busier than I expected answering everyone’s questions, so if you find this useful toss a couple bucks in so I can buy myself a drink or something! Or even better pay some of my hosting fees. As a bonus, people who tip will receive email updates if any fixes or major improvements made to this tutorial.</ins>

Thanks!  
Colin

<ins class="insertBlock" datetime="2007-08-21T20:55:01+00:00">I will be away from CatCubed for a bit as I pack and head out to Burning Man, and I may need a bit of decompression time after too. So my replies to your questions may not be as quick as they have been.</ins>