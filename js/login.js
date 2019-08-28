$(document).ready(function() {
    $('#Submit').click(function(){
		
        $("#loginForm").submit();
    });
    $("#loginForm").validate({
        rules: {
           email: {
                required: true,
				email: true
            }, password: {
              required: true
		    }
     },
        messages: {
			
            email: {
                 required: "<br/><span style='color:#FF0000;'>Please enter  email</span>",
                 email: "<br/><span style='color:#FF0000;'>Please enter a valid email</span>"
            },
            password: {
                 required: "<br/><span style='color:#FF0000;'>Please enter password</span>",
                 
            }
			
        },
        submitHandler: function()
        {
          
            $('#loginForm').ajaxSubmit({
                url: 'users.php?action=' + $("#action").val(),
                success: function(data)
                {  
				
                if(data == 'account'){
                  $("#err-msg").html('<div class="alert alert-danger">Please activate your account</div>');
                   return false; 
                }if(data == 'done'){
                 window.location.href = 'job-opportunities.php';
				
                }
                                  
                }
            });
            return false;
        }
    });
}); 