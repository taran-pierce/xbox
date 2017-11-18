<?php
  # pull in conf file
  require( "../../conf/config.php" );

  # get gamer tag value
  $xuid = $_GET["id"];

  # End point information 
  $base_url = "https://xboxapi.com/v2";

  # profile endpoint
  $get_gamer_presence = "$base_url/$xuid/presence";

  # Get Gamer Profile
  $cGamerPresence = curl_init();

  # setting options
  curl_setopt($cGamerPresence, CURLOPT_URL, $get_gamer_presence);
  curl_setopt($cGamerPresence, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($cGamerPresence, CURLOPT_TIMEOUT, 5);
  curl_setopt($cGamerPresence, CURLOPT_CONNECTTIMEOUT, 5);
  curl_setopt($cGamerPresence, CURLOPT_HTTPHEADER, $headers);

  # store response
  $gamer_presence = curl_exec($cGamerPresence);

  # close connection
  curl_close($cGamerPresence);

  echo $gamer_presence;
?>
