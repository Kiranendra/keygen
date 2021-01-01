
(function ($) {
    "use strict";

// Validate
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;
        var keyLength = 0;
        var filename = "key";

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        if (check == true) {
            keyLength = parseInt($(input[0]).val().trim());
            filename = $(input[1]).val().trim();
            downloadFile(keyLength, filename);
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
        return true;
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    function downloadFile(keyLength, filename) {
        var element = document.createElement('a');
        var key = generateKey(keyLength);
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(key));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

    function generateKey(keyLength) {
        var result           = '';
        var characters       = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`~!@#$%^&*()-_=+[]{}|.,?;:';
        var charactersLength = characters.length;
        for ( var i = 0; i < keyLength; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    
})(jQuery);