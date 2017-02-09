define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone){

    var AppState = Backbone.Model.extend({ // Account model
        defaults: {
            "username": "",
            "state": ""
        }
    });
    return AppState;
});