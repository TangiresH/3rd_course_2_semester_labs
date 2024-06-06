<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Create table</title>
  <link rel="stylesheet" href="./style/index.css">
</head>
<body>
<?php
try {
  require_once('./helpers.php');
  $connection = connectToServer('localhost', 'admin', 'admin');
  $db = 'lab1';
  $selectDb = mysqli_select_db($connection, $db);
    
  if (!$connection) {
    throw new Exception("Connection not established.");
  } elseif (!$selectDb) {
    throw new Exception("Database not selected.");
  }

  $query = "CREATE TABLE IF NOT EXISTS `Cars` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    number VARCHAR(255) NOT NULL,
    model VARCHAR(255) NOT NULL
  )";

  $createTbl = mysqli_query($connection, $query);
    
  if ($createTbl) {
    echo '<p class="center_next_line">The table has been created successfully</p><br>';
  } else {
    throw new Exception("The table has not been created.");
  }
} catch (Exception $e) {
  echo '<p class="center_text"> <b>Oops! Something went wrong: ' . $e->getMessage() . '</b></p><br>';
}
?>
</body>
</html>
