(function ()
{
    'use strict';

    function UserController($http)
    {
        var ctrl = this;
        ctrl.users = [];

       $http.get('users.json').then(function(result){
           ctrl.users=result.data;

       });
    }

    angular.module('app').controller('UserController', UserController);
})();
