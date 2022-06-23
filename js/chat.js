 
 //var localUserName = localUserGlobal.pseudo;
 var chatBody = document .getElementById('box-body'); 
 var msgLeftSided = true;

 const debounce = (func, wait) => {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

function initLocalUser()
{
  pseudo = "Player_"+(Math.random()*10);
  //pseudo = localUserGlobal.pseudo;
  if (document.getElementById('userName'))
  {
    pseudo = document.getElementById('userName').textContent;
  }
  console.log("Chat.js initLocalUser() => pseudo");
  //localUserName = pseudo;
}

function updateUserName( newUserName )
{
  pseudo = newUserName;
  console.log("Chat.js updateUserName() => "+pseudo);
}

function  UserMessage (userName, msgDate, imgUrl, msg, msgLeftSided)
{
      const chatBody = document.getElementById('box-body'); 
      console.log('createMsgBox '+userName)
      const el = document.createElement('div');
      el.classList.add('direct-chat-msg');

    if (msgLeftSided)
    {
        el.innerHTML =`<div class="direct-chat-msg">
        <div class="direct-chat-info clearfix"> 
          <span class="direct-chat-name pull-left  me-3">${userName}   </span> 
          <span class="direct-chat-timestamp pull-right">${msgDate}</span> 
        </div> 
        <img class="direct-chat-img" src="${ imgUrl}" alt="message user image">
        <div class="direct-chat-text">${ msg}</div>
        </div>`;
        //msgLeftSided = false;
    }
    else{
        imgUrl = "https://findicons.com/files/icons/573/must_have/256/user.png"
        el.innerHTML =`<div class="direct-chat-msg right">
        <div class="direct-chat-info  clearfix ">
            
          <span class="direct-chat-name right me-3">${userName}</span> 
          <span class="direct-chat-timestamp ">${msgDate}</span>
        </div> 
        <img class="direct-chat-img" src="${ imgUrl}" alt="message user image">
        <div class="direct-chat-text">${ msg}</div>
        </div>`;
       // msgLeftSided = true;
      }
  chatBody.appendChild(el);

}

//init du username
initLocalUser();
//si on clic sur le bouton d'envois
document.getElementById('btnSendMsg').addEventListener("click",sendMsg);

function sendMsg()
{

  
 // let userNameElt = window.parent.document.getElementById("userNameLabel").value;
  console.log("pseudoss = "+ getGlobalLocalUserName ());
        //on scroll le chat vers le bas
        var objDiv = document.getElementById("box-body");
        objDiv.scrollTop = objDiv.scrollHeight;
  
  let msg = document.getElementById('inputMsg').value;
  let timeStamp = new Date().toLocaleDateString('fr-FR', { day:"numeric", month:"short", year:"numeric"}) 
  msgLeftSided = false;
  UserMessage(getGlobalLocalUserName (),timeStamp,'https://img.icons8.com/color/36/000000/administrator-male.png',msg,false);
  //envois a la BDD
}


function updateMsg (){
    console.log('updateMsg ')
    //on récupere la derniere version de la BDD 
    //..
    //pour chaque entréé de la base de donnée créer un objet userMesg
     UserMessage('bob','22/06/2022','https://img.icons8.com/color/36/000000/administrator-male.png','message de test',true);
     UserMessage('john','23/06/2022','https://img.icons8.com/color/36/000000/administrator-male.png','message de test1',true);
     UserMessage('bob','24/06/2022','https://img.icons8.com/color/36/000000/administrator-male.png','message de test2',true);
    }


updateMsg ();

