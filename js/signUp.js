let nameInput=document.getElementById('nameInput');
let emailInput=document.getElementById('emailInput');
let passwordInput=document.getElementById('passwordInput');

let users=[];
if(localStorage.getItem('usersContainer')!==null){
    users=JSON.parse(localStorage.getItem('usersContainer'))
}

function emailValidation(){
    let regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(emailInput.value);
}

function nameAndPasswordValidation(){
    let regex=/^.+$/;
    if(regex.test(passwordInput.value)&& regex.test(nameInput.value)){
        return true
    }
    return false;
}

function ExistingEmail(){
    let user={
        email:emailInput.value,
    }
    if(localStorage.getItem('usersContainer')!=null){
        for(let i=0;i<users.length;i++){
            if(user.email==users[i].email){
                return false
            }
        }
        return true;
    }
    
    return true;
}

function addUser(){
    let user={
        name:nameInput.value,
        email:emailInput.value,
        password:passwordInput.value
    }

    users.push(user);
    localStorage.setItem('usersContainer',JSON.stringify(users));
}

document.getElementById('login').addEventListener('click' , function(){
    if(!emailValidation() || !nameAndPasswordValidation()){
        document.getElementById('warning1').classList.remove('d-none');
        document.getElementById('warning2').classList.add('d-none');
        document.getElementById('success').classList.add('d-none');


    }
    else if(!ExistingEmail()){
        document.getElementById('warning2').classList.remove('d-none');
        document.getElementById('warning1').classList.add('d-none');
        document.getElementById('success').classList.add('d-none');
    }
    else{
        document.getElementById('success').classList.remove('d-none');
        document.getElementById('warning2').classList.add('d-none');
        document.getElementById('warning1').classList.add('d-none');
        addUser();
    }
});
