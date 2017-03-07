(function ()
{
    'use strict';

    function ExchangeRateController($localStorage, ExchangeRateService, WalletService)
    {
        var ctrl = this;
        ctrl.currencies = [];
        $localStorage.wallet = {
            PLN: 1000,
            USD: 0
        };

        ctrl.wallet = WalletService.getWallet();

        ExchangeRateService.getExchangeRates().then(function (result)
        {
            ctrl.currencies = result;
        });
    }

    angular.module('app').controller('ExchangeRateController', ExchangeRateController);
})();
