$(document).ready(function() {
    $('#Submit').click(function(){
		
        $("#enquiryForm").submit();
    });
    $("#enquiryForm").validate({
        rules: {
           password: {
                required: true
		    },cpassword: {
		      required: true,		
			  equalTo: "#password"
			}
     },
        messages: {
			
            password: {
                 required: "<br/><span style='color:#FF0000;'>Please enter password</span>",
                 
            }, cpassword: {
                 required: "<br/><span style='color:#FF0000;'>Please enter confirm password</span>",
                 equalTo: "<br/><span style='color:#FF0000;'>Please enter the same password again</span>",
                 
            }
			
        },
        submitHandler: function()
        {
          
            $('#enquiryForm').ajaxSubmit({
                url: 'users.php?action=' + $("form input[name=action]").val(),
                success: function(data)
                {   
                if(data == 'fail'){
                  window.location.href = 'forgot-password.php' ;
				  $("#err-msg").html('<div class="alert alert-danger">Something went wrong </div>');
				   return false;
                }
                if(data == 'reset'){
					$('#enquiryForm')[0].reset();
                    $("#err-msg").html('<div class="alert alert-success"> Password successfully upadated </div>');
                }
               
                                  
                }
            });
           
        }
    });
}); 