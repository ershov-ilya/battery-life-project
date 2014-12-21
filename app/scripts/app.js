/**
 * Created by
 * User: ershov-ilya
 * Website: ershov.pw
 * GitHub : https://github.com/ershov-ilya
 * on 21.12.2014.
 */

(function(angular){

  console.log('Hello from app.js');
  var app = angular.module('core', ['ngSanitize']);

  app.controller('CoreController', ['$scope', function($scope) {
    var locale=getLocale('RU');
    this.word=locale.word;
    $scope.footer = locale.chunk.footer;
  }]);

  // Выбор локализации
  function getLocale(localeID){
    switch(localeID){
      case 'RU':
        var obj={word: RU};
        break;
      case 'EN':
        var obj={word: EN};
        break;
      default:
        var obj={word: EN};
    }
    obj.chunk={};
    obj.chunk.footer='<a href="#page">&laquo; '+obj.word.back+'</a>';
    return obj;
  }

  // Локализации
  var RU={
    'content':'содержимое',
    'back':'в начало',
    'page':'страница',
    'Page':'Страница',
    'footer':'Футер',
    'language_select': 'Выбор языка',
    'personal_data': 'Анкета',
    'battery_status':'Состояние батареи'
  };

  var EN={
    'content':'content',
    'back':' go back',
    'page':'page',
    'Page':'Page',
    'footer':'Footer',
    'language_select': 'Language select',
    'personal_data': 'Personal settings',
    'battery_status':'Battery status'
  };

})(window.angular);