function openNav() {
    document.getElementById("comparsa").style.width = "230px";
    document.getElementById("main").style.marginLeft = "230px";
    
  }
  
  function closeNav() {
    document.getElementById("comparsa").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    
  }

  $(document).ready(function() { 
      $("#barra-shop").animate({left:"20%", right:"20%"});
      $(".tipo").mouseover(function() {
        $("#prodotti").animate({paddingTop:"20%"});  
        $("#barra-shop").css("borderBottom","none");
      });
      $("#barra-shop").mouseleave(function() {
         $(".sottosez").css("display","none");
         $("#barra-shop").css("borderBottom","2px solid black");
         $("#prodotti").animate({paddingTop:"10%"});
      }); 
  });

  //CARICAMENTO
  /*
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
//OPPURE*/ 
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


/*SCROLL BARRA-SHOP */

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("barra-shop").style.top = "0";
    document.getElementById("barra-shop").style.position="fixed";
  } else {
    document.getElementById("barra-shop").style.top = "88px";
    document.getElementById("barra-shop").style.position="absolute";
  }
}

//Apertura sotto barre-shop

function apri1() {
  if (document.getElementById("sottosez1").style.display=="none") {
    document.getElementById("sottosez1").style.display="block";
    document.getElementById("sottosez4").style.display="none";
    document.getElementById("sottosez3").style.display="none";
    document.getElementById("sottosez2").style.display="none";
  }
  else document.getElementById("sottosez1").style.display="none";
}

function apri2() {
  if (document.getElementById("sottosez2").style.display=="none") {
    document.getElementById("sottosez2").style.display="block";
    document.getElementById("sottosez4").style.display="none";
    document.getElementById("sottosez3").style.display="none";
    document.getElementById("sottosez1").style.display="none";

  }
  else document.getElementById("sottosez2").style.display="none";
}
function apri3() {
  if (document.getElementById("sottosez3").style.display=="none") {
    document.getElementById("sottosez3").style.display="block";
    document.getElementById("sottosez4").style.display="none";
    document.getElementById("sottosez2").style.display="none";
    document.getElementById("sottosez1").style.display="none";

  }
  else document.getElementById("sottosez3").style.display="none";
}
function apri4() {
  if (document.getElementById("sottosez4").style.display=="none") {
    document.getElementById("sottosez4").style.display="block";
    document.getElementById("sottosez3").style.display="none";
    document.getElementById("sottosez2").style.display="none";
    document.getElementById("sottosez1").style.display="none";


  }
  else document.getElementById("sottosez4").style.display="none";
}

/*CARICA DOCUMENTO
var documenti = document.getElementsByClassName("prodotto");
  for (var i = 0; i < documenti.length; i++) {
    documenti[i].onclick = caricaDocumento;
}
function caricaDocumento(e) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = gestisciResponse;
  httpRequest.open("GET","Prodotti/"+ e.target.innerHTML + ".xml", true);
  httpRequest.send();
}
function gestisciResponse(e) {
  if (e.target.readyState == XMLHttpRequest.DONE && e.target.status == 200) {
    document.getElementById("prodotti").innerHTML= e.target.responseText;
  }
}*/