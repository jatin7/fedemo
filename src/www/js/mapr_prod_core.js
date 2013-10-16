//
// Pre-load script files that are necessary for the app to function.
//
//

(function(){
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
        'js/lib/d3.v2.js',
        'js/tmpl/templates.js',
        'js/init/Router.js',
        'js/init/Components.js',
        'js/utility/Ajax.js',
        'js/utility/Popups.js',
        'js/utility/JQueryPlugins.js',
        'js/utility/Plugins.js',
        'js/utility/Helpers.js',
        'js/utility/Standard.js',
        'js/text/Text.js',
        'js/text/Globals-text.js',
        'js/text/Config-text.js',
        'js/text/Alarms-text.js',
        'js/text/Vip-text.js',
        'js/text/Udu-text.js',
        'js/text/Volumes-text.js',
        'js/text/Nodes-text.js',
        'js/text/Jobs-text.js',
        'js/text/Tables-text.js',
        'js/text/Upsell-text.js',
        'js/text/Tutorial.js',
        'js/tmpl/TemplateHelpers.js',
        'js/api/Globals.js',
        'js/api/Alarms.js',
        'js/api/Config.js',
        'js/api/Volumes.js',
        'js/api/Jobs.js',
        'js/api/Udu.js',
        'js/api/Vip.js',
        'js/api/Nodes.js',
        'js/api/Tables.js',
        'js/utility/Filter.js',
        'js/utility/Types.js',
        'js/widgets/Heatmap.js',
        'js/utility/Utility.js',
        'js/widgets/Grids.js',
        'js/widgets/Charts.js',
        'js/widgets/Form.js',
        'js/widgets/Iframe.js',
        'js/widgets/Tabs.js',
        'js/widgets/Info.js',
        'js/widgets/Dashboard.js',
        'js/init/Page.js',
        'js/widgets/Tutorial.js'
    ];

    for (i=0;i<mapr_scripts.length;i++) {
        _loadScript(mapr_scripts[i]);
    }

})();
