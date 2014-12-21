/**
 * Created by Ilya on 21.12.2014.
 */
(function(){

console.log('Hello from angular.js');
var app = angular.module('core', [ ]);

app.controller('LangController', function() {
  this.word=RU;
});

var RU={
  'page':'страница',
  'Page':'Страница',
  'footer':'Футер'
};

})();