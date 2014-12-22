/**
 * Created by
 * User: ershov-ilya
 * Website: ershov.pw
 * GitHub : https://github.com/ershov-ilya
 * on 21.12.2014.
 */

  console.log('Hello from app.js');

function MVW($scope) {

  $scope.lang ={ word:EN };
  $scope.data ={ localeID:'EN' };

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
    $scope.data.localeID = localeID;
    //$scope.saveData();
    return true;
  };

  $scope.getLocale = function(localeID){
    return $scope.data.localeID;
  };

  $scope.saveData = function(){
    docState.data=$scope.data;
    docState.save();
  };

  $scope.loadData = function(data){
    console.log('Load data to scope');
    $scope.data=docState.data;
  };

  $scope.tick= function() {
    console.log('tick');
  };

  $scope.init = function() {
    console.log("Event 'init'");
    $scope.loadData();
    if(docState.debug) console.log($scope.data);
  };

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