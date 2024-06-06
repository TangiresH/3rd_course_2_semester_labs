<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Statistics</title>
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
  </style>
</head>
<body>
<?php
    // Підключення до бази даних
    require_once('./helpers.php');
    $connection = connectToServer('localhost', 'admin', 'admin');
    $db = 'lab1';
    $selectDb = mysqli_select_db($connection, $db);

    // Запити для отримання статистики
    $carsCountQuery = "SELECT COUNT(*) AS total FROM cars";
    $carStatusCountQuery = "SELECT COUNT(*) AS total FROM car_status";
    $lastMonthCarCountQuery = "SELECT COUNT(*) AS total FROM cars WHERE created_at >= DATE_SUB(NOW(), INTERVAL 1 MONTH)";
    $lastMonthCarStatusCountQuery = "SELECT COUNT(*) AS total FROM car_status WHERE created_at >= DATE_SUB(NOW(), INTERVAL 1 MONTH)";
    $lastCarStatusQuery = "SELECT id FROM car_status ORDER BY created_at DESC LIMIT 1";
    $carWithMostStatusQuery = "SELECT car_id FROM car_status GROUP BY car_id ORDER BY COUNT(*) DESC LIMIT 1";

    // Виконання запитів і отримання результатів
    $carsCountResult = mysqli_query($connection, $carsCountQuery);
    $carStatusCountResult = mysqli_query($connection, $carStatusCountQuery);
    $lastMonthCarCountResult = mysqli_query($connection, $lastMonthCarCountQuery);
    $lastMonthCarStatusCountResult = mysqli_query($connection, $lastMonthCarStatusCountQuery);
    $lastCarStatusResult = mysqli_query($connection, $lastCarStatusQuery);
    $carWithMostStatusResult = mysqli_query($connection, $carWithMostStatusQuery);

    // Обробка результатів
    $carsCount = mysqli_fetch_assoc($carsCountResult)['total'];
    $carStatusCount = mysqli_fetch_assoc($carStatusCountResult)['total'];
    $lastMonthCarCount = mysqli_fetch_assoc($lastMonthCarCountResult)['total'];
    $lastMonthCarStatusCount = mysqli_fetch_assoc($lastMonthCarStatusCountResult)['total'];
    $lastMonthCount = $lastMonthCarCount + $lastMonthCarStatusCount;
    $lastCarStatus = mysqli_fetch_assoc($lastCarStatusResult)['id'];
    $carWithMostStatus = mysqli_fetch_assoc($carWithMostStatusResult)['car_id'];

    // Виведення статистики
    echo '<table>';
    echo '<tr><th>Statistics</th><th>Value</th></tr>';
    echo "<tr><td>Total records in cars table</td><td>$carsCount</td></tr>";
    echo "<tr><td>Total records in car_status table</td><td>$carStatusCount</td></tr>";
    echo "<tr><td>Total records in cars table for last month</td><td>$lastMonthCount</td></tr>";
    echo "<tr><td>Last record ID in car_status table</td><td><a href=\"car_status_id.php?id=$lastCarStatus\">$lastCarStatus</a></td></tr>";
    echo "<tr><td>Car ID with most status records</td><td><a href=\"cars.php?id=$carWithMostStatus\">$carWithMostStatus</a></td></tr>";
    echo '</table>';

    // Закриття підключення до бази даних
    mysqli_close($connection);
?>
</body>
</html>
