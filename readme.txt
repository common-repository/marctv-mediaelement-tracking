=== MediaElement Google Analytics & Piwik Event Tracking ===
Contributors: MarcDK
Tags: tracking, google analytics, matomo, video
Requires at least: 3.8
Tested up to: 5.6
Stable tag: 1.8

== Description ==

This plugins fires Google Analytics & Piwik events for the native Wordpress MediaElement video and audio player.
Works for playlists, too! Adds the following events in Google Analytics & Piwik:

* play
* ended

An event look like this: wp-video, play,[filename]

* category: wp-video
* action: play
* label: filename of the corresponding media file

== Installation ==

* Install plugin
* Activate it


== Changelog ==

= 1.8 =

* removed "pause" events. You might ask why. Because the mediaement player does not report this event correctly.
* added image

= 1.4 =

* support for audio and video playlists. Here you go, Scott.

= 1.3 =

* tracking of filename instead of fileurl.

= 1.2 =

* Piwik support \o/

= 1.1 =

* compatible with Monster Insights plugin

= 1.0 =

* First version with play, pause and ended events.
