jQuery(document).ready(function() {
    jQuery("#careerfrm").validate({
        rules: {
            cname: {
                required: true,
                textOnly: true
            },
            Email: {
                required: true,
                email: true
            },
            Phone: {
                required: true,
                number: true,
                minlength: 10
            },
            functionalarea: {
                required: true
            },Other_functionalarea:{
                required: function(element){
                    return ($("#functionalarea").val() == 'Others');
                }
            },
            Position: {
                required: true
            },
            Other_Position: {
                required: function(element){
                    return ($("#Position").val() == 'Other');
                }
            },
            file: {
                required: true,
                accept: 'doc|docx|rtf|pdf'
            },
            security_code: {
                    remote: {
                    url: "career.php?task=checkcaptcha",
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
            cname: {
                required: "<font color='red'>Please enter your name</font>",
                textOnly: "<font color='red'>Please enter valid name</font>"
            },
            Email: {
                required: "<font color='red'>Please enter your email</font>",
                email: "<font color='red'>Please enter a valid email</font>"
            },
            Phone: {
                required: "<font color='red'>Please enter contact number</font>",
                number: "<font color='red'>Phone number should be numeric</font>",
                minlength: "<font color='red'>Phone number should be of 10 digit</font>"
            },
            functionalarea: {
                required: "<font color='red'>Please select your functional area</font>"
            },
            Other_functionalarea: {
                required: "<font color='red'>Please enter other functional area</font>"
            },
            Position: {
                required: "<font color='red'>Please select your position</font>"
            },
            Other_Position: {
                required: "<font color='red'>Please enter other position</font>"
            },
            file: {
                required: "<font color='red'>Please upload your resume</font>",
                accept: "<font color='red'>Please upload a valid format</font>"
            },
            security_code: {
                    required: "<font color='red'>Please enter security code</font>",
                    remote:"<font color='red'>Please type correct characters shown</font>"
            }
        },
        submitHandler: function()
        {
            $('#Submit').attr('disabled', true);
            $('button#Submit').text('Sending...');
            $('#careerfrm').ajaxSubmit({
                url: 'career.php?action=send',
                success: function(data)
                {
                    $('#careerfrm').find('input[type=text]').val('');
                    $('#careerfrm').find('input[type=email]').val('');
                    $('#careerfrm').find('input[type=tel]').val('');
                    $('#careerfrm').find('input[type=file]').val('');
                    $('#careerfrm').find('select').val('');
                    $('#careerfrm').find('input[name=Other_Position]').css('display','none');
                    $('#Submit').val('Submit');
                    reloadcapcha();
                    $('#message_job').html('<div class="alert alert-success">We have recieved your resume.\nWe will contact you soon.</div>');
                    $('#message_job').fadeOut( 4000 );
                    $('button#Submit').text('Send');
                    $('#Submit').attr('disabled', false);
                }
            });
            return false;
        }
    });

}); 