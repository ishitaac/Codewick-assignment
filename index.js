$(()=>{
    $(".nav-toggler").on("click",()=>{
        if($(".item").hasClass("active")){
            $(".item").removeClass("active");
        }else{
            $(".item").addClass("active");
        }
    })
})