/**
 * Created by seva on 6/14/17.
 */

var app=angular.module("MyApp",[]);

app.config(function($httpProvider) {
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
});

