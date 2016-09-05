;
(function($, window, document, undefined) {
    "use strict";

    var pluginName = "apPopup";

    function Plugin(elem, options) {
        this.self = elem;
        this.$elem = $(elem);
        this.metadata = this.$elem.data("popup-options");
        this.options = $.extend({}, $.fn[pluginName].default, this.metadata, options);
    };
    $.extend(Plugin.prototype, {
        init: function() {
            var self = this;
            self.$elem.show();
            self.$elem.removeClass(self.options.animateOut);
            self.$elem.addClass("animated " + self.options.animateIn);
            self.start();
        },
        start: function() {
            var self = this;
            $('.' + self.options.closeButton).unbind().click(function() {
                self.close();
            });
        },
        close: function() {
            var self = this;
            $(self.$elem).addClass(self.options.animateOut).removeClass(self.options.animateIn);
            setTimeout(function() {
                self.$elem.hide();
            }, 1000);
            /*================
            	Class back func
            ================*/
            if (self.options.onClose != false) {
                self.options.onClose();
            }
        }
    }); //

    $.fn[pluginName] = function(options) {
        return this.each(function() {
            new Plugin(this, options).init();
        });
    };

    $.fn[pluginName].default = {
        closeButton: 'dailog-cls',
        animateIn: 'bounceInDown',
        animateOut: 'bounceOutUp',
        complete: false,
        onClose: false
    };

}(jQuery, window, document));