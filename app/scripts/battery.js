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
  var batteryValue = 100;
  var width = 500;
  var height = 1000;
  var date = +new Date();
  var queue = {};

  function buildDelayedSetFunc(val, ptr) {
    return function () {
      console.log('Delayed val: '+val);
      ptr.set(val);
    }
  }

  // Public methods
  var PUBLIC = {
    test: function(){ date = +new Date(); var objDate=new Date(date); console.log(objDate); console.log('Works fine!');},

    setColor: function(){
      var value=batteryValue;
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
      return true;
    },

    setValue: function(value) {
      batteryValue=Math.round(value);
    },

    drawColumn: function(){
      var value=batteryValue;
      if(DEBUG) console.log('setColumn input data: '+value);
      var y= 0, h=0;
      // y: 860 - 165
      y = 860-value*6.95;
      // height: 10 - 700
      h = 10 + value*6.9;
      $("#column").attr("y",y);
      $("#column").attr("height",h);

      $("#surface").attr("cy",y);
      console.log(value);
      return true;
    },

    setScale: function(width, height){
      //var battery = Raphael("battery", width, height);
      //battery.setViewBox(0, 0, width, height );
      //
      //// Setting preserveAspectRatio to 'none' lets you stretch the SVG
      //battery.canvas.setAttribute('preserveAspectRatio', 'none');

      // Change the width and the height attributes manually through DOM
      $('#battery').attr('width', width).attr('height', height);
    },

    set:function(value){
      if(!value) return false;
      if(typeof value === "string"){ value = parseFloat(value, 0); }
      if(value>100) value=100;
      if(value<0) value=0;

      this.setValue(value);
      this.drawColumn();
      this.setColor();
      return true;
    },

    animate:function(value){
      if(DEBUG){
        console.log('batteryValue='+batteryValue);
        console.log('value='+value);
      }
      value=Math.round(value);
      queue = {};
      var timeout=0;
      var interval=30;
      var positiveDir = (value>batteryValue) ? true : false;
      if(positiveDir){
        for(var i=batteryValue; i<=value; i++){
          if(DEBUG) console.log(i);
          queue[i]= buildDelayedSetFunc(i, this);
          setTimeout(queue[i], timeout);
          timeout+=interval;
        }
      }else{
        for(var i=batteryValue; i>=value; i--){
          if(DEBUG) console.log(i);
          queue[i]= buildDelayedSetFunc(i, this);
          setTimeout(queue[i], timeout);
          timeout+=interval;
        }
      }
      return 'Success';
    }

  };

  return PUBLIC;
})(); // BATTERY end