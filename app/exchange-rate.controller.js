(function ()
{
    'use strict';

    function ExchangeRateController($localStorage, ExchangeRateService, WalletService)
    {
        var ctrl = this;
        ctrl.currencies = [];
        ctrl.myValue = 100;
        ctrl.action = 'buy';
        ctrl.currency = 'EUR';

        $localStorage.wallet = {
            PLN: 1000
        };

        ctrl.wallet = WalletService.getWallet();

        ExchangeRateService.getExchangeRates().then(function (result)
        {
            ctrl.currencies = result;
            ctrl.currencies.forEach(function (currencyObject)
            {
                $localStorage.wallet[currencyObject.code] = 0;
            });
        });

        ctrl.check = function ()
        {
            ctrl.tempWallet = angular.copy(WalletService.getWallet());

            findCurrency(ctrl.currency);
            if (ctrl.action === 'buy') {
                ctrl.testValue = ctrl.myValue * ctrl.rate.ask;
                ctrl.tempWallet.PLN -= ctrl.testValue;
                ctrl.tempWallet[ctrl.currency] += ctrl.myValue;
            }
            else if (ctrl.action === 'sell') {
                ctrl.testValue = ctrl.myValue * ctrl.rate.bid;
                ctrl.tempWallet.PLN += ctrl.testValue;
                ctrl.tempWallet[ctrl.currency] -= ctrl.myValue;
            }
        };

        ctrl.confirm = function ()
        {
            WalletService.finalWallet(ctrl.tempWallet);
            ctrl.wallet = WalletService.getWallet();
            ctrl.tempWallet = {};
            ctrl.myValue = 0;
            ctrl.testValue = 0;
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

        ctrl.cancelTempwallet = function ()
        {
            ctrl.tempWallet = {};
            ctrl.testValue = 0;
        };

    }

    angular.module('app').controller('ExchangeRateController', ExchangeRateController);
})();

