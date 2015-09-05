'use strict';

angular.module('greenOutYourClosetApp')
  .controller('MainCtrl', function ($scope, $http) {

  $http.defaults.headers.common.Authorization = 'CloudSight 51RAGqz9_ED1ExMzVG4I7Q'

   $scope.getApi=function(){
      console.log($scope.dataUrl);
      $scope.upload($scope.dataUrl);
      
     //  var args = {
       
     //      locale: 'en-US',
     //      remote_image_url: 'http://wachabuy.com/wp-content/uploads/2015/05/street-style-stripes-dress-@wachabuy.jpg'
     //  }
      
    	// $http.post('https://api.cloudsightapi.com/image_requests', args)
    	// 	.success(function(data){
    	// 		console.log("sucess!");
    	// 		console.log(data);
     //      $scope.value(data.token)
    	// 	})
    	// 	.error(function(err){
    	// 		console.log("fail");
    	// 		console.log(err);
    	// 	})



   }

   $scope.value = function(token){
    console.log(token);
      $http.get('https://api.cloudsightapi.com/image_responses/' + token)
        .success(function(data){
          
          if(data.status !== 'completed'){$scope.value(token)}
            else{
              console.log(data)
            }
        })
        .error(function(err){
          console.log(err);
        })
   }


   $scope.creds = {
      
    }
 
  $scope.upload = function(file) {
    console.log(file)
    // Configure The S3 Object 
    AWS.config.update({ accessKeyId: $scope.creds.access_key, secretAccessKey: $scope.creds.secret_key });
    AWS.config.region = 'us-east-1';
    var bucket = new AWS.S3({ params: { Bucket: $scope.creds.bucket } });
   
    if(file) {
      var params = { Key: 'file', ContentType: 'image', Body: file, ServerSideEncryption: 'AES256' };
   
      bucket.putObject(params, function(err, data) {
        if(err) {
          // There Was An Error With Your S3 Config
          alert(err.message);
          return false;
        }
        else {
          // Success!
          console.log(data);
          $scope.s3_path = $scope.creds.bucket + '/file';
          console.log($scope.s3_path);
          alert('Upload Done');
        }
      })
      .on('httpUploadProgress',function(progress) {
            // Log Progress Information
            console.log(Math.round(progress.loaded / progress.total * 100) + '% done');
          });
    }
    else {
      // No File Selected
      alert('No File Selected');
    }
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
  
    
  picture.width = "250";
  picture.height = "175";

 document.getElementById('timer').style.display = 'inline' ;


// NEED TO SET UP FOR LOOP //

 var timerDots = ['six', 'five','four','three', 'two', 'one'];


   setTimeout(function(){


    document.getElementById('six').style.display = 'none';
    

   } ,100); 


   setTimeout(function(){


    document.getElementById('five').style.display = 'none';
    

   } ,200); 


   setTimeout(function(){


    document.getElementById('four').style.display = 'none';
    

   } ,300); 

setTimeout(function(){


    document.getElementById('three').style.display = 'none';
    

   } ,400); 


setTimeout(function(){


    document.getElementById('two').style.display = 'none';
    

   } ,500); 

// END OF SECTION THAT NEEDS TO BE SET UP IN FOR LOOP //


setTimeout(function(){


    document.getElementById('one').style.display = 'none';
    

   } ,600); 

  setTimeout(function(){
  
  context.drawImage(vidContainer, 0, 0, picture.width, picture.height);
  var dataURL = picture.toDataURL("image/png", 0.0001);
  document.getElementById('canvasImg').src = dataURL;
  document.getElementById('canvasImg').style.display = 'block';
  document.getElementById('capture').style.display = 'block';
   document.getElementById('snapPicture').style.display = 'none';
    document.getElementById('twoButtons').style.display = 'inline';
    $scope.dataUrl = dataURL;
    console.log($scope.dataUrl);


}, 700);


}

  });

 });
