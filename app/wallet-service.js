(function ()
{
    'use strict';
    function WalletService($localStorage)
    {
        var service = this;
        service.getWallet = function ()
        {

            return $localStorage.wallet;
        };

        service.buy= function(code,rate,value){



        };
    }

    angular.module('app').service('WalletService', WalletService);
})();
