function checkform(pform1){
var str=pform1.password.value;
var email = pform1.email.value;
var phone = pform1.phone.value;
var cleanstr = phone.replace(/[\(\)\.\-\ ]/g, '');
var err={}; 
var validemail =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

//check required fields
//password should be minimum 4 chars but not greater than 8
if ((str.length < 4) || (str.length > 8)) {

err.message="Invalid password length"; 
err.field=pform1.password; 
}

//validate email
if(!(validemail.test(email))){
err.message="Invalid email"; 
err.field=pform1.email; 

}

//check phone number
if (isNaN(parseInt(cleanstr))) {
err.message="Invalid phone number"; 
err.field=pform1.phone; 
}

if(err.message) 
        { 
               document.getElementById('divError').innerHTML = err.message;
                err.field.focus();
                return false;        
                
        } 


return true
}