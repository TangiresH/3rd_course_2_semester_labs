<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Table</title>
  <style>
    table {
      width: 80%;
      margin: 20px auto;
      border-collapse: collapse;
      border: 2px solid #ddd;
    }
    th, td {
      padding: 8px;
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
  $selection_status_tbl = 0;
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
    $query = 'SELECT car_id, owner, status FROM `car_status`;';
    $select_tbl = mysqli_query($connection, $query);
    if ($select_tbl) {
      echo '<table>';
      echo '<tr>';
      echo '<th><a href="#">Car ID</a></th>';
      echo '<th>Owner</th>';
      echo '<th>Status</th>';
      echo '</tr>';
      while ($row = mysqli_fetch_array($select_tbl)) {
        echo '<tr>';
        echo '<td><a href="cars.php?id=' . $row['car_id'] . '">' . $row['car_id'] . '</a></td>';
        echo '<td>' . $row['owner'] . '</td>';
        echo '<td>' . $row['status'] . '</td>';
        echo '</tr>'; 
      }
      echo '</table>';
    } else {
      $selection_status_tbl = 1;
    }
  } catch (Exception $e) {
    if (!$connection) {
      echo '<p>Connection not established.<br><br><b>Error: ' . $e->getMessage() . '</b></p>';
    } else if (!$selection_status_db) {
      echo '<p>The database is not selected.<br><br><b>Error: ' . $e->getMessage() . '</b></p>';
    } else if (!$selection_status_tbl) {
      echo '<p>The table is not selected.<br><br><b>Error: ' . $e->getMessage() . '</b></p>';
    } else {
      echo '<p><b>Error: ' . $e->getMessage() . '</b></p>';
    }
  }
  ?>
</body>
</html>
