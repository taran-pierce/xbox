document.addEventListener("DOMContentLoaded", function(event) {

  console.log('we got DOM ready!');
});

var gamerData = [];

var viewModel = {
  gamerTag: "",
  xuid: "",
  getGamerTag: function() {
    console.log( 'Make an API call with this gamerTag: ' + this.gamerTag );
    
    // TODO put this some where it is more DRY
    // set up AJAX call
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
        if (xmlhttp.status == 200) {
          // 200 status does not mean there is good data
          // need to look through API codes for Xbox API to see different codes
          // eg code: 28 = Good call, but no user found
          
          console.log('200: ', xmlhttp.responseText );
          
          var json = JSON.parse( xmlhttp.responseText );
          
          // save response to gamerData Array
          gamerData.push( {profile: json} );
  
          viewModel.xuid = gamerData[0]["profile"].id;
        }
        else if (xmlhttp.status == 400) {
          alert('There was an error 400');
        }
        else {
          alert('something else other than 200 was returned');
        }
      }
    };
    
    xmlhttp.open( "GET", "/helpers/get-user-profile.php?gamer_tag=" + this.gamerTag, true );
    xmlhttp.send();
  },
  getFriendList: function() {
    var xmlhttp = new XMLHttpRequest();
  
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
        if (xmlhttp.status == 200) {
          // 200 status does not mean there is good data
          // need to look through API codes for Xbox API to see different codes
          // eg code: 28 = Good call, but no user found
        
          console.log('200: ', xmlhttp.responseText );
        
          var json = JSON.parse( xmlhttp.responseText );
        
          // save response to gamerData Array
          gamerData.push( {friends: json} );
        }
        else if (xmlhttp.status == 400) {
          alert('There was an error 400');
        }
        else {
          alert('something else other than 200 was returned');
        }
      }
    };
  
    xmlhttp.open( "GET", "/helpers/get-user-friends.php?id=" + this.xuid, true );
    xmlhttp.send();
  },
  getGamerClips: function() {
    var xmlhttp = new XMLHttpRequest();
  
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
        if (xmlhttp.status == 200) {
          // 200 status does not mean there is good data
          // need to look through API codes for Xbox API to see different codes
          // eg code: 28 = Good call, but no user found
        
          console.log('200: ', xmlhttp.responseText );
        
          var json = JSON.parse( xmlhttp.responseText );
        
          // save response to gamerData Array
          gamerData.push( {clips: json} );
        }
        else if (xmlhttp.status == 400) {
          alert('There was an error 400');
        }
        else {
          alert('something else other than 200 was returned');
        }
      }
    };
  
    xmlhttp.open( "GET", "/helpers/get-user-clips.php?id=" + this.xuid, true );
    xmlhttp.send();
  },
  gamerData: gamerData,
};

ko.applyBindings( viewModel );
