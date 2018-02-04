'use strict';

angular
.module('userNote')
.controller('NewNoteCtrl', function($scope, $location, FBFactory){
    $scope.newNote = {
        detail : '',
    };

    $scope.saveNote = () =>{
        console.log('new note with saveNote', $scope.newNote)
        $scope.newNote.uid = firebase.auth().currentUser.uid;
        FBFactory.addNewNote($scope.newNote)
        .then((data) =>{
            $location.url('/noteList');
        });
    };
});