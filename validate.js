function validate(inputType, input1, input2) {
//inputType determines which function to call, input1 is the base input to validate, input 2 is optional and used for comparing password fields
//TODO Let the user pass an object containing a form id in with different requirements for different fields
    if(inputType.indexOf('password') > -1) {
        vPass();
    }
    if(inputType.indexOf('email') > -1) {
        vEmail();
    }
     if(inputType.indexOf('required') > -1) {
        vRequired();
    }

    function vEmail() {
        var emailtext = input1.value;
        var message = input1.nextSibling.nextSibling;
        message.innerHTML = "";
        //^^ Resets the error message when the user makes a new attempt
        if(emailtext.indexOf('@') == -1 || emailtext.substring(emailtext.indexOf('@'), emailtext.length).indexOf('.') == -1) {
        //^^ First make sure there's an '@', then, ignoring everything that precedes the '@', see if there's a '.'. Evaluates
        //true when the email lacks an '@' or '.' and then tells the user then dun goofed.
                message.innerHTML = "That isn't a valid email address"; 
        }
    }

    function vPass() {
        var message = input2.nextSibling.nextSibling;
        //^^ We can't just getElementById('validate-message') in case the user wants custom 
        //messages for different fields, so we go for the #validate-message that is the nextSibling 
        //of input2. But that's a line break and the browser counts it as such in the DOM, so we 
        //have to have two nextSibling calls
        if(comparePass(input1.value, input2.value)) {
            message.innerHTML = "";
        } else {
            message.innerHTML = 'Passwords do not match';
        }
        function comparePass(p1, p2) {
            if(p1 == p2) {
                return true;
            } else {
                return false;
            }
        }
    }

     function vRequired() {
        console.log("fired");
        var message = input1.nextSibling.nextSibling;
        if(isEmpty(input1)) {
            message.innerHTML = "This is required";
        } else {
            message.innerHTML;
        }
    }

    function isEmpty(field) {
        if (field.value == null || field.value.length == 0) {
            return true;
        } else {
            return false;
        }
    }   
}

