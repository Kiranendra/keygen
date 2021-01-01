
(function ($) {
    "use strict";

// Validate
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'number' || $(input).attr('name') == 'field1') {
            if($(input).val().trim() == null || $(input).val().trim() < 5 || $(input).val().trim() > 75) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == '' || $(input).val().trim().match(/^[a-zA-Z]+$/) == null) {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);