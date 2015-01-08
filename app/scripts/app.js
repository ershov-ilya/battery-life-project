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
      case 'IL':
        $scope.lang.word = IL;
        break;
      case 'ES':
        $scope.lang.word = ES;
        break;
      case 'JP':
        $scope.lang.word = JP;
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
  Japan:'Japan',
  Germany:'Germany',

  hint:'Hint:',
  hint1:'You can experiment with different values in the user profile, for example to see how will look your battery, if you lived in another country.',
  hint2:'Or you can enter the data of someone from your family.',
  content:'content'
};

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
    Japan:'Япония',
    Germany:'Германия',


    hint:'Подсказка:',
    hint1:'Вы можете поэкспериментировать с разными значениями в анкете, например посмотреть, как выглядела бы Ваша батарейка, если бы Вы жили в другой стране.',
    hint2:'Или вы можете ввести данные кого-то из близких.',
    content:'Контент'
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
  Japan:'Japon',
  Germany:'Allemagne',

  hint:'Astuce:',
  hint1:"Vous pouvez expérimenter avec différentes valeurs dans le profil de l'utilisateur, par exemple pour voir comment va chercher votre batterie, si vous viviez dans un autre pays.",
  hint2:"Ou vous pouvez entrer les données de quelqu'un de votre famille.",
  content:'content'
};

var DE={
  back:'einstellungen',
  page:'seite',
  Page:'Seite',
  footer:'Fußzeile',
  language_select: 'Sprache wählen',
  personal_data: 'Einstellungen',
  battery_status:'Ihr Akku',
  battery:'Batterie',
  user_profile:'Benutzerprofil',

  // Анкета
  fill_profile:'Füllen Profil',
  clarify_data:'Klären Sie Daten',
  your_birthday_date:'Ihre Geburtstagsdatum',
  Choose_your_gender:'Wählen Sie Ihr Geschlecht:',
  male:'Männlich',
  female:'Weiblich',
  additional_options:'Zusätzliche optionen:',

  // Дополнительные опции
  no:'Keine',
  Do_you_smoke:'Rauchen Sie?',
  smoking_1_10:'1-9 Zigaretten pro Tag',
  smoking_10_30:'10-30 Zigaretten pro Tag',

  alko:'Trinkgewohnheiten?',
  alko_no:'Durchaus nicht',
  alko_events:'Gelegentlich von Veranstaltungen',
  alko_1_2:'Manchmal am Abend 1-2 Portionen',
  alko_partyman:'Während Zeit mit Freunden',
  alkoholic:'Zugeben - ich bin ein Alkoholiker',

  sport:'Körperliche Übungen?',
  sport_no:'Keine',
  sport_20min:'Regelmäßig, 20 Minuten pro Tag',
  sport_1hour:'Regelmäßig, eine Stunde pro Tag',

  tv:'Fernsehen?',
  tv_no:'Keine',
  tv_2hours:'Ein paar Stunden am Tag',

  weight:'Übergewicht?',
  weight_no:'Keine',
  weight_10:'Mehr als 5 kg',

  coffee:'Trinken Sie Kaffee?',
  coffee_no:'Keine',
  coffee_1_2:'Regelmäßig, 1-2 mal am Tag',
  coffee_3_4:'Regelmäßig, 3-4 mal am Tag',


  // Страны
  where_you_live:'Aufenthaltsland',
  Russia:'Russland',
  Ukraine:'Ukraine',
  Belarus:'Weißrussland',
  Kazakhstan:'Kasachstan',
  China:'China',
  Africa:'Afrika (Tschad)',
  USA:'Vereinigte Staaten Von Amerika',
  UnitedKingdom:'Vereinigtes Königreich',
  France:'Frankreich',
  Australia:'Australien',
  Canada:'Kanada',
  Norway:'Norwegen',
  Israel:'Israel',
  Spain:'Spanien',
  Japan:'Japan',
  Germany:'Deutschland',

  hint:'Hinweis:',
  hint1:'Sie können mit verschiedenen Werten im Benutzerprofil zu experimentieren, zum Beispiel zu sehen, wie Sie für Ihren Akku aus, wenn Sie in einem anderen Land gelebt.',
  hint2:'Oder Sie können die Daten von jemand aus Ihrer Familie geben.',
  content:'inhalt'
};

var IL={
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
  Japan:'יפן',
  Germany:'Germany',

  hint:'Hint:',
  hint1:'You can experiment with different values in the user profile, for example to see how will look your battery, if you lived in another country.',
  hint2:'Or you can enter the data of someone from your family.',
  content:'content'
};

