//IIFE 패턴 
//선언을 할떄 function 을 같이 준다. 
//function 을 같이주게 되면 알고리즘 을 내부에서 짜게된다. 
//이게 IIFE(이파이패턴)이다.
var app = (()=>{
    
    let init = ()=> {
        login_form();
    }
    let login_form = ()=> {
        let wrapper = document.getElementById('wrapper');
        wrapper.innerHTML = '<h1>Login</h1>'
        +'<form action="/action_page.php">'
        + '  ID:<br>'
        + '  <input type="text" name="ID" value="">'
        + '  <br>'
        + '  Password:<br>'
        + '  <input type="password" name="PW" value="">'
        + '  <br><br>'
        + '  <input type="button" value="LOGIN" id="login_btn">'
        + ' <input type="button" value="JOIN" id="join_btn">'
        + '</form> ';
        let join_btn =document.getElementById('join_btn')
        join_btn.addEventListener('click',()=>{
            signup_form();
        });
    }
    let signup_form = ()=>{
        let wrapper = document.getElementById('wrapper');
        wrapper.innerHTML = '<h1>Signup</h1>'
        +'<form action="/action_page.php">'
        + '  ID:<br>'
        + '  <input type="text" name="ID" value="">'
        + '  <br>'
        + '  PW:<br>'
        + '  <input type="text" name="PW" value="">'
        + '  <br>'
        + '  Name:<br>'
        + '  <input type="text" name="Name" value="">'
        + '  <br>' 
        + '  EMail:<br>'
        + '  <input type="text" name="EMail" value="">'
        + '  <br><br>'
        + '  <input type="button" value="ok" id="join_ok_btn">'
        + ' <input type="button" value="cancel">'
        + '</form> ';
        let join_ok_btn =document.getElementById('join_ok_btn');
        join_ok_btn.addEventListener('click',()=>{
            login_form();
        });
    }
    return {
        init: init
    };
})();