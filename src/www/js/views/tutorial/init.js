/*jshint bitwise:true, curly:true, eqeqeq:true, forin:true, immed:true, indent:4, latedef:true, newcap:true,
noarg:true, noempty:true, nonew:true, plusplus:true, quotmark:double, regexp:true, undef:true, unused:true,
strict: true, trailing:true, maxdepth: 4, maxstatements:40, maxlen:120, browser:true, jquery:true*/
/*global require:true*/

define(function (require) {
    var $ = require("jquery"),
        _ = require("underscore"),
        Backbone = require("backbone"),
        Templates = require("templates"),
        PageManager = require("pm"),
        TutorialText = require("text/Tutorial"),
        start = function () {
            $("body").append(Templates.tutorial_base());
            Init = new init();

        },
        Init,
        init = Backbone.View.extend({
            el: "div.vm_tutorial",
            events: {
                "click .vm_item": "toggle"

            },
            initialize: function () {
                var initWidth = 300;
                _.bindAll(this, "resize", "render", "_render");
                PageManager.set("leftArea", initWidth);
                PageManager.on("pageresize", this.resize);

                this.$el.width(initWidth);
                this.render();

            },
            resize: function (width, height) {
                this.$el.height(height);

            },
            render: function () {
                this._render(this.$el, TutorialText, 1);


            },
            _render: function (el, obj, level) {
                var curHook, objItem,
                    cur = $(Templates.tutorial_item({
                        obj: obj,
                        top: level === 1,
                        margin: level * 10
                    }))
                cur.appendTo(el);

                curHook = cur.children(".vm_container").children(".vm_hook");
                if (!!obj.ul) {
                    objItem = obj.ul
                } else if (!!obj.ol) {
                    objItem = obj.ol;
                }

                if (objItem) {
                    level += 1;
                    _.each(objItem, function (item) {
                        this._render(curHook, item, level)

                    }, this)

                }


            },
            toggle: function (e) {
                var ct = $(e.currentTarget);
                if (!ct.hasClass("vm_level_1")) {
                    ct.children(".vm_container").toggle("slow");

                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }

        });


    return {
        start: start
    }
});