define([
    'jquery',
    'underscore',
    'backbone',
    '../../models/AppState',
    'text!templates/layout/userInput.html',
    //dirty hack for handlebars loading wait
    'handlebars'
], function($, _, Backbone, AppState, userInput){

    var UserInput = Backbone.View.extend({

        model: new AppState(),

        template : Handlebars.compile(userInput),

        events: {
            "click input:button": "check" // Handler for click on Save button
        },
        check: function (event) {
            var btn = event.target;
            console.log(btn);
            btn.disabled = true;    // inactive button
            btn.className = 'load'; // add gif
            var params = $("#user_info").serialize();
            var username = this.$el.find("#pd-first").val() + " " + $(this.el).find("#pd-last").val();
            console.log(this.model);
            var that = this;
            $.post('data/mock.php', params, function(data){
                if(data === '1'){
                    that.model.set({ // Save username and state
                        "state": "success",
                        "username": username
                    });
                    // controller.navigate("success", true); // go to success page
                }
                else{
                    that.model.set({ // Save username and state
                        "state": "error",
                        "username": username
                    });
                    // controller.navigate("error", true); // go to error page
                }

                btn.disabled = false; // active button
                btn.className = '';   // remove gif
            });
        },
        initialize : function() {
//            nothing to do here
//             this.model.bind('change', this.render, this);
        },

        render: function(){
            //compile handlebars template
            this.$el.html(this.template());
            return this;
        }

    });

    return UserInput;

});