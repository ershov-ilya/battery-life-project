/**
 * Created by
 * User: ershov-ilya
 * Website: ershov.pw
 * GitHub : https://github.com/ershov-ilya
 * on 21.12.2014.
 */
/* jshint devel:true */

var docState={data:{},changes:false,debug:true,flagReset:false};

docState.check = function(){
  if(supports_html5_storage()){
    docState.storageStatus='OK';
  }else{
    docState.storageStatus='fail';
    return false;
  }

  if(localStorage['docStateData']===undefined) {console.log('data empty');}
  else {this.load();}
  return true;
};

docState.save = function(){
  if(this.debug) console.log('docState.save start');
  if(this.flagReset===true)
  {
    this.flagReset=false;
    return false;
  }
  if(this.flagLock) return false;

  if(this.debug) console.log(this.data);
  var str=JSON.stringify(this.data);
  if(this.debug) console.log(str);
  localStorage['docStateData']=str;
  this.changes=true;
  if(this.debug) console.log('docState.save done');
  return true;
};

docState.load = function(){
  if(this.debug) console.log("Event docState.load");
  this.flagLock=true;
  var json=localStorage['docStateData'];
  var obj=JSON.parse(localStorage['docStateData']);
  this.data = obj;
  if(this.debug) console.log('Load done');
  if(this.debug) console.log(this.data);
  // TODO: Заполнение всех полей
  var dat=this.data;

  this.flagLock=false;
};

docState.reset = function(){
  if(this.debug) console.log('Event docState.reset:');
  this.flagReset=true;
  console.log(this);
  localStorage.removeItem('docStateData');
  $('input').val('');
  $("select option").prop("selected", false);
  $('input[type="checkbox"]').prop("checked", false);
  docState.changes=false;
  delete docState.data;
  docState.data={};
  if(this.debug) console.log('Reset done');
};

function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}

$(document).ready(function(){
  if(this.debug) console.log("Event 'ready'");
  BATTERY.scale(true);
  BATTERY.resize();
  //if(docState.data.localeID===undefined) $.mobile.changePage( "#language_select_dialog", { role: "dialog" } );
});

