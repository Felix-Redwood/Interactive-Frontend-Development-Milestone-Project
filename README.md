YouGym email collection site:
=============================

YouGym is a fictional company based in the UK. This site acts as a way to display three main JavaScript techniques; 
implementing interactive maps on a page, collecting emails (for the purpose of adding them to an email list for a 
newsletter) and allowing a user to send custom emails to an email address.

This site is generally quite simple, only having a page to collect emails and display simple information about YouGym 
and one page where users can send an email to contactYouGym@gmail.com. This is because the purpose of the site is primarily 
to display the three JavaScript functionalities described in the paragraph above.

UX:
---

This website is designed for two kinds of user, both of whom are potential YouGym customers.

The first type of user are individuals who are not aware of the YouGym brand, and have entered onto this page either by google
search, or from an external link (likely one that has come from either a YouGym social media page or a blog post). These users
need to be convinced to provide their email to sign up for the YouGym newsletter. Their user story is likely to go as follows:
* As someone new to the YouGym brand, I want to go through the information on the main page (and possibly contact YouGym for 
questions), so that I can decide if I want to sign up for YouGym's newsletter.
* I want to know if YouGym is a legitimate brand (and not a scam) and if signing up for their newsletter will add value to my life.
* In order to determine these things, I need to be presented with evidence of YouGym's legitimacy as well as their usefulness.

By presenting a google map on the mainpage that displays the location of YouGym's fictional gyms, this user type is able to see 
that YouGym is a real company with physical infrastructure. In addition, the submit form on the contact page allows this user 
type to send emails to YouGym with any queries they may have. Finally, the use of a favicon and a <title> element on the site 
gives the site a sense of professionalism.

Finally, beside the email submit form on the mainpage there is a small list of what the user will get if they sign up for the 
newsletter, providing this user type with the information they need to make the decision.

The second user type are people who are aware of the YouGym brand and are coming to this site *seeking* to sign up to the YouGym 
newsletter. These users only need to be able to verify that this is the site from which they can sign up, and need to be made 
aware of the form from which they can sign up. Their user story is likely to be:
* As someone aware of the YouGym brand, I want to verify that this is the official YouGym website, and then sign up for the
YouGym newsletter.
* In order to determine that this is the official website, I need to see the official YouGym logo, as well as be provided with 
information about the YouGym company.

By having a favicon that is a YouGym logo, as well as having a YouGym logo in the main page navbar, the site is verified as 
belonging to YouGym. Additional verification is supplied by having information about YouGym's founding in the page footer, as 
well as links to YouGym's various social media sites.

Additionally, for both of the users detailed above, the YouGym email signup bar is *directly* below the main page's title space, 
and the 'Submit' button is coloured yellow, a contrasting element to the dark grey signup bar.

A note about Email collection:
------------------------------

The email collection form on the main page of this site is designed to send user emails to an external database where they can be 
accessed for the purposes of sending a newsletter. As YouGym is not a real company, there is no external database to connect to 
for the purposes of storing these emails, and they cannot be stored in a JavaScript file, as JavaScript can only change local data.

For this reason, the emails that are collected have been stored in an array called 'emailList'. Every time a new email is submitted 
in a session, it is appended to the emailList array, and the whole array is logged.

What this means is that the email collection functionalities of this site are a proof of concept - they prove that the submitted 
emails can be collected, however they currently have no actual use, as they would require an external database for the emails to 
be sent to.

Features:
---------

There are three key features of the site, and several less important features:

Key features:
* Email harvesting form - allows users to sign up for a newsletter by submitting their emails.
* Display of google maps - allows users to see where YouGym's gyms are, meaning that they can verify that YouGym is a real company, 
and can see if there is a YouGym location near them that they can go to.
* Sending of emails to contactYouGym@gmail.com - allows users to fill a form and send emails to YouGym's contact email address 
in order to address any queries, comments or complaints they may have.

Lesser features:
* Google maps marker clustering - provides for a better UX when users are zoomed far out on the map, as they can see where the gyms
are clustered together.
* Mobile compatibility - by changing layouts and padding/margin values based on screen size, the site maintains its usability on 
smaller screens.
* Fixed-top navbar - the navbar is always at the top of the screen, this way the user *always* has access to links to both the home 
page (via the logo on the top left) and the contact page (via the button on the top right).

Features left to implement:
* YouGym reviews section - a possible future feature is the inclusion of a section on the main page which displays the reviews of 
YouGym by its customers.
* Outbound links - another posssible future feature is the inclusion of outbound links on the main page which send the user to sites 
that have mentioned the YouGym brand (this is also good for the purposes of Search Engine Optimisation).

Technologies used:
------------------
* [Bootstrap](https://getbootstrap.com/) was used for its HTML, CSS and JavaScript classes.
* [jQuery](https://jquery.com/) was used in the creation of the JavaScript code for the site.
* [Burst](https://burst.shopify.com/) was used to download the main page image.
* [Logo maker](https://logomakr.com/) was used to create the favicon logo.
* [Google fonts, Roboto](https://fonts.google.com/specimen/Roboto) was used to display the 'roboto' font.
* [Font Awesome](https://fontawesome.com/) was used to display the footer icons.
* [EmailJS](https://www.emailjs.com/) was used to create the contact page.
* [GPS-coordinates.net](https://www.gps-coordinates.net/) was used to find the coordinates of real gyms to display on the site.
* [Google Maps](https://www.google.com/maps) was used to find the addresses of gyms around southern England, from which coordinates would be extracted via Coordinates.net
* The [Google Maps platform](https://cloud.google.com/maps-platform/?hl=en_GB) was used to create the map, along with creating markers and marker-clusters pointing to YouGym's gyms.

Testing:
--------



Credits:
--------



Content:
--------

Media:
------


Acknowledgements:
-----------------


