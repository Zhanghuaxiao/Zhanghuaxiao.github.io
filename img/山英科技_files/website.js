/********楼层导航*********/
var Top;
function scroll(id) {
    Top = $(".floor-" + id).offset().top - 88;
    // console.log(Top)
    $("html,body").animate({
        scrollTop: Top
    }, 800)
}

function storage(name,value){
    sessionStorage.setItem(name, value);
}

$(function () {
    /******响应头******/
    function windowResize() {
        if ($(window).width() < 812) {
            $(".website-box1").hide();
            $(".website-box2").show();
        } else {
            $(".website-box1").show();
            $(".website-box2").hide();
        }

//         if($(window).width()<414){ $(".websitetitle").css("fontsize","35px")="" }else{="" $(".websitetitle").css("fontsize","50px")="" }="" if($(window).width()<555){="" $(".news-item="" .ni-right").css("width","60%");="" $(".see-more").css("width","60%");="" }else="" if($(window).width()="">555&&$(window).width()</414){>