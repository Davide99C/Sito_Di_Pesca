function openNav() {
    document.getElementById("comparsa").style.width = "230px";
    document.getElementById("main").style.marginLeft = "230px";
    
  }
  
  function closeNav() {
    document.getElementById("comparsa").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    
  }

  function validateForm() {
  }

  function validateForm() {
    if (document.pass1.value != document.pass2.value) {
        alert("Errore: Nel campo di conferma password la password non corrisponde");
        return false;
    }
  }
  function controllaPsw() {
    if (document.pass1.value != document.pass2.value) {
        alert("Errore: Nel campo di conferma password la password non corrisponde");
        return false;
    }
  }

  //CARICAMENTO
window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);
//OPPURE 
(function(){   
  if (window.addEventListener)
  {
    window.addEventListener("load", nascondi_loading_screen, false);
    document.body.style.display="none";   
  }else{
    window.attachEvent("onload", nascondi_loading_screen);
  }
})();
function nascondi_loading_screen()
{
  document.getElementById("loading_screen").style.display = 'none';
}