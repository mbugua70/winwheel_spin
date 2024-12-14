<!DOCTYPE html>
<html>
<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>SCANNED</title>
    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
    <link href="https://cdn.datatables.net/v/dt/jszip-2.5.0/dt-1.13.4/b-2.3.6/b-html5-2.3.6/datatables.min.css" rel="stylesheet"/>
    <style type="text/css">

      html{
width:100%;
        height: 100%;
        margin: 0;
      }

    	 body{
        width:100%;
        height: 100%;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        background-image: url(dehhsktop.png);
        background-size: 100% 100%;

      }
      
            .tbs{
              background-color: #fff;
         width: 90%;
        padding-top: 120px;
        margin-left: auto;
        margin-right: auto;
      }
      caption{
        height: 100px;
        font-size: 40px;
        line-height:40px;
        line-height:100px;
        border-top-right-radius:5px;
        border-top-left-radius:5px;
        background-color: #4CAF50;
        font-weight: bold;
      }
      td{border: 1px solid #BDBDBD;
        height: 40px; text-align: center;}

        .red{
background-color: #E57373;
        }
        .green{
background-color: #66BB6A;
        }
        .yellow{
          background-color: #FFEE58;
        }
    </style>
</head>
<body>

	<?php
	require("connection.php");
$ACC=0;


$res_2=mysqli_query($connect,"SELECT * FROM player_registration_dealer  order by gift_status DESC  ") or die(mysqli_error($connect));
$count=mysqli_num_rows($res_2);
              ?>

              <table class="tbs" cellpadding="0" cellspacing="0">
              	<caption>RSVP </caption>
              	<thead>
              		<tr>
              			<th width="5%">#</th>
                    	
              			<th  width="20%">Name</th>
                    <th  width="20%">Email</th>
                    <th width="10%">Organisation</th>
                    <th  width="20%">Phone Number</th>
                    <th  width="20%">Dealer Code</th>
                    
                     <th width="10%">Date</th>
                    <!--<th width="10%">Entry Status</th>-->
                    <th width="10%">Gift Status</th>
                   
                        
                    
              		</tr>
              	</thead>
              	<tbody>
              		<?php

$i=0;
if ($count>0) {
	while($row_2=mysqli_fetch_array($res_2))
            {
              $i++;
            
              
              $fname = ucwords( $row_2['fname']);
             // $points = $row_2['marks'];
              $staff_id = $row_2['staff_id'];
              
              $organisation = $row_2['organisation'];
              $designation = $row_2['designation'];
              $confirm_status =$row_2['confirm_status'];
              $gift_status =$row_2['gift_status'];
              $phone_number =$row_2['phone_number'];

               $time_registered = $row_2['gift_time'];
              $date_registered = $row_2['gift_date'];

              $cls="";
              $g_cls="";
             
              if ($confirm_status==1) {
                $status="CONFIRMED";
                 $cls="green";
              }
              else{
                $status="-";
                 $cls="yellow";
              }

               if ($gift_status==1) {
                $g_status="GIVEN OUT";
                 $g_cls="green";
              }
              else{
                $g_status="-";
                 $g_cls="yellow";
              }
              
             
            
              ?>
              <tr  >
              			<td><?php echo $i; ?></td>
             
              			<td style="text-align: left;"><?php echo $fname; ?></td>
                    <td  style="text-align: left;"><?php echo $staff_id; ?></td>
                    <td  style="text-align: left;"><?php echo $organisation; ?></td>
                    <td  style="text-align: center;"><?php echo $phone_number; ?></td>
                   
                    
              			<td><?php echo $designation;?>  </td>

                  	<td><?php echo $date_registered; ?> at <?php echo $time_registered; ?></td>
                   <!-- <td class="<?php echo $cls; ?>"><?php echo $status;?>  </td>-->
                    <td class="<?php echo $g_cls; ?>"><?php echo $g_status;?>  </td>
                   
                 
                
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
//	echo $ACC;
              		 ?>
              		
              	</tbody>
              </table>
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