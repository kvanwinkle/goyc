'use strict';

angular.module('greenOutYourClosetApp')
  .controller('MainCtrl', function ($scope, $http, imgur) {

    $scope.findSomething = function(description){

//**********************************
//**********************************

// Assigning Variables

//**********************************
//**********************************

    var description = "women's white scoop neck t shirt";

    var descripArray = description.split(" ");

    var tempGender;
    var tempColor;
    var tempType;
    var tempDescription1;
    var tempDescription2;

    

    console.log(descripArray);

    

    function assignVar () {

      var possibleColors = ["black", "red", "green", "blue", "yellow", "white", "gray", "grey", "brown"];

      var possibleTypes = ["t-shirt", "shirt", "dress", "shorts", "pants", "jeans", "romper", "hoodie", "tee", "suit", "jacket", "cardigan", "blouse", "sweater"];

      var possibleDescriptions = ["sleeveless", "longsleeve", "striped", "v-neck"];





      for (var i = 0; i < descripArray.length; i++) {


        if( descripArray[i] == "women's" || descripArray[i] == "men's") {

          tempGender = descripArray[i];
        }


        for (var j = 0; j < possibleColors.length; j++) {
           
          if(descripArray[i] == possibleColors[j]) {
            tempColor = descripArray[i];
          }
        };

        // Main type assignment //
        
        for (var k = 0; k < possibleTypes.length; k++) {
           
          if(descripArray[i] == possibleTypes[k]) {
            tempType = descripArray[i];
          }

        };

        // Exceptions //

        if (descripArray[i-1] == "t" && descripArray[i] == "shirt") {
             tempType = "t-shirt";
        }



        if (descripArray[i] == "top") {
            tempType = descripArray[i-1] + " " + descripArray[i];
          }


        // Main description assignments //

        for (var l = 0; l < possibleDescriptions.length; l++) {
           
          if(descripArray[i] == possibleDescriptions[l]) {

            
             tempDescription2[i] = descripArray[i];
          }


        // Exceptions //   


        if (descripArray[i] == "sleeved"){

          tempDescription2 = descripArray[i-1] + " " + descripArray[i];
        }

         if (descripArray[i] == "neck") {
          tempDescription1 = descripArray[i-1] + " " + descripArray[i];
        }






        };



      };

    };

    assignVar();


    console.log(tempGender);
    console.log (tempColor);
    console.log (tempType);
    console.log(tempDescription1);
    console.log(tempDescription2);
    

//**********************************
//**********************************

// Item Database

//**********************************
//**********************************

    var database = [


    // Women's Shirts//

        {name:"The Slouchy Cotton Slub V",
          retailer: "Everlane",
          retailerUrl: "https://www.everlane.com",
          gender: "women's",
          type: ["t-shirt", "shirt"],
          color: "white",
          description: "v neck",
          image: "https://everlane.imgix.net/i/fd064c55_810f.jpg",
          url: "https://www.everlane.com/collections/womens-tees/products/womens-slouchy-cotton-slub-v-white",
          details: "A casual and lightweight oversized V-neck tee in textured cotton with an elegant drape",
          ecoCriteria : "Supply Chain Transparency: Everlane is an eccommerce retailer that sources the highest quality factories and displays all information about them on their website. Additionally they provide cost breakdowns of each item they produce."
      },


          {name:"The Slouchy Cotton Slub V",
          retailer: "Everlane",
          retailerUrl: "https://www.everlane.com",
          gender: "women's",
          type: ["t-shirt", "shirt"],
          color: "grey",
          description: "v neck",
          image: "https://everlane.imgix.net/i/f79509b1_fa17.jpg",
          url: "https://www.everlane.com/collections/womens-tees/products/womens-slouchy-cotton-slub-v-light-grey",
          details: "A casual and lightweight oversized V-neck tee in textured cotton with an elegant drape",
          ecoCriteria : "Supply Chain Transparency: Everlane is an eccommerce retailer that sources the highest quality factories and displays all information about them on their website. Additionally they provide cost breakdowns of each item they produce."
      },


        {name:"The Silk Round Collar",
          retailer: "Everlane",
          retailerUrl: "https://www.everlane.com",
          gender: "women's",
          type: ["blouse" ,"shirt"],
          color: "blue",
          description: "button down",
          image: "https://everlane-2.imgix.net/i/c34545ef_5708.jpg?w=442&h=442&q=65&dpr=1",
          details: "100% Silk—polished and simple with a round collar",
          ecoCriteria : "Supply Chain Transparency: Everlane is an eccommerce retailer that sources the highest quality factories and displays all information about them on their website. Additionally they provide cost breakdowns of each item they produce."
      },



      {   name:"Organic cotton LITNB tee",
          retailer: "Under the Canopy",
          retailerUrl: "http://www.underthecanopy.com",
          gender: "women's",
          type: ["t-shirt","shirt"],
          color: "white",
          description: "scoop neck",
          image: "http://shopethica.vaesite.net/__data/ethica_utc_the_new_black_tee_a.jpg",
          url: "http://www.shopethica.com/clothing/under-the-canopy-organic-cotton-love-is-the-new-black-tee",
          details: "Made from slub-cotton jersey, Under the Canopy’s Love Is The New Black tee has a textured, semi-sheer finish that gives it a slightly vintage look.",
          ecoCriteria : "Under the Canopy collections are crafted with love and respect for the planet using organic and sustainable materials — such as certified organic cotton, ECOlyptus™ and RPET — with ethical manufacturing methods every step of the way. Our fashion and textiles are free of GMOs (genetically modified organisms) as well as toxic pesticides, herbicides, chemical fertilizers, formaldehyde and other harmful chemicals. Transparently tracked from farm to finished fashion, Under the Canopy products are certified fair trade, GOTS, and organic."
      },

      {   name:"Organic cotton One Love tee",
          retailer: "Under the Canopy",
          retailerUrl: "http://www.underthecanopy.com/",
          gender: "women's",
          type: ["t-shirt","shirt"],
          color: "pink",
          description: "scoop neck",
          image: "http://shopethica.vaesite.net/__data/ethica_utc_pink-one_love_tee_a.jpg",
          url: "http://www.shopethica.com/clothing/under-the-canopy-organic-cotton-one-love-tee",
          details: "Yes, Under the Canopy’s organic slub-cotton tees feel as soft as they look–and they become even softer with wear. With the words “One Love” printed across the front, this pale pink style projects positivity.",
          ecoCriteria : "Under the Canopy collections are crafted with love and respect for the planet using organic and sustainable materials — such as certified organic cotton, ECOlyptus™ and RPET — with ethical manufacturing methods every step of the way. Our fashion and textiles are free of GMOs (genetically modified organisms) as well as toxic pesticides, herbicides, chemical fertilizers, formaldehyde and other harmful chemicals. Transparently tracked from farm to finished fashion, Under the Canopy products are certified fair trade, GOTS, and organic."
      },




    // Women's Dresses // 

      {name:"Greenland Dress by Reformation",
       gender: "women's",
       type: "dress",
       color: "black",
       description: "long sleeved",
       url: "https://www.thereformation.com/products/greenland-dress-black"
      },


      {name:"Greenland Dress by Reformation",
       gender: "women's",
       type: "dress",
       color: "grey",
       description: "long sleeved , oversized, mini",
       url: "https://www.thereformation.com/products/greenland-dress-grey"
      },


      // Women's Sweaters and Cardigans

       {   name:"Organic cotton Cloud sweatshirt",
          retailer: "Valentine Gauthier",
          retailerUrl: "http://www.valentinegauthier.com/?lang=en",
          gender: "women's",
          type: ["sweatshirt","sweater"],
          color: ["pink", "red", "blue"],
          description: ["scoop neck", "long sleeved"],
          image: "http://shopethica.vaesite.net/__data/organic-cotton-cloud-sweatshirt-valentine-gauthier.1.jpg",
          url: "http://www.shopethica.com/clothing/valentine-gauthier-organic-cotton-cloud-sweatshirt",
          details: "Sweatshirts are officially having a moment. The print on this soft, organic cotton style from Valentine Gauthier features hummingbirds and flowers, but a moody color scheme keeps it stylish, rather than overly sweet.",
          ecoCriteria : "Organic Natural Fibers, Women Owned Factory, Fabrics sourced in the same country as production"
      },






      // Men's Shirts //



      


      

      ];



//**********************************
//**********************************

//Search Function

//**********************************
//**********************************




      var goycDB = TAFFY(database);



      var completeMatch = goycDB({gender: tempGender},{type:{like:tempType}},{color:{like:tempColor}},[{description:{like:tempDescription2}}, {description:{like:tempDescription1}}]).get();

      
        if (completeMatch.length !== 0) {

          console.log(completeMatch);
          console.log(completeMatch[Math.floor(Math.random()*completeMatch.length)]);
          $scope.match = completeMatch[Math.floor(Math.random()*completeMatch.length)];
        }

        else {

          console.log("searching with description and no color!");

          var descriptionNoColor = goycDB({gender: tempGender},{type:{like:tempType}},[{description:{like:tempDescription2}}, {description:{like:tempDescription1}}]).get();

          if (descriptionNoColor.length !== 0) {

            console.log(descriptionNoColor);
            console.log(descriptionNoColor[Math.floor(Math.random()*descriptionNoColor.length)]);
            $scope.match = descriptionNoColor[Math.floor(Math.random()*descriptionNoColor.length)];
          }

          else {

            console.log("searching with color and no description!");
            var colorNoDescription = goycDB({gender: tempGender},{type:{like:tempType}},{color:{like:tempColor}}).get();

            if ( colorNoDescription.length !== 0) {
              console.log(colorNoDescription);
              console.log(colorNoDescription[Math.floor(Math.random()*colorNoDescription.length)]);
              $scope.match = colorNoDescription[Math.floor(Math.random()*colorNoDescription.length)];

            }


            else {

              console.log ("searching only for type!");
              var onlyType = goycDB({gender: tempGender},{type:{like:tempType}}).get();


                if (onlyType.length !== 0){

                  console.log(onlyType);
                  console.log(onlyType[Math.floor(Math.random()*onlyType.length)])
                  $scope.match = onlyType[Math.floor(Math.random()*onlyType.length)];

                }

                else {
                  console.log("finding random object of this gender");

                  var randomItem = goycDB({gender: tempGender}).get();

                    if (randomItem.length !== 0){

                  console.log(randomItem);
                  console.log(randomItem[Math.floor(Math.random()*randomItem.length)])
                  $scope.match = randomItem[Math.floor(Math.random()*randomItem.length)];


                }

                else {

                  console.log("we couldn't find a match :(");
                }



            }

          }

        }

      } 


    };


    $scope.displayMatch = function(match){
        
        document.getElementById('loading').style.display = 'none';
        document.getElementById('match').style.display = 'block';
        console.log(match);
        console.log(match.name);
        $scope.matchName = match.name;
        $scope.matchDescription = match.details;
        $scope.image = match.image;
        $scope.matchLink = match.url;
        $scope.matchRetailer = match.retailer;
        $scope.matchRetailerUrl = match.retailerUrl;
        $scope.matchEco = match.ecoCriteria;



    };





    $scope.dataURLToBlob =  function(dataURL) {
    var BASE64_MARKER = ';base64,';
    if (dataURL.indexOf(BASE64_MARKER) == -1) {
      var parts = dataURL.split(',');
      var contentType = parts[0].split(':')[1];
      var raw = decodeURIComponent(parts[1]);

      return new Blob([raw], {type: contentType});
    }

    var parts = dataURL.split(BASE64_MARKER);
    var contentType = parts[0].split(':')[1];
    var raw = window.atob(parts[1]);
    var rawLength = raw.length;

    var uInt8Array = new Uint8Array(rawLength);

    for (var i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], {type: contentType});
  }

  $http.defaults.headers.common.Authorization = 'CloudSight 51RAGqz9_ED1ExMzVG4I7Q'

   $scope.getApi=function(remoteUrl){


      console.log($scope.dataUrl);
      // $scope.upload($scope.dataUrl);


      var args = {
       
          locale: 'en-US',
          remote_image_url: remoteUrl
      }

      
      $http.post('https://api.cloudsightapi.com/image_requests', args)
        .success(function(data){
          console.log("sucess!");
          console.log(data);
          $scope.value(data.token)
        })
        .error(function(err){
          console.log("fail");
          console.log(err);
        })



   }

   $scope.value = function(token){
    console.log(token);
      $http.get('https://api.cloudsightapi.com/image_responses/' + token)
        .success(function(data){
          
          
          if(data.status !== 'completed'){
            
           setTimeout(function(){ $scope.value(token);}, 1000);


          }
            
            else{
              console.log(data.name)
              alert(data.name);
              $scope.name = data.name;
              $scope.findSomething($scope.name);
              $scope.displayMatch($scope.match);

             

            
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
  
    
  picture.width = "600";
  picture.height = "400";

 document.getElementById('timer').style.display = 'inline' ;


// NEED TO SET UP FOR LOOP //

 var timerDots = ['six', 'five','four','three', 'two', 'one'];


   setTimeout(function(){


    document.getElementById('six').style.display = 'none';
    

   } ,500); 


   setTimeout(function(){


    document.getElementById('five').style.display = 'none';
    

   } ,1000); 


   setTimeout(function(){


    document.getElementById('four').style.display = 'none';
    

   } ,1500); 

setTimeout(function(){


    document.getElementById('three').style.display = 'none';
    

   } ,2000); 


setTimeout(function(){


    document.getElementById('two').style.display = 'none';
    

   } ,2500); 

// END OF SECTION THAT NEEDS TO BE SET UP IN FOR LOOP //


setTimeout(function(){


    document.getElementById('one').style.display = 'none';
    

   } ,3000); 

  setTimeout(function(){
  
  context.drawImage(vidContainer, 0, 0, picture.width, picture.height);
  console.log(picture)
  var dataURL = picture.toDataURL("image/jpg");
  var blob = $scope.dataURLToBlob(dataURL);
  console.log(blob)
  document.getElementById('canvasImg').src = dataURL;
  document.getElementById('canvasImg').style.display = 'block';
  document.getElementById('capture').style.display = 'block';
   document.getElementById('snapPicture').style.display = 'none';
    // document.getElementById('twoButtons').style.display = 'inline';

    document.getElementById('loading').style.display = 'block';
    document.getElementById('instructions').style.display = "none";
   
    imgur.setAPIKey('Client-ID 40dbfe0cfea73a7');
    // var image = dataURL.dataTransfer.files[0];

    imgur.upload(blob).then(function then(model) {
      console.log('Your adorable cat be here: ' + model.link);
      $scope.getApi(model.link);


    });


}, 3500);


}

  });

 });
