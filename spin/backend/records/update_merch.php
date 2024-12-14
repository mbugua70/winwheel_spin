<?php
require("../scripts/connection.php");
$id=mysqli_real_escape_string ( $connect ,$_POST['id']);
$amount_remaining=mysqli_real_escape_string ( $connect ,$_POST['amount_remaining']);

$res_2=mysqli_query($connect,"UPDATE commodities_legal_week SET remaining_items='$amount_remaining'  WHERE id='$id'") or die(mysqli_error($connect));

if (mysqli_affected_rows($connect)>0) 
		{
			echo 1;
			}
			else{
				echo 0;
			}

