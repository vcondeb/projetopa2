angular.module('primeiraApp').constant('consts', {
  appName: 'Wallet',
  version: '1.0',
  owner: '',
  year: '2017',
  site: '',
  apiUrl: 'http://localhost:3003/api',
}).run(['$rootScope', 'consts', function($rootScope, consts) {
  $rootScope.consts = consts
}])
