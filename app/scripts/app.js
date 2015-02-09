//require('./landing');
//require('./album');
//require('./collection');
//require('./profile');

blocJams.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
   $locationProvider.html5Mode(true);
 
   $stateProvider.state('landing', {
     url: '/',
     controller: 'Landing.controller',
     templateUrl: '/templates/landing.html'
   });
 }]);
 

 
   blocJams.controller('Landing.controller', ['$scope', function($scope) {
    $scope.subText = "Turn the music up!";

    $scope.subTextClicked = function() {
     $scope.subText += '!';
   };
  }]);


   
