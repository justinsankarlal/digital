//JS
(function(global) {
    function MultiBrand() {
    };
    //setting font size to html on resize
    MultiBrand.prototype.setFont = function() {
        var _this = this,
            fontFactor = 64;
        _this.$html.css('font-size', _this.$window.width() / fontFactor + 'px');
    }

    MultiBrand.prototype.onResize = function() {
        var _this = this;
        _this.setFont();
    }

    MultiBrand.prototype.bindEvents = function() {
        var _this = this;

        //on resize event
        _this.$window.on('resize', function() {
           _this.onResize.call(_this);
        });
    }

    //init
    MultiBrand.prototype.init = function() {
        var _this = this;
        _this.$window = $(window),
        _this.$html = $('html'),
        _this.$body = $('body');
        _this.bindEvents();
        _this.setFont();
    }

    global.MultiBrand = MultiBrand;
}(this));