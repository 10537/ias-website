odoo.define('website', function (require) {
'use strict';

var core = require('web.core');
var animation = require('web_editor.snippets.animation');

var qweb = core.qweb;

animation.registry.gallery = animation.Class.extend({

    console.log("-------------");
    selector: ".o_gallery:not(.o_slideshow)",
    start: function() {
        var self = this;
    //   this.$el.on("click", "img", this.click_handler);
    },
    click_handler : function(event) {
        var self = this;
        var $cur = $(event.currentTarget);
        var edition_mode = ($cur.closest("[contenteditable='true']").size() !== 0);

        // show it only if not in edition mode
        if (!edition_mode) {
            var urls = [],
                idx = undefined,
                milliseconds = undefined,
                params = undefined,
                $images = $cur.closest(".o_gallery").find("img"),
                size = 0.8,
                dimensions = {
                    min_width  : Math.round( window.innerWidth  *  size*0.9),
                    min_height : Math.round( window.innerHeight *  size),
                    max_width  : Math.round( window.innerWidth  *  size*0.9),
                    max_height : Math.round( window.innerHeight *  size),
                    width : Math.round( window.innerWidth *  size*0.9),
                    height : Math.round( window.innerHeight *  size)
            };

            $images.each(function() {
                urls.push($(this).attr("src"));
            });
            var $img = ($cur.is("img") === true) ? $cur : $cur.closest("img");
            idx = urls.indexOf($img.attr("src"));

            milliseconds = $cur.closest(".o_gallery").data("interval") || false;
            var params = {
                srcs : urls,
                index: idx,
                dim  : dimensions,
                interval : milliseconds,
                id: _.uniqueId("slideshow_")
            };
            var $modal = $(qweb.render('website.gallery.slideshow.lightbox', params));
            $modal.modal({
                keyboard : true,
                backdrop : true
            });
            $modal.on('hidden.bs.modal', function() {
                $(this).hide();
                $(this).siblings().filter(".modal-backdrop").remove(); // bootstrap leaves a modal-backdrop
                $(this).remove();

            });
            $modal.find(".modal-content, .modal-body.o_slideshow").css("height", "100%");
            $modal.appendTo(document.body);

            this.carousel = new animation.registry.gallery_slider($modal.find(".carousel").carousel());
        }
    } // click_handler
});
}