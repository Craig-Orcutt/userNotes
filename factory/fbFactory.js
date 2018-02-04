'use strict';


angular
.module('userNote')
.factory('FBFactory', (FBUrl, $http, $q)=>{
    function getNoteList() {
        let Fbuid = firebase.auth().currentUser.uid;
        return $q((resolve, reject)=>{
            $http
            .get(`${FBUrl}notes.json?orderBy="uid"&equalTo="Fbuid"`)
            .then(({data})=>{
                let noteArr = Object.keys(data).map(noteKey =>{
                    console.log('notekey', noteKey);
                    data[noteKey].id = noteKey;
                    return data[notekey];
                });
                console.log('noteArr', noteArr);
                resolve(noteArr)
            });
        });
    }

    function addNewNote(newNote){
        return $q((resolve, reject)=>{
            $http
            .post(`${FBUrl}/notes.json`, JSON.stringify(newNote))
            .then(data =>{
                console.log('new note posted', data.data);
                resolve(data.data);
            })
            .catch(error =>{
                console.log(error);
                reject(error);
            });
        });
    }



    return{ addNewNote , getNoteList }
})