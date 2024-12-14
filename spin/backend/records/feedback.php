<?php 
require("../scripts/log.php");
require("../scripts/connection.php");
?>
<!DOCTYPE html>
<html>
<head>
<title>RSVPS </title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="../css/style.css">
<link rel="stylesheet" href="../css/bootstrap.min.css">
</head>

<body>

<div class="app_wrapper">

<div class="category_title" id="category_title">
          Home
        </div>
  
 <div class="bottom_menu">
  
  <div class="menu_button">
    <a class="nav-link  " href="home.php">Home</a>
  </div>


 
  <div class="menu_button">
    <a class="nav-link " href="data.php">Rsvps</a>
  </div>
 
  <div class="menu_button ">
    <a class="nav-link  " href="no-data.php">No-Rsvp</a>
  </div>

  <div class="menu_button">
    <a class="nav-link  " href="entry.php">Entry</a>
  </div>

  <div class="menu_button">
    <a class="nav-link " href="gifts.php">Gifts</a>
  </div>
 
</div>

<div class="home_dashboard">
    <?php
$res_3=mysqli_query($connect,"SELECT * FROM saff_dealer_feedback   ") or die(mysqli_error($connect));
$count_3=mysqli_num_rows($res_3);
   ?> 
  <table class="<?php if($count>0){ ?> tbs <?php } ?> table table-bordered" cellpadding="0" cellspacing="0">
                <thead>
             <tr>
<th  >#</th>
<th  >On a scale of 1 to 10, how do you rate this event</th>
<th  >How can Safaricom improve its engagement?</th>
<th  >What is the one thing that has stood out for you from this session?</th>

<th  >What did we do well?</th>
<th  >What should we do better?</th>
 
 </tr> 

 </thead>  
 <tbody>
           
                

                  <?php

$i=0;
if ($count_3>0) {
  while($row_3=mysqli_fetch_array($res_3))
            {
              $i++;
            
             
              $enjoyed = $row_3['enjoyed'];
              $do_better = $row_3['do_better'];
              $rating = $row_3['rating'];
              $presentations = $row_3['presentations'];              
              $experiential = $row_3['how'];
              $how_can = $row_3['how_can'];
              $stood_out = $row_3['stood_out'];
              $security = $row_3['security'];
             // $confirm_status = 0;//$row_2['confirm_status'];            
              ?>
              <tr>
<td  ><?php echo $i; ?></td>
<td  ><?php echo $rating; ?></td>
<td  ><?php echo $how_can; ?></td>
<td  ><?php echo $stood_out; ?></td>

 <td  ><?php echo $enjoyed; ?></td>
<td  ><?php echo $do_better; ?></td>
 
 </tr>
             
              <?php
          }
}

//  echo $ACC;
                   ?>
               
                  
</tbody>
                
              </table>
              </div>
<script
  src="https://code.jquery.com/jquery-3.7.0.min.js"
  integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g="
  crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/pdfmake.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/vfs_fonts.js"></script>
<script src="https://cdn.datatables.net/v/dt/jszip-2.5.0/dt-1.13.4/b-2.3.6/b-html5-2.3.6/datatables.min.js"></script>

<script type="text/javascript">
  
$(document).ready(function() {
    $('.tbs').DataTable( {
        dom: 'Bfrtip',
         "aaSorting": [],
         paging: false,
        buttons: [
           
            'excelHtml5',
            
        ]
    } );
} );
</script>





</body>
</html>