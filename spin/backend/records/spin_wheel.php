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
          Not Registered
        </div>
  
 <div class="bottom_menu">
  
  <div class="menu_button">
    <a class="nav-link  " href="home.php">Home</a>
  </div>


  
  <div class="menu_button">
    <a class="nav-link " href="data.php">Trivia</a>
  </div>

  <div class="menu_button active_menu_button">
    <a class="nav-link " href="data-s.php">Sweepstake</a>
  </div>

   <div class="menu_button active_menu_button">
    <a class="nav-link " href="spin_wheel.php">Spin Wheel</a>
  </div>
 
  <div class="menu_button  ">
    <a class="nav-link  " href="manage.php">Configure</a>
  </div>

 
</div>

<div class="home_dashboard">
<?php

$res_2=mysqli_query($connect,"SELECT * FROM player_oktoberfest  ORDER BY id DESC ") or die(mysqli_error($connect));
$count=mysqli_num_rows($res_2);
              ?>

              <table class="tbs table table-bordered" cellpadding="0" cellspacing="0">
                
                <thead>
                  <tr>
                    <th width="5%">#</th>                   
                   
                    <th  width="20%">Phone</th>
                    <th  width="20%">Prize</th>
                   
                    
                                        
                  </tr>
                </thead>
                <tbody>
                  <?php

$i=0;
if ($count>0) {
  while($row_2=mysqli_fetch_array($res_2))
            {
              $i++;
 //SELECT `staff`, `id`, `pin`, `uppy`, `attempt`, `category`, `accuracy`, `temp_accuracy`, `gems`, `points`, `fname`, `time_registered`, `date_registered`, `time_taken`, `temp_points`, `temp_time_taken`, `quiz_status`, `end_time`, `end_date`, `time_status`, `did_1`, `did_2`, `temp_gems`, `user_ans`, `prize`, `business`, `product`, `classification`, `consent` FROM `player_oktoberfest` WHERE 1           
              
              $fname = $row_2['staff'];
              $staff = $row_2['staff'];
              
              $prize = $row_2['prize'];
              $region = $row_2['region'];
            
             
            
              ?>
              <tr  >
                    <td><?php echo $i; ?></td>
             
                    <td style="text-align: left;"><?php echo $staff; ?></td>

                    <td  style="text-align: left;"><?php echo $prize; ?> </td>
                   
                
                </tr>
              <?php
          }
}
else
{
  ?>
              
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