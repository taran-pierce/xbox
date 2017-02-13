$(document).ready(function() {
  D.xbox.initialize();
});

var D = D || {};

D.xbox = {
  initialize: function() {
    this.formSubmit();
  },
  formSubmit: function() {
    var $form = $('#form-user-name'),
		$submitButton = $form.find('button');

    $submitButton.on('click', function(e) {
      e.preventDefault();

      // clear form
      $('#xbox-user-content').empty();

      // create data object
      var data = data || {};

      // grab userName from form
      data.userName = D.xbox.getUserName($form);

      // set apiURL
      data.apiURL = 'https://xboxapi.com/v2/';

      // set X-AUTH token
      //data.xAuth = '';

      // TODO maybe this should just be an init which then triggers everything
      // set loading screen for User which triggers API call
      D.xbox.setLoadingScreen(data);
	})
  },
  setLoadingScreen: function(data) {
    var $contentSection = $('#xbox-user-content'),
        loadingIcon = '<i class="fa fa-spinner fa-spin" aria-hidden="true"></i>';

    // add the loading class and remove the empty class
    $contentSection.addClass('loading').removeClass('empty');

    // insert loading icon
    $contentSection.append(loadingIcon);

    // get XUID
    D.xbox.getXUID(data);
  },
  getUserName: function($form) {
    // grab user name from form
    var userName = $form.find('input[name="gamer_tag"]').val();

	return userName;
  },
  getMyXUID: function(data) {
    $.ajax({
        url: "https://xboxapi.com/v2/accountxuid",
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        processData: false,
        headers: {
          'X-AUTH' : data.xAuth 
        },
        success: function (myXbox) {
          data.myXbox = myXbox;
          D.xbox.callAPI(data);
        },
        error: function(){
          alert("Cannot get data from get XUID");
        }
    });
  },
  getXUID: function(data) {
    $.ajax({
        url: "https://xboxapi.com/v2/xuid/" + data.userName,
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        processData: false,
        headers: {
          'X-AUTH' : data.xAuth 
        },
        success: function (xboxPlayerData) {
          // sets the players xuid number in the data object 
          data.xboxPlayerData = xboxPlayerData;

          // triggerx the API call
          D.xbox.callAPI(data);
        },
        error: function(){
          alert("Could not find player.");
        }
    });
  },
  callAPI: function(data) {
    $.ajax({
        url: data.apiURL + data.xboxPlayerData.xuid +"/profile",
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        processData: false,
        headers: {
          'X-AUTH' : data.xAuth 
        },
        success: function (playerData) {
          var $contentSection = $('#xbox-user-content');

          $contentSection.removeClass('loading');
          $contentSection.find('.fa-spinner').remove();

          data.playerData = playerData;

          D.xbox.render(data);
        },
        error: function(){
          alert("Cannot get data");
        }
    });
  },
  getUserGameClips: function(data) {
    $.ajax({
        url: data.apiURL + data.xboxPlayerData.xuid + "/game-clips",
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        processData: false,
        headers: {
          'X-AUTH' : data.xAuth 
        },
        success: function (clipData) {
          data.clipData = clipData;
          //console.log(data);
        },
        error: function(){
          alert("Cannot get game clip data");
        }
    });
  },
  getUserGamerCard: function(data) {
    $.ajax({
        url: data.apiURL + data.xboxPlayerData.xuid + "/gamercard",
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        processData: false,
        headers: {
          'X-AUTH' : data.xAuth 
        },
        success: function (gamerCard) {
          data.gamerCard = gamerCard;
          console.log(data);
        },
        error: function(){
          alert("Cannot get game clip data");
        }
    });
  },
  render: function(data) {
    var apiData = '<pre></pre>',
        $contentSection = $('#xbox-user-content'),
		$playerCardTemplate = $($('#player-card-template').html());

    // set player name
    $playerCardTemplate.find('.name').text(data.playerData.GameDisplayName);

    // set gamerscore
    $playerCardTemplate.find('.gamer-score').text('Gamerscore: ' + data.playerData.Gamerscore);

	// build gamer pic
    var gamerPic = '<img class="img-responsive" src="'
                   + data.playerData.GameDisplayPicRaw +
                   '" title="'
                   + data.playerData.GameDisplayName
                   + '" />';

    // add gamer pic to template
    $playerCardTemplate.find('.gamer-pic').append(gamerPic);

    // add account teir
    $playerCardTemplate.find('.account-tier').text('Account Teir: ' + data.playerData.AccountTier);

    // add account teir
    $playerCardTemplate.find('.player-rep').text('Player Reputation: ' + data.playerData.XboxOneRep);

    // add template to content section
    $contentSection.append($playerCardTemplate);

    //D.xbox.getUserGameClips(data);
    D.xbox.getUserGamerCard(data);
  }
};
