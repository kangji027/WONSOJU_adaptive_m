$(document).ready(function(){

    
    var ww = $(window).width();
    var wh = $(window).height();
    $(window).scroll(function(){
        console.log('sct');


        const sec1 =$('.sec-1').offset().top;
        const sec5 =$('.sec-5').offset().top;
        const sec10 =$('.sec-10').offset().top;
        const sec11 =$('.sec-11').offset().top;
        const banner =$('.banner').offset().top;

        let sct =$(window).scrollTop();
        
        
              
        


        //pc  data-index

        $('.area').each(function(index){
            $(this).attr('data-index',index);
        });
        $('.area1').click(function(){
            $('html,body').stop().animate({
                scrollTop:sec1
            });
        });
        $('.area2').click(function(){
            $('html,body').stop().animate({
                scrollTop:sec5
            });
        });
        $('.area3').click(function(){
            $('html,body').stop().animate({
                scrollTop:sec10
            });
        });
        $('.area4').click(function(){
            $('html,body').stop().animate({
                scrollTop:sec11
            });
        });

        

        //모바일 데이터 인덱스


        $('.side-main').each(function(index){
            $(this).attr('data-index',index);
        });
        $('.side1').click(function(){
            $('html,body').stop().animate({
                scrollTop:sec1
            });
        });
        $('.side2').click(function(){
            $('html,body').stop().animate({
                scrollTop:sec5
            });
        });
        $('.side3').click(function(){
            $('html,body').stop().animate({
                scrollTop:sec10
            });
        });
        $('.side4').click(function(){
            $('html,body').stop().animate({
                scrollTop:sec11
            });
        });

    });


    $('.hamburger-btn').click(function(){
        $('.side-menu').addClass('active')
        $('.x').addClass('on')
    });
    $('.x').click(function(){
        $('.side-menu').removeClass('active')
        $('.x').removeClass('on')
    });



});

