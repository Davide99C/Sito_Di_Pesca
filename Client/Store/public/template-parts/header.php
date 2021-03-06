<?php
// Prevent from direct access
if (! defined('ROOT_URL')) {
  die;
}

//VARIABILI GLOBALI
$nome = $_GET['nome'];
$cognome = $_GET['cognome'];
$email = $_GET['email'];
$immagine = $_GET['immagine'];

$_GLOBALS['URL_USER'] = "?nome=$nome&cognome=$cognome&email=$email&immagine=$immagine";
global $loggedInUser;

?>

<!DOCTYPE html>
<html >

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title><?php echo SITE_NAME; ?></title>
  <link rel="stylesheet" href="../pages/homepage.css">
  <link rel="stylesheet" href="../../aux.css">
  <link rel="stylesheet" href="<?php echo ROOT_URL; ?>public/pages/homepage.css">
  <link rel="stylesheet" href="<?php echo ROOT_URL; ?>shop/pages/cart.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">


  
</head>

<body>
    <header id="menu">
        <ul id="menu-1">
        <li></a> 
            <a id="hamb" href="#" onclick="openNav()">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
            </a>
            <div id="comparsa" class="men">   
                <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;    </a>
                <a href="../../index.html<?php echo $_GLOBALS['URL_USER']?>" role="button" class="btn"> HOME                       </a><br>
                <a href="../../Gofishing/gofishing.html<?php echo $_GLOBALS['URL_USER']?>" role="button" class="btn"> GO FISHING   </a><br>
                <a href="../../Galleria/galleria.html<?php echo $_GLOBALS['URL_USER']?>" role="button" class="btn"> GALLERIA       </a><br>
                <a href="../../Faq/faq.html<?php echo $_GLOBALS['URL_USER']?>" role="button" class="btn" > FAQ                     </a><br>
                <a href="../../ChiSiamo/chisiamo.html<?php echo $_GLOBALS['URL_USER']?>" role="button" class="btn"> CHI SIAMO      </a>   
            </div>
        </li>
        </ul>
        <ul id="menu-center">
            <a href="../../index.html<?php echo $_GLOBALS['URL_USER']?>" role="button" class="img"> <img src="../../img/logo.png"></a>
        </ul>  
        <ul id="menu-2">
            <a href="../../Login/login.html" role="button" class="btn"><img class="img-accedi" src="../../img/44948.png" style="height:20px; width:20px;">&nbspACCEDI </a> 
        </ul>
    </header>

    <script>
      function openNav() {
        if(window.matchMedia("(max-width: 900px)").matches) {
          document.getElementById("comparsa").style.width = "100%";
          document.getElementById("main").style.marginLeft = "0%";
          document.getElementById("comparsa").style.zIndex='4';
        }
        else {
          document.getElementById("comparsa").style.width = "230px";
          document.getElementById("main").style.marginLeft = "230px";
        }
        
      }

      function closeNav() {
        document.getElementById("comparsa").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        
      }
      </script>




