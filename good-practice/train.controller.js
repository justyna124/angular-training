(function ()
{
    'use strict';

    function TrainController()
    {
        var ctrl = this;
        ctrl.info = 'Ucze sie angulara';
        ctrl.cup = {color: 'red'};
        ctrl.colours = ['white', 'green', 'yellow', 'pink', 'blue'];
        ctrl.users = [{name: 'Justyna', email: 'justyna@justyna.com'}, {name: 'Ania', email: 'ania@ania.com'}];
    }

    angular.module('training').controller('TrainController', TrainController);

})();
