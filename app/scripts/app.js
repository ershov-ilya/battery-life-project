/**
 * Created by Ilya on 21.12.2014.
 */
(function(angular){

  console.log('Hello from angular.js');
  var app = angular.module('core', ['ngSanitize']);

  app.controller('CoreController', ['$scope', function($scope) {
    this.word=RU;
    $scope.footer = footer;
  }]);

  var footer = '<a href="#page">&laquo; назад</a>';

  var RU={
    'page':'страница',
    'Page':'Страница',
    'footer':'Футер'
  };

})(window.angular);