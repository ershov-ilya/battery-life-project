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

  function process(){
    try {
      today = +new Date();
      if(!data.birthdate) throw {code: 1, message: "Birthday not set"};
      var birthday = +new Date(data.birthdate);
      analys.age = (today - birthday) / 3600000 / 24 / 365.25;

      if(!data.country) throw {code: 2, message: "Country not set"};
      
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
    put: function(input){
      if(input===undefined) return false;
      if(data===input){
        if(DEBUG) console.log('Data is the same');
        return true;
      }
      data = input;
      console.log(data);
      return process();
    },
    get: function(){return result;},
    test: function(){return analys;},
    getError: function(){return lastError;}
  };

  return PUBLIC;
})(); // BLACKBOX end