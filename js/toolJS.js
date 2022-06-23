
    const scoreListe = {
        'bob' : 75,
        'john':25,
        'luc':45,
        'marc':48,
        'plop':88,
        'sdf' : 75,
        'fef':24,
        'cc':42,
        'cvxv':88,
        'ddd':57,
        'po':1,
        'ii':2,
        'sdf':4,
        'az':57,
        'fdd':5,
        'isdi':6,
        'sfdsdf':200
}



function switchScorePanelTab(){
    var ul = document.getElementById('scorePanel');

}




function updateScorePanel()
{
    
    let scoreTable=``;
    
    var addAnother = function(rank,name,score) {
      
        var tbody = document.getElementById('scorePanel');
        if (tbody != null)
        {
            //let tableDisplay = tbody.innerHTML;  
            //var tbodyInnerHtml = document.getElementById("scorePanel").innerHTML;
            console.log("addAnother "+rank+" "+name+" "+score+" ");
            let playerData = `<tr>
            <th scope="row">${rank}</th>
            <td>${name}</td>
            <td>${score}</td> 
            <td>@mdo</td>
            </tr>`;
            scoreTable+=playerData;
            //tbody = scoreTable;
            //console.log(tbody.innerHTML.toString);
            tbody.innerHTML += playerData;
        } else{
            console.log("oups");
        }
    }


    var result  = Object.entries(scoreListe);
    const sorted = result.sort(function(b, a) { return a[1] - b[1]; })

    
    // generate scoreTable
    for (let i=0;i<sorted.length;i++)
    {
       // console.log("generate "+sorted[i][0]);
        var sortedname = sorted[i][0]
        let sortedScore = sorted[i][1]
        var rank = i+1;
        addAnother(rank,sortedname,sortedScore)
    }
}

setTimeout(function(){ updateScorePanel(); }, 1000);
//updateScorePanel();

//console.log("addAnother ");


