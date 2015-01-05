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
  var date = +new Date();

  //function buildDelayedFuncSetColor(key) {
  //  return function () {
  //    console.log(key);
  //    $('.fluid').css({fill:'url(#SVGID_fluid_'+key+')'});
  //    $('.surface').css({fill:'url(#SVGID_surface_'+key+')'});
  //  }
  //}

  // Public methods
  var PUBLIC = {
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

    setScale: function(width, height){
      //var battery = Raphael("battery", width, height);
      //battery.setViewBox(0, 0, width, height );
      //
      //// Setting preserveAspectRatio to 'none' lets you stretch the SVG
      //battery.canvas.setAttribute('preserveAspectRatio', 'none');

      // Change the width and the height attributes manually through DOM
      $('#battery').attr('width', width).attr('height', height);    }
  };

  return PUBLIC;
})(); // BATTERY end