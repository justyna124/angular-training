(function ()
{
    'use strict';

    function UserController($scope)
    {
        $scope.name = 'justyna';

        $scope.car = {
            name: 'Audi',
            color: 'red'
        };
    }

    angular.module('app').controller('UserController', UserController);

    function CarController($scope)
    {
        $scope.name = 'xxxx';

        $scope.carrrr = {
            name: 'Audis',
            color: 'red'
        };
    }

    angular.module('app').controller('CarController', CarController);
})();
