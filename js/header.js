
console.log("pouet !!!!");
const element  = document.getElementById('header');
const spacerElt= document.getElementsByClassName('spacer');
const style    = element.style;
var derniere_position_de_scroll_connue = 0;
var ticking = false;
var headerCurPos = 0;
var headerTargetPos = 0;
var speed = 1;
var snapValue = 5;
window.onload = function() {            

   // setInterval(toggleHeader, 2);
}

function toggleHeader() {
  
  //console.log(window.scrollY+ " <s> "+derniere_position_de_scroll_connue)
    //on cache
    if (window.scrollY>derniere_position_de_scroll_connue && window.scrollY>10)
    {
      headerCurPos= -20;
      console.log(window.scrollY+ " > "+derniere_position_de_scroll_connue)
        headerTargetPos = -20;
        if (headerCurPos>headerTargetPos)
        {
            headerCurPos-=1*speed;
            if (Math.abs(headerCurPos-headerTargetPos)<=snapValue)
            {
              headerCurPos=headerTargetPos;
            }
          }
        //console.log("cache "+style.top+"  headerCurPos "+headerCurPos)

    }
    //on montre
    if (window.scrollY<derniere_position_de_scroll_connue || window.scrollY===0)
    {
      headerCurPos= 0;
      headerTargetPos = 0;
      if (headerCurPos<headerTargetPos)
      {
          headerCurPos+=1*speed;
          if (Math.abs(headerCurPos-headerTargetPos)<=snapValue)
          {
            headerCurPos=headerTargetPos;
          }
      }
       // console.log("montre "+style.top+"  headerCurPos  " +headerCurPos)
    }
    style.top = headerCurPos+'px';
    spacerElt.style.top = headerCurPos+'px';
  // faire quelque chose avec la position du scroll
}

window.addEventListener('scroll', function(e) {
  

  if (!ticking) {
    window.requestAnimationFrame(function() {
        toggleHeader();
      derniere_position_de_scroll_connue=0;//window.scrollY;
      ticking = false;
    });
  }

  ticking = true;
});