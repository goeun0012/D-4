$(function(){

    /* 메뉴 */
    $(".main > li").mouseover(function(){
        $(".sub").stop().show();
    })// mouseover

    $(".main > li").mouseout(function(){
        $(".sub").stop().hide();
    })// mouseout

    /* 이미지슬라이드 */
    $(".fade li").eq(0).siblings().hide();

    var n = 0;// 0 1 2

    setInterval(function(){
        if(n == 2){
            n = 0;
        }else{
            n++;
        }
        $(".fade li").eq(n).siblings().fadeOut();
        $(".fade li").eq(n).fadeIn();
    }, 2500)

    /* 레이어팝업 */
    $(".pop").hide();

    $(".pop_click").click(function(){
        $(".pop").show();
    })// click

    $(".close").click(function(){
        $(".pop").hide();
    })// click

})// jquery