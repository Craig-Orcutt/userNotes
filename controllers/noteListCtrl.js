'use strict';

angular
.module('userNote')
.controller('NoteListCtrl', function($scope, FBFactory){
    FBFactory.getNoteList()
    .then(noteData=>{
        if (noteData.length > 0 ) {
            $scope.notes = noteData;
        } else {
            $scope.message = 'Add some notes fool!'
        }
    })
    .catch(err => {
        console.log('errrrrrrr', err)
    });
})