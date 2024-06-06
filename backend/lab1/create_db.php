<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Create database</title>
  <link rel="stylesheet" href="./style/index.css">
</head>
<body>
<?php
try {
  require_once('./helpers.php');
  $connection = connectToServer('localhost', 'admin', 'admin');

  $dbName = 'lab1';
  $query = 'CREATE DATABASE ' . $dbName;
  $dbCreation = mysqli_query($connection, $query);
    
  if ($dbCreation) {
    echo '<p class="center_next_line">Database has been created successfully</p><br>';
  } else {
    throw new Exception("Database has not been created.");
  }
} catch (Exception $e) {
  echo '<p class="center_text"> <b>Oops! Something went wrong: ' . $e->getMessage() . '</b></p><br>';
}
?>
</body>
</html>
