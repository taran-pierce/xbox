<?php
  # pull in conf file
  require( "../conf/config.php" );

  # get gamer tag value
  $xuid = $_GET["id"];

  # End point information 
  $base_url = "https://xboxapi.com/v2";

  # profile endpoint
  $get_gamer_activity = "$base_url/$xuid/activity";

  # Get Gamer Profile
  $cGamerActivity = curl_init();

  # setting options
  curl_setopt($cGamerActivity, CURLOPT_URL, $get_gamer_activity);
  curl_setopt($cGamerActivity, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($cGamerActivity, CURLOPT_TIMEOUT, 5);
  curl_setopt($cGamerActivity, CURLOPT_CONNECTTIMEOUT, 5);
  curl_setopt($cGamerActivity, CURLOPT_HTTPHEADER, $headers);

  # store response
  $gamer_activity = curl_exec($cGamerActivity);

  # close connection
  curl_close($cGamerActivity);
?>
