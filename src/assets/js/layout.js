/**
 * Theme: Hyper - Responsive Bootstrap 4 Admin Dashboard
 * Author: Coderthemes
 * Module/App: Layout Js
 */


/**
 * LeftSidebar
 * @param {*} $ 
 */
!function ($) {
    'use strict';

    var LeftSidebar = function () {
        this.body = $('body'),
        this.window = $(window),
        this.menuContainer = $('#left-side-menu-container');
    };

    /**
     * Reset the theme
     */
    LeftSidebar.prototype._reset = function() {
        this.body.removeAttr('data-leftbar-theme');
    },

    /**
     * Activates the condensed side bar
     */
    LeftSidebar.prototype.activateCondensedSidebar = function () {
        this.body.attr('data-leftbar-compact-mode', 'condensed');
    },

    /**
     * Deactivates the condensed side bar
     */
    LeftSidebar.prototype.deactivateCondensedSidebar = function() {
        this.body.removeAttr('data-leftbar-compact-mode');
    },
  
    /**
     * Activates the scrollable sidenar
     */
    LeftSidebar.prototype.activateScrollableSidebar = function() {
        this.body.attr('data-leftbar-compact-mode', 'scrollable');
    },

    /**
     * Deactivates the scrollbar
     */
    LeftSidebar.prototype.deactivateScrollableSidebar = function() {
        this.body.removeAttr('data-leftbar-compact-mode');
    },

    /**
     * Activates the default theme
     */
    LeftSidebar.prototype.activateDefaultTheme = function () {
        this._reset();
    },
    
    /**
     * Activates the light theme
     */
    LeftSidebar.prototype.activateLightTheme = function() {
        this._reset();
        this.body.attr('data-leftbar-theme', 'light');
    },

    /**
     * Activates the dark theme
     */
    LeftSidebar.prototype.activateDarkTheme = function() {
        this._reset();
        this.body.attr('data-leftbar-theme', 'dark');
    },

    /**
     * Initilizes the menu
     */
    LeftSidebar.prototype.initMenu = function() {
        var self = this;

        // resets everything
        this._reset();

        // sidebar - main menu
        $('.side-nav').metisMenu();

        // click events
        // Left menu collapse
        $(document).on('click', '.button-menu-mobile', function(e) {
            e.preventDefault();
            self.body.toggleClass('sidebar-enable');

            // if (self.window.width() >= 768) {
            //   self.body.toggleClass('enlarged');
            // } else {
            //   self.body.removeClass('enlarged');
            // }
        });

        // activate the menu in left side bar based on url
        $('.side-nav a').each(function() {
        var pageUrl = window.location.href.split(/[?#]/)[0];
        if (this.href == pageUrl) {
            $(this).addClass('active');
            $(this)
            .parent()
            .addClass('mm-active'); // add active to li of the current link
            $(this)
            .parent()
            .parent()
            .addClass('mm-show');
            $(this)
            .parent()
            .parent()
            .prev()
            .addClass('active'); // add active class to an anchor
            $(this)
            .parent()
            .parent()
            .parent()
            .addClass('mm-active');
            $(this)
            .parent()
            .parent()
            .parent()
            .parent()
            .addClass('mm-show'); // add active to li of the current link
            $(this)
            .parent()
            .parent()
            .parent()
            .parent()
            .parent()
            .addClass('mm-active');
            $(this)
            .parent()
            .parent()
            .parent()
            .parent()
            .parent()
            .parent()
            .addClass('mm-show');
            $(this)
            .parent()
            .parent()
            .parent()
            .parent()
            .parent()
            .parent()
            .parent()
            .addClass('mm-active'); // add active to li of the current link
        }
        });
    },

    /**
     * Initilizes the menu
     */
    LeftSidebar.prototype.init = function() {
        this.initMenu();
    },
  
    $.LeftSidebar = new LeftSidebar, $.LeftSidebar.Constructor = LeftSidebar
}(window.jQuery),


/**
 * Topbar
 * @param {*} $ 
 */
function ($) {
    'use strict';

    var Topbar = function () {
        this.$body = $('body'),
        this.$window = $(window)
    };

    /**
     * Initilizes the menu
     */
    Topbar.prototype.initMenu = function() {
        $('.topnav-menu li a').each(function () {
            var pageUrl = window.location.href.split(/[?#]/)[0];
            if (this.href == pageUrl) {
                $(this).addClass('active');
                $(this).parent().parent().addClass('active'); // add active to li of the current link
                $(this).parent().parent().parent().parent().addClass('active');
                $(this).parent().parent().parent().parent().parent().parent().addClass('active');
            }
        });

        // Topbar - main menu
        $('.navbar-toggle').on('click', function () {
            $(this).toggleClass('open');
            $('#navigation').slideToggle(400);
        });

        $('.dropdown-menu a.dropdown-toggle').on('click', function () {
            if (
                !$(this)
                    .next()
                    .hasClass('show')
            ) {
                $(this)
                    .parents('.dropdown-menu')
                    .first()
                    .find('.show')
                    .removeClass('show');
            }
            var $subMenu = $(this).next('.dropdown-menu');
            $subMenu.toggleClass('show');

            return false;
        });
    },

    /**
     * Initilizes the menu
     */
    Topbar.prototype.init = function() {
        this.initMenu();
    },
    $.Topbar = new Topbar, $.Topbar.Constructor = Topbar
}(window.jQuery),


/**
 * RightBar
 * @param {*} $ 
 */
function ($) {
    'use strict';

    var RightBar = function () {
        this.body = $('body'),
        this.window = $(window)
    };

    /** 
     * Select the option based on saved config
    */
   RightBar.prototype._selectOptionsFromConfig = function() {
        var config = $.App.getLayoutConfig();
        if (config) {
            // sideBarTheme
            switch (config.sideBarTheme) {
                case 'default':
                    $('#default-check').prop('checked', true);
                    break;
                case 'light':
                    $('#light-check').prop('checked', true);
                    break;
                case 'dark':
                    $('#dark-check').prop('checked', true);
                    break;
            }

            if (config.isBoxed) {
                $('#boxed-check').prop('checked', true);
            } else {
                $('#fluid-check').prop('checked', true);
            }
            if (config.isCondensed) $('#condensed-check').prop('checked', true);
            if (config.isScrollable) $('#scrollable-check').prop('checked', true);
            if (!config.isScrollable && !config.isCondensed) $('#fixed-check').prop('checked', true);

            // overall color scheme
            if (!config.isDarkModeEnabled) {
                $('#light-mode-check').prop('checked', true);
                if (config.layout === 'vertical')
                    $('input[type=radio][name=theme]').prop('disabled', false);
            } 
            if (config.isDarkModeEnabled) {
                $('#dark-mode-check').prop('checked', true);
                if (config.layout === 'vertical')
                    $('input[type=radio][name=theme]').prop('disabled', false);
            }
        }
    },
  
    /**
     * Toggles the right sidebar
     */
    RightBar.prototype.toggleRightSideBar = function() {
        var self = this;
        self.body.toggleClass('right-bar-enabled');
        self._selectOptionsFromConfig();
    },

    /**
     * Initilizes the right side bar
     */
    RightBar.prototype.init = function() {
        var self = this;

        // right side-bar toggle
        $(document).on('click', '.right-bar-toggle', function () {
            self.toggleRightSideBar();
        });

        $(document).on('click', 'body', function (e) {
            if ($(e.target).closest('.right-bar-toggle, .right-bar').length > 0) {
                return;
            }

            if (
                $(e.target).closest('.left-side-menu, .side-nav').length > 0 ||
                $(e.target).hasClass('button-menu-mobile') ||
                $(e.target).closest('.button-menu-mobile').length > 0
            ) {
                return;
            }
            $('body').removeClass('right-bar-enabled');
            $('body').removeClass('sidebar-enable');
            return;
        });

        // width mode
        $('input[type=radio][name=width]').change(function () {
            switch ($(this).val()) {
                case 'fluid':
                    $.App.activateFluid();
                    break;
                case 'boxed':
                    $.App.activateBoxed();
                    break;
            }
        });

        // theme
        $('input[type=radio][name=theme]').change(function () {
            switch ($(this).val()) {
                case 'default':
                    $.App.activateDefaultSidebarTheme();
                    break;
                case 'light':
                    $.App.activateLightSidebarTheme();
                    break;
                case 'dark':
                    $.App.activateDarkSidebarTheme();
                    break;
            }
        });

        // compact
        $('input[type=radio][name=compact]').change(function () {
            switch ($(this).val()) {
                case 'fixed':
                    $.App.deactivateCondensedSidebar();
                    $.App.deactivateScrollableSidebar();
                    break;
                case 'scrollable':
                    $.App.activateScrollableSidebar();
                    break;
                case 'condensed':
                    $.App.activateCondensedSidebar();
                    break;
            }
        });

        // overall color scheme
        $('input[type=radio][name=color-scheme-mode]').change(function () {
            switch ($(this).val()) {
                case 'light':
                    $.App.deactivateDarkMode();
                    $.App.activateDefaultSidebarTheme();
                    $('#default-check').prop('checked', true);
                    $('input[type=radio][name=theme]').prop('disabled', false);
                    break;
                case 'dark':
                    $.App.activateDarkMode();
                    $('#dark-check').prop('checked', true);
                    // $('input[type=radio][name=theme]').prop('disabled', true);
                    break;
            }
        });        

        // reset
        $('#resetBtn').on('click', function (e) {
            e.preventDefault();
            // reset to default
            $.App.resetLayout(function() {
                self._selectOptionsFromConfig();
            });
        });
    },

    $.RightBar = new RightBar, $.RightBar.Constructor = RightBar
}(window.jQuery),


/**
 * Layout and theme manager
 * @param {*} $ 
 */

function ($) {
    'use strict';

    // Layout and theme manager
    var SIDEBAR_THEME_DEFAULT = 'default';
    var SIDEBAR_THEME_LIGHT = 'light';
    var SIDEBAR_THEME_DARK = 'dark';

    var DEFAULT_CONFIG = {
        sideBarTheme: SIDEBAR_THEME_DEFAULT,
        isBoxed: false,
        isCondensed: false,
        isScrollable: false,
        isDarkModeEnabled: false
    };

    var LayoutThemeApp = function () {
        this.body = $('body'),
        this.window = $(window),
        this._config = {};
        this.defaultSelectedStyle = null;
    };

    /**
    * Preserves the config
    */
    LayoutThemeApp.prototype._saveConfig = function(newConfig) {
        $.extend(this._config, newConfig);
        // sessionStorage.setItem('_HYPER_CONFIG_', JSON.stringify(this._config));
    },

    /**
     * Get the stored config
     */
    LayoutThemeApp.prototype._getStoredConfig = function() {
        var bodyConfig = this.body.data('layoutConfig');
        var config = DEFAULT_CONFIG;
        if (bodyConfig) {
            config['sideBarTheme'] = bodyConfig['leftSideBarTheme'];
            config['isBoxed'] = bodyConfig['layoutBoxed'];
            config['isCondensed'] = bodyConfig['leftSidebarCondensed'];
            config['isScrollable'] = bodyConfig['leftSidebarScrollable'];
            config['isDarkModeEnabled'] = bodyConfig['darkMode'];
        }
        return config;
    },

    /**
    * Apply the given config and sets the layout and theme
    */
    LayoutThemeApp.prototype._applyConfig = function() {
        var self = this;

        // getting the saved config if available
        this._config = this._getStoredConfig();

        // activate menus
        $.LeftSidebar.init();

        // sets the theme
        switch (self._config.sideBarTheme) {
            case SIDEBAR_THEME_DARK: {
                self.activateDarkSidebarTheme();
                break;
            }
            case SIDEBAR_THEME_LIGHT: {
                self.activateLightSidebarTheme();
                break;
            }
        }

        // enable or disable the dark mode
        if (self._config.isDarkModeEnabled)
            self.activateDarkMode();
        else
            self.deactivateDarkMode();

        // sets the boxed
        if (self._config.isBoxed) self.activateBoxed();

        // sets condensed view
        if (self._config.isCondensed) self.activateCondensedSidebar();

        // sets scrollable navbar
        if (self._config.isScrollable) self.activateScrollableSidebar();
    },

    /**
     * Initilizes the layout
     */
    LayoutThemeApp.prototype._adjustLayout = function() {
        // in case of small size, add class enlarge to have minimal menu
        if (this.window.width() >= 767 && this.window.width() <= 1028) {
            this.activateCondensedSidebar(true);
        } else {
            var config = this._getStoredConfig();
            if (!config.isCondensed && !config.isScrollable)
                this.deactivateCondensedSidebar();
        }
    },

    /**
     * Activate fluid mode
     */
    LayoutThemeApp.prototype.activateFluid = function() {
        this._saveConfig({ isBoxed: false });
        this.body.attr('data-layout-mode', 'fluid');
    },

    /**
     * Activate boxed mode
     */
    LayoutThemeApp.prototype.activateBoxed = function() {
        this._saveConfig({ isBoxed: true });
        this.body.attr('data-layout-mode', 'boxed');
    },

    /**
     * Activates the condensed side bar
     */
    LayoutThemeApp.prototype.activateCondensedSidebar = function(ignoreToStore) {
        if (!ignoreToStore) {
            this._saveConfig({
                isCondensed: true,
                isScrollable: false
            });
        }
        $.LeftSidebar.activateCondensedSidebar();
    },

    /**
     * Deactivates the condensed side bar
     */
    LayoutThemeApp.prototype.deactivateCondensedSidebar = function() {
        this._saveConfig({ isCondensed: false });
        $.LeftSidebar.deactivateCondensedSidebar();
    }

    /**
     * Activates the scrollable sidenar
     */
    LayoutThemeApp.prototype.activateScrollableSidebar = function() {
        this._saveConfig({ isScrollable: true, isCondensed: false });
        $.LeftSidebar.activateScrollableSidebar();
    },

    /**
     * Deactivates the scrollable sidenar
     */
    LayoutThemeApp.prototype.deactivateScrollableSidebar = function() {
        this._saveConfig({ isScrollable: false });
        $.LeftSidebar.deactivateScrollableSidebar();
    },

    /**
     * Activates the default theme
     */
    LayoutThemeApp.prototype.activateDefaultSidebarTheme = function() {
        $.LeftSidebar.activateDefaultTheme();
        this._saveConfig({ sideBarTheme: SIDEBAR_THEME_DEFAULT });
    },

    /**
     * Activates the light theme
     */
    LayoutThemeApp.prototype.activateLightSidebarTheme = function() {
        // this._resetLayout();
        $.LeftSidebar.activateLightTheme();
        this._saveConfig({ sideBarTheme: SIDEBAR_THEME_LIGHT });
    },

    /**
     * Activates the dark theme
     */
    LayoutThemeApp.prototype.activateDarkSidebarTheme = function() {
        // this._resetLayout();
        $.LeftSidebar.activateDarkTheme();
        this._saveConfig({ sideBarTheme: SIDEBAR_THEME_DARK });
    },

    /**
     * toggle the dark mode
     */
    LayoutThemeApp.prototype.activateDarkMode = function() {
        $("#light-style").attr("disabled", true);
        $("#dark-style").attr("disabled", false);
        $.LeftSidebar.activateDarkTheme();
        this._saveConfig({ isDarkModeEnabled: true, sideBarTheme: SIDEBAR_THEME_DARK });
    }

    /**
     * Deactivate the dark mode
     */
    LayoutThemeApp.prototype.deactivateDarkMode = function() {
        $("#light-style").attr("disabled", false);
        $("#dark-style").attr("disabled", true);
        this._saveConfig({ isDarkModeEnabled: false });
    }

    /**
     * Clear out the saved config
     */
    LayoutThemeApp.prototype.clearSavedConfig = function() {
        this._config = DEFAULT_CONFIG;
    },

    /**
     * Gets the config
     */
    LayoutThemeApp.prototype.getConfig = function() {
        return this._config;
    },

    /**
     * Reset to default
     */
    LayoutThemeApp.prototype.reset = function(callback) {
        this.clearSavedConfig();
        
        var self = this;
        if($("#main-style-container").length) {
            self.defaultSelectedStyle = $("#main-style-container").attr('href');
        }
        self.deactivateCondensedSidebar();
        self.deactivateDarkMode();
        self.activateDefaultSidebarTheme();
        self.activateFluid();
        // calling the call back to let the caller know that it's done
        callback();
    },

    /**
     * 
     */
    LayoutThemeApp.prototype.init = function() {
        var self = this;

        if($("#main-style-container").length) {
            self.defaultSelectedStyle = $("#main-style-container").attr('href');
        }
        
        // initilize the menu
        this._applyConfig();

        // adjust layout based on width
        this._adjustLayout();

        // on window resize, make menu flipped automatically
        this.window.on('resize', function (e) {
            e.preventDefault();
            self._adjustLayout();
        });

        // if horizontal layout - activate topbar
        var layout = $('body').data('layout');
        if (layout && layout === 'topnav') {
            $.Topbar.init();
        }
    },

    $.LayoutThemeApp = new LayoutThemeApp, $.LayoutThemeApp.Constructor = LayoutThemeApp
}(window.jQuery);