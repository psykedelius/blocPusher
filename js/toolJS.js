
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

    addAnother = function(rank,name,score) {
      var ul = document.getElementById('scorePanel');
      var li = document.createElement("li");
      var children = ul.children.length + 1
      li.setAttribute("id", "element"+children)
            li.appendChild(document.createTextNode("  "+rank+" - "+name +" "+score));
            
            li.style.listStyle = 'none';
            li.style.padding   = "10px 4px";
            li.style.margin    = "2px 10px";
            li.style.color     = 'black';
            li.style.textAlign = 'left'
            li.classList.add('scoreElt')
            ul.appendChild(li)
        }
        var result  = Object.entries(scoreListe);
        const sorted = result.sort(function(a, b) { return a[1] - b[1]; })

        
        // generate scoreTable
        for (let i=0;i<sorted.length;i++)
        {
            var sortedname = sorted[i][0]
            let sortedScore = sorted[i][1]
            var rank = i+1;
            addAnother(rank,sortedname,sortedScore)
        }
}

function updateScorePanel2()
{
    let scoreTable=``;
    addAnother = function(rank,name,score) {
      console.log("addAnother "+rank+" "+name+" "+score);
      var tbody = document.getElementById('scorePanel');
      let playerData = `<tr>
      <th scope="row">${rank}</th>
      <td>${name}</td>
      <td>${score}</td> 
      <td>@mdo</td>
      </tr>`;
      scoreTable+=playerData;
       tbody.innerHTML = scoreTable;
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
//console.log("addAnother ");
updateScorePanel2();


