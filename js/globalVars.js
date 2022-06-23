class User {
    constructor(pseudo,userImg,bestScore) {
        this.pseudo = "noName";
        this.userImg = "0";
        this.bestScore = 0;
    }
  getName() {
    return this.pseudo;
  }
}
var pseudoss = "Polo";
var localUserGlobal = new User() ;

function getGlobalLocalUserName ()
{
  var userInfoPanelFrame = window.top.document.getElementById('userInfoPanel');
  pseudoss = userInfoPanelFrame.getAttribute("value");
  console.log("------------->"+userInfoPanelFrame.getAttribute("value"));
  

  return pseudoss;
  
}

function UpdateGlobalLocalUserName (newUserName)
{

  pseudoss = newUserName;
  console.log(" UpdateLocalUser "+pseudoss)
}
