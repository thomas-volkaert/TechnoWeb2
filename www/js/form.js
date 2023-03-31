var nom = document.getElementById("nom");
var prenom = document.getElementById("prenom");
var date_naissance = document.getElementById("dateN");
var nom_utilisateur = document.getElementById("usrname");
var mot_passe = document.getElementById("pwd");
var eMail = document.getElementById("email");

window.addEventListener("input", estVideNom);
window.addEventListener("load", estVideNom);

function estVideNom() 
{
    if (nom.value == "")
    {
        nom.style.background ='red';
    } else if (nom.value != "")
    {
        nom.style.background ='white';
    }
}

window.addEventListener("input", estVidePrenom);
window.addEventListener("load", estVidePrenom);

function estVidePrenom() 
{
    if (prenom.value == "")
    {
        prenom.style.background ='red';
    } else if (prenom.value != "")
    {
        prenom.style.background ='white';
    }
}

window.addEventListener("input", estVideMdp);
window.addEventListener("load", estVideMdp);

function estVideMdp() 
{

    var mdp = document.getElementById("userpwd").value ; 
    const maj = /[A-Z]/g;
    const min = /[a-z]/g;
    const minChiffre = /[0-9]/g;
   
    if ( (mdp.length > 8) && (mdp.match(maj)) && (mdp.match(min)) && (mdp.match(minChiffre)) )
    {
        mot_passe.style.background ='white' ;
    }
    else 
    {
        mot_passe.style.background ='red' ;
    }

}

window.addEventListener("input", estVideDate);
window.addEventListener("load", estVideDate);

function estVideDate()
{
    var date1 = document.getElementById("birthdate").value;
    var divisiondate = date1.split('/');
    var verif = new Date(divisiondate[2],divisiondate[1],divisiondate[0]);
    if (date_naissance.value =="")
    {
        date_naissance.style.background ='white';
    }
    else if ((verif.getDate() != divisiondate[0]) && (verif.getMonth() != divisiondate[1]) && (verif.getFullYear() != divisiondate[2]))
    {
        date_naissance.style.background ='red';
    }
    else 
    {
        date_naissance.style.background ='white';
    }
}

window.addEventListener("input", estVideUtilisateur);
window.addEventListener("load", estVideUtilisateur);

function estVideUtilisateur()
{
    var pseudo = document.getElementById("username").value;

    if(pseudo. length < 6)
    {
        nom_utilisateur.style.background ='red';
    }
    else
    {
        nom_utilisateur.style.background = 'white';
    }
}

window.addEventListener("input", estVideEmail);
window.addEventListener("load", estVideEmail);

function estVideEmail()
{
    var test_email = document.getElementById("useremail").value ;

    var structure = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})/ ;
    
    if (test_email.match(structure))
    {
        eMail.style.background = 'white';
    }
    else 
    {
        eMail.style.background = 'red';
    }
}

