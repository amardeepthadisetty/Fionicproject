
var app = angular.module('starter', ['ionic']);

app.controller('ListCtrl',function($scope){

$scope.notes = [];

$scope.notes = [
{
  name : 'Item 1',
  description: 'This is description of item 1'
}
];


});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
