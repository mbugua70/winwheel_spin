<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
  <title>Login</title>


<link rel="stylesheet" href="css/bootstrap.min.css">

<style type="text/css" media="screen">
html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}  
</style>
</head>
<body class="text-center">

  
    <form class="form-signin" id="new_game">
 <!-- <img class="img-fluid" class="mb-4" src="log.png" alt=""> -->
  <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
  <label for="phone" class="sr-only">Phone</label>
  <input type="text" id="phone" name="phone" class="form-control" placeholder="Username" required autofocus>
  <label for="password" class="sr-only">Password</label>
  <input type="password" id="password" name="password" class="form-control" placeholder="Password" required>
  
  <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
  <p class="mt-5 mb-3 text-muted">&copy; MM</p>
</form>




</body>
</html>

<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/sweet.js"></script>
<script type="text/javascript">
 

 $('#new_game').submit(function(e){
    e.preventDefault();

username=$("#phone").val();
password=$("#password").val();

 	 if (username=="") {
 	swal("Please enter Your phone Number", "Please input your phone number" , "error");	
 	}
 	else if (password=="") {
 	swal("Please enter Password", "Please input your password" , "error");	
 	}

 	else
 	{
 	     serialized=$("#new_game").serialize();
        $.ajax({
            type: "POST",
            url: "scripts/login_processor.php",
            data: serialized,
             dataType: 'json',
            beforeSend:  function() {
            //$('#bounce').show('fast');
           
            },
            success: function(server_response)
            {
              
              response=server_response.response;
              console.log(response);
    if (response==1)  
        {    
       
    swal("Login Success", "" , "success");
            setTimeout(function(){ 
              ut=server_response.ut;
              
               if (ut=="AD")  
              {
                location.href="records/home.php";
              }
              else
              {
                 location.href="index.php";
              }
          
      },1000);


        }
        else if(response==0) 
        {
          swal("Invalid Credentials", "" , "error");
        }
      
      else if(response==2) 
        {
          swal("No Games Assigned", "Please ask team leader to assign you a game" , "error");
        }
        else  
        {
          swal("Something went wrong ", "We have a small issue on our end. Please try again later" , "error");
        }
      }
      });

 	}


});


</script>
