document.addEventListener("DOMContentLoaded", function(event) {

  // set up any tooltips
  initTooltips();

  // set up form
  getUserProfile();
});

// TODO rename
// this function really sets up the Gamer Profile Form
function getUserProfile() {
  var $form = $('#user-profile');
  var $button = $form.find('button');
  var url = '/helpers/get-user-info.php?';
  var $view = $('#user-card');
  var options = {};
  var loadingIcon = '<i class="fa fa-spinner fa-spin" aria-hidden="true"></i>';

  $button.on('click', function(e) {
    e.preventDefault();

    // toggle classes for UI
    $view.removeClass('loaded');
    $view.addClass('loading');

    // add in loading icon while ajax call is being made
    $view.append(loadingIcon);

    // set up query information
    options.view = 'user-card';
    options.gamer_tag = $form.find('[name="gamer_tag"]').val();
    options.query = 'gamer_tag=' + options.gamer_tag;

    // ajax request
    ajaxRequest(url, options);
  });
}



// main ajax request
// collects data and stores in options
// passes options along to render function
function ajaxRequest(url, options) {
  // set up ajax call
  var xmlhttp = new XMLHttpRequest();

  // prepare the ajax call
  xmlhttp.onreadystatechange = function(data) {

    // if we get good results store the object
    if ( this.readyState == 4 && this.status == 200) {
      // check to see if we got an empty response
      if (!this.responseText) {
        console.log('AJAX: There was no response on ' + this.responseURL + '!');

        console.log('AJAX: Here are your options: ', options);

        return;
      }

      // create response object
      var obj = JSON.parse(this.responseText);

      // store to options object
      options.response = obj;
    }
  };

  // build url with query
  var endpoint = url;

  // add query parameter
  endpoint = url + options.query;

  // open and send request
  xmlhttp.open("GET", endpoint, true);
  xmlhttp.send();

  // after ajax is returned trigger renderView with that data
  xmlhttp.onloadend = function(pe) {
    renderView(options);
  }
}

// get user friend data
function getFriendData() {
  var id;

  // grab id from URI
  id = getParams('id');

  // set up route for call and options object
  var url = '/helpers/get-user-friends.php?';
  var options = {};

  // set data for API call
  options.view = 'friend-list-table';
  options.query = 'id=' + id;

  // call ajax function
  ajaxRequest(url, options);
}

// get user presence data
function getPresenceData() {
  var id;

  // grab id from URI
  id = getParams('id');

  // set up route for call and options object
  var url = '/helpers/get-user-presence.php?';
  var options = {};

  // set data for API call
  options.view = 'presence-table';
  options.query = 'id=' + id;

  // call ajax function
  ajaxRequest(url, options);
}

// get user game clip data
function getGameClipData() {
  var id;

  // grab id from URI
  id = getParams('id');

  // set up route for call and options object
  var url = '/helpers/get-user-game-clips.php?';
  var options = {};

  // set data for API call
  options.view = 'game-clip-table';
  options.query = 'id=' + id;

  // call ajax function
  ajaxRequest(url, options);
}



// RENDER FUNCTIONS
// decide which render function to run
// options contains a view for routing 
function renderView(options) {
  var $view = $('#' + options.view);

  // TODO this is only needed for user-card
  // fix that
  // clear the view in case something was already there
  if ( options.view == 'user-card' ) {
    $view.empty();
  }

  // remove loaded class
  $view.removeClass('loaded, loading');

  // determine which view to render
  if ( options.view == 'user-card' ) {
    renderGamerCard( $view, options );
  } else if ( options.view == 'game-clip-table') {
    renderGamerClips( $view, options ); 
  } else if ( options.view == 'presence-table' ) {
    renderPresenceData($view, options);
  } else if ( options.view == 'friend-list-table' ) {
    renderFriendData($view, options);
  }
}

// Render gamer card
function renderGamerCard($view, options) {
  var playerData = options.response;
  var content = '<div class="content"></div>';
  var button = '<a class="btn btn-primary btn-block" href="/player-profile.php?id=' + playerData.id + '">View Player Profile</a>';

  // setup tenure level
  var gamer_tenure_level = '<span class="badge pull-right">' + playerData.TenureLevel + '</span>';

  // create gamer tag title
  var gamer_tag_title = '<h4>' + playerData.GameDisplayName + gamer_tenure_level + '</h4>';

  // create gamer tag pic
  var gamer_tag_pic = '<img alt="' + playerData.GameDisplayName + '" src="' + playerData.GameDisplayPicRaw + '" class="img-responsive gamer-logo" />';

  // create gamer score
  var gamer_score = playerData.Gamerscore;

  // create reputation
  var gamer_reputation = '<h5 class="bg-success">' + playerData.XboxOneRep + ' with Gamerscore of <b>' + gamer_score + '</b></h5>';

  // add title and reputation to container
  $view.append(gamer_tag_title);
  $view.append(gamer_reputation);

  // add in content container
  $view.append(content);

  // make it a jQuery object
  var $viewContent = $view.find('.content');

  // add in gamer pic and button to more player info
  $viewContent.append(gamer_tag_pic);
  $viewContent.append(button);

  // view is ready to be seen now
  $view.addClass('loaded');
}

