//IIFE 패턴 
//선언을 할떄 function 을 같이 준다. 
//function 을 같이주게 되면 알고리즘 을 내부에서 짜게된다. 
//이게 IIFE(이파이패턴)이다.
var wrapper = document.getElementById('wrapper');
var wrapper2 = document.getElementById('wrapper2');
var app = (function () {
    
    let init = function () {
        login_form();
        signup_form();
    }
    let login_form = function () {
        wrapper.innerHTML = '<form action="/action_page.php">'
        + '  First name:<br>'
        + '  <input type="text" name="firstname" value="Mickey">'
        + '  <br>'
        + '  Last name:<br>'
        + '  <input type="text" name="lastname" value="Mouse">'
        + '  <br><br>'
        + '  <input type="button" value="Login">'
        + ' <input type="button" value="Signup" onclick="go_signup_form()">'
        + '</form> ';
    }
    let signup_form = function(){
        wrapper2.innerHTML = '<form action="/action_page.php">'
        + '  First name:<br>'
        + '  <input type="text" name="firstname" value="Mickey">'
        + '  <br>'
        + '  Last name:<br>'
        + '  <input type="text" name="lastname" value="Mouse">'
        + '  <br><br>'
        + '  <input type="text" name="lastname" value="Mouse">'
        + '  <br><br>' 
        + '  <input type="text" name="lastname" value="Mouse">'
        + '  <br><br>'
        + '  <input type="button" value="ok" onclick="back_loginform()">'
        + ' <input type="button" value="cancel">'
        + '</form> ';
    }
    return {
        init: init
    };
})();
function go_signup_form(){
    wrapper.style.display="none";
    wrapper2.style.display="inline";
}
function back_loginform(){
    wrapper.style.display="inline";
    wrapper2.style.display="none";
}
