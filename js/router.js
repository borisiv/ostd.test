// Filename: router.js
/**
 * Base router of the application
 * all pages urls should be aggregated here and actions
 * taken appropriately
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'views/layout/AppView',
    'views/layout/UserInputView',
    'views/layout/SuccessView',
    'views/layout/ErrorView'
], function($, _, Backbone, AppView, UserInputView, SuccessView, ErrorView) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            "": "showDefault", // empty hash
            "!/": "showDefault", // Home page
            "!/success": "showSuccess", // Success page
            "!/error": "showError" // Error page

        },

        initialize : function () {
            _.bindAll(this,'showDefault','showPage','removeCurrentView','setView');
        },

        showPage : function (MainView,HeaderView,FooterView) {
            this.removeCurrentView();
            // var pageContainer = $('<div></div>').attr({id : 'app'})
            // $('body').append(pageContainer);
            this.showParams.mainContent = MainView;
            // this.showParams.headerContent = HeaderView;
            var page = new AppView(this.showParams);
            page.render();
            this.setView(page);
        },

        removeCurrentView : function () {
            if (!_.isEmpty(this.view)) {
                this.view.undelegateEvents();
                this.view.remove();
            }
            this.view = null;
        },

        setView : function (view) {
            this.view = view;
        },

        showDefault : function () {
            this.showParams = {
                el:'#app'
            };
            require(['UserInputView'],this.showPage);
        },

        showError : function () {
            this.showParams = {
                el:'#app'
            };
            require(['ErrorView'],this.showPage);
        },

        showSuccess: function () {
            this.showParams = {
                el:'#app'
            };
            require(['SuccessView'],this.showPage);
        }
    });

    var initialize = function(){
        var app_router = new AppRouter;
        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});