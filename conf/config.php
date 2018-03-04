<?php
  # put your token ID here
  # you get this from: https://xboxapi.com/
  $token = "1aa66306d38baca0e5ded32ab8ff437c8a72bcb5";

  $headers = array();

  $headers[] = 'X-Auth: ' . $token;
  $headers[] = 'Cache-Control: no-cache';
  $headers[] = 'Access-Control-Allow-Origin: *';
  $headers[] = 'Content-Type: application/json';

?>
