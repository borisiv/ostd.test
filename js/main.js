
// Require.js allows us to configure shortcut alias
// Their usage will become more apparent further along in the tutorial.
require.config({
    paths: {
        jquery: 'libs/jquery/jquery-min',
        underscore: 'libs/underscore/underscore-min',
        backbone: 'libs/backbone/backbone-min',
        handlebars: 'libs/handlebars/handlebars',
        templates: '../templates',
        text: 'libs/require/text'

    },
    shim: {
        handlebars: {
            exports: 'Handlebars'
        }
    }

});

require([
    // Load our app module and pass it to our definition function
    'app'

], function(App){
    // The "app" dependency is passed in as "App"
    // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
    App.initialize();
});
