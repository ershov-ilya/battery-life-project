/**
 * Created by
 * User: ershov-ilya
 * Website: ershov.pw
 * GitHub : https://github.com/ershov-ilya
 * on 21.12.2014.
 */

  console.log('Hello from app.js');

function MVW($scope) {

  $scope.lang ={ word:EN, localeID:'EN' };

  $scope.setLocale = function(localeID){
    switch(localeID){
      case 'RU':
        $scope.lang.word = RU;
        break;
      case 'EN':
        $scope.lang.word = EN;
        break;
      default:
        $scope.lang.word = EN;
    }
    $scope.lang.localeID = localeID;
  };

  $scope.getLocale = function(localeID){
    return $scope.lang.localeID;
  }

} // function MVW($scope)

  // Локализации
  var RU={
    content:'содержимое',
    back:'настройки',
    page:'страница',
    Page:'Страница',
    footer:'Футер',
    language_select: 'Выбор языка',
    personal_data: 'Настройки',
    battery_status:'Состояние батареи'
  };

  var EN={
    content:'content',
    back:'settings',
    page:'page',
    Page:'Page',
    footer:'Footer',
    language_select: 'Language select',
    personal_data: 'Settings',
    battery_status:'Battery status'
  };