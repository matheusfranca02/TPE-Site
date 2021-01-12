let n = 0
function MenuAnimation (x) {
    x.classList.toggle("change")
    if(n == 0){
       $("#menu").animate({
        "left": "40%"
       },500)
        n = 1
    }else{
        $("#menu").animate({
            "left": "100%"
           }, 500)
        n = 0
    }
}