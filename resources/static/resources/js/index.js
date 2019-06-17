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
        +'<form action="/login" id="login_form">'
        + '  ID:<br>'
        + '  <input type="text" name="customerId" id="customerId">'
        + '  <br>'
        + '  Password:<br>'
        + '  <input type="password" name="password" id="password">'
        + '  <br><br>'
        + ' <input type="submit" value="Login" id="login_btn">'
        + ' <input type="button" value="JOIN" id="join_btn">'
        + ' <input type="button" value="Count" id="count_btn">'
        + '</form> ';
        let join_btn =document.getElementById('join_btn')
        join_btn.addEventListener('click',()=>{
            signup_form();
        });
        let login_btn=document.getElementById('login_btn');
        login_btn.addEventListener('click',(e)=>{
            e.preventDefault();
            alert('이벤트연결!');
            id = document.getElementById('customerId').value;
            pass = document.getElementById('password').value;
            let xhr=new XMLHttpRequest(),
            method='GET',
            url='login/'+id+'/'+pass;
            xhr.open(method,url,true);
            xhr.onreadystatechange=()=>{
                if(xhr.readyState===4&&xhr.status===200){
                    let d = xhr.responseText;
                    if(d==='success'){
                        let wrapper = document.getElementById('wrapper');
                        wrapper.innerHTML='<h1>마이페이지</h1>'

                    }else{
                        let wrapper = document.getElementById('wrapper');
                        wrapper.innerHTML = '<h1>Login</h1>'
                    +'<form action="/login" id="login_form">'
                    + '  ID:<br>'
                    + '  <input type="text" name="customerId" id="customerId">'
                    + '  <br>'
                    + '  Password:<br>'
                    + '  <input type="password" name="password" id="password">'
                    + '  <br><br>'
                    + ' <input type="submit" value="Login" id="login_btn">'
                    + ' <input type="button" value="JOIN" id="join_btn">'
                    + ' <input type="button" value="Count" id="count_btn">'
                    + '</form> ';

                    }
                    alert('AJAX '+xhr.responseText);
                }
            };
            xhr.send();
            
            
        });
        let count_btn = document.getElementById('count_btn');
        count_btn.addEventListener('click',()=>{
            alert('됐다!');
            count();
        });
    }

    let count=()=>{
        let xhr = new XMLHttpRequest();
        method = 'GET';
        url ='count' ;
        xhr.open(method, url, true);
        xhr.onreadystatechange=()=>{
            if(xhr.readyState===4 && xhr.status === 200){
                alert('성공');
                let wrapper = document.getElementById('wrapper');
                wrapper.innerHTML ='총 고객수 : <h1>'+xhr.responseText+'</h1>';
                
                
            }
        }
        xhr.send();
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