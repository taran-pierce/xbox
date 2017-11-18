<?php
  # pull in conf file
  require( "../conf/config.php" );

  # get gamer tag value
  $xuid = $_GET["id"];

  # End point information 
  $base_url = "https://xboxapi.com/v2";

  # profile endpoint
  $get_gamer_card = "$base_url/$xuid/gamercard";

  # Get Gamer Profile
  $cGamerCard = curl_init();

  # setting options
  curl_setopt($cGamerCard, CURLOPT_URL, $get_gamer_card);
  curl_setopt($cGamerCard, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($cGamerCard, CURLOPT_TIMEOUT, 5);
  curl_setopt($cGamerCard, CURLOPT_CONNECTTIMEOUT, 5);
  curl_setopt($cGamerCard, CURLOPT_HTTPHEADER, $headers);

  # store response
  $gamer_card = curl_exec($cGamerCard);

  # close connection
  curl_close($cGamerCard);
?>