// render friend data
function renderFriendData($view, options) {
  // set data to response object
  var data = options.response;

  // grab the friend container
  var $friendListContainer = $('#friend-list-table');

  // grab the over all player container
  var $playerDetailsContainer = $('.player-details-container');

  // check to make sure the response was good first
  if (data.code == 8) {
    // it failed add danger classes
    $friendListContainer.addClass('failed panel-danger');

    // short delay then remove entirely
    setTimeout(function() {
      $friendListContainer.remove();
    }, 2000);
  } else {
    // success so add loaded classes
    $friendListContainer.addClass('loaded panel-success');

    // remove loading class and add loaded class to main container
    $playerDetailsContainer.removeClass('loading').addClass('loaded');
  }
}

// render presence data
function renderPresenceData($view, options) {
  // set data to response object
  var data = options.response;

  // grab presence container
  var $presenceContainer = $('#presence-table');

  // find the table in that container
  var $table = $view.find('table');

  if ( data.code == 8 ) {
    // it failed add danger classes
    $presenceContainer.addClass('failed panel-danger');

    // short delay then remove entirely
    setTimeout(function() {
      $presenceContainer.remove();
    }, 2000);
  } else {
    // success so add loaded classes
    $presenceContainer.addClass('loaded panel-success');

    // add a table row
    $table.find('tbody').html('<tr>');
    $table.find('thead').html('<tr>');

    // create data vars 
    var playerStatus = data.state;
    var playerDevice;
    var playerTitle;
    var playerTime;
    var $rowHeading = $table.find('thead tr');
    var $row = $table.find('tbody tr');

    // create headings
    var headingStatus = '<th>Status</th>';
    var headingDevice = '<th>Device</th>';
    var headingTitle = '<th>Title</th>';
    var headingTime = '<th>Time Log</th>';

    // TODO turn this into a loop
    // add headings
    $rowHeading.append(headingStatus);
    $rowHeading.append(headingDevice);
    $rowHeading.append(headingTitle);
    $rowHeading.append(headingTime);

    // check to see if they are online or offline
    // response data structure is different if offline
    if ( playerStatus == 'Online') {

      playerDevice = data.devices[0].type; 
     
      playerTitle = data.devices[0].titles[0].name;

      playerTime = data.devices[0].titles[0].lastModified;

    } else {

      playerDevice = data.lastSeen.deviceType; 

      playerTitle = data.lastSeen.titleName;

      playerTime = data.lastSeen.timestamp;
    }

    playerStatus = '<td>' + playerStatus + '</td>';
    playerDevice = '<td>' + playerDevice + '</td>';
    playerTitle = '<td>' + playerTitle + '</td>';
    playerTime = '<td>' + playerTime + '</td>';

    // TODO turn this into a loop
    // add data to table
    $row.append(playerStatus);
    $row.append(playerDevice);      
    $row.append(playerTitle);
    $row.append(playerTime);
  }
}

// render game clips
function renderGamerClips($view, options) {
  var data = options.response;

  var $gameContainer = $('#game-clip-table');

  if ( data.code == 8 ) {
    $gameContainer.addClass('failed panel-danger');
  } else {
    // success so add loaded classes
    $gameContainer.addClass('loaded panel-success');

    // make array of game count
    var gameCount = Object.keys(data); 

    // make game count text
    gameCount = '<h5>User has ' + gameCount.length + ' game clips</h5>';

    // add it to the panel-body
    $gameContainer.find('.panel-body').append(gameCount);

    // grab the over all player container
    var $playerDetailsContainer = $('.player-details-container');

    // remove loading class and add loaded class to main container
    $playerDetailsContainer.removeClass('loading').addClass('loaded');

    var counter = 0;
    var $clipContainer = $view.find('.clip-container');
    var clipArray = [];
    var clipsObject = {};
    var test = [];

    // build clip array
    $.each(data, function() {

      var clipData = this;
      console.log('each loop: ', clipData);

      var clipImage = '<img class="img-responsive" src="' + clipData.thumbnails[0].uri + '" alt="' + clipData.titleName + '" />';

      var clip = '<a href="' + clipData.gameClipUris[0].uri + '">' + clipImage + '</a>';

      var column = '<div class="col-sm-6">' + clip + '</div>';

      clipsObject.column_$counter  = column;


      clipArray.push( column );

      counter++

      if ( counter == 1 ) {
        test.push( clipsArray );

        clipArray.length = 0;
        
        counter = 0;
      }
    });
    console.log( clipsObject );
  }
}

// initiate BS tooltips
function initTooltips() {
  $('[data-toggle="tooltip"]').tooltip();
}

// grab specific query paramater
function getParams(name) {
  var urlParams = new URLSearchParams(window.location.search);

  var value = '';

  value = urlParams.get(name);

  return value;
}
