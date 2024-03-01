
let form=document.querySelector("form");
let input=document.querySelector("input");

let error_msg=document.querySelector(".error-msg");


form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(input.value===""||!emailRegex.test(input.value.trim())){
        error_msg.style.display="block";
        input.style.border="1px solid red";
    }
})