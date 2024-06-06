<?php
require_once('./helpers.php');

if (!isset($_GET['id'])) {
  die('ID not provided');
}

$id = $_GET['id'];
$connection = connectToServer('localhost', 'admin', 'admin');
$db = 'lab1';
mysqli_select_db($connection, $db);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $owner = mysqli_real_escape_string($connection, $_POST['owner']);
  $status = mysqli_real_escape_string($connection, $_POST['status']);
  
  $update_query = "UPDATE `car_status` SET owner = '$owner', status = '$status' WHERE id = $id";
  mysqli_query($connection, $update_query);
  header('Location: car_status.php');
  exit();
} else {
  $query = "SELECT owner, status FROM `car_status` WHERE id = $id";
  $result = mysqli_query($connection, $query);
  $row = mysqli_fetch_assoc($result);

  if (!$row) {
    die('Record not found');
  }
}

mysqli_close($connection);
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Update Car Status</title>
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
      width: calc(100% - 20px);
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
      margin-left: 10px;
      margin-right: 10px;
    }
    input[type="submit"], button {
      background-color: #4CAF50;
      color: white;
      cursor: pointer;
    }
    button {
      background-color: #f44336;
    }
  </style>
</head>
<body>
  <form action="" method="post">
    <label for="owner">Owner</label>
    <input type="text" id="owner" name="owner" value="<?php echo htmlspecialchars($row['owner']); ?>" required>

    <label for="status">Status</label>
    <input type="text" id="status" name="status" value="<?php echo htmlspecialchars($row['status']); ?>" required>

    <input type="submit" value="Update">
    <button type="button" onclick="window.location.href='car_status.php'">Cancel</button>
  </form>
</body>
</html>