var ES={
  back:'ajustes',
  page:'página',
  Page:'Página',
  footer:'Pie de página',
  language_select: 'Language select',
  personal_data: 'Ajustes',
  battery_status:'Estado de la batería Tuyo',
  battery:'Batería',
  user_profile:'Perfil de usuario',

  // Анкета
  fill_profile:'Rellene el perfil',
  clarify_data:'Aclarar datos',
  your_birthday_date:'Tu fecha de cumpleaños',
  Choose_your_gender:'Elige tu género:',
  male:'Masculino',
  female:'Femenino',
  additional_options:'Opciones adicionales:',

  // Дополнительные опции
  no:'No',
  Do_you_smoke:'Fuma usted?',
  smoking_1_10:'1-9 cigarrillos por día',
  smoking_10_30:'10-30 cigarrillos al día',

  alko:'Hábito de tomar?',
  alko_no:'Absolutamente no',
  alko_events:'De vez en cuando, por acontecimientos',
  alko_1_2:'A veces, en la noche 1-2 porciones',
  alko_partyman:'Mientras que pasar tiempo con los amigos',
  alkoholic:'Dispuestos a admitir - Soy un alcohólico',

  sport:'Ejercicios físicos?',
  sport_no:'No',
  sport_20min:'Regularmente, a 20 minutos al día',
  sport_1hour:'Regularmente, una hora al día',

  tv:'Ver la televisión?',
  tv_no:'No',
  tv_2hours:'Un par de horas al día',

  weight:'Sobrepeso?',
  weight_no:'No',
  weight_10:'Más de 5 kg',

  coffee:'Café de la bebida?',
  coffee_no:'No',
  coffee_1_2:'Regularmente, 1-2 tazas al día',
  coffee_3_4:'Regularmente, 3-4 tazas al día',


  // Страны
  where_you_live:'País de residencia',
  Russia:'Rusia',
  Ukraine:'Ucrania',
  Belarus:'Bielorrusia',
  Kazakhstan:'Kazajstán',
  China:'China',
  Africa:'África (Chad)',
  USA:'Estados Unidos De América',
  UnitedKingdom:'Reino Unido',
  France:'Francia',
  Australia:'Australia',
  Canada:'Canadá',
  Norway:'Noruega',
  Israel:'Israel',
  Spain:'España',
  Japan:'Japón',
  Germany:'Alemania',

  hint:'Dar un indicio:',
  hint1:'Usted puede experimentar con diferentes valores en el perfil de usuario, por ejemplo, para ver cómo se verá su batería, si usted vive en otro país.',
  hint2:'O bien, puede introducir los datos de alguien de su familia.',
  content:'contenido'
};

var JP={
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
  Japan:'日本',
  Germany:'Germany',

  hint:'Hint:',
  hint1:'You can experiment with different values in the user profile, for example to see how will look your battery, if you lived in another country.',
  hint2:'Or you can enter the data of someone from your family.',
  content:'content'
};

var CN={
  back:'设置',
  page:'页面',
  Page:'页面',
  footer:'页脚',
  language_select: '语言选择',
  personal_data: '设置',
  battery_status:'你的电池状态',
  battery:'电池',
  user_profile:'用户配置文件',

  // Анкета
  fill_profile:'填写个人资料',
  clarify_data:'澄清数据',
  your_birthday_date:'你的生日日期',
  Choose_your_gender:'选择您的性别：',
  male:'男',
  female:'女',
  additional_options:'其他选项：',

  // Дополнительные опции
  no:'没有',
  Do_you_smoke:'你抽烟吗？',
  smoking_1_10:'每天1-9支香烟',
  smoking_10_30:'每天10-30支香烟',

  alko:'饮酒的习惯？',
  alko_no:'绝对不是',
  alko_events:'偶尔，由事件',
  alko_1_2:'有时候，在晚上1-2份',
  alko_partyman:'虽然时间与朋友花',
  alkoholic:'愿意承认 - 我是一个酒鬼',

  sport:'体育锻炼？',
  sport_no:'没有',
  sport_20min:'定期，每天20分钟',
  sport_1hour:'定期，每天一小时',

  tv:'看电视？',
  tv_no:'没有',
  tv_2hours:'一对夫妇每天小时',

  weight:'超重？',
  weight_no:'没有',
  weight_10:'超过5千克',

  coffee:'喝咖啡？',
  coffee_no:'没有',
  coffee_1_2:'定期，每日1-2次',
  coffee_3_4:'定期，每天3-4次',


  // Страны
  where_you_live:'居住国家',
  Russia:'俄罗斯',
  Ukraine:'乌克兰',
  Belarus:'白俄罗斯',
  Kazakhstan:'哈萨克斯坦',
  China:'中国',
  Africa:'非洲（乍得）',
  USA:'美国',
  UnitedKingdom:'英国',
  France:'法国',
  Australia:'澳大利亚',
  Canada:'加拿大',
  Norway:'挪威',
  Israel:'以色列',
  Spain:'西班牙',
  Japan:'日本',
  Germany:'德国',

  hint:'提示：',
  hint1:'您可以在用户配置文件不同的值进行试验，例如，看看怎么会看你的电池，如果你住在另一个国家。',
  hint2:'或者你可以从你的家庭进入别人的数据。',
  content:'内容'
};