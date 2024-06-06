<?php

function connectToServer($server, $username, $password) {
  $connectToServer = mysqli_connect($server, $username, $password);
  if ($connectToServer) {
      return $connectToServer;
  } else {
      throw new Exception(mysqli_connect_error());
  }
}
  