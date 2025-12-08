let btns = document.querySelectorAll(".btn");
let display = document.querySelector(".display");
btns.forEach(function(btn){
    btn.onclick = function(){
        let value = btn.getAttribute("data-value");
        if(value === "clear"){
            display.value = "";
        }
        else if (value === "DEL"){
            display.value = display.value.slice(0,-1);
        }
    }
})