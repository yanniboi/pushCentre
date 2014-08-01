angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope, $http) {
  $scope.sendMessage = function () {
    /*var url = 'https://android.googleapis.com/gcm/send';
    var method = "POST";
    
    var postData = {"registration_ids":
                ["APA91bHSPVlAQekyD18ZJm-KtQLwpSOJQ5xPfu8EGTU4z_2gJm8-RVx6-il57Lyi1aekY1jD3m6Ok9zGoJT90GaoOpAL1Xo6MOOW_sR8xmXpUDfWqonWaSYEZ4Y4np9DwTAx6PEEOcSh4lGYFo6uW2D8g3moSxkEeExiuA2mCmNbgXlBfoPfazU"],
                "data":{
                  "title":"test",
                  "message":"test",
                  "subtitle":"This is a subtitle. subtitle",
                  "tickerText":"Ticker text here...Ticker text here...Ticker text here",
                  "vibrate":1,
                  "sound":1
                }
               };

    // You REALLY want async = true.
    // Otherwise, it'll block ALL execution waiting for server response.
    var async = true;

    var request = new XMLHttpRequest();

    // Define what to do with response.
    request.onload = function () {

      // You can get all kinds of information about the HTTP response.
      var status = request.status; // HTTP response status, e.g., 200 for "200 OK"
      if (status == 200) {
        //console.log(url);
        alert('win!');
      }
      else {
         alert('boo!');
      }
    }

    request.open(method, url, async);

    //request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Authorization", "key=AIzaSyDTS94gsQBxSm_7fbtCcDA1kChI2yeUlXk");
    //request.setRequestHeader("Cache-Control", "no-cache");
    
    // Actually sends the request to the server.
    request.send(postData);*/
    
    /*$.ajax({
    url: 'https://android.googleapis.com/gcm/send',
    type: 'post',
    data: {"registration_ids":
                ["APA91bHSPVlAQekyD18ZJm-KtQLwpSOJQ5xPfu8EGTU4z_2gJm8-RVx6-il57Lyi1aekY1jD3m6Ok9zGoJT90GaoOpAL1Xo6MOOW_sR8xmXpUDfWqonWaSYEZ4Y4np9DwTAx6PEEOcSh4lGYFo6uW2D8g3moSxkEeExiuA2mCmNbgXlBfoPfazU"],
                "data":{
                  "title":"test",
                  "message":"test",
                  "subtitle":"This is a subtitle. subtitle",
                  "tickerText":"Ticker text here...Ticker text here...Ticker text here",
                  "vibrate":1,
                  "sound":1
                }
               },
    headers: {
        Authorization: 'key=AIzaSyDTS94gsQBxSm_7fbtCcDA1kChI2yeUlXk'
    },
    dataType: 'json',
    success: function (data) {
        console.info(data);
    }
});*/

    var headers = {
      'Access-Control-Allow-Origin' : '*',
      'Content-Type': 'application/json',
      'Authorization': 'key=AIzaSyDTS94gsQBxSm_7fbtCcDA1kChI2yeUlXk',
      'Cache-Control': 'no-cache'
    };

    $http({
      method: "POST",
      headers: headers,
      url: 'https://android.googleapis.com/gcm/send?callback=0',
      data: {"registration_ids":
                ["APA91bHSPVlAQekyD18ZJm-KtQLwpSOJQ5xPfu8EGTU4z_2gJm8-RVx6-il57Lyi1aekY1jD3m6Ok9zGoJT90GaoOpAL1Xo6MOOW_sR8xmXpUDfWqonWaSYEZ4Y4np9DwTAx6PEEOcSh4lGYFo6uW2D8g3moSxkEeExiuA2mCmNbgXlBfoPfazU"],
                "data":{
                  "title":"test",
                  "message":"test",
                  "subtitle":"This is a subtitle. subtitle",
                  "tickerText":"Ticker text here...Ticker text here...Ticker text here",
                  "vibrate":1,
                  "sound":1
                }
               }
    }).success(function(result) {
      console.log("Auth.signin.success!")
      console.log(result);
    }).error(function(data, status, headers, config) {
      console.log("Auth.signin.error!")
      console.log(data);
      console.log(status);
      console.log(headers);
      console.log(config);
    });
    
  
  };
  
});
