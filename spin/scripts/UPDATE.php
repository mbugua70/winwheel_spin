<?php
require("connection.php");
$rawData = file_get_contents("php://input");

    // this returns null if not valid json
    $PP= json_decode($rawData,true);

	//print_r($PP);

	
$prize=$PP['player_marchandize'];
$pid=$PP['userID'];


		//$row=mysqli_fetch_array($resx);
		//$id=$row['id'];
		$sql="UPDATE mbugua_spin SET prize='$prize' WHERE id='$pid' ";
		mysqli_query($connect,$sql); 

        $sql="UPDATE commodities_mbugua SET remaining_items=remaining_items-1 WHERE name='$prize' ";
		mysqli_query($connect,$sql); 

	

