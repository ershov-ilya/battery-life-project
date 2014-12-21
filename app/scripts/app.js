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
    console.log('CoreController');
    var locale=app.getLocale(docState.data.lang);
    this.word=locale.word;
    $scope.footer = locale.chunk.footer;
  }]);

  // Выбор локализации
  app.getLocale = function(localeID){
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
    obj.chunk.footer='<a href="#personal_data" data-role="button">&laquo; '+obj.word.back+'</a>';
    return obj;
  }

  // Локализации
  var RU={
    'content':'содержимое',
    'back':'настройки',
    'page':'страница',
    'Page':'Страница',
    'footer':'Футер',
    'language_select': 'Выбор языка',
    'personal_data': 'Настройки',
    'battery_status':'Состояние батареи'
  };

  var EN={
    'content':'content',
    'back':'settings',
    'page':'page',
    'Page':'Page',
    'footer':'Footer',
    'language_select': 'Language select',
    'personal_data': 'Settings',
    'battery_status':'Battery status'
  };

})(window.angular);