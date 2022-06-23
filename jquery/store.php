<?php
    require_once "./connexion.php";
    

    $pseudo = mysqli_real_escape_string($mysqli, $_POST['pseudo']);
    $score = mysqli_real_escape_string($mysqli, $_POST['score']);
    $msg = mysqli_real_escape_string($mysqli, $_POST['msg']);
    $lastUpdate = mysqli_real_escape_string($mysqli, $_POST['lastUpdate']);
    echo ("store to Database '.$pseudo.'");



//check if pseudo exist in database
//  SELECT dans la table SG_socialData : NOM='DURANDAL'

$mysqli->real_query("SELECT Id, PSEUDO, SCORE, msg, lastUpdate FROM `SG_socialData` Where PSEUDO='".$pseudo."'");   // Requête
$res = $mysqli->use_result();

echo "<br> \n";
echo "Sélection dans la table PSEUDOtest='".$res[1]."' - Erreur=<b>(".$mysqli->errno.")".$mysqli->error."</b> <br> \n";

/* Stockage du premier jeu de résultats */
if ($res = $mysqli->use_result()) {
    while ($row = $res->fetch_row()) {
        echo "test %s\n".$row[0];
    }
    $res->close();
}
/*
//la table existe , on l'update

if ($mysqli->query('UPDATE SG_socialData set SCORE = '.$score.' WHERE PSEUDO = '.$pseudo.'')) {
    printf("Table tutorials_tbl updated successfully.<br />");
 }
 if ($mysqli->errno) {
    printf("Could not update table: %s<br />", $mysqli->error);
 }
*/
//on insert une nouvelle table

if ($res)

    $mysqli->real_query("INSERT INTO `SG_socialData`  values ('','".$pseudo."','".$score ."','".$msg."','".$lastUpdate."')  ");    // Requête
    echo "<br> \n";
    echo "Ajout d'un Premier enregistrement - ('','".$pseudo."','".$score ."','".$msg."','".$lastUpdate."') - Erreur=<b>(".$mysqli->errno.")".$mysqli->error."</b> <br> \n";
    


    echo ("store to Database '.$pseudo.'");

    mysqli_close($mysqli);
 
?>