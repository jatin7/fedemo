/*jshint bitwise:true, curly:true, eqeqeq:true, forin:true, immed:true, indent:4, latedef:true, newcap:true,
noarg:true, noempty:true, nonew:true, plusplus:true, quotmark:double, regexp:true, undef:true, unused:true,
strict: true, trailing:true, maxdepth: 4, maxstatements:40, maxlen:120, browser:true, jquery:true*/
/*global require:true*/

require(["./config"], function () {
    require(["jquery", "jqueryui", "utility/JQueryPlugins", "views/virtualmachine/init"], function ($, $ui, $pl, Init) {
        $(function () {
            Init.start();
        })



    })
});
