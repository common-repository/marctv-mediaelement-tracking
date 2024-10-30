(function ($) {
    /*
     * MarcTV MediaElement Tracking
     *
     * Marc Tönsing 2017
     *
     * Version 1.7
     */

    var gaEvent = function (category, action, label) {

        if (window._gaq && _gaq.push) {
            _gaq.push(['_trackEvent', category, action, label]);
        }

        if (window.ga && ga.create) {
            ga('send', 'event', {
                eventCategory: category,
                eventAction: action,
                eventLabel: label
            });
        }

        if (window.__gaTracker && __gaTracker.create) {
            __gaTracker('send', 'event', {
                eventCategory: category,
                eventAction: action,
                eventLabel: label
            });
        }

        /* piwik */
        if ('undefined' !== typeof _paq) {
            _paq.push(['trackEvent', category, action, label]);
        }
    };

    var trackPlayer = function (obj, category, action) {

        var href = $(obj).find('a').attr('href');

        if (href == undefined) {
            href = $(obj).attr('src');
        }

        var filename = href.substring(href.lastIndexOf('/') + 1);

        if (typeof filename !== 'undefined') {
            gaEvent(category, action, filename);
        }
    };


    $(document).ready(function ($) {

        /* video player */

        $('.wp-video-shortcode').bind('play', function (e) {
            trackPlayer(this, "wp-video", "play");
        });

        /*
        $('.wp-video-shortcode').bind('pause', function (e) {
            trackPlayer(this,"wp-video","pause");
        });
        */

        $('.wp-video-shortcode').bind('ended', function (e) {
            trackPlayer(this, "wp-video", "ended");
        });


        /* audio player */

        $('.wp-audio-shortcode').bind('play', function (e) {
            trackPlayer(this, "wp-audio", "play");
        });

        /*
        $('.wp-audio-shortcode').bind('pause', function (e) {
            trackPlayer(this,"wp-audio","pause");
        });
        */

        $('.wp-audio-shortcode').bind('ended', function (e) {
            trackPlayer(this, "wp-audio", "ended");
        });

        /* playlists video */

        $('.wp-video-playlist video').bind('play', function (e) {
            trackPlayer(this, "wp-video", "play");
        });

        /*
        $('.wp-video-playlist video').bind('pause', function (e) {
            trackPlayer(this,"wp-video","pause");
        });
        */

        $('.wp-video-playlist video').bind('ended', function (e) {
            trackPlayer(this, "wp-video", "ended");
        });

        /* playlists audio  */

        $('.wp-audio-playlist audio').bind('play', function (e) {
            trackPlayer(this, "wp-audio", "play");
        });


        /*
        $('.wp-audio-playlist audio').bind('pause', function (e) {
            trackPlayer(this,"wp-audio","pause");
        });
        */

        $('.wp-audio-playlist audio').bind('ended', function (e) {
            trackPlayer(this, "wp-audio", "ended");
        });

    });

}(jQuery));
