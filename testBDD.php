







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

// ******  Configuration - Debut ******
   $DBhost  = "guillaumqiadmin.mysql.db";   // Par exemple
   $DBowner = "guillaumqiadmin";  // ton login SQL
   $DBpw    = "Prout35000";  // ton password SQL
   $DBName  = $DBowner;
// ******  Configuration - Fin ******

//  Titre
echo "<br> \n";
echo " Opérations sur une Base de Données <b>MySQL</b> via les commandes <b>mysqli</b><br>";

//  Version de PHP

echo "<br> \n";
echo "Version de PHP !: <b>".phpversion()."</b><br> \n"; 
echo "<br> \n";
echo " Travaux dans la base '<b>" .$DBName. "</b>' sur le serveur '<b>" .$DBhost. "</b>' <br>";

$Table_SQL = "SG_socialData";

//  Etablissement de la connexion SQL

$mysqli = new mysqli($DBhost, $DBowner, $DBpw, $DBName);
echo "<br> \n";
echo "Connexion à MySQL - Erreur=<b>(".$mysqli->connect_errno.")".$mysqli->connect_error."</b> <br> \n";

//  Supression de la table SG_socialData

$mysqli->query("DROP TABLE IF EXISTS `SG_socialData` ");    // Requête
echo "<br> \n";
echo "Supression de la table SG_socialData - Erreur=<b>(".$mysqli->errno.")".$mysqli->error."</b> <br> \n";

//  Création de la table SG_socialData

$mysqli->query("CREATE TABLE `SG_socialData` (  `Id` int(11) NOT NULL auto_increment,  `PSEUDO` varchar(32) NOT NULL default '',  `SCORE` int(11) NOT NULL default '0', PRIMARY KEY  (`Id`)) ENGINE=MyISAM DEFAULT CHARSET=latin1 ");    // Requête
echo "<br> \n";
echo "Création de la table SG_socialData - Erreur=<b>(".$mysqli->errno.")".$mysqli->error."</b> <br> \n";

/*
function addUser($PSEUDO,$SCORE)
   {
      $mysqli->query("INSERT INTO `SG_socialData`  values ('',.$PSEUDO.,.$SCORE.)  ");    // Requête
      echo "<br> \n";
      echo "Ajout d'un Premier enregistrement - ('','.$PSEUDO.','.$SCORE.') - Erreur=<b>(".$mysqli->errno.")".$mysqli->error."</b> <br> \n";
   }
   
   addUser("BOB","Jhon");
*/
//  Ajout d'un Premier enregistrement
$mysqli->query("INSERT INTO `SG_socialData`  values ('','DURANDAL','2')  ");    // Requête
echo "<br> \n";
echo "Ajout d'un Premier enregistrement - ('','DURANDAL','2') - Erreur=<b>(".$mysqli->errno.")".$mysqli->error."</b> <br> \n";


//  Ajout d'un Deuxième enregistrement

$mysqli->query("INSERT INTO `SG_socialData`  values ('','DURANDAL','0')  ");    // Requête
echo "Ajout d'un Deuxième enregistrement - ('','DURANDAL','0') - Erreur=<b>(".$mysqli->errno.")".$mysqli->error."</b> <br> \n";

//  Ajout d'un Troisième enregistrement

$mysqli->query("INSERT INTO `SG_socialData`  values ('','accents-éèàâ','3')  ");    // Requête
echo "Ajout d'un Troisième enregistrement - ('','accents-éèàâ','3') - Erreur=<b>(".$mysqli->errno.")".$mysqli->error."</b> <br> \n";

//  SELECT dans la table SG_socialData : NOM='DURANDAL'

$mysqli->real_query("SELECT Id, PSEUDO, SCORE FROM `SG_socialData` WHERE PSEUDO='DURANDAL' ");   // Requête
$res = $mysqli->use_result();

echo "<br> \n";
echo "Sélection dans la table PSEUDO='DURANDAL' - Erreur=<b>(".$mysqli->errno.")".$mysqli->error."</b> <br> \n";

$Count = 0;

while ($row = $res->fetch_assoc())
   {
   $Count     = $Count + 1;
   $PSEUDO       = $row['PSEUDO'];
   $SCORE    = $row['SCORE'];
   echo " - <b>".$Count."</b> - \$PSEUDO=<b>".$PSEUDO."</b> - \$SCORE=<b>".$SCORE."</b> <br> \n";
   }

//  SELECT dans la table SG_socialData : Tous les enregistrements

$mysqli->real_query("SELECT Id, PSEUDO, SCORE FROM `SG_socialData` ");   // Requête
$res = $mysqli->use_result();

echo "<br> \n";
echo "Sélection dans la table de tous les enregistrements - Erreur=<b>(".$mysqli->errno.")".$mysqli->error."</b> <br> \n";

$Count = 0;

while ($row = $res->fetch_assoc())
   {
   $Count     = $Count + 1;
   $PSEUDO       = $row['PSEUDO'];
   $SCORE    = $row['SCORE'];
   echo " - <b>".$Count."</b> - \$PSEUDO=<b>".$PSEUDO."</b> - \$SCORE=<b>".$SCORE."</b> <br> \n";
   }

// Fermeture de la connexion   
$Date_end = getmicrotime();
$Duree = $Date_end - $Date_start;
$Duree = sprintf("%01.2f", $Duree);

echo " <br>  Durée du traitement = <b>$Duree</b> secondes <br> \n";

?>