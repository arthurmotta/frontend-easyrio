var myApp = angular.module('myApp', ['ui.router', 'ngCookies', 'pascalprecht.translate'])

myApp.config(['$urlRouterProvider', '$translateProvider', ($urlRouterProvider, $translateProvider) => {
  $urlRouterProvider.otherwise('/');

  $translateProvider.translations('en', {
    'BACK': 'Back',
    'LIST': 'Show List',
    'MAP': 'View Map',
    'HEADER': {
      'PLACEHOLDER': {
        'SEARCH': 'What are you looking for?'
      },
      'LANGUAGE': {
        'PTBR': 'Portuguese',
        'ENUS': 'English',
        'TITLE': 'Choose your language'
      }
    },
    'FOOTER': {
      'FOOTERDESC': 'Website created with the purpose of facilitating the search for points of interest in the city of Rio de Janeiro.'
    },
    'HOSPITAL': 'HOSPITAL',
    'POLICESTATION': 'POLICE STATION',
    'TOURISM': 'TOURISM',
    'BEACHES': 'BEACHES',
    'RESTAURANT': 'RESTAURANT',
    'HOTEL': 'HOTEL',
    'EVENTS': 'EVENTS',
    'SPORTS': 'SPORTS'
  }).translations('pt', {
    'BACK': 'Voltar',
    'LIST': 'Mostrar Lista',
    'MAP': 'Exibir Mapa',
    'HEADER': {
      'PLACEHOLDER': {
        'SEARCH': 'O que você deseja ?'
      },
      'LANGUAGE': {
        'PTBR': 'Portugês',
        'ENUS': 'Inglês',
        'TITLE': 'Escolha seu idioma  '
      }
    },
    'FOOTER': {
      'FOOTERDESC': 'Site criado com o objetivo de facilitar a busca por pontos de intereses pela cidade do Rio de Janeiro.'
    },
    'HOSPITAL': 'HOSPITAL',
    'POLICESTATION': 'DELEGACIA',
    'TOURISM': 'TURISMO',
    'BEACHES': 'PRAIAS',
    'RESTAURANT': 'RESTAURANTES',
    'HOTEL': 'HOTEL',
    'EVENTS': 'EVENTOS',
    'SPORTS': 'ESPORTES'
  });

  $translateProvider.preferredLanguage('pt');
  $translateProvider.useLocalStorage();

}]);

myApp.controller('HospitalController', ['$scope', '$translate', function ($scope, $translate) {

}]);
myApp.controller('DelegaciaController', ['$scope', '$translate', function ($scope, $translate) {

}]);
myApp.controller('TurismoController', ['$scope', '$translate', function ($scope, $translate) {

}]);
myApp.controller('PraiasController', ['$scope', '$translate', function ($scope, $translate) {

}]);
myApp.controller('DormirController', ['$scope', '$translate', function ($scope, $translate) {

}]);
myApp.controller('ComerController', ['$scope', '$translate', function ($scope, $translate) {

}]);
myApp.controller('EventosController', ['$scope', '$translate', function ($scope, $translate) {

}]);
myApp.controller('EsportesController', ['$scope', '$translate', function ($scope, $translate) {

}]);


myApp.controller('PageCrtl', ['$scope', '$translate', function ($scope, $translate) {
  $scope.alterarIdioma = function (chave) {
    $translate.use(chave);
  }
}]);