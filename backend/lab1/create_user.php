<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Create user</title>
  <link rel="stylesheet" href="./style/index.css">
</head>
<body>
<?php
try {
  require_once('./helpers.php');
  $connection = connectToServer('localhost', 'root', '');

  $query = "GRANT ALL PRIVILEGES ON *.* TO 'admin'@'localhost' IDENTIFIED BY 'admin' WITH GRANT OPTION";
  $userCreation = mysqli_query($connection, $query);
    
  if ($userCreation) {
    echo '<p class="center_next_line">User \'admin\' has been created!</p><br>';
  } else {
    throw new Exception("User 'admin' has not been created.");
  }
} catch (Exception $e) {
  echo '<p class="center_text"> <b>Oops! Something went wrong: ' . $e->getMessage() . '</b></p><br>';
}
?>
</body>
</html>
