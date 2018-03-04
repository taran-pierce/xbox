<?php
  # put your token ID here
  # you get this from: https://xboxapi.com/
  $token = "API KEY GOES HERE";

  $headers = array();

  $headers[] = 'X-Auth: ' . $token;
  $headers[] = 'Cache-Control: no-cache';
  $headers[] = 'Access-Control-Allow-Origin: *';
  $headers[] = 'Content-Type: application/json';

?>
