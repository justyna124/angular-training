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

        function findCurrency(currency)
        {
            ctrl.currencies.forEach(function (val)
            {
                if (val.code === currency) {
                    ctrl.rate = val;
                }
            });
        }

        function buyCurrency()
        {
            ctrl.testValue = ctrl.myValue * ctrl.rate.ask;
            ctrl.tempWallet.PLN -= ctrl.testValue;
            ctrl.tempWallet[ctrl.currency] += ctrl.myValue;
        }

        function sellCurrency()
        {
            ctrl.testValue = ctrl.myValue * ctrl.rate.bid;
            ctrl.tempWallet.PLN += ctrl.testValue;
            ctrl.tempWallet[ctrl.currency] -= ctrl.myValue;
        }

        ctrl.check = function ()
        {
            ctrl.tempWallet = angular.copy(WalletService.getWallet());

            findCurrency(ctrl.currency);
            if (ctrl.action === 'buy') {
                buyCurrency();
            }
            else if (ctrl.action === 'sell') {
                sellCurrency();
            }
        };

        ctrl.confirm = function ()
        {
            WalletService.finalWallet(ctrl.tempWallet);
            ctrl.wallet = WalletService.getWallet();
            ctrl.cancelTempWallet();
        };

        ctrl.cancelTempWallet = function ()
        {
            ctrl.tempWallet = {};
            ctrl.testValue = 0;
            ctrl.myValue = 0;
        };
    }

    angular.module('app').controller('ExchangeRateController', ExchangeRateController);
})();

