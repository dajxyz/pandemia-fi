/**
 * Theme: Hyper - Responsive Bootstrap 4 Admin Dashboard
 * Author: Coderthemes
 * Module/App: Main Js
 */


!function($) {
    "use strict";

    /**
    Portlet Widget
    */
    var Portlet = function() {
        this.$body = $("body"),
        this.$portletIdentifier = ".card",
        this.$portletCloser = '.card a[data-toggle="remove"]',
        this.$portletRefresher = '.card a[data-toggle="reload"]'
    };

    //on init
    Portlet.prototype.init = function() {
        // Panel closest
        var $this = this;
        $(document).on("click",this.$portletCloser, function (ev) {
            ev.preventDefault();
            var $portlet = $(this).closest($this.$portletIdentifier);
                var $portlet_parent = $portlet.parent();
            $portlet.remove();
            if ($portlet_parent.children().length == 0) {
                $portlet_parent.remove();
            }
        });

        // Panel Reload
        $(document).on("click",this.$portletRefresher, function (ev) {
            ev.preventDefault();
            var $portlet = $(this).closest($this.$portletIdentifier);
            // This is just a simulation, nothing is going to be reloaded
            $portlet.append('<div class="card-disabled"><div class="card-portlets-loader"></div></div>');
            var $pd = $portlet.find('.card-disabled');
            setTimeout(function () {
                $pd.fadeOut('fast', function () {
                    $pd.remove();
                });
            }, 500 + 300 * (Math.random() * 5));
        });
    },
    //
    $.Portlet = new Portlet, $.Portlet.Constructor = Portlet
    
}(window.jQuery),

function($) {
    'use strict';

    var AdvanceFormApp = function() {
        this.$body = $('body'),
        this.$window = $(window)
    };


    /** 
     * Initlizes the select2
    */
    AdvanceFormApp.prototype.initSelect2 = function() {
        // Select2
        $('[data-toggle="select2"]').select2();
    },

    /** 
     * Initlized mask
    */
    AdvanceFormApp.prototype.initMask = function() {
        $('[data-toggle="input-mask"]').each(function (idx, obj) {
            var maskFormat = $(obj).data("maskFormat");
            var reverse = $(obj).data("reverse");
            if (reverse != null)
                $(obj).mask(maskFormat, {'reverse': reverse});
            else
                $(obj).mask(maskFormat);
        });
    },

    // Datetime and date range picker
    AdvanceFormApp.prototype.initDateRange = function() {
        var defaultOptions = {
            "cancelClass": "btn-light",
            "applyButtonClasses": "btn-success"
        };

        // date pickers
        $('[data-toggle="date-picker"]').each(function (idx, obj) {
            var objOptions = $.extend({}, defaultOptions, $(obj).data());
            $(obj).daterangepicker(objOptions);
        });

        //date pickers ranges only
        var start = moment().subtract(29, 'days');
        var end = moment();
        var defaultRangeOptions = {
            startDate: start,
            endDate: end,
            ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            }
        };

        $('[data-toggle="date-picker-range"]').each(function (idx, obj) {
            var objOptions = $.extend({}, defaultRangeOptions, $(obj).data());
            var target = objOptions["targetDisplay"];
            //rendering
            $(obj).daterangepicker(objOptions, function(start, end) {
                if (target)
                    $(target).html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
            });
        });
    },

    // time picker
    AdvanceFormApp.prototype.initTimePicker = function() {
        var defaultOptions = {
            "showSeconds": true,
            "icons": {
                "up": "mdi mdi-chevron-up",
                "down": "mdi mdi-chevron-down"
            }
        };

        // time picker
        $('[data-toggle="timepicker"]').each(function (idx, obj) {
            var objOptions = $.extend({}, defaultOptions, $(obj).data());
            $(obj).timepicker(objOptions);
        });
    },

    // touchspin
    AdvanceFormApp.prototype.initTouchspin = function() {
        var defaultOptions = {
        };

        // touchspin
        $('[data-toggle="touchspin"]').each(function (idx, obj) {
            var objOptions = $.extend({}, defaultOptions, $(obj).data());
            $(obj).TouchSpin(objOptions);
        });
    },

    // maxlength
    AdvanceFormApp.prototype.initMaxlength = function() {
        var defaultOptions = {
            warningClass: "badge badge-success",
            limitReachedClass: "badge badge-danger",
            separator: ' out of ',
            preText: 'You typed ',
            postText: ' chars available.',
            placement: 'bottom',
        };

        // maxlength
        $('[data-toggle="maxlength"]').each(function (idx, obj) {
            var objOptions = $.extend({}, defaultOptions, $(obj).data());
            $(obj).maxlength(objOptions);
        });
    },

    /** 
     * Initilize
    */
   AdvanceFormApp.prototype.init = function() {
        this.initSelect2();
        this.initMask();
        this.initDateRange();
        this.initTimePicker();
        this.initTouchspin();
        this.initMaxlength();
    },

    $.AdvanceFormApp = new AdvanceFormApp, $.AdvanceFormApp.Constructor = AdvanceFormApp


}(window.jQuery),

