<?php
  # pull in conf file
  require( "../../conf/config.php" );

  # get gamer tag value
  $xuid = $_GET["id"];

  # End point information 
  $base_url = "https://xboxapi.com/v2";

  # profile endpoint
  $get_gamer_friends = "$base_url/$xuid/friends";


  # Get Gamer Profile
  $cGamerFriends = curl_init();

  # setting options
  curl_setopt($cGamerFriends, CURLOPT_URL, $get_gamer_friends);
  curl_setopt($cGamerFriends, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($cGamerFriends, CURLOPT_TIMEOUT, 5);
  curl_setopt($cGamerFriends, CURLOPT_CONNECTTIMEOUT, 5);
  curl_setopt($cGamerFriends, CURLOPT_HTTPHEADER, $headers);

  # store response
  $gamer_friends = curl_exec($cGamerFriends);

  # close connection
  curl_close($cGamerFriends);

  echo $gamer_friends;
?>
