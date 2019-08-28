jQuery(document).ready(function() {
     function reloadcapcha()
    {
        var randomnumber=Math.floor(Math.random()*99)
        $('#capchaimg').attr('src', 'CaptchaSecurityImages.php?width=100&height=40&characters=5&rand='+randomnumber)
    }
    $(document).ready(function() {
        var lastVisitedURL =  document.referrer;
        $('#lastvisiturl').val(lastVisitedURL);
    });
    jQuery("#contactfrm").validate({
        rules: {
            cname: {
                required: true
            },
            Orgname: {
                required: true
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
            security_code: {
                    remote: {
                    url: "contactus.php?task=checkcaptcha",
                    type: "post",
                    data: {security_code: function() {
                                    return $("form input[name=security_code]").val();
                              }
                              }	
                    }	,
                    required: true
            }
        },
        messages: {
            cname: {
                required: "<font color='red'>Please enter your name</font>"
            },
            Orgname: {
                required: "<font color='red'>Please enter your organization name</font>"
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
            security_code: {
                    required: "<font color='red'>Please enter security code</font>",
                    remote:"<font color='red'>Please type correct characters shown</font>"
            }
        },
        submitHandler: function()
        {
            $('#Submit').attr('disabled', true);

            $('#Submit').text('Submitting...');
            $('#contactfrm').ajaxSubmit({
                url: 'contactus.php?action=send',
                success: function(data)
                {
                    $('#contactfrm').find('input[type=text]').val('');
                    $('#contactfrm').find('input[type=email]').val('');
                    $('#contactfrm').find('input[type=tel]').val('');
                    $('#contactfrm').find('textarea').val('');
                    $('#Submit').val('Submit');
                    $('#capchaimg').attr('src', $('#capchaimg').attr('src'));
                    $('.CaptchaError').html('');
                    
                    $('#message_job').html('<div class="alert alert-success">Thanks for contacting us.\n Your queries will be answered soon.</div>');
                    $('#message_job').fadeOut( 4000 );
                    $('#Submit').text('Send Message');
                    $('#Submit').attr('disabled', false);

                }
            });
            return false;
        }
    });

}); 