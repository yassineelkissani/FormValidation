

function validateForm() {
  
  

  

    const emailInput = document.getElementById("email");
    const email = emailInput.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const teleInput =document.getElementById('tele'); 
    const tele=teleInput.value;
    const teleRegex = /^\+212[ -]?\d{9,}$/;

    const descInput =document.getElementById('desc');
    const desc=descInput.value;
    let x=0;
     if(email===""){
      document.getElementById("email-error").innerHTML = "Saisie votre email!";
      x++;

    }
    else if (!regex.test(email)) {
      document.getElementById("email-error").innerHTML = "Format Adresse email invalide !";
      x++;
    } 
    if(tele===""){
      document.getElementById("tel-error").innerHTML = "Saisie votre numéro!";
      x++;

    }
    else if (!teleRegex .test(tele)) {
      document.getElementById("tel-error").innerHTML = "Format de téléphone invalide !";
      x++;
    } 
    if(desc ===""){
      document.getElementById("desc-error").innerHTML="Discuter avec nous !";
      x++;
    }

        const inputDate = new Date(date.value);
        const minDate = new Date('2000-01-01');
        const maxDate = new Date('2023-12-31');

        if(isNaN(inputDate)){
          document.getElementById("date-error").innerHTML = "Entrer la date!";
          x++;

        }
       else  if(inputDate < minDate || inputDate > maxDate){
        document.getElementById("date-error").innerHTML="Vérifier la date entre(2000-2023) !";
        x++;
     }
    
    
     

     if(x==0){
    const formulair=document.getElementById("Myformule");
    
     const div_resultat=document.getElementById("div_affiche");
     const parg=document.createElement("p");
     const text_resultat="Email est : " + email + "<br>Téléphone est : " + tele
                         +"<br>Description est : "+desc+"<br>La date est : "+inputDate+"<br>";
                         
                         
    
           
      parg.innerHTML=text_resultat;  
      div_resultat.appendChild(parg);
      formulair.reset();   
     }


         


       
      x=0; 
    
  
  }