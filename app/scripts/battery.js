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
  var queue = {};
  var interval=30;

  function buildDelayedSetFunc(val, ptr) {
    return function () {
      ptr.set(val);
    }
  }

  function drawColumn(){
    var value=batteryValue;
    var y= 0, h=0;
    // y: 860 - 165
    y = 860-value*6.95;
    // height: 10 - 700
    h = 10 + value*6.9;
    $("#column").attr("y",y);
    $("#column").attr("height",h);

    $("#surface").attr("cy",y);
    return true;
  }



  // Public methods
  var PUBLIC = {
    test: function(){ this.animate(batteryValue, 100);},

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

    resize: function(){
      $(window).resize(this.scale);
    },

    scale: function(fInit){
      var analys={}
      analys.width = $(window).width();
      analys.height = $(window).height()-50;
      analys.vertical = (analys.height > analys.width) ? true : false;
      analys.min = (analys.vertical)? analys.width : analys.height;
      analys.max = (analys.vertical)? analys.height : analys.width;
      if(analys.min>400) analys.min=400;
      analys.ratio = analys.max/analys.min;
      if(DEBUG) console.log(analys);

      var w,h;
      // Предположим ориентация вертикальная
      if(analys.ratio >=2){
        w=analys.min-40;
        h=w*2;
      }else{
        h=analys.max-40;
        w=Math.round(h/2);
      }
/*
      if(!analys.vertical){
        var temp=h;
        h=w;
        w=temp;
      }
      /**/

      if(analys.vertical) {
        $("#rotator").removeClass("rotate90");
        $("#rotator").css('marginTop','');
        $("#battery-wrapper").css('height','');
        $("#battery-wrapper").css('width','');
      }else {
        $("#rotator").addClass("rotate90");
        $("#rotator").css('marginTop',-w/2);
        $("#battery-wrapper").css('height',w);
        $("#battery-wrapper").css('width','');
      }
      /**/

      $('#battery').attr('width', w).attr('height', h);
      if(fInit) drawColumn();
    },

    set:function(value){
      if(!value) return false;
      if(typeof value === "string"){ value = parseFloat(value, 0); }
      if(value>100) value=100;
      if(value<0) value=0;

      this.setValue(value);
      drawColumn();
      this.setColor();
      return true;
    },

    animate:function(value, oldvalue){
      if(oldvalue===undefined) oldvalue=batteryValue;
      if(DEBUG){
        console.log('batteryValue='+oldvalue);
        console.log('value='+value);
      }
      value=Math.round(value);
      queue = {};
      var timeout=0;
      var positiveDir = (value>oldvalue) ? true : false;
      if(positiveDir){
        for(var i=oldvalue; i<=value; i++){
          queue[i]= buildDelayedSetFunc(i, this);
          setTimeout(queue[i], timeout);
          timeout+=interval;
        }
      }else{
        for(var i=oldvalue; i>=value; i--){
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