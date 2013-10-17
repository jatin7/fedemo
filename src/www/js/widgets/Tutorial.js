/*jshint bitwise:true, curly:true, eqeqeq:true, forin:true, immed:true, indent:4, latedef:true, newcap:true,
noarg:true, noempty:true, nonew:true, plusplus:true, quotmark:double, regexp:true, undef:true, unused:true,
strict: true, trailing:true, maxdepth: 4, maxstatements:40, maxlen:120, browser:true, jquery:true*/
/*global require:true*/

(function () {
    "use strict";
    MAPR.Tutorial = Backbone.View.extend({
        el: "div.vm_tutorial",
        events: {
            "click .vm_minimize": "toggleTutorial",
            "click .vm_desc": "toggle",
            "mouseover .vm_desc": "mouseover",
            "mouseout .vm_desc": "mouseout"

        },
        initialize: function () {
            _.bindAll(this, "resize", "render", "_render");
            var initWidth = 500;
            this.initWidth = initWidth;
            MAPR.page.model.set("left", initWidth);
            MAPR.page.on("pageresize", this.resize);

            this.$el.width(initWidth - 10);
            this.render();

        },
        resize: function (width, height) {
            this.$el.height(height);

            this.$el.children(".vm_minimize").css({
                "top": height / 2,
                "left": this.initWidth - 9
            });

        },
        render: function () {
            this._render(this.$el, MAPR.Text.Tutorial, 1);
            this.$el.resizable({
                handles: "e",
                resize: _.bind(function (e, ui) {
                    var size = ui.size.width
                    this.initWidth = size + 10;
                    MAPR.page.model.set("left", size + 10);
                    $(window).trigger("resize");

                }, this)
            });

            this.resize(0, $(window).height());
            // Check if login exists, and autofill
                if (this.isMCS() && !MAPR.Utility.cookie.get("MapRAuth")) {
                $("#username").val("root").focusout();
                $("#password").val("mapr").focusout();
            }
        },
        isMCS: function () {
            return window.location.pathname === "/";
        },
        getSize: function (size) {
            var ret = "";
            if (size === 1) {
                ret = "vm_large";
            } else if (size === 2) {
                ret = "vm_med";
            } else if (size === 3) {
                ret = "vm_small";
            }
            return ret;
        },
        _render: function (el, obj, level) {
            var curHook, objItem,
                size = this.getSize(obj.size || level - 1),
            cur = $(Handlebars.templates["tutorial_item.tmpl"]({
                obj: obj,
                top: level === 1,
                show: _.isUndefined(obj.show) ? level > 3 : obj.show,
                size: size ,
                margin: level * 10

            }))
            cur.appendTo(el);

            curHook = cur.children(".vm_container").children(".vm_hook");
            if (!!obj.ul) {
                objItem = obj.ul
            } else if (!!obj.ol) {
                objItem = obj.ol;
            } else if (!!obj.std) {
                objItem = obj.std;
            }

            if (objItem) {
                level += 1;
                _.each(objItem, function (item) {
                    this._render(curHook, item, level)

                }, this)

            }


        },
        toggle: function (e) {
            var ct = $(e.currentTarget),
            parent = ct.parent(),
            icon = ct.children(".ui-icon"),
            cont = parent.children(".vm_container"),
            type;
            if (!parent.hasClass("vm_top")) {
                icon.addClass("ui-icon-triangle-1-s").removeClass("ui-icon-triangle-1-e")
                cont.clearQueue().stop().toggle("blind", function () {
                    type = cont.is(":hidden");
                    icon.toggleClass("ui-icon-triangle-1-e", type).toggleClass("ui-icon-triangle-1-s", !type);

                });

                e.stopPropagation();
                e.stopImmediatePropagation();
            }
        },
        mouseover: function (e) {
            var ct = $(e.currentTarget);

            ct.addClass("vm_highlight");

        },
        mouseout: function (e) {
            var ct = $(e.currentTarget);

            ct.removeClass("vm_highlight");
        },
        toggleTutorial: function (e) {
            var ct = $(e.currentTarget),
                hide = ct.hasClass("vm_collapsed"),
                set;

            ct.toggleClass("vm_collapsed", !hide);
            if (hide) {
                set = this.oldInitWidth
            } else {
                set = 10;
                this.oldInitWidth = this.initWidth;
            }

            this.initWidth = set;
            MAPR.page.model.set("left", set);
            if (hide) {
                $(window).trigger("resize");
                this.$el.children(".vm_minimize").css("left", 0);
            }
            this.$el.animate({
                width: this.initWidth - 10
            }, 500, function () {
                $(window).trigger("resize");
            });
            this.$el.children(".vm_minimize").animate({
                left: this.initWidth - 9
            }, 500);

        }

    });
    $(function () {
        $("body").append(Handlebars.templates["tutorial_base.tmpl"]());

        MAPR.tutorial = new MAPR.Tutorial();
    })
}());
