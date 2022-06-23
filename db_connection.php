<?php

 $dbhost = "guillaumqiadmin.mysql.db";
 $dbuser = "guillaumqiadmin";
 $dbpass = "Prout35000";
 $db = "guillaumqiadmin";
 
try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "INSERT INTO socialData (userName, userStatus, userScore)
    VALUES ('bob', 'onLine', '125')";
    // use exec() because no results are returned
    $conn->exec($sql);
    echo "New record created successfully";
  } catch(PDOException $e) {
    echo $sql . "<br>" . $e->getMessage();
  }
  
  $conn = null;
  ?>