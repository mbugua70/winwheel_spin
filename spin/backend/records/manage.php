<?php 
require("../scripts/log.php");
require("../scripts/connection.php");

 
?>
<!DOCTYPE html>
<html>
<head>
<title>Spin The Wheel </title>
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
    <a class="nav-link " href="data.php">Trivia</a>
  </div>

  <div class="menu_button">
    <a class="nav-link " href="data-s.php">Sweepstake</a>
  </div>
 
  <div class="menu_button active_menu_button">
    <a class="nav-link  " href="manage.php">Configure</a>
  </div>

 
 
</div>

<div class="home_dashboard">
       
<table class="table" style="width: 100%">
  <thead>
    <tr class="table-danger">
      <td>Name</td>
      <td>Location</td>
      <td>Quantity</td>
      <td>Action</td>
    </tr>
  </thead>
   
            <?php $res=mysqli_query($connect,"SELECT *  FROM merchandise  ORDER BY region ASC") or die(mysqli_error($connect)); 
//WHERE region='$sent_loc'
            while($row=mysqli_fetch_array($res))
 {
    $name=$row['name'];
    $id=$row['id'];
    $amount_remaining=$row['amount_remaining'];
    $pic=$row['name'];
    $region=$row['region'];
    ?>
<tr>
        <td><?php echo strtoupper(str_replace("_"," ",$name)); ?></td>
        <td><?php echo strtoupper(str_replace("_"," ",$region)); ?></td>
        <td>
          <input class="input form-control" id="input_<?php echo $id; ?>" value="<?php echo $amount_remaining; ?>" type="number" name="numz[]"></td>
        <td ><button id="btn_<?php echo $id; ?>" onclick="saveMerch(<?php echo $id; ?>,'<?php  echo $name; ?>','<?php echo  $region; ?>')" class="btn btn-success btn-lg update_merch" >Update</button></td>

         
    </tr>
    <?php
 }

            ?>
            <tr>
                
                
            </tr>

            </table>
         
        
    


    

</body>


</div>
<script
  src="https://code.jquery.com/jquery-3.7.0.min.js"
  integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g="
  crossorigin="anonymous"></script>

<script type="text/javascript" src="../js/sweet.js"></script>


<script type="text/javascript">
  

 

 





  function saveMerch(id,name,place){

   amount_remaining=$("#input_"+id).val();  

 data = "id=" + id+"&amount_remaining=" + amount_remaining ;


           

                     swal({
   title: "Update "+ name +" AT "+ place+"?",
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
                url: "update_merch.php",
                data: data,
                dataType: 'json',
                timeout:5000,


                beforeSend: function() {
                    $('#btn_'+id).html('Updating <i class="fa fa-spinner fa-spin"></i>').prop('disabled', true);

                },
                success: function(response, textStatus, jqXHR) {
                  
                   
                    if (response == 1) {
                       // $('#login_button').text('Loggin in...');

                    $('#btn_'+id).html('Done <i class="fa fa-check"></i>').prop('disabled', false);

                    } else if (response == 0) {

                      $('#btn_'+id).html('Failed <i class="fa fa-times"></i>').prop('disabled', false);

                      
                    }
                      else {
                         $('#btn_'+id).html('Failed E <i class="fa fa-times"></i>').prop('disabled', false);

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