
const userNameLabel      = document.getElementById('userNameLabel');
const userNameInput      = document.getElementById('userNameInput');
const editUserProfileBtn = document.getElementById('editUserProfileBtn');
var isInEditMode = false;
var userName = "noName";


//init du localUser
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
var localUser = new User(userName,0,12);
localUser.pseudo = userName
userNameLabel.textContent = userName;
userNameInput.placeholder = userName;


//Btn edit
editUserProfileBtn.addEventListener('click',(event)=>{
    event.stopPropagation();
    ToggleUserEditPanel();
} , true);



//Toggle editPanel
function ToggleUserEditPanel()
{
    isInEditMode = !isInEditMode ;
    console.log("ToggleUserEditPanel "+isInEditMode);
    if (!isInEditMode)
    {
        /* mode user info diplay */
            userNameLabel.className="userNameLabel";
            userNameInput.className="hidden";
    }
    else{
        userNameLabel.className="hidden";
        userNameInput.className="userNameInput";
}


//Input Name
userNameInput.addEventListener('input',(event)=>{
    //event.stopPropagation();
    let inputText = event.target.value;
    localUser.pseudo=inputText;
    userNameLabel.textContent =localUser.pseudo;
    console.log("input"+inputText);
}, true);


}