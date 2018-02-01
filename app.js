'use strict';

angular
    .module('userNote', ['ngRoute'])
    .constant("FBUrl", "https://todo-c80ed.firebaseio.com/")
    .config($routeProvider => {
        $routeProvider
            .when("/login", {
                templateUrl: "partials/login.html",
                controller: "LoginCtrl"
            })
            .when('/newNote',{
                templateUrl: 'partials/newNote.html',
                controller: 'NewNoteCtrl'
            })
            .when('/noteList',{
                templateUrl: 'partials/noteList.html',
                controller: 'NoteListCtrl'
            })
            .otherwise('/')
    })
    .run(FBCreds => {
        let creds = FBCreds;
        let authConfig = {
          apiKey: creds.key,
          authDomain: creds.authDomain
        };
        firebase.initializeApp(authConfig);
      });