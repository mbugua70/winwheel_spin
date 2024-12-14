<?php
require("connection.php");
$rawData = file_get_contents("php://input");

    // this returns null if not valid json
    $PP= json_decode($rawData,true);

	//print_r($PP);

	
$prize=$PP['player_marchandize'];
$pid=$PP['PID'];
$player_email=$PP['player_name'];
$player_phone=$PP['player_name'];

$sql="INSERT INTO `mbugua_spin` (  date_registered, time_registered, phone, fname,prize) VALUES(  '$date', '$time', '$player_phone','$player_email','$prize')";

$arr=array();

//echo $sql;

$resx=mysqli_query($connect,"$sql") or die(mysqli_error($connect)); 
$id=mysqli_insert_id($connect);
	if (mysqli_affected_rows($connect)>0) 
	{
		//$row=mysqli_fetch_array($resx);
		//$id=$row['id'];
	//	$sql="UPDATE commodities_sevens SET remaining_items=remaining_items-1 WHERE name='$prize' ";
	//	mysqli_query($connect,$sql); 

	$arr['id']=$id;
		//$result=$id;
	}
	else
	{
	 	$result="99";
		 $arr['id']=$result;
	}

	$json= json_encode($arr);
	echo $json;

//$result=str_replace(" ", "", $result);
//echo $result;
exit;