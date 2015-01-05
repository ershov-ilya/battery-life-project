/**
 * Created by
 * User: ershov-ilya
 * Website: ershov.pw
 * GitHub : https://github.com/ershov-ilya
 * on 21.12.2014.
 */

function MVW($scope) {

  $scope.lang ={ word:EN };
  $scope.data ={ localeID:'EN' };

  $scope.setLocale = function(localeID, fLoadMode){
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
    if(!fLoadMode) $scope.saveData(); // no save if Load Mode
    return true;
  };

  $scope.saveData = function(){
    docState.data=$scope.data;
    docState.save();
  };

  $scope.loadData = function(){
    if(docState.debug) console.log("Event $scope.loadData");
    $scope.data=docState.data;
    $scope.setLocale(docState.data.localeID, true);
  };

  $scope.init = function() {
    if(docState.debug) console.log("Event $scope.init");
    if(docState.check()){
      $scope.loadData();
    }
    if(docState.debug) console.log($scope.data);
  };

} // function MVW($scope)

  // Локализации
  var RU={
    content:'Контент',
    back:'настройки',
    page:'страница',
    Page:'Страница',
    footer:'Футер',
    language_select: 'Выбор языка',
    personal_data: 'Настройки',
    battery_status:'Состояние батареи',
    user_profile:'Анкета пользователя',
    clarify_data:'Уточнить данные',
    your_birthday_date:'Ваша дата рождения'
  };

  var EN={
    content:'content',
    back:'settings',
    page:'page',
    Page:'Page',
    footer:'Footer',
    language_select: 'Language select',
    personal_data: 'Settings',
    battery_status:'Battery status',
    user_profile:'User profile',
    clarify_data:'Clarify data',
    your_birthday_date:'Your birthday date'
  };