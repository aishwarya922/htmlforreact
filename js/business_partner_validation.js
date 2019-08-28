jQuery(document).ready(function() {
    jQuery("#business_partnerfrm").validate({
        rules: {
            organizationtxt: {
                required: true
            },
            cnametxt: {
                required: true
            },
            designationtxt: {
                required: true
            },
            emailtxt: {
                required: true,
                email: true
            },
            phonetxt: {
                required: true,
                number: true,
                minlength: 10
            },
            locationtxt: {
                required: true
            },
            websitetxt: {
                required: true,
                url: true
            },
            producttxt: {
                required: true
            },
            security_code: {
                    remote: {
                    url: "../partners.php?task=checkcaptcha",
                    type: "post",
                    data: {
                                security_code: function() {
                                return $("form input[name=security_code]").val();
                              }
                        }	
                    },
                    required: true
            }
        },
        messages: {
            organizationtxt: {
                required: "<font color='red'>Please enter your organization name</font>"
            },
            cnametxt: {
                required: "<font color='red'>Please enter contact person name</font>"
            },
            designationtxt: {
                required: "<font color='red'>Please enter your designation</font>"
            },
            emailtxt: {
                required: "<font color='red'>Please enter your email</font>",
                email: "<font color='red'>Please enter a valid email</font>"
            },
            phonetxt: {
                required: "<font color='red'>Please enter contact number</font>",
                number: "<font color='red'>Phone number should be numeric</font>",
                minlength: "<font color='red'>Phone number should be of 10 digit</font>"
            },
            locationtxt: {
                required: "<font color='red'>Please enter your location</font>"
            },
            websitetxt: {
                required: "<font color='red'>Please enter your company url</font>",
                url: "<font color='red'>Please enter a valid company url</font>"
            },
            producttxt: {
                required: "<font color='red'>Please enter your current product</font>"
            },
            security_code: {
                    required: "<font color='red'>Please enter security code</font>",
                    remote:"<font color='red'>Please type correct characters shown</font>"
            }
        },
        submitHandler: function()
        {
            $('#Submit').attr('disabled', true);
            $('button#Submit').text('Submitting...');
            $('#business_partnerfrm').ajaxSubmit({
                url: '../partners.php?action=send',
                success: function(data)
                {
                    $('#business_partnerfrm').find('input[type=text]').val('');
                    $('#business_partnerfrm').find('input[type=email]').val('');
                    $('#business_partnerfrm').find('input[type=tel]').val('');
                    $('#business_partnerfrm').find('input[type=url]').val('');
                    $('#business_partnerfrm').find('textarea').val('');
                    $('#Submit').val('Submit');
                    reloadcapcha();
                    $('#message_job').html('<div class="alert alert-success">Thanks for showing interest in us, we will contact you very soon.</div>');
                    $('#message_job').fadeOut( 4000 );
                    $('button#Submit').text('Connect Now');
                    $('#Submit').attr('disabled', false);
                }
            });
            return false;
        }
    });

}); 