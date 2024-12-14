<?php
require("connection.php");
$arr=array();

$res=mysqli_query($connect,"SELECT * FROM commodities_mbugua WHERE remaining_items>0 ORDER BY rank ASC") or die(mysqli_error($connect)); 

//$items=mysqli_num_rows($res);
if (mysqli_num_rows($res)>0) 
{
   

	$remaining_items;
    $num=0;
 while($row=mysqli_fetch_array($res))
 {
    $num++;
 
     $remaining_items[] = array(
      
      'image' => "1.png",
      'gift_number' => "$num",
      'text' => $row['name'],
      'fillStyle' => $row['fillStyle'],
      'strokeStyle' => "#FFFFFF",
      'textFillStyle' => "#FFFFFF"
   );

  
    // shuffle($remaining_items);
   
//	$remaining_items[]=$row; 	
 }
 $arr['data']=$remaining_items;

//print_r($remaining_items);
//echo json_encode($remaining_items);
$json= json_encode($arr);



echo $json;
}
else
{
//	$result= -2;//user exists on the dbb
echo "Null";
}




