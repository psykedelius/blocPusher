<?php
    require_once "./connexion.php";
    
//  SELECT dans la table SG_socialData : NOM='".$pseudo.""'

$mysqli->real_query("SELECT Id, PSEUDO, SCORE, msg, lastUpdate FROM `SG_socialData` ");   // Requête
$res = $mysqli->use_result();

$Count = 0;

$userCount = $res->num_rows;
$userDataList = array();

$scoreDisplayTable = "<table class='table flex-fill'>
<thead class='top  bg-light border-0'>
  <tr>
    <th scope='col' class='border-0'>#</th>
    <th scope='col' class='border-0'>Name</th>
    <th scope='col' class='border-0'>Score</th>
    <th scope='col' class='border-0'>Date</th>
  </tr>
</thead>
<tbody   >";
$Count = 0;
//We store the data collected in a array
while ($row = $res->fetch_assoc())
   {
        
        $RANK       = 0;
        $PSEUDO     = $row['PSEUDO'];
        $SCORE      = $row['SCORE'];
        $msg        = $row['msg'];
        $lastUpdate = $row['lastUpdate'];
        
        $newUserData = array($RANK,$PSEUDO,$SCORE,$msg,$lastUpdate);
        $userDataList[$Count] = $newUserData; 
        $Count      = $Count + 1;
   }
    //We Sort the array by score
    usort($userDataList, function($b, $a) {
        return $a[2] <=> $b[2];
    });
    $Count =0;
//on affiche les 10 premiers
  foreach ($userDataList as $userData) {
    $Count      = $Count + 1;
    // $arr[3] sera mis à jour avec chaque valeur de $arr...
    //echo "<th scope=\"row\">$Count</th><td>$userData[1]</td><td>$userData[2]</td>";
    if ($Count>10)
    {
        break;
    }
    $scoreDisplayTable = "$scoreDisplayTable<tr>
    <th scope='row'  >$Count</th>
    <td>$userData[1]</td>
    <td>$userData[2]</td> 
    </tr>";
    }
    $scoreDisplayTable = "$scoreDisplayTable</tbody></table>";

    echo " ",$scoreDisplayTable;
  /* $scoreDisplayTable += "<tr>
   <th scope='row'>".${rank}."</th>
   <td>".${PSEUDO}."</td>
   <td>".${SCORE}."</td> 
   <td>".${msg}."</td>
   <td>".${lastUpdate}."</td>
   </tr>`;"
   echo " - <b>".$Count."</b> - \$PSEUDO=<b>".$PSEUDO."</b> - \$SCORE=<b>".$SCORE."</b> <br> \n";
   }*/

  // $scoreDisplayTable +="</tbody></table>"

?>