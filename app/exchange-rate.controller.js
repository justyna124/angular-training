(function ()
{
    'use strict';

    function ExchangeRateController($localStorage, ExchangeRateService, WalletService)
    {
        var ctrl = this;
        ctrl.currencies = [];
        ctrl.myValue = 100;
        ctrl.action='buy';
        ctrl.currency = 'EUR';

        $localStorage.wallet = {
            PLN: 1000,
            USD: 0
        };

        ctrl.wallet = WalletService.getWallet();

        ExchangeRateService.getExchangeRates().then(function (result)
        {
            ctrl.currencies = result;
        });

        ctrl.check = function ()
        {
            findCurrency(ctrl.currency);
            if (ctrl.action === 'buy') {
                ctrl.testValue = ctrl.myValue * ctrl.rate.ask;
                ctrl.tempWallet = {
                    PLN: ctrl.wallet.PLN - ctrl.testValue
                };
                ctrl.tempWallet[ctrl.currency]= ctrl.myValue;

            }
            else if (ctrl.action === 'sell') {
                ctrl.testValue = ctrl.myValue * ctrl.rate.bid;
            }
        };

        function findCurrency(currency)
        {
            ctrl.currencies.forEach(function (val)
            {
                if (val.code === currency) {
                    ctrl.rate = val;
                }
            });
        }

    }

    angular.module('app').controller('ExchangeRateController', ExchangeRateController);
})();

