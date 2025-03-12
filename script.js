let btn=document.querySelector('button');
let img=document.querySelector('img');
let input=document.querySelector('input');
let imgbox=document.querySelector('.imgbox');
img.style.opacity="0";
btn.addEventListener('click',function(){
    if(input.value.trim()!=''){
        img.style.opacity="1";
        img.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ input.value;
        imgbox.classList.add("show-img");
    }
    else{
        input.classList.add("error");
        setTimeout(function(){
            input.classList.remove("error");
        },1000);
    }
   
})