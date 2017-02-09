define([
    'jquery',
    'underscore',
    'backbone',
    'views/layout/UserInputView'
], function($, _, Backbone,UserInput){

    var AppView = Backbone.View.extend({
        mainContent :  UserInput,
        mainContentOptions : {
            el : '#app'
        },

        initialize : function(options) {
            //instantiate appropriate views based on component functions
            if (options.mainContent != undefined && options.mainContent != null) {
                this.mainContent = options.mainContent;
            }
            //copy main content options passed from view of upper level
            this.mainContentOptions = $.extend({},this.mainContentOptions,this.options.mainContentOptions);
        },

        remove : function (attributes) {
            if (!_.isEmpty(this.mainView)) {this.mainView.remove();}
            Backbone.View.prototype.remove.call(this,attributes);
        },

        render: function(){
            // //append appropriate content to root element right away after compilation
            // this.$el.html(html);
            this.mainView = new this.mainContent(this.mainContentOptions);
            this.mainView.render();
            return this;
        }

    });

    return AppView;

});
