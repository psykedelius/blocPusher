<?php
function OpenCon()
 {
 $dbhost = "localhost";
 $dbuser = "root";
 $dbpass = "";
 $db = "chatmsg";
 $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\r". $conn -> error);

 printf("OpenCon()");

 return $conn;
 }
 
function CloseCon($conn)
 {
 $conn -> close();
 }

 function getval($query){
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $db = "chatmsg";
   
    $mysqli = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\r". $conn -> error);
    $mysqli->connect($dbhost, $dbuser, $dbpass, $db);
    printf($query);
    $result = $mysqli->query($query);
    
    $value = $mysqli->fetch_array;
    $mysqli->close();
    printf("getval()");
    return $value;
}
?>
