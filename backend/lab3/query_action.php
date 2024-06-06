<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Search Results</title>
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
    require_once('./helpers.php');
    $connection = connectToServer('localhost', 'admin', 'admin');
    $db = 'lab1';
    $selectDb = mysqli_select_db($connection, $db);

    $regex = isset($_GET['regex']) ? $_GET['regex'] : '';
    $startDate = isset($_GET['start_date']) ? $_GET['start_date'] : '';
    $endDate = isset($_GET['end_date']) ? $_GET['end_date'] : '';

    $query = "SELECT * FROM car_status WHERE 1=1";
    if ($regex !== '') {
        $query .= " AND owner REGEXP '$regex'";
    }
    if ($startDate !== '') {
        $query .= " AND created_at >= '$startDate'";
    }
    if ($endDate !== '') {
        $query .= " AND created_at <= '$endDate'";
    }

    $result = mysqli_query($connection, $query);
    if (mysqli_num_rows($result) > 0) {
        echo '<table>';
        echo '<tr><th>ID</th><th>Owner</th><th>Status</th><th>Car ID</th><th>Created At</th></tr>';
        while ($row = mysqli_fetch_assoc($result)) {
            echo '<tr>';
            echo '<td>' . $row['id'] . '</td>';
            echo '<td>' . $row['owner'] . '</td>';
            echo '<td>' . $row['status'] . '</td>';
            echo '<td>' . $row['car_id'] . '</td>';
            echo '<td>' . $row['created_at'] . '</td>';
            echo '</tr>';
        }
        echo '</table>';
    } else {
        echo '<p>No records found.</p>';
    }

    mysqli_close($connection);
?>
</body>
</html>
