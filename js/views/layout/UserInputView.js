define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/layout/userInput.html',
    //dirty hack for handlebars loading wait
    'handlebars'
], function($, _, Backbone, userInput){

    var UserInput = Backbone.View.extend({

        template : Handlebars.compile(userInput),

        initialize : function() {
//            nothing to do here
        },

        render: function(){
            //compile handlebars template
            this.$el.html(this.template());
            return this;
        }

    });

    return UserInput;

});