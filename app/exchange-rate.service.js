(function ()
{
    'use strict';
    function ExchangeRateService($http)
    {
        var service = this;

        service.getExchangeRateUSD = function ()
        {
            return $http.get('http://api.nbp.pl/api/exchangerates/rates/c/usd/today/').then(function (result)
            {
                return result.data;
            });
        };
        service.getExchangeRateEUR = function ()
        {
            return $http.get('http://api.nbp.pl/api/exchangerates/rates/c/eur/today/').then(function (result)
            {
                return result.data;
            });
        };
        service.getExchangeRateGBP = function ()
        {
            return $http.get('http://api.nbp.pl/api/exchangerates/rates/c/gbp/today/').then(function (result)
            {
                return result.data;
            });
        };
        service.getExchangeRates = function ()
        {

            return $http.get('http://api.nbp.pl/api/exchangerates/tables/c/?format=json').then(function (result)
            {
                return result.data[0].rates;

            });
        };
    }

    angular.module('app').service('ExchangeRateService', ExchangeRateService);
})();
