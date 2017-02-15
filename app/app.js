(function ()
{
    'use strict';
    var app = angular.module('training', []);

    app.controller('trainController', function ()
    {
        this.info = 'Ucze sie angulara';
        this.cup = {color: 'red'};
        this.colours = ['white', 'green', 'yellow', 'pink', 'blue'];
        this.users = [{name: 'Justyna', email: 'justyna@justyna.com'}, {name: 'Ania', email: 'ania@ania.com'}];
    });

})();
