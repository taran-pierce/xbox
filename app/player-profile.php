<?php
  # Page Vars
  $active_link = '/player-profile';

  # grab some intial data from API call
  # so we can show something while making the other requests 
  require( 'helpers/get-user-gamer-card.php' );

  $player_data = json_decode( $gamer_card );

  include 'templates/top.php';
?>
<script>
  document.addEventListener( "DOMContentLoaded", function(event) {
    getFriendData();
    getGameClipData();
    getPresenceData();
  });
</script>
<section>
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <?php include( 'templates/_gamer-card.php' ) ?>
      </div>
      <div class="col-sm-6">
        <div class="player-details-container">
          <h3>Player Details</h3>
          <div class="content">
            <div id="player-detail-container">
              <div id="game-clip-table" class="panel panel-default">
                <div class="panel-heading">
                  Recorded Game Clips
                  <i class="fa fa-check pull-right" aria-hidden="true"></i>
                  <i class="fa fa-times pull-right" aria-hidden="true"></i>
                </div>
                <div class="panel-body">
                  <p>Everyone's pride and joy. Take a dig through the gamers recorded game clips.</p>
                  <p>There are surely some cool clips recorded that you can watch.</p>
                </div>
                <div class="clip-container"></div>
              </div>
              <div id="presence-table" class="panel panel-default">
                <div class="panel-heading">
                  Player Presence
                  <i class="fa fa-check pull-right" aria-hidden="true"></i>
                  <i class="fa fa-times pull-right" aria-hidden="true"></i>
                </div>
                <div class="panel-body">
                  <p>What kind of player presence do you bring to the table?</p>
                  <p>Are they online right now? When were they online last? What system did they play on last? Jeez, how much more did you want to know?!</p>
                </div>
                <table class="table">
                  <thead>
                    <tr>
                      <th>Status</th>
                      <th>Device</th>
                      <th>Last Seen</th>
                      <th>Title</th>
                    </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table>
              </div>
              <div id="friend-list-table" class="panel panel-default">
                <div class="panel-heading">
                  Friend List
                  <i class="fa fa-check pull-right" aria-hidden="true"></i>
                  <i class="fa fa-times pull-right" aria-hidden="true"></i>
                </div>
                <div class="panel-body">
                  <p>What kind of company does this gamer keep? Well, if you wanted to know then you are able to find out.</p>
                  <p>Take a look through their friend list and if you want you can go find out information about their friends if they are more interesting.</p>
                </div>
                <table class="table">
                  <thead>
                    <tr>
                      <th>Gamer Tag</th>
                      <th>Gamerscore</th>
                      <th>Gamer Pic</th>
                    </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<?php include 'templates/bottom.php' ?>
