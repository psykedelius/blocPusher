<?php
$servername = "guillaumqiadmin.mysql.db";
$username = "guillaumqiadmin";
$password = "Prout35000";
$dbname = "guillaumqiadmin";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$proj = isset($_POST['PSEUDO'])?$_POST['PSEUDO']:'';
//$sql = "INSERT INTO projects (project_name) VALUES ('$proj')";
//$sql->CREATE TABLE SG_socialData (  Id int(11) NOT NULL auto_increment,  PSEUDO varchar(32) NOT NULL default '',  SCORE int(11) NOT NULL default '0', PRIMARY KEY  (Id)) ENGINE=MyISAM DEFAULT CHARSET=latin1 ;    // Requête

if ($conn->query("INSERT INTO `SG_socialData`  values ('','DURANDAL','5')  ");  === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . mysqli . "<br>" . $conn->error;
}

$conn->close();
?> 