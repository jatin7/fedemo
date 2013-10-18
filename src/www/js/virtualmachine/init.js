/*jshint bitwise:true, curly:true, eqeqeq:true, forin:true, immed:true, indent:4, latedef:true, newcap:true,
noarg:true, noempty:true, nonew:true, plusplus:true, quotmark:double, regexp:true, undef:true, unused:true,
strict: true, trailing:true, maxdepth: 4, maxstatements:40, maxlen:120, browser:true, jquery:true*/
/*global require:true*/

(function () {
    "use strict"
    var view,
        start = function () {
            view = new View();
        },
        View;

    View = Backbone.View.extend({
        events: {
            "mouseover .vm_container .vm_label": "mouseOverIcon",
            "mouseout .vm_container .vm_label": "mouseOutIcon",
            "click .vm_container .vm_label": "go_to"

        },
        el: "div.vm_page",
        initialize: function () {
            _.bindAll(this, "resize", "initialResize");
            this.win = $(window).on("resize", this.resize);
            this.container = this.$el.children(".vm_container");
            this.resize();
            this.$el.fadeIn(500);
            this.initialResize();

        },
        initialResize: function () {
            var dev = this.container.children(".vm_developer"),
                admin = this.container.children(".vm_admin"),
                title = this.container.children(".vm_title"),
                height,
                devH = dev.children(".vm_info").height(),
                adminH = admin.children(".vm_info").height(),
                offset = 225 + dev.children(".vm_button").outerHeight(true);


            height = devH > adminH ? devH : adminH;
            dev.height(height + offset).children(".vm_info").height(height);
            admin.height(height + offset).children(".vm_info").height(height);
            this.container.css("min-height", height + title.outerHeight(true) + offset + 100);

        },
        resize: function () {
            var height = this.win.height(),
                width = this.win.width();


            this.$el.height(height);
            this.$el.width(width);
        },
        mouseOverIcon: function (e) {
            $(e.currentTarget).addClass("vm_highlight");
        },
        mouseOutIcon: function (e) {
            $(e.currentTarget).removeClass("vm_highlight");
        },
        go_to: function (e) {
            var ct = $(e.currentTarget),
                par = ct.parent();

            if (par.hasClass("vm_admin")) {
                console.log("admin")
                window.location = "/mcs";
            } else if (par.hasClass("vm_developer")) {
                window.location = "/hue"
            }

        }
    })


    $(function () {
       start();
    })
}());

