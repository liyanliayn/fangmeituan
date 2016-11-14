/**
 * Created by Administrator on 2016/3/27.
 */
$(function(){

    var fulls=$('.tab .full');
    fulls.hide();
    $('.nav ul').on('click','li',function(){
        var i=$(this).index();
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.hidd').hide();
            fulls.eq(i).hide(2000);
        }else{
            $('.hidd').css({height:$('html').height()-fulls.eq(0).height()}).show();
            $('.nav ul li').removeClass('active');
            $(this).addClass('active');
            fulls.eq(i).show(2000).siblings('.full').hide();
        }

    })

    $('.hidd').click(function(){
        fulls.hide();
        $(this).hide();
    })

    //回退
    $('.back').click(function(){
        history.go(-1);
    })

    var _a=$('.toplace p a');
    var uls=$('.subway ul');
     _a.click(function(){
         $(this).css({background:'#666',color:'#fff'}).siblings('a').css({background:'#fff',color:'#333'});
         uls.eq($(this).index()).addClass('act').siblings('ul').removeClass('act');
         $('.subway_right').hide();
         $('.act').css({
             'width':'100%'
         })
     })


    $('.subway ul').on('click','li',function(){
        var ind=$(this).parent().index();
        if($(this).has('.act')){
            //$('.act').css({
            //    'flex':1
            //})
            $('.subway ul').css({
                'width':'50%'
            })
            $(this).css('background','#F6F4F0').siblings('li').css('background','#fff');
            $('.subway_right').show();
            $('.subway_right ul').eq(ind).show().siblings('ul').hide();
        }
    })


    $('.cbx').click(function(){
        var i=$(this).index();
        if($('.cbx p').eq(i).hasClass('inp_active')){
            $('.cbx p').eq(i).removeClass('inp_active');
        }else{
            $('.cbx p').eq(i).addClass('inp_active');
        }
    })


    $('.number>div').on('click','a',function(){
        $(this).css({'background':'#06C1AE','color':'#fff'}).siblings('a').css({'background':'#fff','color':'#06C1AE'});
    })


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



    var andmores=$('.andmore');
    andmores.click(function(){
        $(this).siblings('.addlist').show();
        $(this).remove();
    })



})