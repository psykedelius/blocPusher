



function displayDate (){

    const date = new Date();
    const dateDisplayed = date.toLocaleDateString('fr-FR')
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    const dateDisplayedLong = date.toLocaleDateString('fr-FR', options)
  
    const dateElt = document.getElementById('dateObject');
    if (dateElt != null){dateElt.textContent = dateDisplayedLong;}

  }


  displayDate();  