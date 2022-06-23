<?php

error_reporting(E_ALL);   // Activer le rapport d'erreurs PHP
// A partir de PHP 5.6, sinon les caractères accentués seront mal affichés
ini_set('default_charset', 'iso8859-1');

function getmicrotime()
   {
   list($usec, $sec) = explode(" ",microtime());
   return ((float)$usec + (float)$sec);
   }
$Date_start = getmicrotime();


    $servername = "guillaumqiadmin.mysql.db";
    $username = "guillaumqiadmin";
    $password = "Prout35000";
    $dbname = "guillaumqiadmin";

    
$Table_SQL = "SG_socialData";

//  Etablissement de la connexion SQL




    $mysqli=mysqli_connect($servername,$username,$password,$dbname);
      if(!$mysqli){
          die('Could not Connect MySql Server:' .mysql_error());
        }
?>