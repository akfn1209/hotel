$(function(){
     
    
     $('.gnb').hover(function(){
         $('.sub,.bar,.topevent,.topevents').stop().animate({opacity:'show',height:'300px'},1000);
     },function(){
         $('.sub,.bar,.topevent,.topevents').stop().animate({opacity:'hide',height:'0px'},1000);
     });  
    $('.dmenu li').eq(0).click(function(e){
         e.preventDefault();
         $('.name li').eq(0).trigger('click');
    });
    $('.dmenu li').eq(1).click(function(e){
         e.preventDefault();
         $('.name li').eq(1).trigger('click');
    });
    $('.dmenu li').eq(2).click(function(e){
         e.preventDefault();
         $('.name li').eq(2).trigger('click');
    });
     $('.name li').hover(function(){
            $(this).find('a').css('border-bottom','2px solid #e68a8a');
        },
            function(){
                $(this).find('a').css('border-bottom','none');
       });
        $('.name li').eq(0).click(function(e){
            e.preventDefault();
          $('.drink ul').css('display','none')
           $('.drink .ade').css('display','block') 
        });
        $('.name li').eq(1).click(function(e){
            e.preventDefault();
          $('.drink ul').css('display','none')
         $('.drink .smoothie').css('display','block') 
        });
        $('.name li').eq(2).click(function(e){
            e.preventDefault();
         $('.drink ul').css('display','none')
           $('.drink .Granita').css('display','block') 
        });
    });