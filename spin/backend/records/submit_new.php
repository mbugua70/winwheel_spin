<?php
require("../scripts/connection.php");
$name=mysqli_real_escape_string ( $connect ,$_POST['name']);
$team=mysqli_real_escape_string ( $connect ,$_POST['team']);
$email=mysqli_real_escape_string ( $connect ,$_POST['email']);
$email=str_replace(" ", "", $email);
$resu=checkExists($email);
if($resu==0)
{

$en_name=encore($name);
  $en_staff_id=encore($email);


$res_2=mysqli_query($connect,"INSERT INTO `staff`( `name`, `staff_id`, `team`, `region`,staff_id_en,name_en) VALUES('$name', '$email','$team','NAIROBI','$en_name','$en_staff_id')") or die(mysqli_error($connect));

if (mysqli_affected_rows($connect)>0) 
		{
			echo 1;
			}
			else{
				echo 0;
			}
}
else{
	echo 2;
}


function checkExists($email){
	global $connect;
	$res_2=mysqli_query($connect,"SELECT * FROM staff where staff_id='$email'") or die(mysqli_error($connect));

if (mysqli_num_rows($res_2)>0) 
		{
			return 1;
			}
			else{
				return 0;
			}
}

function encore($plaintext)
{
    $key = 'mi naona ni kama ugali ni taku kushinda mboga'; // Previously generated safely, ie: openssl_random_pseudo_bytes 
 
//$plaintext = "String to be encrypted"; 
 
$ivlen = openssl_cipher_iv_length($cipher="AES-128-CBC"); 
//$iv = openssl_random_pseudo_bytes($ivlen); 
$ciphertext_raw = openssl_encrypt($plaintext, $cipher, $key, $options=OPENSSL_RAW_DATA, $iv); 
$hmac = hash_hmac('sha256', $ciphertext_raw, $key, $as_binary=true); 
 
// Encrypted string 
$ciphertext = base64_encode($hmac.$ciphertext_raw);

return $ciphertext;


}
