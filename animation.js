
//down to up 
const observer2 = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        } 
    });
});

const hiddenElements2 = document.querySelectorAll(".hidden");
hiddenElements2.forEach((e1) => observer2.observe(e1)); 



