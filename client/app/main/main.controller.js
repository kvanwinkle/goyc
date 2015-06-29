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

   angular.element(document).ready(function () {

    
    console.log("second function worked")

    var photoButton = document.getElementById('snapPicture');
photoButton.addEventListener('click', picCapture, false);

navigator.getUserMedia ||
  (navigator.getUserMedia = navigator.mozGetUserMedia ||
  navigator.webkitGetUserMedia || navigator.msGetUserMedia);
  
if (navigator.getUserMedia){
    navigator.getUserMedia({video:true,audio:false}, onSuccess, onError);
  }else{
    alert('Your browser is not supported');
}

function onSuccess(stream){
  var vidContainer = document.getElementById('webcam');
  var vidStream;
  
  if (window.URL){
      vidStream = window.URL.createObjectURL(stream);
    }else{
    vidStream = stream;
  }
  
  vidContainer.autoplay = true;
  vidContainer.src = vidStream;
}

function onError(){
  alert('Houston, we have a problem');
}

function picCapture(){

  var vidContainer = document.getElementById('webcam');
  var picture = document.getElementById('capture'),
    context = picture.getContext('2d');
  
    
  picture.width = "600";
  picture.height = "400";
  
  context.drawImage(vidContainer, 0, 0, picture.width, picture.height);
  var dataURL = picture.toDataURL();
  document.getElementById('canvasImg').src = dataURL;
}


    
   });


  });
