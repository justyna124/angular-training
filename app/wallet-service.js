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
    }

    angular.module('app').service('WalletService', WalletService);
})();
