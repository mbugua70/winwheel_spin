<?php 
require("../scripts/log.php");
require("../scripts/connection.php");
?>
<!DOCTYPE html>
<html>
<head>
<title>TIMES </title>
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
    <a class="nav-link active_menu_button " href="home.php">Home</a>
  </div>



 
</div>

<div class="home_dashboard">

<?php 
$rsvps=getCount('all','all');




?>
<p>
<div class="list-group list-group-horizontal">
 
   <a href="user_info.php" class="list-group-item list-group-item-action list-group-item-primary text-center"><?php echo $curr_user_name; ?></a>
</div>
</p>
         

			

					


				

		
        

         
				



					
				

					<table id="output" class="tbs table table-bordered" cellpadding="0" cellspacing="0">
   
 <?php

 $res_2=mysqli_query($connect,"SELECT region FROM `home_ba` WHERE 1") or die(mysqli_error($connect));
 while($row_2=mysqli_fetch_array($res_2))
            {
             
              $region = $row_2['region'];
              $tot =getCount('region',$region);

              ?>
             
                  <tr>
                   
                    <th  width="20%"><?php echo $region; ?></th>
                    <th  width="20%"><?php echo $tot; ?></th>
					<th  width="20%"> <a href="data.php?loc=<?php echo $region; ?>"  class="btn btn-success"> View</a></th>
        	<th  width="20%"> <a href="gifts.php?region=<?php echo $region; ?>"  class="btn btn-warning"> Merchandise</a></th>
          
        </tr>
           
              <?php
          }

$ACC=0;
?>
 </thead>
        </table>

				
				

		
   
    </div>


</div>
<script type="text/javascript" src="../js/jquery.js"></script>
<script type="text/javascript" src="../js/sweet.js"></script>

<script type="text/javascript">
$("#rsvps").click(function(e) {
	location.href="data.php";
})






$("#no_rsvp").click(function(e) {
	location.href="no-data.php";
})

$("#entry").click(function(e) {
	location.href="entry.php";
})

$("#booths").click(function(e) {
	location.href="booths.php";
})

$("#feedback").click(function(e) {
	location.href="feedback.php";
})


$("#gifts").click(function(e) {
	location.href="gifts.php";
})
</script>
</body>
</html>