function($) {
    'use strict';

    var NotificationApp = function() {
    };


    /**
     * Send Notification
     * @param {*} heading heading text
     * @param {*} body body text
     * @param {*} position position e.g top-right, top-left, bottom-left, etc
     * @param {*} loaderBgColor loader background color
     * @param {*} icon icon which needs to be displayed
     * @param {*} hideAfter automatically hide after seconds
     * @param {*} stack 
     */
    NotificationApp.prototype.send = function(heading, body, position, loaderBgColor, icon, hideAfter, stack, showHideTransition) {
        // default      
        if (!hideAfter)
            hideAfter = 3000;
        if (!stack)
            stack = 1;

        var options = {
            heading: heading,
            text: body,
            position: position,
            loaderBg: loaderBgColor,
            icon: icon,
            hideAfter: hideAfter,
            stack: stack
        };

        if(showHideTransition)
            options.showHideTransition = showHideTransition;
        else
            options.showHideTransition = 'fade';

        $.toast().reset('all');
        $.toast(options);
    },

    $.NotificationApp = new NotificationApp, $.NotificationApp.Constructor = NotificationApp

}(window.jQuery),

function($) {
    "use strict";

    var Components = function() {};

    //initializing tooltip
    Components.prototype.initTooltipPlugin = function() {
        $.fn.tooltip && $('[data-toggle="tooltip"]').tooltip()
    },

    //initializing popover
    Components.prototype.initPopoverPlugin = function() {
        $.fn.popover && $('[data-toggle="popover"]').popover()
    },

    //initializing toast
    Components.prototype.initToastPlugin = function() {
        $.fn.toast && $('[data-toggle="toast"]').toast()
    },

    //initializing form validation
    Components.prototype.initFormValidation = function() {
        $(".needs-validation").on('submit', function (event) {
            $(this).addClass('was-validated');
            if ($(this)[0].checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
                return false;
            }
            return true;
        });
    },
    Components.prototype.initSyntaxHighlight = function() {
        //syntax
        var entityMap = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': '&quot;',
            "'": '&#39;',
            "/": '&#x2F;'
        };
        function escapeHtml(string) {
            return String(string).replace(/[&<>"'\/]/g, function (s) {
                return entityMap[s];
            });
        }

        $(document).ready(function(e) {
            document.querySelectorAll("pre span.escape").forEach(function (element, n) {
                if (element.classList.contains("escape")) {
                  var text = element.innerText;
                } else {
                  var text = element.innerText;
                }
                text = text.replace(/^\n/, '').trimRight();// goodbye starting whitespace
                var to_kill = Infinity;
                var lines = text.split("\n");
                for (var i = 0; i < lines.length; i++) {
                  if (!lines[i].trim()) { continue; }
                  to_kill = Math.min(lines[i].search(/\S/), to_kill);
                }
                var out = [];
                for (var i = 0; i < lines.length; i++) {
                  out.push(lines[i].replace(new RegExp("^ {" + to_kill + "}", "g"), ""));
                }
                element.innerText = out.join("\n");
            });
        
            document.querySelectorAll('pre span.escape').forEach(function(block) {
                hljs.highlightBlock(block);
            });
        });
    },


    //initilizing
    Components.prototype.init = function() {
        this.initTooltipPlugin(),
        this.initPopoverPlugin(),
        this.initToastPlugin(),
        this.initFormValidation(),
        this.initSyntaxHighlight();
    },

    $.Components = new Components, $.Components.Constructor = Components

}(window.jQuery),


