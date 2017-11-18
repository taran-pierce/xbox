<?php
  require( 'helpers/get-user-gamer-card.php' );

  $player_data = json_decode( $gamer_card );
?>
<div class="gamer-card-container">
  <h2>
    <?php print_r( $player_data->gamertag ) ?> 
    <span class="badge pull-right" data-toggle="tooltip" data-placement="top" title="Tier"><?php print_r( $player_data->tier ) ?></span> 
    <span class="badge pull-right" data-toggle="tooltip" data-placement="top" title="Gamerscore"><?php print_r( $player_data->gamerscore ) ?></span>
  </h2>
  <div class="content">
    <div class="row">
      <div class="col-sm-6">
        <img class="img-responsive avatar" alt="<?php print_r( $player_data->gamertag) ?>" src="<?php print_r( $player_data->avatarBodyImagePath ) ?>" />
      </div>
      <div class="col-sm-6">
        <div class="player-details">
          <?php   
            # Check to see if they have a Name 
            if ( strlen( $player_data->name ) > 0 ) {
              print_r( '<h5>Name</h5>');
              print_r( "<p>$player_data->name</p>");
            }
          
            # Check to see if they have a Location 
            if ( strlen( $player_data->location ) > 0 ) {
              print_r( '<h5>Location</h5>');
              print_r( "<p>$player_data->location</p>");
            }
          
            # Check to see if they have a Bio 
            if ( strlen( $player_data->bio ) > 0 ) {
              print_r( '<h5>Bio</h5>');
              print_r( "<p>$player_data->bio</p>");
            }
          
            # Check to see if they have a Motto
            if ( strlen( $player_data->motto ) > 0 ) {
              print_r( '<h5>Motto</h5>');
              print_r( "<p>$player_data->motto</p>");
            }
          ?>
        </div>
      </div>
    </div>
  </div>
</div>
