let open = document.getElementById("open")
let close = document.getElementById("close")
let mobilemenu = document.getElementById("mobilemenu")

open.addEventListener("click", function() {
    mobilemenu.style.display = "block";
    open.style.display = "none"
    close.style.display = "block"
})

close.addEventListener("click" , function() {
    mobilemenu.style.display = "none"
    open.style.display = "block"
    close.style.display = "none"
})

