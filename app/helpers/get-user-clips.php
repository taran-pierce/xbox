<?php

  # pull in conf file
  require( "../../conf/config.php" );

  # get gamer tag value
  $xuid = $_GET["id"];

  # End point information
  $base_url = "https://xboxapi.com/v2";

  # profile endpoint
  $get_gamer_game_clips = "$base_url/$xuid/game-clips";

  # Get Gamer Profile
  $cGamerGameClips = curl_init();

  # setting options
  curl_setopt($cGamerGameClips, CURLOPT_URL, $get_gamer_game_clips);
  curl_setopt($cGamerGameClips, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($cGamerGameClips, CURLOPT_TIMEOUT, 5);
  curl_setopt($cGamerGameClips, CURLOPT_CONNECTTIMEOUT, 5);
  curl_setopt($cGamerGameClips, CURLOPT_HTTPHEADER, $headers);

  # store response
  $gamer_game_clips = curl_exec($cGamerGameClips);

  # close connection
  curl_close($cGamerGameClips);
  echo $gamer_game_clips;
?>