const userNameLabel      = document.getElementById('userNameLabel');
const userNameInput      = document.getElementById('userNameInput');
const editUserProfileBtn = document.getElementById('editUserProfileBtn');
var isInEditMode = false;
var userName = "NewUser";

var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "https://code.jquery.com/jquery-2.2.1.min.js";

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = handler;
    script.onload = handler;

    // Fire the loading
    head.appendChild(script);

    function handler(){
       console.log('jquery added :)');
    }

var localUser    = new User('pseudo:plop','userImg:0','bestScore:12');
window.onload = ()=>{
    var userInfoPanelFrame = window.top.document.getElementById('userInfoPanel');
    //userInfoPanelFrame.getAttribute("value");
    //console.log("------------->"+userInfoPanelFrame.getAttribute("value"));
    
    localUserGlobal  = localUser
    localUser.pseudo = userName
    userNameLabel.textContent = userName;
    userNameInput.placeholder = userName;


}



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
        userNameLabel.className='userNameLabel';
        userNameInput.className='hidden';
        var thisFrame = window.top.document.getElementById('userInfoPanel');
        thisFrame.setAttribute("value",localUserGlobal.pseudo);
        console.log("------------->"+thisFrame.getAttribute("value"));
    }
    else{
        userNameLabel.className='hidden';
        userNameInput.className='userNameInput';
        writeToDatabase();
}


//Input Name
userNameInput.addEventListener('input',(event)=>{
    //event.stopPropagation();
    let inputText    = event.target.value;
    localUser.pseudo = inputText;
    userNameLabel.textContent = localUser.pseudo;
    localUserGlobal.pseudo = inputText;
    console.log("input"+inputText);
}, true);

function writeToDatabase() {
    console.log("writeToDatabase "+userName);
    var PSEUDO = userName;
    if (PSEUDO != null && PSEUDO !="") {
        $.post("../php/conn.php", { PSEUDO : PSEUDO },function(response){
           console.log(response);
       });
    }
}
}