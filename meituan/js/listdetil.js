/**
 * Created by Administrator on 2016/3/29.
 */
$(function(){
    var hg=$('.nav').offset().top;
    var ng=$('.choice').offset().top;
    $(window).scroll(function(){
        var wst=$(window).scrollTop();
        if(wst>hg){
            $('.nav').css({
                'position':'fixed',
                 top:0
            });
            $('.returnmy').css('margin-top',$('.nav').height());
        }else{
            $('.nav').css({
                'position':'static'
            });
            $('.returnmy').css('margin-top',0);
        }

        if(wst>ng){
            $('.totop').show();
        }else{
            $('.totop').hide();
        }
    })

    $('.totop').click(function(){
        $(window).scrollTop(0);
    })
})