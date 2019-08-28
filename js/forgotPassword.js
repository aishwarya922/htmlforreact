$(document).ready(function() {
    $('#Submit').click(function(){
		
        $("#enquiryForm").submit();
    });
    $("#enquiryForm").validate({
        rules: {
            email: {
                required: true,
				email: true
           }
        },
        messages: {
			email: {
                 required: "<br/><span style='color:#FF0000;'>Please enter  email</span>",
                 email: "<br/><span style='color:#FF0000;'>Please enter a valid email</span>"
            }
        },
        submitHandler: function()
        {
          
            $('#enquiryForm').ajaxSubmit({
                url: 'users.php?action=' + $("form input[name=action]").val(),
                success: function(data)
                {   
                  if(data == 'account'){
                   $("#err-msg").html('<div class="alert alert-danger">Please activate your account</div>');
                   return false; 
                }if(data == 'done'){
					window.location.href = 'resetPassword.php' ;
				}
                }
            });
            return false;
        }
    });
}); 