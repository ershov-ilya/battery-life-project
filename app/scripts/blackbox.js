/**
 * Created by
 * User: ershov-ilya
 * Website: ershov.pw
 * GitHub : https://github.com/ershov-ilya
 * on 07.01.2015.
 */

var BLACKBOX = (function() {
  // Private data
  var DEBUG = true,
    result = 100,
    data={},
    analys={},
    today= 0,
    lastError={};

  function prediction(country, gender){
    var stat={"Andorra"		: [82.75,80.4,85.1],
      "Japan"		: [82.15,78.7,85.6],
      "San Marino"		: [82,78.4,85.6],
      "Singapore"		: [82,79.3,84.7],
      "France"		: [81,77.7,84.3],
      "Australia"		: [80.7,77.8,83.6],
      "Switzerland"		: [80.7,77.8,83.6],
      "Sweden"		: [80.7,78.4,83],
      "Iceland"		: [80.45,78.3,82.6],
      "Canada"		: [80.45,77,83.9],
      "Italy"		: [80.05,77,83.1],
      "Monaco"		: [79.95,76,83.9],
      "Norway"		: [79.9,76.5,83.3],
      "Israel"		: [79.9,76.5,83.3],
      "Spain"		: [79.9,76.5,83.3],
      "Liechtenstein"		: [79.8,76.2,83.4],
      "Greece"		: [79.5,76.9,82.1],
      "Austria"		: [79.3,76.3,82.3],
      "Malta"		: [79.25,77,81.5],
      "Luxembourg"		: [79.15,75.8,82.5],
      "South Korea"		: [79.1,78.1,80.1],
      "Netherlands"		: [79.05,76.8,81.3],
      "new Zealand"		: [79.05,76,82.1],
      "Germany"		: [79.05,76,82.1],
      "Belgium"		: [79,75.8,82.2],
      "United Kingdom"		: [78.75,76.2,81.3],
      "Finland"		: [78.75,75.2,82.3],
      "Jordan"		: [78.6,76,81.2],
      "Bosnia and Herzegovina"		: [78.3,74.6,82],
      "United States Of America"		: [78.1,75.2,81],
      "Cyprus"		: [78.05,75.6,80.5],
      "Denmark"		: [78.05,75.7,80.4],
      "Portugal"		: [78,74.6,81.4],
      "Ireland"		: [78,75.3,80.7],
      "Albania"		: [77.75,75,80.5],
      "Kuwait"		: [77.4,76.3,78.5],
      "Costa Rica"		: [77.25,74.6,79.9],
      "Chile"		: [77.05,73.7,80.4],
      "Libya"		: [76.9,74.6,79.2],
      "Slovenia"		: [76.65,72.8,80.5],
      "Poland"		: [76.65,73.9,79.4],
      "Ecuador"		: [76.65,73.7,79.6],
      "Georgia"		: [76.55,73,80.1],
      "Czech Republic"		: [76.5,73.1,79.9],
      "Argentina"		: [76.4,72.6,80.2],
      "Uruguay"		: [76,72.7,79.3],
      "Cuba"		: [75.95,72.6,79.3],
      "Saudi Arabia"		: [75.95,73.9,78],
      "Mexico"		: [75.95,73.1,78.8],
      "United Arab Emirates"		: [75.8,73.2,78.4],
      "Trinidad and Tobago"		: [75.45,76.8,74.1],
      "Paraguay"		: [75.4,72.8,78],
      "Tunisia"		: [75.4,73.6,77.2],
      "Brunei"		: [75.35,73.1,77.6],
      "Serbia"		: [75.2,72.5,77.9],
      "Dominica"		: [75.2,72.2,78.2],
      "Croatia"		: [75.05,71.3,78.8],
      "Slovakia"		: [75.05,71,79.1],
      "Sri Lanka"		: [74.85,72.8,76.9],
      "Panama"		: [74.85,72.7,77],
      "Bahrain"		: [74.75,72.2,77.3],
      "Montenegro"		: [74.6,72.4,76.8],
      "Lithuania"		: [74.6,69.5,79.7],
      "Macedonia"		: [74.3,71.7,76.9],
      "St. Lucia"		: [74.2,70.5,77.9],
      "Qatar"		: [74.2,71.6,76.8],
      "Saint Vincent and the Grenadines"		: [74.1,72.2,76],
      "Oman"		: [73.7,71.4,76],
      "Algeria"		: [73.45,71.9,75],
      "Venezuela"		: [73.35,70.2,76.5],
      "Surinam"		: [73.3,70.5,76.1],
      "Lebanon"		: [73.25,70.7,75.8],
      "Bulgaria"		: [73.2,70,76.4],
      "Solomon Islands"		: [73.2,70.6,75.8],
      "Jamaica"		: [73.15,71.4,74.9],
      "Dominican Republic"		: [73.1,71.3,74.9],
      "Hungary"		: [73.05,68.7,77.4],
      "Barbados"		: [73,71,75],
      "China"		: [72.95,71.1,74.8],
      "Turkey"		: [72.95,70.4,75.5],
      "Mauritius"		: [72.9,68.9,76.9],
      "Malaysia"		: [72.9,70.1,75.7],
      "Brazil"		: [72.75,69,76.5],
      "Saint Kitts and Nevis"		: [72.75,69.8,75.7],
      "Thailand"		: [72.6,70.2,75],
      "Estonia"		: [72.5,66.9,78.1],
      "Seychelles"		: [72.45,67,77.9],
      "Antigua and Barbuda"		: [72.45,70,74.9],
      "Armenia"		: [72.4,68.5,76.3],
      "Colombia"		: [72.3,68.4,76.2],
      "Romania"		: [72,68.4,75.6],
      "North Korea"		: [72,69.2,74.8],
      "Salvador"		: [71.9,68.2,75.6],
      "Latvia"		: [71.75,66.4,77.1],
      "Egypt"		: [71.6,69,74.2],
      "Samoa"		: [71.4,68.5,74.3],
      "Morocco"		: [71.3,68.9,73.7],
      "Vietnam"		: [71.2,68.3,74.1],
      "Cape Verde"		: [71.05,67.7,74.4],
      "Nicaragua"		: [70.95,68.8,73.1],
      "Palau"		: [70.8,67.5,74.1],
      "Syria"		: [70.65,69.3,72],
      "The Marshall Islands"		: [70.65,68.6,72.7],
      "Iran"		: [70.6,69.1,72.1],
      "Philippines"		: [70.6,67.6,73.6],
      "Federated States of Micronesia"		: [70.4,68.5,72.3],
      "Moldavia"		: [70.3,66.5,74.1],
      "Indonesia"		: [70.25,67.7,72.8],
      "Belarus"		: [70.2,64.3,76.1],
      "Tonga"		: [70.2,67.6,72.8],
      "Fiji"		: [70.2,67.6,72.8],
      "Peru"		: [70.15,68.3,72],
      "Russia"		: [69.8,64,75.6],
      "Guatemala"		: [69.7,67.9,71.5],
      "Honduras"		: [69.4,67.8,71],
      "Iraq"		: [69.35,68,70.7],
      "Kyrgyzstan"		: [68.9,64.8,73],
      "India"		: [68.75,66.3,71.2],
      "Tuvalu"		: [68.7,66.4,71],
      "Turkmenistan"		: [68.35,65.2,71.5],
      "Belize"		: [68.3,66.4,70.2],
      "Ukraine"		: [68.1,62.2,74],
      "Sao Tome and Principe"		: [67.65,66,69.3],
      "Kazakhstan"		: [67.35,61.9,72.8],
      "Mongolia"		: [67.05,64.6,69.5],
      "East Timor"		: [66.65,64.3,69],
      "Azerbaijan"		: [66.3,61.9,70.7],
      "Bolivia"		: [66.25,63.5,69],
      "Guyana"		: [66.25,63.5,69],
      "Bahamas"		: [65.7,62.4,69],
      "Papua - New Guinea"		: [65.7,63.4,68],
      "Grenada"		: [65.25,63.4,67.1],
      "Uzbekistan"		: [65.1,61.6,68.6],
      "Maldives"		: [64.8,63.4,66.2],
      "Tajikistan"		: [64.7,61.6,67.8],
      "Pakistan"		: [63.75,62.7,64.8],
      "Nauru"		: [63.55,59.9,67.2],
      "Vanuatu"		: [63.25,61.7,64.8],
      "Bangladesh"		: [62.85,62.8,62.9],
      "Comoros"		: [62.8,60.4,65.2],
      "Yemen"		: [62.55,60.6,64.5],
      "Kiribati"		: [62.5,59.4,65.6],
      "Myanmar"		: [62.15,59,65.3],
      "Madagascar"		: [62.15,60.2,64.1],
      "Cambodia"		: [61.35,59.3,63.4],
      "Nepal"		: [60.55,60.8,60.3],
      "Eritrea"		: [59.6,57.9,61.3],
      "Ghana"		: [59.55,58.7,60.4],
      "Togo"		: [57.9,55.8,60],
      "Congo. Democratic Republic of the"		: [57.25,55,59.5],
      "Haiti"		: [57.1,55.4,58.8],
      "Senegal"		: [56.7,55.3,58.1],
      "Laos"		: [55.9,53.8,58],
      "Kenya"		: [55.3,55.2,55.4],
      "butane"		: [55.2,55.4,55],
      "Gambia"		: [54.6,52.7,56.5],
      "Gabon"		: [54.05,52.9,55.2],
      "Benin"		: [53.45,52.3,54.6],
      "Mauritania"		: [53.4,51.2,55.6],
      "Congo. Republic of"		: [53.3,52.1,54.5],
      "Cameroon"		: [52.95,52.3,53.6],
      "Uganda"		: [51.75,50.8,52.7],
      "Burundi"		: [51.3,50.5,52.1],
      "Tanzania"		: [50.7,49.4,52],
      "Botswana"		: [50.6,51.6,49.6],
      "Guinea"		: [49.65,48.5,50.8],
      "Equatorial Guinea"		: [49.55,48.1,51],
      "Mali"		: [49.55,47.6,51.5],
      "Ethiopia"		: [49.25,48.1,50.4],
      "Burkina Faso"		: [49.25,47.7,50.8],
      "Sudan"		: [49.1,48.2,50],
      "Rwanda"		: [49.05,47.9,50.2],
      "Cote d'Ivoire"		: [49.05,46.4,51.7],
      "Somalia"		: [48.9,47.1,50.7],
      "Nigeria"		: [47.45,46.8,48.1],
      "Chad"		: [47.25,46.2,48.3],
      "Guinea-Bissau"		: [47.2,45.4,49],
      "Niger"		: [44.05,44.1,44],
      "Afghanistan"		: [43.8,43.6,44],
      "Central African Republic"		: [43.75,43.7,43.8],
      "Djibouti"		: [43.3,41.9,44.7],
      "Namibia"		: [43.1,44.4,41.8],
      "Malawi"		: [43,43.4,42.6],
      "South Africa"		: [42.45,43.2,41.7],
      "Mozambique"		: [40.9,41.4,40.4],
      "Sierra Leone"		: [40.65,38.4,42.9],
      "Liberia"		: [40.4,38.9,41.9],
      "Lesotho"		: [39.95,40.7,39.2],
      "Zimbabwe"		: [39.5,40.6,38.4],
      "Zambia"		: [38.4,38.3,38.5],
      "Angola"		: [37.65,36.7,38.6],
      "Swaziland"		: [32.2,31.8,32.6]
    };

    var predict = stat[country];
    if(!predict) return 70; // Выбрал возраст по умолчанию в 70 лет
    if(gender=='male') return  predict[1];
    if(gender=='female') return  predict[2];
    return predict[0];
  }

  function evaluate(habbit, variant){
    var value = 0; // Часов в день
    var arr={};
    switch(habbit){
      case 'smoking':
        arr={
          smoking_no:+2,
          smoking_1_10:-1,
          smoking_10_30:-3
        };
        value = arr[variant];
        break;
      case 'alko':
        arr={
          alko_no:+2,
          alko_events:0,
          alko_1_2:-1,
          alko_partyman:-2,
          alkoholic:-3
        };
        value = arr[variant];
        break;
      case 'sport':
        arr={
          sport_no:0,
          sport_20min:1,
          sport_1hour:1
        };
        value = arr[variant];
        break;
      case 'tv':
        arr={
          tv_no:0.5,
          tv_2hours:-0.5
        };
        value = arr[variant];
        break;
      case 'weight':
        arr={
          weight_no:0.5,
          weight_10:-0.5
        };
        value = arr[variant];
        break;
      case 'coffee':
        arr={
          coffee_no:0,
          coffee_1:0.5,
          coffee_2_3:0.5
        };
        value = arr[variant];
        break;
    }
    return value;
  }

  function process(){
    try {
      today = +new Date();
      if(!data.birthdate) throw {code: 1, message: "Birthday not set"};
      var birthday = +new Date(data.birthdate);
      analys.age = (today - birthday) / 3600000 / 24 / 365.25; // Израсходовано
      analys.ageDays = (today - birthday) / 3600000 / 24; // Израсходовано

      if(!data.country) throw {code: 2, message: "Country not set"};
      analys.predictionAge = prediction(data.country, data.gender); // 100% батарейки
      analys.predictionDays = analys.predictionAge*365.25;

      var estimate=0;
      var thisEst=0;
      for(key in data){
        thisEst=evaluate(key, data[key]);
        //console.log(key+' : '+data[key]+', value='+thisEst);
        estimate+=thisEst;
      }
      console.log("Итог, часов в день:"+estimate);
      analys.predictionDayLength=24+estimate;
      //analys.predictionFinish=new Date(analys.predictionDayLength*analys.predictionDays*3600000+birthday);
      analys.predictionFinishAgeDays=analys.predictionDays*analys.predictionDayLength/24;
      analys.predictionFinishAge=analys.predictionDayLength*analys.predictionDays / 365.25;

    }
    catch(e){
      console.log('Error:');
      console.log(e);
      return false;
    }
    return true;
  }

  //Public data
  var PUBLIC={
    get: function(){return result;},
    test: function(){return analys;},
    getError: function(){return lastError.message;},
    resetError: function(){lastError={}; return true;},
    put: function(input){
      if(input===undefined) return false;
      //if(data===input){
      //  if(DEBUG) console.log('Data is the same');
      //  return true;
      //}
      data = input;
      console.log(data);
      process();
      if(DEBUG) console.log(this.test());
    }
  };

  return PUBLIC;
})(); // BLACKBOX end