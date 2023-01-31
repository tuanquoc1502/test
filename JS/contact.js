var conF = document.forms['contactform'];
conF.btn_sub.onclick = function() {
    if(conF.name.value == ''){
        document.getElementById('name_err').innerHTML = 'Vui lòng nhập Họ và Tên'
        conF.name.style.border = '1px solid red';
        conF.name.focus();
        return false;
    }
    else{
        document.getElementById('name_err').innerHTML = ''
        conF.name.style.border = 'none';
    }
}

conF.name.onblur = function(){
    if(conF.name.value == ''){
        document.getElementById('name_err').innerHTML = 'Vui lòng nhập Họ và Tên'
        conF.name.style.border = '1px solid red';
        conF.name.focus();
        return false;
    }
    else{
        document.getElementById('name_err').innerHTML = ''
        conF.name.style.border = 'none';
    }
}
conF.btn_sub.onclick = function() {
    if(conF.phone.value == ''){
        document.getElementById('phone_err').innerHTML = 'Vui lòng nhập số điện thoại'
        conF.phone.style.border = '1px solid red';
        conF.phone.focus();
        return false;
    }
    else{
        document.getElementById('phone_err').innerHTML = ''
        conF.phone.style.border = 'none';
    }
}

conF.phone.onblur = function(){
    if(conF.phone.value == ''){
        document.getElementById('phone_err').innerHTML = 'Vui lòng nhập số điện thoại'
        conF.phone.style.border = '1px solid red';
        conF.phone.focus();
        return false;
    }
    else{
        document.getElementById('phone_err').innerHTML = ''
        conF.phone.style.border = 'none';
    }
}
conF.btn_sub.onclick = function() {
    if(conF.content.value == ''){
        document.getElementById('content_err').innerHTML = 'Vui lòng nhập Nội dung cần gửi'
        conF.content.style.border = '1px solid red';
        conF.content.focus();
        return false;
    }
    else{
        document.getElementById('content_err').innerHTML = ''
        conF.content.style.border = 'none';
    }
}

conF.content.onblur = function(){
    if(conF.content.value == ''){
        document.getElementById('content_err').innerHTML = 'Vui lòng nhập Nội dung cần gửi'
        conF.content.style.border = '1px solid red';
        return false;
    }
    else{
        document.getElementById('content_err').innerHTML = ''
        conF.phone.style.border = 'none';
    }
}

conF.btn_sub.onclick = function() {
    alert('Gửi yêu cầu thành công');
    return false;
}
