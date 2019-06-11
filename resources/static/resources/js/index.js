//alert('자바스크립트 알림성공');
var wrapper = document.getElementById('wrapper');
wrapper.innerHTML ='<h1>SPA 시작!</h1>'
+'<div id="content">삭제할 내용</div>'
+'<button id="remove">지워</button>'
+'<button id="add">추가</button>';

var content=document.getElementById('content');
remove.addEventListener('click',function(){
    //alert('버튼클릭');
    content.innerHTML = '';
});

var remove =document.getElementById('remove');
add.addEventListener('click',function(){
    var temp = document.createTextNode("안녕");
    content.appendChild(temp);
});
