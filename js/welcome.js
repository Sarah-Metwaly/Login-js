(function(){
    document.getElementById('main').innerHTML+=`${localStorage.getItem('currentUser')}`;
})();

document.getElementById('logOut').addEventListener('click' , function(){
    window.location.assign('../index.html');
})

document.getElementById('but').addEventListener('click' , function(){
    document.getElementById('logOut').style.width='100%';
});
