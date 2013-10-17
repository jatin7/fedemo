//
// Pre-load script files that are necessary for the app to function.
//
//

(function(){

    window.MAPR = window.MAPR || {};
    var _loadScript, mapr_scripts, i;

    _loadScript = function (url) {
        document.write("<"+"script src='"+url+"'></"+"script>");
    };

    mapr_scripts = [
        'js/lib/jquery-1.9.1.js',
        'js/lib/jquery-ui-1.10.2.custom.js',
        'js/lib/handlebars.js',
        'js/lib/lodash.js',
        'js/lib/backbone.js',
        'js/tmpl/templates.js',
        'js/utility/Ajax.js',
        'js/utility/Popups.js',
        'js/utility/JQueryPlugins.js',
        'js/utility/Plugins.js',
        'js/utility/Helpers.js',
        'js/utility/Standard.js',
        'js/tmpl/TemplateHelpers.js',
        'js/text/Hue-Tutorial.js',
        'js/widgets/Tutorial.js'
    ];

    for (i=0;i<mapr_scripts.length;i++) {
        _loadScript(mapr_scripts[i]);
    }

})();
