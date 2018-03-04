<?php
  # pull in conf file
  require( "../../conf/config.php" );

  # get gamer tag value
  $gamer_tag = $_GET["gamer_tag"];

  # End point information
  $base_url = "https://xboxapi.com/v2";
  $get_xuid = "$base_url/xuid/$gamer_tag";


  # Get the XUID of the gamer tag
  # needed throughout other API calls to get data
  # initiate curl for XUID
  $cXuid = curl_init();


  # setting options
  curl_setopt($cXuid, CURLOPT_URL, $get_xuid);
  curl_setopt($cXuid, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($cXuid, CURLOPT_TIMEOUT, 5);
  curl_setopt($cXuid, CURLOPT_CONNECTTIMEOUT, 5);
  curl_setopt($cXuid, CURLOPT_HTTPHEADER, $headers);

  # storing the response
  $xuid = curl_exec($cXuid);


  # closing connection
  curl_close($cXuid);

  # profile endpoint
  $get_gamer_profile = "$base_url/$xuid/profile";

  # Get Gamer Profile
  $cGamerProfile = curl_init();

  # setting options
  curl_setopt($cGamerProfile, CURLOPT_URL, $get_gamer_profile);
  curl_setopt($cGamerProfile, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($cGamerProfile, CURLOPT_TIMEOUT, 5);
  curl_setopt($cGamerProfile, CURLOPT_CONNECTTIMEOUT, 5);
  curl_setopt($cGamerProfile, CURLOPT_HTTPHEADER, $headers);

  # store response
  $gamer_profile = curl_exec($cGamerProfile);

  # close connection
  curl_close($cGamerProfile);

  #printing response to screen
  echo $gamer_profile;
?>
