var loform = document.forms['login_form'];
document.getElementById('hide_pass').style.display = "none";
document.getElementById('show_pass').onclick = function () {
 loform.pass.type = "text";
    this.style.display = "none";
    document.getElementById('hide_pass').style.display = "inline-block";
}
document.getElementById('hide_pass').onclick = function () {
 loform.pass.type = "password";
    this.style.display = "none";
    document.getElementById('show_pass').style.display = "inline-block";
}

// loform.btn_sub.onclick = function () {
//     if  loform.login.value == '') {
//     document.getElementById('email_err').innerHTML = 'Vui lòng nhập Email đăng nhập'
//     loform.login.style.border = '1px solid red';
//     loform.login.focus();
//     return false;
//     }
//     else {
//         document.getElementById('email_err').innerHTML = '';
//      loform.login.style.border = 'none';
//     }
// }

//  loform.login.onblur = function () {
//     if  loform.login.value == '') {
//         document.getElementById('email_err').innerHTML = 'Vui lòng nhập Email đăng nhập'
//      loform.login.style.border = '1px solid red';
//      loform.login.focus();
//         return false;
//     }
//     else {
//         document.getElementById('email_err').innerHTML = '';
//      loform.login.style.border = 'none';
//     }
// } loform.btn_sub.onclick = function () {
//     if  loform.pass.value == '') {
//         document.getElementById('pass_err').innerHTML = 'Vui lòng nhập Password'
//      loform.pass.style.border = '1px solid red';
//      loform.pass.focus();
//         return false;
//     }
//     else {
//         document.getElementById('pass_err').innerHTML = '';
//      loform.pass.style.border = 'none';
//     }
// }
//  loform.pass.onblur = function () {
//     if  loform.pass.value == '') {
//         document.getElementById('pass_err').innerHTML = 'Vui lòng nhập Password'
//      loform.pass.style.border = '1px solid red';
//      loform.pass.focus();
//         return false;
//     }
//     else {
//         document.getElementById('pass_err').innerHTML = 'Vui lòng nhập Password'
//      loform.pass.style.border = 'none';
//     }
// }