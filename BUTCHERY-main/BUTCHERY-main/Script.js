
           const button = document.querySelector(".button"),
toast = document.querySelector(".toast"),
closeicon = document.querySelector(".close"),
progress = document.querySelector(".progress");


button.addEventListener('click', () =>{
    toast.classList.add("active");
    progress.classList.add("active");

    setTimeout(() =>{
        toast.classList.remove("active");
    }, 5000);
});


closeicon.addEventListener('click', () =>{
    toast.classList.remove("active");
});






const bar = document.querySelector(".bar"),
nav = document.querySelector(".nav")
close = document.querySelector(".close_icon");

bar.addEventListener("click", () =>{
    nav.classList.add("active");

});

close.addEventListener("click", () =>{
    nav.classList.remove("active");
})