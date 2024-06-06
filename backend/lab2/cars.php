<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Car Details</title>
  <style>
    table {
      width: 80%;
      margin: 20px auto;
      border-collapse: collapse;
      border: 2px solid #ddd;
    }
    th, td {
      padding: 12px;
      border: 1px solid #ddd;
      text-align: left;
    }
    th {
      background-color: #4CAF50;
      color: white;
    }
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
    tr:hover {
      background-color: #ddd;
    }
  </style>
</head>
<body>
<?php
$selection_status_db = 0;
$selection_status_dtl = 0;
$connection_status = 0;
try {
  require_once('./helpers.php');
  $connection = connectToServer('localhost', 'admin', 'admin');
  $connection_status = 1;
  $db = 'lab1';
  $selectDb = mysqli_select_db($connection, $db);
  if ($selectDb) {
    $selection_status_db = 1;
  }
  $car_id = $_GET['id'];
  $query = "SELECT * FROM `Cars` WHERE id = $car_id;";
  $select_detail = mysqli_query($connection, $query);
  if (mysqli_num_rows($select_detail) > 0) {
    $selection_status_dtl = 1;
    echo '<div class=\'table-container\'>';
    echo "<table><tr><th>ID</th><th>Number</th><th>Model</th></tr>";
    while ($row = mysqli_fetch_array($select_detail)) {
      echo "<tr>";
      echo "<td>" . $row["id"] . "</td>";
      echo "<td>" . $row["number"] . "</td>";
      echo "<td>" . $row["model"] . "</td>";
      echo "</tr>";
    }
    echo '</div>';
  } else {
    echo '<p class="center_next_line">No records found</p></tr>';
  }
} catch (Exception $e) {
  if (!$connection) {
    echo '<p class="center_text">Connection not established.<br><br> ' . '<b>Error: ' . $e->getMessage() . '</b></p><br>';
  } else if (!$selection_status_db) {
    echo '<p class="center_next_line">The database is not selected.<br><br> ' . '<b>Error: ' . $e->getMessage() . '</b></p><br>';
  } else {
    echo '<p class="center_next_line"> <b>Oops! Something went wrong: ' . $e->getMessage() . '</b></p><br>';
  }
}
?>
</body>
</html>
