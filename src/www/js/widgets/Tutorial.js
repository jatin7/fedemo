/*jshint bitwise:true, curly:true, eqeqeq:true, forin:true, immed:true, indent:4, latedef:true, newcap:true,
noarg:true, noempty:true, nonew:true, plusplus:true, quotmark:double, regexp:true, undef:true, unused:true,
strict: true, trailing:true, maxdepth: 4, maxstatements:40, maxlen:120, browser:true, jquery:true*/
/*global require:true*/

(function () {
    "use strict";
    MAPR.Tutorial = Backbone.View.extend({
        el: "div.vm_tutorial",
        events: {
            "click .vm_desc": "toggle",
            "mouseover .vm_desc": "mouseover",
            "mouseout .vm_desc": "mouseout"

        },
        initialize: function () {
            var initWidth = 500;
            _.bindAll(this, "resize", "render", "_render");
            MAPR.page.model.set("left", initWidth);
            MAPR.page.on("pageresize", this.resize);

            this.$el.width(initWidth);
            this.render();

        },
        resize: function (width, height) {
            this.$el.height(height);
        },
        render: function () {
            this._render(this.$el, MAPR.Text.Tutorial, 1);
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
        }

    });
    $(function () {
        console.log("start")
        $("body").append(Handlebars.templates["tutorial_base.tmpl"]());

        MAPR.tutorial = new MAPR.Tutorial();
    })
}());
