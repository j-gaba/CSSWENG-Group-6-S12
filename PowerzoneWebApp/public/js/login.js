$(document).ready(function() {

    /** adjusts style to highlight username field and display error message */
    function invalid_username(){
        //highlights username field line with red
        $('#input_username').css('border-color', 'var(--errorRed)');

        //displays error message
        $('#errorUsername').text('Username must be at least 6 characters.');
        $('#errorUsername').css('color', 'var(--errorRed)');
    }

    /** adjusts style to remove highlight of username field and remove error message */
    function valid_username(){
        //resets username field line to white
        $('#input_username').css('border-color', 'white');

        //removes error message
        // $('#errorUsername').css('color', 'transparent');
        $('#errorUsername').text('');
    }

    /** adjusts style to highlight password field and display error message */
    function invalid_password(){
        //highlights username field line with red
        $('#input_password').css('border-color', 'var(--errorRed)');

        //displays error message
        $('#errorPsword').text('Password must be at least 6 characters.');
        $('#errorPsword').css('color', 'var(--errorRed)');
    }

    /** adjusts style to remove highlight of password field and remove error message */
    function valid_password(){
        //resets username field line to white
        $('#input_password').css('border-color', 'white');

        //removes error message
        // $('#errorPsword').css('color', 'transparent');
        $('#errorPsword').text('');
    }

    // keyup function to check if the username is valid
    $('#input_username').keyup(function () {
        var username_length = $('#input_username').val().length;
        var password_length = $('#input_password').val().length;
        
        // checks if username is at least 6 characters
        if(username_length < 6){
            invalid_username();
            $('#btn_login').prop('disabled', true);
            $('#btn_login').css('background-color', '#808080');
            $('#btn_login').removeClass('on_hover');
        }
        else{
            valid_username();
            // checks if the password is at least 6 characters
            if (password_length >= 6) {
                $('#btn_login').prop('disabled', false);
                $('#btn_login').css('background-color', '#AEDFFC');
                $('#btn_login').addClass('on_hover');
            }
            else {
                $('#btn_login').prop('disabled', true);
                $('#btn_login').css('background-color', '#808080');
                $('#btn_login').removeClass('on_hover');
            }
        }
    });

    // keyup function to check if password is valid
    $('#input_password').keyup(function () {
        var password_length = $('#input_password').val().length;
        var username_length = $('#input_username').val().length;
        
        // checks if the password is at least 6 characters
        if(password_length < 6){
            invalid_password();
            $('#btn_login').prop('disabled', true);
            $('#btn_login').css('background-color', '#808080');
            $('#btn_login').removeClass('on_hover');
        }
        else{
            valid_password();
            // checks if the username is at least 6 characters
            if (username_length >= 6) {
                $('#btn_login').prop('disabled', false);
                $('#btn_login').css('background-color', '#AEDFFC');
                $('#btn_login').addClass('on_hover');
            }
            else {
                $('#btn_login').prop('disabled', true);
                $('#btn_login').css('background-color', '#808080');
                $('#btn_login').removeClass('on_hover');
            }
        }
    });

    // changes URL to localhost:3000 instead of /login
    if (window.history.replaceState) {
      window.history.replaceState(null, null, "http://localhost:3000/");
    }
      
})