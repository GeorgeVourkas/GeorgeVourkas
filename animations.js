const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        } 
    });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((e1) => observer.observe(e1)); 

// Disable scrolling 
document.body.style.overflow = "hidden";

//Disable Right Click
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});