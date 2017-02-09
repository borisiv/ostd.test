define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/layout/error.html',
    //dirty hack for handlebars loading wait
    'handlebars'
], function($, _, Backbone, error, Handlebars){

    var Error = Backbone.View.extend({

        template : Handlebars.compile(error),

        initialize : function() {
//            nothing to do here
        },

        render: function(){
            //compile handlebars template
            this.$el.html(this.template());
            return this;
        }

    });

    return Error;

});