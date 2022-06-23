
$(function(){
   //display login modal
   $("#loginModalBtn").click(function() {
    $('#loginModal').modal('show');
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  });

  //send userData to database
    $("#sendData").click(function() {
    
        var pseudo = $("#PSEUDOinput").val();
        var score  = $("#SCOREinput").val();
        var msg   = $("#MSGinput").val();
        var lastUpdate      = new Date().getTime();

        if(pseudo==''||score==''||msg==''||lastUpdate=='') {

            alert("Please fill all fields.");
            return false;
        }

        $.ajax({
            type: "POST",
            url: "store.php",
            data: {
                pseudo: pseudo,
                score: score,
                msg: msg,
                lastUpdate: lastUpdate
            },
            cache: false,
            success: function(data) {
                $("#getMessages");
                $(this).displayUserData(); 
            },
            error: function(xhr, status, error) {
                console.error(xhr);
            }
        });
    });

    //get current user data from database
    //  SELECT dans la table SG_socialData : NOM='DURANDAL'
   /* $.fn.getCurrentUserData = function(){
        var pseudo = $("#PSEUDOinput").val();
        $mysqli->real_query("SELECT Id, PSEUDO, SCORE FROM `SG_socialData` WHERE PSEUDO='DURANDAL' ");   // Requête
        $res = $mysqli->use_result();

        echo "<br> \n";
        echo "Sélection dans la table PSEUDO='DURANDAL' - Erreur=<b>(".$mysqli->errno.")".$mysqli->error."</b> <br> \n";
    }*/


    $("#getMessages").click(function() {
        $(this).displayUserData(); 

    });

    $.fn.displayUserData = function(){
        $.ajax({
            type: "POST",
            url: "receive.php",
            data: {
            },
            cache: false,
            success: function(data) {
                $("#databasereader").val(data);
                let databasereader = document.getElementById("databasereader")
                databasereader.innerHTML = data;
            },
            error: function(xhr, status, error) {
                console.error(xhr);
            }
        });

    }
    
})

