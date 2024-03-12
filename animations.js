const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        } //else{
            //entry.target.classList.remove("show");
        //}
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((e1) => observer.observe(e1));

const observer2 = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show2");
        } 
    });
});

const hiddenElements2 = document.querySelectorAll(".hidden2");

hiddenElements2.forEach((e1) => observer2.observe(e1)); // Corrected line: observe with observer2

// Disable scrolling via JavaScript (optional)
document.body.style.overflow = "hidden";
