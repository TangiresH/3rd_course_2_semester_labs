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
    .button {
      padding: 10px;
      text-decoration: none;
      border: none;
      color: white;
      background-color: #4CAF50;
      cursor: pointer;
      margin: 5px;
    }
    .button.delete {
      background-color: #f44336;
    }
    .create-button, .sort-button {
      padding: 10px;
      text-decoration: none;
      color: white;
      background-color: #4CAF50;
      border: none;
      cursor: pointer;
      margin: 5px;
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
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['delete_id'])) {
      $delete_id = $_POST['delete_id'];
      $delete_query = "DELETE FROM `car_status` WHERE id = $delete_id";
      mysqli_query($connection, $delete_query);
    }
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['sort'])) {
      $sort_direction = $_POST['sort'];
    } else {
      $sort_direction = 'ASC';
    }
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['unsort'])) {
      $sort_direction = '';
    }
    $query = "SELECT id, car_id, owner, status FROM `car_status`";
    if ($sort_direction !== '') {
      $query .= " ORDER BY owner $sort_direction";
    }
    $select_tbl = mysqli_query($connection, $query);
    if ($select_tbl) {
      echo '<table>';
      echo '<tr>';
      echo '<th><a href="#">ID</a></th>';
      echo '<th><a href="#">Car ID</a></th>';
      echo '<th>Owner</th>';
      echo '<th>Status</th>';
      echo '<th>Actions</th>';
      echo '</tr>';
      while ($row = mysqli_fetch_array($select_tbl)) {
        echo '<tr>';
        echo '<td>' . $row['id'] . '</td>';
        echo '<td><a href="cars.php?id=' . $row['car_id'] . '">' . $row['car_id'] . '</a></td>';
        echo '<td>' . $row['owner'] . '</td>';
        echo '<td>' . $row['status'] . '</td>';
        echo '<td>';
        echo '<a href="update_car_status.php?id=' . $row['id'] . '" class="button">Update</a>';
        echo '<form action="" method="post" style="display:inline;">';
        echo '<input type="hidden" name="delete_id" value="' . $row['id'] . '">';
        echo '<input type="submit" class="button delete" value="Delete">';
        echo '</form>';
        echo '</td>';
        echo '</tr>'; 
      }
      echo '</table>';
      echo '<div style="text-align: center;">';
      echo '<a href="create_car_status.php" class="create-button">Create</a>';
      if ($sort_direction === 'DESC') {
        echo '<form action="" method="post" style="display:inline;"><input type="hidden" name="sort" value="ASC"><input type="submit" class="sort-button" value="Sort"></form>';
      } else {
        echo '<form action="" method="post" style="display:inline;"><input type="hidden" name="sort" value="DESC"><input type="submit" class="sort-button" value="Sort"></form>';
      }
      echo '<form action="" method="post" style="display:inline;"><input type="hidden" name="unsort"><input type="submit" class="sort-button" value="Unsort"></form>';
      echo '</div>';
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
