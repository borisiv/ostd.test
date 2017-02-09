define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/layout/success.html',
    //dirty hack for handlebars loading wait
    'handlebars'
], function($, _, Backbone, success){

    var Success = Backbone.View.extend({

        template : Handlebars.compile(success),

        initialize : function() {
//            nothing to do here
        },

        render: function(){
            //compile handlebars template
            this.$el.html(this.template());
            return this;
        }

    });

    return Success;

});