'use strict';


angular
.module('userNote')
.factory('FBFactory', (FBUrl, $http, $q)=>{
    
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

    return{ addNewNote }
})