document.addEventListener("DOMContentLoaded", function(event) {

  //console.log('we got DOM ready!');
});

var gamerData = [];

var viewModel = {
  gamerTag: ko.observable( "" ),
  xuid: "",
  getGamerTag: function() {
    // This call has to be made first to get the XUID
    // XUID is used in everything going forward
  
    let apiCall = new Promise( (resolve, reject) => {
      
      var xmlhttp = new XMLHttpRequest();
  
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
          if (xmlhttp.status === 200) {
            // 200 status does not mean there is good data
            // need to look through API codes for Xbox API to see different codes
            // eg code: 28 = Good call, but no user found
            
            var json = JSON.parse( xmlhttp.responseText );
          
            // save response to gamerData Array
            gamerData.push( {profile: json} );
          
            viewModel.xuid = gamerData[0]["profile"].id;
            
            resolve( viewModel.renderProgressBlock( "api-profile" ) );
          } else if (xmlhttp.status === 400) {
            alert('There was an error 400');
            reject("Error!");
          } else {
            alert('something else other than 200 was returned');
            reject("Error!");
          }
        }
      };
      
      xmlhttp.open( "GET", "/helpers/get-user-profile.php?gamer_tag=" + this.gamerTag, true );
      xmlhttp.send();
    })
    
    apiCall.then( function() {
      console.log('getGamerTag promise returned!');
      viewModel.makeApiCalls();
    });
  },
  getFriendList: function() {
    let apiCall = new Promise( (resolve, reject) => {
      var xmlhttp = new XMLHttpRequest();
    
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
          if (xmlhttp.status === 200) {
            // 200 status does not mean there is good data
            // need to look through API codes for Xbox API to see different codes
            // eg code: 28 = Good call, but no user found
            
            var json = JSON.parse( xmlhttp.responseText );
          
            // save response to gamerData Array
            gamerData.push( {friends: json} );
            
            resolve( viewModel.renderProgressBlock( "api-friends" ) );
          }
          else if (xmlhttp.status === 400) {
            alert('There was an error 400');
            reject("Error!");
          }
          else {
            alert('something else other than 200 was returned');
            reject("Error!");
  
          }
        }
      };
    
      xmlhttp.open( "GET", "/helpers/get-user-friends.php?id=" + this.xuid, true );
      xmlhttp.send();
    })
    
    apiCall.then( function() {
      console.log("getFriendList promise returned!");
    });
  },
  getGamerClips: function() {
    
    let apiCall = new Promise( (resolve, reject) => {
      var xmlhttp = new XMLHttpRequest();
  
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
          if (xmlhttp.status === 200) {
            // 200 status does not mean there is good data
            // need to look through API codes for Xbox API to see different codes
            // eg code: 28 = Good call, but no user found
            
            var json = JSON.parse( xmlhttp.responseText );
          
            // save response to gamerData Array
            gamerData.push( {clips: json} );
  
            resolve( viewModel.renderProgressBlock( "api-game-clips" ) );
          }
          else if (xmlhttp.status === 400) {
            alert('There was an error 400');
            reject("Error!");
          }
          else {
            alert('something else other than 200 was returned');
            reject("Error!");
          }
        }
      };
    
      xmlhttp.open( "GET", "/helpers/get-user-clips.php?id=" + this.xuid, true );
      xmlhttp.send();
    })
    
    apiCall.then( function() {
      console.log("promise returned for getGamerClips");
    });
  },
  gamerData: ko.observable( gamerData ),
  renderProgressBlock: function( id ) {
    var element = document.getElementById( id );
    console.log( element );
    element.classList.add( "active" );
  },
  makeApiCalls: function() {
    this.getFriendList();
    this.getGamerClips();
  },
};

ko.applyBindings( viewModel );
