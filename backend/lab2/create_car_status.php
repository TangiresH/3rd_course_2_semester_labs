<?php
require_once('./helpers.php');

$connection = connectToServer('localhost', 'admin', 'admin');
$db = 'lab1';
mysqli_select_db($connection, $db);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $car_id = mysqli_real_escape_string($connection, $_POST['car_id']);
  $owner = mysqli_real_escape_string($connection, $_POST['owner']);
  $status = mysqli_real_escape_string($connection, $_POST['status']);
  
  $insert_query = "INSERT INTO `car_status` (car_id, owner, status) VALUES ('$car_id', '$owner', '$status')";
  if (mysqli_query($connection, $insert_query)) {
    header('Location: car_status.php');
    exit();
  } else {
    echo 'Error: ' . mysqli_error($connection);
  }
}

mysqli_close($connection);
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Create Car Status</title>
  <style>
    form {
      width: 50%;
      margin: 20px auto;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 5px;
      background-color: #f9f9f9;
    }
    label {
      display: block;
      margin-bottom: 10px;
    }
    input[type="text"], input[type="submit"], button {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
    input[type="submit"], button {
      background-color: #4CAF50;
      color: white;
      cursor: pointer;
    }
    button {
      background-color: #f44336;
    }
    .form-buttons {
      display: flex;
      justify-content: space-between;
    }
  </style>
</head>
<body>
  <form action="" method="post">
    <label for="car_id">Car ID</label>
    <input type="text" id="car_id" name="car_id" required>

    <label for="owner">Owner</label>
    <input type="text" id="owner" name="owner" required>

    <label for="status">Status</label>
    <input type="text" id="status" name="status" required>

    <div class="form-buttons">
      <input type="submit" value="Create">
      <button type="button" onclick="window.location.href='car_status.php'">Cancel</button>
    </div>
  </form>
</body>
</html>
