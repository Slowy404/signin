var navbaricon = document.querySelector('.topslide i.display');
navbaricon.onclick = function (){
    document.querySelector('.menu').classList.toggle('displaynone');
}
var enteremail = document.querySelector('input[name="email"]');
enteremail.onblur = function(){
    if (enteremail.value == ''){
        enteremail.classList.add('eror-log');
        document.querySelector('.form-message.message-email').innerText= 'Vui lòng nhập lại email';
    }
    else {
        enteremail.classList.remove('eror-log');
        document.querySelector('.form-message.message-email').innerText= ''
    }   
}
enteremail.oninput = function (){
    if (!enteremail.value == ''){
        enteremail.classList.remove('eror-log');
        document.querySelector('.form-message.message-email').innerText= '';
    } 
}

var enterpassword = document.querySelector('input[name="password"]');
enterpassword.onblur = function(){
    if (enterpassword.value == ''){
        enterpassword.classList.add('eror-log');
        document.querySelector('.form-message.message-password').innerText= 'Vui lòng nhập lại mật khẩu';
    }
    else {
        enterpassword.classList.remove('eror-log');
        document.querySelector('.form-message.message-password').innerText= ''
    }
}
enterpassword.oninput = function (){
    enterpassword.classList.remove('eror-log');
    document.querySelector('.form-message.message-password').innerText= ''
}
var btnsign = document.querySelector('.form-submit');
btnsign.onclick = function (){
    if (enterpassword.value == ''){
        enterpassword.classList.add('eror-log');
        document.querySelector('.form-message.message-password').innerText= 'Vui lòng nhập lại mật khẩu';
    }
    else {
        enterpassword.classList.remove('eror-log');
        document.querySelector('.form-message.message-password').innerText= ''
    }
    if (enteremail.value == ''){
        enteremail.classList.add('eror-log');
        document.querySelector('.form-message.message-email').innerText= 'Vui lòng nhập lại email';
    }
    else {
        enteremail.classList.remove('eror-log');
        document.querySelector('.form-message.message-email').innerText= ''
    }
}
var valuesign = [];
btnsign.onclick = function (){
    if (!(enterpassword.value == '')) {
        if(!(enteremail.value == '')){
            valuesign[0] = [{
                email : `${enteremail.value}`,
                password : `${enterpassword.value}`,
            }]
        }
    }
    console.log(valuesign);
}
var deletelogin = document.querySelector('.form-email .form-img');
deletelogin.onclick = function (){
    enteremail.value = '';
}
var openpassword = document.querySelector('.eye-close');
openpassword.onclick = function () {
    openpassword.classList.add('none');
    document.querySelector('input[name="password"]').type = 'text';
}
var lockpassword = document.querySelector('.eye');
lockpassword.onclick = function () {
    openpassword.classList.remove('none');
    document.querySelector('input[name="password"]').type = 'password';
}
