/**
 * Created by
 * User: ershov-ilya
 * Website: ershov.pw
 * GitHub : https://github.com/ershov-ilya
 * on 05.01.2015.
 */

var BATTERY = (function(){
  // Private methods and data
  var DEBUG=true;
  var width = 500;
  var height = 1000;

  //function buildDelayedFuncSetColor(key) {
  //  return function () {
  //    console.log(key);
  //    $('.fluid').css({fill:'url(#SVGID_fluid_'+key+')'});
  //    $('.surface').css({fill:'url(#SVGID_surface_'+key+')'});
  //  }
  //}

  // Public methods
  return {
    test: function(){ console.log('Works fine!');},

    setColor: function(value){
      if(typeof value === "string"){
        value = parseFloat(value, 0);
      }
      //var surface='green', fluid='green';
      var rainbow={
        green:95,
        salad:80,
        yellow:50,
        orange:33.3,
        orangered:25,
        brown:11,
        red:0
      };
      var wait= 0, color='green';

      for(key in rainbow){
        // Назначение цвета в цикле

        var rainbowfunc={};
        // Перебор цветов
        color=key;
        if(value>=rainbow[key]) break;
        //wait+=100;
      }
      $('.fluid').css({fill:'url(#SVGID_fluid_'+color+')'});
      $('.surface').css({fill:'url(#SVGID_surface_'+color+')'});

      if(DEBUG) console.log(color);
      return true;
    },

    setColumn: function(value){

    },

    setScale: function(maxWidth, maxHeight){

    }
  };

})(); // BATTERY end