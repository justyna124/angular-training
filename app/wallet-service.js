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

        service.finalWallet= function(fWallet){
            $localStorage.wallet= fWallet;

        };
    }

    angular.module('app').service('WalletService', WalletService);
})();
