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
    back:'настройки',
    page:'страница',
    Page:'Страница',
    footer:'Футер',
    language_select: 'Выбор языка',
    personal_data: 'Настройки',
    battery_status:'Батарея жизни',
    battery:'Батарея',
    user_profile:'Анкета',

    // Анкета
    fill_profile:'Заполните анкету',
    clarify_data:'Уточнить данные',
    your_birthday_date:'Дата Вашего рождения',
    Choose_your_gender:'Ваш пол:',
    male:'Муж',
    female:'Жен',
    additional_options:'Дополнительные опции:',

    // Дополнительные опции
    no:'Нет',
    Do_you_smoke:'Вы курите?',
    smoking_1_10:'1-9 сигарет в день',
    smoking_10_30:'10-30 сигарет в день',
    
    alko:'Отношение к алкоголю?',
    alko_no:'Категорически нет',
    alko_events:'Редко, по праздникам',
    alko_1_2:'Иногда, 1-2 порции вечером',
    alko_partyman:'Когда с друзьями. По другому никак',
    alkoholic:'Готов признать - я алкоголик',

    sport:'Физические упражнения?',
    sport_no:'Нет',
    sport_20min:'Регулярно, 20 минут в день',
    sport_1hour:'Регулярно, час в день',




    // Страны
    where_you_live:'Страна проживания:',
    Russia:'Россия',
    Ukraine:'Украина',
    Belarus:'Беларусь',
    Kazakhstan:'Казахстан',
    China:'Китай',
    Africa:'Африка (Чад)',
    USA:'США',
    UnitedKingdom:'Великобритания',
    France:'Франция',
    Australia:'Австралия',
    Canada:'Канада',
    Norway:'Норвегия',
    Israel:'Израиль',
    Spain:'Испания',
    Germany:'Германия',


    hint:'Подсказка:',
    hint1:'Вы можете поэкспериментировать с разными значениями в анкете, например посмотреть, как выглядела бы Ваша батарейка, если бы Вы жили в другой стране.',
    hint2:'Или вы можете ввести данные кого-то из близких.',
    content:'Контент'
  };

  var EN={
    back:'settings',
    page:'page',
    Page:'Page',
    footer:'Footer',
    language_select: 'Language select',
    personal_data: 'Settings',
    battery_status:'Yours battery status',
    battery:'Battery',
    user_profile:'User profile',

    // Анкета
    fill_profile:'Fill profile',
    clarify_data:'Clarify data',
    your_birthday_date:'Your birthday date',
    Choose_your_gender:'Choose your gender:',
    male:'Male',
    female:'Female',
    additional_options:'Additional options:',

    // Дополнительные опции
    no:'No',
    Do_you_smoke:'Do you smoke?',
    smoking_1_10:'1-9 cigarettes per day',
    smoking_10_30:'10-30 cigarettes a day',

    alko:'Drinking habits?',
    alko_no:'Absolutely not',
    alko_events:'Occasionally, by events',
    alko_1_2:'Sometimes, in the evening 1-2 servings',
    alko_partyman:'While time spending with friends',
    alkoholic:'Willing to admit - I\'m an alcoholic',

    sport:'Physical exercises?',
    sport_no:'No',
    sport_20min:'Regularly, 20 minutes a day',
    sport_1hour:'Regularly, an hour a day',


    // Страны
    where_you_live:'Where you live?',
    Russia:'Russia',
    Ukraine:'Ukraine',
    Belarus:'Belarus',
    Kazakhstan:'Kazakhstan',
    China:'China',
    Africa:'Africa (Chad)',
    USA:'United States Of America',
    UnitedKingdom:'United Kingdom',
    France:'France',
    Australia:'Australia',
    Canada:'Canada',
    Norway:'Norway',
    Israel:'Israel',
    Spain:'Spain',
    Germany:'Germany',

    hint:'Hint:',
    hint1:'You can experiment with different values in the user profile, for example to see how will look your battery, if you lived in another country.',
    hint2:'Or you can enter the data of someone from your family.',
    content:'content'
  };