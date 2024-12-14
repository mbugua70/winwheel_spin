<?php 
require("../scripts/log.php");
require("../scripts/connection.php");
?>
<!DOCTYPE html>
<html>
<head>
<title>Registration </title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="../css/style.css">
<link rel="stylesheet" href="../css/bootstrap.min.css">
</head>

<body>

<div class="app_wrapper">

<div class="category_title" id="category_title">
          Registered
        </div>
  
 <div class="bottom_menu">
  
  <div class="menu_button">
    <a class="nav-link  " href="home.php">Home</a>
  </div>


  <div class="menu_button">
    <a class="nav-link " href="data.php">All</a>
  </div>
 
  <div class="menu_button ">
    <a class="nav-link  " href="no-data.php">Not-Registered</a>
  </div>

  <div class="menu_button">
    <a class="nav-link active_menu_button " href="entry.php">Registered</a>
  </div>

  <div class="menu_button">
    <a class="nav-link " href="gifts.php">Vouchers</a>
  </div>
 
</div>

<div class="home_dashboard">


  <?php

$ACC=0;


$res_2=mysqli_query($connect,"SELECT * FROM staff WHERE confirm_status=1   order by name ASC  ") or die(mysqli_error($connect));
$count=mysqli_num_rows($res_2);


              ?>

              <table class=" tbs table table-bordered" cellpadding="0" cellspacing="0">
                
                <thead>
                  <tr>
                    <th width="5%">#</th>                   
                    <th  width="20%">Name</th>
                    <th  width="20%">Staff ID</th>
                    <th width="10%">Team</th>
                    <th  width="20%">Region</th>
                    <th  width="20%">Terms</th>
                    <th width="10%">Date</th>
                    
                                        
                  </tr>
                </thead>
                <tbody>
                  <?php

$i=0;
if ($count>0) {
  while($row_2=mysqli_fetch_array($res_2))
            {
              $i++;
            
              
              $fname = ucwords( $row_2['name']);
             // $points = $row_2['marks'];
              $staff_id = $row_2['staff_id'];
              
              $staff_id = $row_2['staff_id'];
              
              $organisation = $row_2['team'];
              $designation = $row_2['region'];
              $confirm_status =$row_2['confirm_status'];
              $gift_status =$row_2['gift_status'];
              $phone_number =$row_2['region'];

               $time_registered = $row_2['confirm_time'];
              $date_registered = $row_2['confirm_date'];

              $confirm_mode = $row_2['confirm_mode'];
$cls="";
              if($confirm_mode=="ACCEPT")
              {
$cls="table-success";
              }
              else if($confirm_mode=="REJECT")
              {
$cls="table-danger";
              }

           
             
            
              ?>
              <tr  class="<?php echo $cls; ?>">
                    <td><?php echo $i; ?></td>
             
                    <td style="text-align: left;"><?php echo $fname; ?></td>
                    <td  style="text-align: left;"><?php echo $staff_id; ?></td>
                    <td  style="text-align: left;"><?php echo $organisation; ?></td>
                    <td  style="text-align: center;"><?php echo $phone_number; ?></td>
                     <td  style="text-align: center;"><?php echo $confirm_mode."ED"; ?></td>
                   
                  

                    <td><?php echo $date_registered; ?> at <?php echo $time_registered; ?></td>
                   
                
                </tr>
              <?php
          }
}
else
{
  ?>
              <tr>
                    <td colspan="6">No Entries</td>
                    
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
         "aaSorting": [0],
         paging: false,
        buttons: [
           
            'excelHtml5',
            
        ]
    } );
} );
</script>





</body>
</html>