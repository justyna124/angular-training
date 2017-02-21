(function ()
{
    'use strict';

    function UserController()
    {
        var ctrl = this;
        ctrl.name = 'Justyna';
        ctrl.names = ['Anna', 'Tomek', 'Darek', 'Maciek'];

        ctrl.user = {
            name: 'Kamil',
            age: 22,
            phone:2364554,
            wallet:100
        };

        ctrl.spendMoney=function(a){
            ctrl.user.wallet-=a;
        };
    }

    angular.module('exercise1').controller('UserController', UserController);
})();
