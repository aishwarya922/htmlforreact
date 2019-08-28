jQuery(document).ready(function() {
    jQuery("#enquiryForm").validate({
        rules: {
            name: {
                required: true,
                textOnly: true
            },
            organization: {
                required: true,
               
            },
            email: {
                required: true,
                email: true
            },
            Cnumber: {
                required: true,
                number: true,
				 minlength: 10
            },
            security_code: {
                    remote: {
                    url: "request.php?task=checkcaptcha",
                    type: "post",
                    data: {security_code: function() {
                                    return $("form input[name=security_code]").val();
                              }
                              }	
                    },
                    required: true
            }
			
           
        },
        messages: {
              name: {
                required: "<font color='red'>Please enter your name</font>",
                textOnly: "<font color='red'>Please enter valid name</font>"
            },
            organization: {
                required: "<font color='red'>Please enter your organization name</font>"
                
            },
            email: {
                required: "<font color='red'>Please enter your email</font>",
                email: "<font color='red'>Please enter a valid email</font>"
            },
            Cnumber: {
                required: "<font color='red'>Please enter contact number</font>",
                number: "<font color='red'>Phone number should be numeric</font>",
                minlength: "<font color='red'>Phone number should be of 10 digit</font>"
            },
            uploadresume: {
                required: "<font color='red'>Please upload your resume</font>",
                accept: "<font color='red'>Please upload a valid format like doc,docx,rtf,pdf </font>"
            },
            security_code: {
                    required: "<font color='red'>Please enter securiy code</font>",
                    remote:"<font color='red'>Please type correct characters shown</font>"
            }
        },
        submitHandler: function()
        {
            $('#Submit').attr('disabled', true);
           
            $('#enquiryForm').ajaxSubmit({
                url: 'career.php?action=send',
                success: function(data)
                {
                    $('#enquiryForm').find('input[type=text]').val('');
                    $('#enquiryForm').find('input[type=email]').val('');
                    $('#remarks').val('');
                   
                    $('#enquiryForm').find('input[type=file]').val('');
                   
                    $('#Submit').val('Submit');
                    alert('We have recieved your resume.\nWe will contact you soon.');
                    location.reload()();
                    $('#Submit').attr('disabled', false);
                }
            });
            return false;
        }
    });

}); 