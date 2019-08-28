$(document).ready(function() {
    $('#Submit').click(function(){
		
        $("#enquiryForm").submit();
    });
    $("#enquiryForm").validate({
        rules: {
            name: {
                required: true,
				
           }, email: {
                required: true,
				email: true
           }, phone: {
                required: true,
				number: true
           }, password: {
                required: true
		    },cpassword: {
		      required: true,		
			  equalTo: "#password"
			}
     },
        messages: {
			 name: {
                 required: "<br/><span style='color:#FF0000;'>Please enter user name</span>",
                 
            },
            email: {
                 required: "<br/><span style='color:#FF0000;'>Please enter  email</span>",
                 email: "<br/><span style='color:#FF0000;'>Please enter a valid email</span>"
            },
            phone: {
                 required: "<br/><span style='color:#FF0000;'>Please enter phone number</span>",
                 number: "<br/><span style='color:#FF0000;'>Please enter a valid phone number</span>"
            },
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
                if(data == 'already'){
                  $("#err-msg").html('<div class="alert alert-success">Account already exist in our system</div>');
                   return false; 
                }
                if(data == 'added'){
					$('#enquiryForm')[0].reset();
                    $("#err-msg").html('<div class="alert alert-success"> Thank you for register with us. Please activate your account </div>');
                }
               
                                  
                }
            });
            return false;
        }
    });
}); 