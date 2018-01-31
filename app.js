'use strict';

angular
    .module('userNote')
    .constant("FBUrl", "https://todo-c80ed.firebaseio.com/")
    .config($routeProvider => {
        $routeProvider
            .when("/login", {
                templateUrl: "partials/login.html",
                controller: "loginCtrl"
            })
            .when('')