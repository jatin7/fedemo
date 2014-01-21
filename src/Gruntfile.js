module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        handlebars: {
            compile: {
                options: {
                    namespace: "Handlebars.templates",
                    knownOnly: true,
                    handlebarPath: "js/lib/handlebars.runtime",
                    amd: true,
                    processName: function (filename) {
                        var fn = filename.split("\/");
                        return fn[fn.length - 1].split(".tmpl")[0];
                    },
                    processContent: function (content) {
                        content = content.replace(/^[\x20\t]+/mg, "").replace(/[\x20\t]+$/mg, "");
                        content = content.replace(/^[\r\n]+/, "").replace(/[\r\n]*$/, "\n");
                        return content;
                    }
                },
                files: {
                    "www/js/tmpl/templates.js": "www/js/tmpl/src/**/*.tmpl"
                }
            }
        },
        stylus: {
            compile: {
                options: {
                    paths: ["www/css"],
                    urlfunc: "embedurl", // use embedurl("test.png") in our code to trigger Data URI embedding
                    "include css": true
                },
                files: {
                    "www/css/mapr_prod.css": "www/css/mapr_prod.styl" // 1:1 compile
                }
            }
        },
        cssmin: {
            compress: {
                files: {
                    "www/css/mapr_prod.min.css": "www/css/mapr_prod.css"
                }

            }
        },
        concat: {
            dist: {
                src: ["www/js/lib/require.js", "www/js/mapr_prod_core.all.js"],
                dest: "www/js/mapr_prod_core.min.js"
            }
        },
        clean: [
            "www/css/mapr_prod.css",
            "www/css/mapr_prod.min.css",
            "www/js/mapr_prod_core.all.js",
            "www/js/mapr_prod_core.min.js",
            "www/js/tmpl/templates.js",
            "www/out"
        ],
        copy: {
            dev: {
                files: [
                    {
                        src: ["www/js/mapr_prod_core.min.js"],
                        dest: "/opt/mapr/adminuiapp/webapp/js/mapr_prod_core.min.js"
                    }, // Copy all js files to webapp
                    {
                        src: ["www/css/mapr_prod.css"],
                        dest: "/opt/mapr/adminuiapp/webapp/css/mapr_prod.min.css"
                    } // Copy css files to webapp
                ]
            },
            hb: {
                files: [
                    {
                        src: ["node_modules/grunt-contrib-handlebars/node_modules/handlebars/dist/handlebars.runtime.js"],
                        dest: "www/js/lib/handlebars.runtime.js"
                    }
                ]
            }
        },
        requirejs: {
            compile: {
                options: {
                    modules: [{
                        name: "mapr_prod_core",
                        include: ["init"]
                    },
                    {
                        name: "mapr_vm_main",
                        include: ["jquery", "jqueryui", "utility/JQueryPlugins", "views/virtualmachine/init"]
                    },
                    {
                        name: "mapr_vm_hue",
                        include: ["jquery", "underscore", "jqueryui", "utility/JQueryPlugins",
                            "tmpl/TemplateHelpers", "views/tutorial/Init"]

                    }],
                    appDir: "www/js",
                    baseUrl: "./",
                    optimize: "none",
                    mainConfigFile: "www/js/config.js",
                    removeCombined: true,
                    dir: "www/out"
                }
            }
        },
        jshint: {
            options: {
                bitwise: true,
                curly: true,
                eqeqeq: true,
                forin: true,
                immed: true,
                indent: 4,
                latedef: true,
                newcap: true,
                noarg: true,
                noempty: true,
                nonew: true,
                plusplus: true,
                quotmark: "double",
                regexp: true,
                undef: true,
                unused: true,
                strict: true,
                trailing: true,
                maxdepth: 4,
                maxstatements: 40,
                maxlen: 120,
                browser: true,
                globals: {
                    define: true
                }
            },
            uses_defaults: ["www/js/api/**/*.js", "www/js/views/**/*.js",
                "www/js/utility/**/*.js", "www/js/models/**/*.js",
                "www/js/routers/**/*.js", "www/js/collections/**/*.js",
                "www/js/tmpl/TemplateHelpers.js", "www/js/tmplTemplateModule.js"],
            text_files: {
                options: {
                    maxlen: 0
                },
                files: {
                    src: ["www/js/text/**/*.js"]
                }
            },
            main: {
                options: {
                    globals: {
                        require: true
                    }
                },
                src: ["www/js/mapr_prod_core.js"]
            }
        },
        watch: {
            css: {
                files: ["www/css/**/*.styl"],
                tasks: ["stylus"],
                options: {
                    interrupt: true
                }
            },
            templates: {
                files: ["www/js/tmpl/src/**/*.tmpl"],
                tasks: ["handlebars"],
                options: {
                    interrupt: true
                }
            },
            lintfiles: {
                files: ["www/js/**/*.js", "!www/js/lib/*", "!www/js/tmpl/templates.js"],
                tasks: ["jshint"],
                options: {
                    interrupt: true
                }
            }
        },
        uglify: {
            options: {
                preserveComments: "some"
            },
            my_target: {
                files: {
                    "www/out/mapr_prod_core.min.js": ["www/out/lib/require.js", "www/out/mapr_prod_core.js"],
                    "www/out/mapr_vm_hue.min.js": ["www/out/lib/require.js", "www/out/mapr_vm_hue.js"],
                    "www/out/mapr_vm_main.min.js": ["www/out/lib/require.js", "www/out/mapr_vm_main.js"]
                }
            }
        },
        qunit: {
            all: {
                options: {
                    timeout: 30000,
                    urls: [
                        "http://localhost/test/index.html"
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-handlebars");
    grunt.loadNpmTasks("grunt-contrib-stylus");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-requirejs");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-qunit");


    // the default task can be run just by typing "grunt" on the command line
    grunt.registerTask("compile", ["copy:hb", "handlebars", "stylus"]);
    grunt.registerTask("cc", ["clean", "copy:hb", "handlebars", "stylus"]);
    grunt.registerTask("dev", ["clean", "copy:hb", "handlebars", "stylus", "requirejs", "concat", "copy:dev"]);
    grunt.registerTask("default", ["clean", "copy:hb", "handlebars", "stylus", "requirejs", "uglify", "cssmin"]);
};