function ($) {
    'use strict';

    var App = function () {
        this.$body = $('body'),
        this.$window = $(window)
    };

    /**
     * Activates the default theme
     */
    App.prototype.activateDefaultSidebarTheme = function() {
        $.LayoutThemeApp.activateDefaultSidebarTheme();
    },

    /**
     * Activates the light theme
     */
    App.prototype.activateLightSidebarTheme = function() {
        $.LayoutThemeApp.activateLightSidebarTheme();
    },

    /**
     * Activates the dark theme
     */
    App.prototype.activateDarkSidebarTheme = function() {
        $.LayoutThemeApp.activateDarkSidebarTheme();
    },

    /**
     * Activates the condensed sidebar
     */
    App.prototype.activateCondensedSidebar = function() {
        $.LayoutThemeApp.activateCondensedSidebar();
    },

    /**
     * Deactivates the condensed sidebar
     */
    App.prototype.deactivateCondensedSidebar = function() {
        $.LayoutThemeApp.deactivateCondensedSidebar();
    },

    /**
     * Activates the scrollable sidebar
     */
    App.prototype.activateScrollableSidebar = function() {
        $.LayoutThemeApp.activateScrollableSidebar();
    },

    /**
     * Deactivates the scrollable
     */
    App.prototype.deactivateScrollableSidebar = function() {
        $.LayoutThemeApp.deactivateScrollableSidebar();
    },

    /**
     * Activates the boxed mode
     */
    App.prototype.activateBoxed = function() {
        $.LayoutThemeApp.activateBoxed();
    },

    /**
     * Activate the fluid mode
     */
    App.prototype.activateFluid = function() {
        $.LayoutThemeApp.activateFluid();
    },

    /**
     * Toggle the dark mode
     */
    App.prototype.activateDarkMode = function() {
        $.LayoutThemeApp.activateDarkMode();
    },

    /**
     * Deactivate the dark mode
     */
    App.prototype.deactivateDarkMode = function() {
        $.LayoutThemeApp.deactivateDarkMode();
    },

    /**
     * clear the saved layout related settings
     */
    App.prototype.clearSavedConfig = function() {
        $.LayoutThemeApp.clearSavedConfig();
    },

    /**
     * Gets the layout config
     */
    App.prototype.getLayoutConfig = function() {
        return $.LayoutThemeApp.getConfig();
    }

    /**
     * Reset the layout
     */
    App.prototype.resetLayout = function(callback) {
        $.LayoutThemeApp.reset(callback);
    },
    
    /**
     * initilizing
     */
    App.prototype.init = function () {
        $.LayoutThemeApp.init();

         // remove loading
        setTimeout(function() {
            document.body.classList.remove('loading');
        }, 400);

        $.RightBar.init();

        // showing the sidebar on load if user is visiting the page first time only
        var bodyConfig = this.$body.data('layoutConfig');
        if (window.sessionStorage && bodyConfig && bodyConfig.hasOwnProperty('showRightSidebarOnStart') && bodyConfig['showRightSidebarOnStart']) {
            var alreadyVisited = sessionStorage.getItem("_HYPER_VISITED_");
            if (!alreadyVisited) {
                $.RightBar.toggleRightSideBar();
                sessionStorage.setItem("_HYPER_VISITED_", true);
            }
        }
        
        //creating portles
        $.Portlet.init();
        $.AdvanceFormApp.init();
        $.Components.init();

        // loader - Preloader
        $(window).on('load', function () {
            $('#status').fadeOut();
            $('#preloader').delay(350).fadeOut('slow');
        });
    },

    $.App = new App, $.App.Constructor = App
}(window.jQuery),

//initializing main application module
function ($) {
    "use strict";
    $.App.init();
}(window.jQuery);