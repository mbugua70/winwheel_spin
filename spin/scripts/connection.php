 <?php
$host_name="142.44.187.111";
$user_name="machakos_transporters";
$password="masaku sevens";
$database="admin_trivia"; 
    date_default_timezone_set('Africa/Nairobi');
               $date = date('d-m-Y');
               $time = date('H:i a');             
                $finalTime=$date."<br>".$time;
    $connect = mysqli_connect($host_name, $user_name, $password, $database);
    if (mysqli_connect_errno())
    {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }
 ?>