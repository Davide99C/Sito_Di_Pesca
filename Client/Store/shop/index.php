<?php
require_once '../inc/init.php'; 

$page = 'homepage';
if(isset($_GET['page'])) {
  $page = $_GET['page'];
}
?>
<?php include ROOT_PATH . 'public/template-parts/header.php'; ?>

 
      <div class="main">
        <?php include ROOT_PATH . 'inc/alert-message.php'; ?>
        <?php include "pages/$page.php"; ?>
      </div>
    


<?php include ROOT_PATH . 'public/template-parts/footer.php'; ?>