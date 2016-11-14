/**
 * Created by Administrator on 2016/3/27.
 */
$(function(){

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });


    setInterval(function(){
        var hour=$('.hour'),minu=$('.minu'),secd=$('.secd');
        var enddate=new Date("2017/1/30 00:00:00");
        var begindate=new Date();
        var seconds=(enddate.getTime()-begindate.getTime())/1000;
        var dd=parseInt(seconds/3600/24);   //天数
        hour.html(parseInt((seconds/3600)%24+dd*24));
        minu.html(Math.floor(seconds/60%60));
        secd.html(Math.floor(seconds%60));
    },1000)


    $(window).scroll(function(){
        var wst=$(window).scrollTop();
        if(wst>500){
            $('.totop').show();
        }else{
            $('.totop').hide();
        }
    })

    $('.totop').click(function(){
        $(window).scrollTop(0);
    })

})