//left to right
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        } //else{
            //entry.target.classList.remove("show");
        //}
    });
});

const hiddenElements = document.querySelectorAll(".hidden_left_right");
hiddenElements.forEach((e1) => observer.observe(e1));

//down to up 
const observer2 = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show2");
        } 
    });
});

const hiddenElements2 = document.querySelectorAll(".hidden_down_up");
hiddenElements2.forEach((e1) => observer2.observe(e1)); 



//right to left
const observer3 = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show3");
        } //else{
            //entry.target.classList.remove("show");
        //}
    });
});

const hiddenElements3 = document.querySelectorAll(".hidden_right_left");
hiddenElements3.forEach((e1) => observer3.observe(e1));


document.getElementById("hello_button").addEventListener('click',function(){
    let button=document.getElementById("hello_button");
    if(button.innerText=="Hello"){
        button.innerText='Goodbye';
    }
    else{
        button.innerText='Hello';
    }
});





