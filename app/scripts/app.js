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
      case 'FR':
        $scope.lang.word = FR;
        break;
      case 'DE':
        $scope.lang.word = DE;
        break;
      case 'CN':
        $scope.lang.word = CN;
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

    tv:'Смотрите ТВ?',
    tv_no:'Нет',
    tv_2hours:'Пару часов в день',

    weight:'Избыточный вес?',
    weight_no:'Нет',
    weight_10:'Более 5 кг',

    coffee:'Употребляете кофе?',
    coffee_no:'Нет',
    coffee_1_2:'Регулярно 1-2 в день',
    coffee_3_4:'Регулярно 3-4 в день',


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

    tv:'Watch TV?',
    tv_no:'No',
    tv_2hours:'A couple of hours a day',

    weight:'Overweight?',
    weight_no:'No',
    weight_10:'More than 5 kg',

    coffee:'Drink coffee?',
    coffee_no:'No',
    coffee_1_2:'Regularly, 1-2 cups a day',
    coffee_3_4:'Regularly, 3-4 cups a day',


    // Страны
    where_you_live:'Country of residence',
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

var FR={
  back:'paramètres',
  page:'page',
  Page:'Page',
  footer:'Pied de page',
  language_select: 'Sélection de la langue',
  personal_data: 'Paramètres',
  battery_status:'Veuillez batterie',
  battery:'Batterie',
  user_profile:"Profil de l'utilisateur",

  // Анкета
  fill_profile:'Remplissez profil',
  clarify_data:'Clarifier les données',
  your_birthday_date:'Votre date de naissance',
  Choose_your_gender:'Choisissez votre sexe:',
  male:'Mâle',
  female:'Femelle',
  additional_options:'Options supplémentaires:',

  // Дополнительные опции
  no:'Aucun',
  Do_you_smoke:'Fumez-vous?',
  smoking_1_10:'1-9 cigarettes par jour',
  smoking_10_30:'10 à 30 cigarettes par jour',

  alko:'Les habitudes de consommation?',
  alko_no:'Absolument pas',
  alko_events:'De temps en temps, par des événements',
  alko_1_2:'Parfois, dans la soirée 1-2 portions',
  alko_partyman:'Alors que passer du temps avec des amis',
  alkoholic:'Prêt à admettre - je suis un alcoolique',

  sport:'Exercices physiques?',
  sport_no:'Aucun',
  sport_20min:'Régulièrement, 20 minutes par jour',
  sport_1hour:'Régulièrement, une heure par jour',

  tv:'Regarder la télévision?',
  tv_no:'Aucun',
  tv_2hours:"Un couple d'heures par jour",

  weight:'Surpoids?',
  weight_no:'Aucun',
  weight_10:'Plus de 5 kg',

  coffee:'Boire du café?',
  coffee_no:'Aucun',
  coffee_1_2:'Régulièrement, 1-2 tasses par jour',
  coffee_3_4:'Régulièrement, 3-4 tasses par jour',


  // Страны
  where_you_live:'Pays de résidence',
  Russia:'Russie',
  Ukraine:'Ukraine',
  Belarus:'Biélorussie',
  Kazakhstan:'Kazakhstan',
  China:'Chine',
  Africa:'Afrique (Tchad)',
  USA:"Les États-Unis D'Amérique",
  UnitedKingdom:'Royaume-Uni',
  France:'France',
  Australia:'Australie',
  Canada:'Canada',
  Norway:'Norvège',
  Israel:'Israël',
  Spain:'Espagne',
  Germany:'Allemagne',

  hint:'Astuce:',
  hint1:"Vous pouvez expérimenter avec différentes valeurs dans le profil de l'utilisateur, par exemple pour voir comment va chercher votre batterie, si vous viviez dans un autre pays.",
  hint2:"Ou vous pouvez entrer les données de quelqu'un de votre famille.",
  content:'content'
};

var DE={
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

  tv:'Watch TV?',
  tv_no:'No',
  tv_2hours:'A couple of hours a day',

  weight:'Overweight?',
  weight_no:'No',
  weight_10:'More than 5 kg',

  coffee:'Drink coffee?',
  coffee_no:'No',
  coffee_1_2:'Regularly, 1-2 times a day',
  coffee_3_4:'Regularly, 3-4 times a day',


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

var CN={
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

  tv:'Watch TV?',
  tv_no:'No',
  tv_2hours:'A couple of hours a day',

  weight:'Overweight?',
  weight_no:'No',
  weight_10:'More than 5 kg',

  coffee:'Drink coffee?',
  coffee_no:'No',
  coffee_1_2:'Regularly, 1-2 times a day',
  coffee_3_4:'Regularly, 3-4 times a day',


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