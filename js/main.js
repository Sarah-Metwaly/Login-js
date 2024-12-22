let emailInput=document.getElementById('emailInput');
let passwordInput=document.getElementById('passwordInput');

let users=[];
if(localStorage.getItem('usersContainer')!==null){
    users=JSON.parse(localStorage.getItem('usersContainer'))
}

let currentIndex;

function checkUser(){
    let user={
        email:emailInput.value,
        password:passwordInput.value
    }
    if(localStorage.getItem('usersContainer')!=null){
        for(let i=0;i<users.length;i++){
            if(user.email==users[i].email){
                if(user.password==users[i].password){
                    currentIndex=i;
                    return true;
                }
            }
        }
    }
    
    return false;
}


document.getElementById('login').addEventListener('click' , function(){
    if(emailInput.value.length==0 || passwordInput.value.length==0){
        document.getElementById('warning1').classList.remove('d-none');
        document.getElementById('warning2').classList.add('d-none');

    }
    else if(!checkUser()){
        document.getElementById('warning2').classList.remove('d-none');
        document.getElementById('warning1').classList.add('d-none');
    }
    else if(checkUser()){
        //fix it ,input color.
        let name =users[currentIndex].name;
        console.log(name);
        localStorage.setItem("currentUser",name);
        document.getElementById('warning2').classList.add('d-none');
        document.getElementById('warning1').classList.add('d-none');
        window.location.assign('../welcome.html');

    }
});