'use strict';

angular.module('greenOutYourClosetApp')
  .controller('MainCtrl', function ($scope, $http) {
   
   $scope.getApi=function(){

    	$http.get('/api/things')
    		.success(function(data){
    			console.log("sucess!");
    			console.log(data);
    		})
    		.error(function(err){
    			console.log("fail");
    			console.log(err);
    		})



   }

   $scope.takeSnapshot = function(){
    console.log("second function worked")
    
   }


  });
