 
 var localUserName = "Psyko";
 var chatBody = document.getElementById('box-body'); 
 var msgLeftSided = true;

function initLocalUser()
{
  pseudo = "Player_"+(Math.random()*10);
  if (document.getElementById('userName'))
  {
    pseudo = document.getElementById('userName').textContent;
  }
  localUserName = pseudo;
}

function  UserMessage (userName, msgDate, imgUrl, msg)
{
    const chatBody = document.getElementById('box-body'); 
      console.log('createMsgBox '+userName)
      const el = document.createElement('div');
      el.classList.add('direct-chat-msg');

    if (msgLeftSided)
    {
      
      el.innerHTML =`<div class="direct-chat-msg">
      <div class="direct-chat-info clearfix"> <span class="direct-chat-name pull-left  me-3">${userName}   </span> 
      <span class="direct-chat-timestamp pull-right">${msgDate}</span> 
      </div> <img class="direct-chat-img" src="${ imgUrl}" alt="message user image">
      <div class="direct-chat-text">${ msg}</div>
      </div>`;
      msgLeftSided = false;
    }
    else{
        imgUrl = "https://findicons.com/files/icons/573/must_have/256/user.png"
        el.innerHTML =`<div class="direct-chat-msg right">
        <div class="direct-chat-info  clearfix "><span class="direct-chat-timestamp ">${msgDate}</span>  
        <span class="direct-chat-name right me-3">${userName}</span> 
        
        </div> <img class="direct-chat-img" src="${ imgUrl}" alt="message user image">
        <div class="direct-chat-text">${ msg}</div>
        </div>`;
        msgLeftSided = true;
      }
  chatBody.appendChild(el);
   // console.log(msgBox)
    //chatBody.insertAdjacentHTML('afterend', '<div id="two">two</div>');
  //  chatBody.appendChild(plop);
 //s   return msgBox;
   /* */
  

}

//init du username
initLocalUser();
//si on clic sur le bouton d'envois
document.getElementById('btnSendMsg').addEventListener("click",sendMsg);

function sendMsg(msg)
{
  let timeStamp = new Date().toLocaleDateString('fr-FR', { day:"numeric", month:"short", year:"numeric"}) 
  UserMessage(localUserName,timeStamp,'https://img.icons8.com/color/36/000000/administrator-male.png',msg);
  //envois a la BDD
}


function updateMsg (){
    console.log('updateMsg ')
    //on récupere la derniere version de la BDD 
    //..
    //pour chaque entréé de la base de donnée créer un objet userMesg
     UserMessage('bob','22/06/2022','https://img.icons8.com/color/36/000000/administrator-male.png','message de test');
     UserMessage('john','23/06/2022','https://img.icons8.com/color/36/000000/administrator-male.png','message de test1');
     UserMessage('bob','24/06/2022','https://img.icons8.com/color/36/000000/administrator-male.png','message de test2');
    }


updateMsg ();

