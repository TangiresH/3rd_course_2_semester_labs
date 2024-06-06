<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Search Records</title>
  <style>
    table {
      width: 100%;
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
    form {
      width: 20%;
      margin: 20px auto;
      padding: 20px;
      border: 1px solid #ddd;
      background-color: #f9f9f9;
    }
    label, input {
      display: block;
      margin-bottom: 10px;
    }
    input[type="submit"] {
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <form method="GET" action="query_action.php">
    <label for="regex">Search (Owner):</label>
    <input type="text" id="regex" name="regex">
    
    <label for="start_date">Start Date:</label>
    <input type="date" id="start_date" name="start_date">
    
    <label for="end_date">End Date:</label>
    <input type="date" id="end_date" name="end_date">
    
    <input type="submit" value="Search">
  </form>
</body>
</html>
