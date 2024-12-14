<?php 
require("../scripts/log.php");
require("../scripts/connection.php");
$loc="";
$sql="";
if (isset($_GET['loc'])) {
  $loc=$_GET['loc'];
  $sql="SELECT * FROM player_legal_week WHERE category='$loc'  order by id DESC  ";
}
else{
  $sql="SELECT * FROM player_legal_week   order by id DESC   ";
}
?>
<!DOCTYPE html>
<html>
<head>
<title>Participants </title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="../css/style.css">
<link rel="stylesheet" href="../css/bootstrap.min.css">
</head>

<body>

<div class="app_wrapper">

<div class="category_title" id="category_title">
          All 
        </div>
  
 <div class="bottom_menu">
  
  <div class="menu_button">
    <a class="nav-link  " href="home.php">Home</a>
  </div>


 
 



</div>

<div class="home_dashboard">


  <?php

$ACC=0;

//echo $sql;

$res_2=mysqli_query($connect,$sql) or die(mysqli_error($connect));
$count=mysqli_num_rows($res_2);
              ?>

              <table class="tbs table table-bordered" cellpadding="0" cellspacing="0">
                
                <thead>
                  <tr>
                    <th width="5%">#</th>                   
                    <th  width="20%">Name</th>
                    <th  width="20%">Phone</th>
                   <th  width="20%">Prize</th> 
                  

                       <th width="10%">Date</th>
                       <th width="10%">Time</th>
                    
                    
                                        
                  </tr>
                </thead>
                <tbody>
                  <?php

$i=0;
if ($count>0) {
  while($row_2=mysqli_fetch_array($res_2))
            {
              $i++;
            
              
             // $points = $row_2['marks'];
              $staff = $row_2['staff'];
              $prize = $row_2['prize'];
              $fname = $row_2['fname'];
    

              $date_registered = $row_2['date_registered'];
              $time_registered = $row_2['time_registered'];


             
              
            
              ?>
              <tr  >
                    <td><?php echo $i; ?></td>
                    <td style="text-align: left;"><?php echo $fname; ?></td>
                    <td style="text-align: left;"><?php echo $staff; ?></td>
                   
                    <td style="text-align: left;"><?php echo $prize; ?></td>
                   
                  

                   
                     <td style="text-align: left;"><?php echo $date_registered; ?></td>
                     <td style="text-align: left;"><?php echo $time_registered; ?></td>
                   
                   
                
                </tr>
              <?php
          }
}
else
{
  ?>
              <tr>
                    <td colspan="6">No Participants</td>
                    
                </tr>
              <?php
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