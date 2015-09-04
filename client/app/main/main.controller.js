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

   

   $scope.retake = function(){
          console.log("retake called");
     document.getElementById('capture').style.display = 'none';
     document.getElementById('canvasImg').style.display = 'none';
     document.getElementById('twoButtons').style.display = 'none';
     document.getElementById('snapPicture').style.display = 'block';
     document.getElementById('timer').style.display = "none";
     document.getElementsByClassName('timerDots').style.display = "inline block";

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
  
    
  picture.width = "700";
  picture.height = "400";

 document.getElementById('timer').style.display = 'inline' ;


// NEED TO SET UP FOR LOOP //

 var timerDots = ['six', 'five','four','three', 'two', 'one'];


   setTimeout(function(){


    document.getElementById('six').style.display = 'none';
    

   } ,1000); 


   setTimeout(function(){


    document.getElementById('five').style.display = 'none';
    

   } ,2000); 


   setTimeout(function(){


    document.getElementById('four').style.display = 'none';
    

   } ,3000); 

setTimeout(function(){


    document.getElementById('three').style.display = 'none';
    

   } ,4000); 


setTimeout(function(){


    document.getElementById('two').style.display = 'none';
    

   } ,5000); 

// END OF SECTION THAT NEEDS TO BE SET UP IN FOR LOOP //


setTimeout(function(){


    document.getElementById('one').style.display = 'none';
    

   } ,6000); 

  setTimeout(function(){
  
  context.drawImage(vidContainer, 0, 0, picture.width, picture.height);
  var dataURL = picture.toDataURL();
  document.getElementById('canvasImg').src = dataURL;
  document.getElementById('canvasImg').style.display = 'block';
  document.getElementById('capture').style.display = 'block';
   document.getElementById('snapPicture').style.display = 'none';
    document.getElementById('twoButtons').style.display = 'inline';


}, 7000);


}

  });

 });
