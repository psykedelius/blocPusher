<?php
include 'db_connection.php';
$conn = OpenCon();
echo "Connected Successfully \r";
$query = "SELECT `chatmsg` FROM `chatmsg` ";

$result = getval($query);

/* Récupère un tableau d'objets */
CloseCon($conn);
?>