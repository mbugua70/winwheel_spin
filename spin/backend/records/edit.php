<?php 
require("../scripts/log.php");
require("../scripts/connection.php");
?>
<!DOCTYPE html>
<html>
<head>
<title>RSVPS </title>
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
    <a class="nav-link  " href="home.php">Home</a>
  </div>


  <div class="menu_button">
    <a class="nav-link " href="data.php">Rsvps</a>
  </div>
 
  <div class="menu_button active_menu_button">
    <a class="nav-link  " href="no-data.php">No-Rsvp</a>
  </div>

  <div class="menu_button">
    <a class="nav-link  " href="entry.php">Entry</a>
  </div>

  <div class="menu_button">
    <a class="nav-link " href="gifts.php">Gifts</a>
  </div>

 
</div>

<div class="home_dashboard">
<?php

$id=$_GET['id'];
$res_2=mysqli_query($connect,"SELECT * FROM staff where id='$id'") or die(mysqli_error($connect));

$row_2=mysqli_fetch_array($res_2);
$staff_id = $row_2['staff_id'];
$name = $row_2['name']; 
$team = $row_2['team']; 


?>

              <table class="table table-bordered" cellpadding="0" cellspacing="0">
                
                <tbody>
                  <tr>
                 
                 <td><input  value="<?php echo $name; ?>"   class="c_holder form-control input input-lg" name="name"  placeholder=" name"  type="text" id="name" /></td> 
                </tr>
                <tr>
                
                 <td><input value="<?php echo $staff_id; ?>" class="c_holder form-control input input-lg" placeholder="Staff ID" type="text" name="email" id="email" /></td> 

                 <input type="hidden" value="<?php echo $id; ?>" id='id' name="id">
                </tr>

                


                <td>
                     <select id="team" name="team" class="c_holder form-control input input-lg">
                         <option value="<?php echo $team; ?>"><?php echo $team; ?></option>
                         <option value="BODY">BODY</option>
                         <option value="SOUL">SOUL</option>
                         <option value="MIND">MIND</option>
                         <option value="HEART">HEART</option>
                     </select>
                 </td> 

                <tr>
                 
                 <td><button class="c_button btn btn-lg btn-success" type="button" onclick="saveDetails()">Save</button></td> 
                </tr>
                    
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

<script type="text/javascript" src="../js/sweet.js"></script>


<script type="text/javascript">
    function saveDetails(){

     email= $("#email").val();
     name= $("#name").val();
     team= $("#team").val();
     id= $("#id").val();

 data = "name=" + name + "&email=" + email+ "&id=" + id+ "&team=" + team;
           

                     swal({
   title: "Change Details?",
  text: "",   
  
 buttons:{
  cancel: {
    text: "No, Cancel",
    value: null,
    visible: true,
    className: "",
    closeModal: true,
  },
  confirm: {
    text: "Yes, Update",
    value: true,
    visible: true,
    className: "",
    closeModal: true
  }
},
  dangerMode: false,
})
.then(function(willDelete){
  if (willDelete) {  


 $.ajax({
                type: "POST",
                url: "submit_edit.php",
                data: data,
                dataType: 'json',
                timeout:5000,


                beforeSend: function() {
                    $('#login_button').addClass('loading');
                    $("#login_button").attr("disabled", "disabled");
                    $('#login_button').text('Checking...');

                },
                success: function(response, textStatus, jqXHR) {
                  
                   
                    if (response == 1) {
                       // $('#login_button').text('Loggin in...');

                         swal("Success", "");
                         setTimeout(function(args) {
                           location.href="manage.php";
                         }, 1000)
                         
                       

                    } else if (response == 0) {
                        $('#login_button').text('Login');
                        swal("Failed", "Details Not Changed");
                    } else {
                        $('#login_button').text('Login');
                        swal("Something went wrong ", "We have a small issue on our end. Please try again later " + response, "error");
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    $("#login_button").removeClass("loading");
                   
                    if (textStatus=="timeout") {
                        swal("Timeout", "Took too long to reach the server", "error");
                    }
                    else
                    {

                        swal("Login error", "Could not connect to the server", "error");  
                    }
                    
                }

            });



  }

})


}
</script>


</body>
</html>