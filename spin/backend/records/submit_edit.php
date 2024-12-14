<?php
require("../scripts/connection.php");
$id=mysqli_real_escape_string ( $connect ,$_POST['id']);
$name=mysqli_real_escape_string ( $connect ,$_POST['name']);
$email=mysqli_real_escape_string ( $connect ,$_POST['email']);
$team=mysqli_real_escape_string ( $connect ,$_POST['team']);
$res_2=mysqli_query($connect,"UPDATE staff SET team='$team',name='$name', staff_id='$email'  where id='$id'") or die(mysqli_error($connect));

if (mysqli_affected_rows($connect)>0) 
		{
			echo 1;
			}
			else{
				echo 0;
			}

