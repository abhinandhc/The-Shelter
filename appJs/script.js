function validation_event(){
    var name= document.getElementById("inputName").value;
    var address= document.getElementById("inputAddress").value;
    var mail= document.getElementById("inputEmail1").value;

    var regmail=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var regname=/^[a-zA-z]*$/;
    if(name !="" && mail!="" && address!=""){
        if(isNaN(name)&&name.match(regname)){
            if(email.match(regmail)){
                alert("Registration Successfull!");
                return true;
                }else{
                alert("Please Enter a valid mail id");
                document.regform.inputMail.focus();
                return false;
            }
        }else{
            alert("Please Enter a valid name");
            document.regform.inputNmae.focus();
            return false;
        }
    }else{
        alert("All fields are required");
        return false;
    }
}