let email ="" , userName ="" ,secondPartOfEmail ="";

function getIds()
{
     email = document.getElementById("email");
     userName = document.getElementById("username");
     secondPartOfEmail = document.getElementById("secondpart");
}

function getIndex()
{
    return email.indexOf('@');
}

function dividedEmail()
{
    getIds();
    email = email.value;
  
    var index = getIndex();
    userName.value = email.slice(0,index);
    secondPartOfEmail.value = email.slice(index);
   
}

