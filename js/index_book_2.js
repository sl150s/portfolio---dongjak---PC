$(document).ready(function(){
   
   /* $(".gnb>li").hover(function(){
        $(this).find(".lnb ul").stop(true,true).slideDown(500);
        $(".bg_box").stop(true,true).slideDown(500);
    },function(){
        $(this).find(".lnb ul").stop(true,true).slideUp(500);
        // $(".bg_box").stop(true,true).slideUp(500);
    });
    
    
   
    $(".gnb").mouseleave(function(){
        $(.bg_box).stop(true,true).slideUp(500);
    });
*/

    
    
    
    
    
    
    
/*________________________________비쥬얼 fade*/
    
    var oldidx=0; //기존이미지
    var idx=0; //새로바뀌는 이미지
    var img_n= $(".visual_img ul li").length; //1,2,3..개수를 세어서 변수를 저장한다.  
    
    //이미지와 버튼이 바뀌는 함수
    function changeImg(idx){ //매개변수가 있는 함수 => dix는 선택되는 이미지
        
        if(oldidx!=idx){ //기존의 이미지와 선택된 이미지가 다를때
            $(".btn ul li").eq(idx).addClass("active");//선택된 하단버튼 활성화 -> active 클래스를 불러냄
            $(".btn ul li").eq(oldidx).removeClass("active");//기존 하단버튼 비활성화 -> active 클래스를 삭제함
            $(".visual_img ul li").eq(idx).stop(true,true).fadeIn(400); // 선택된 이미지 나타남
            $(".visual_img ul li").eq(oldidx).stop(true,true).fadeOut(400);// 기존 이미지 사라짐
            $(".visual_info_in ul li").eq(idx).stop(true,true).fadeIn(400);
            $(".visual_info_in ul li").eq(oldidx).stop(true,true).fadeOut(400);
        }
        oldidx=idx; // 선택된 이미지는 다시 기존이미지로 저장되어서 fade Out
    }
    
    
    //자동함수 생성
    function changeAuto(){
        idx++;
        
        //선택한 이미지가 마지막일때 다시 처음 이미지부터 시작
        if(idx>img_n-1){ //index는 0부터 시작하고 length는 1부터 시작하므로 1을 빼주어야 마지막 숫자가 맞음.
           idx=0;
        }
        changeImg(idx);
    }
    timer=setInterval(changeAuto,5000);  //4초 간격으로 함수를 자동재생(기억하자, setInterval 자동재생하는 함수임)

    
    
    
    //하단버튼 클릭시...
    $(".btn ul li").click(function(){
        clearInterval(timer); 
        //버튼 클릭 시 자동함수 해지 -> clearInterval
        
        idx=$(this).index(); // 0,1,2..
        changeImg(idx);
        timer=setInterval(changeAuto,5000);
        //버튼을 클릭안할 때는 다시 함수 자동재생
    });


    
    
    
    
    
    
    
    
    
    
    
    
    
/*menu hover 시(메뉴 호버)__________________*/
    
    $(".gnb>li").mouseenter(function(){
        $(".lnb ul").hide(); //기존에 보여지는 서브메뉴 안보이게....
        $(this).find(".lnb ul").stop(true,true).slideDown(500);
        $(".bg_box").stop().slideDown();
    });
    
    $(".gnb").mouseleave(function(){
        $(".lnb ul").hide();
        $(this).find(".lnb ul").stop(true,true).slideUp(500);
        $(".bg_box").stop().slideUp();
    });
    
    
    
    
    
    
    
    
/*아이콘 메뉴 호버시__________________*/
    
    $(".icon_menu ul li").hover(function(){
        /* 아이콘 위아래 움직이기*/
        $(this).find("a div img").stop(true,true)
            .animate({"margin-top":"-10px"},1100,"easeOutBounce",function(){
                $(this).stop(true,true).animate({"margin-top":"-5px"},500)
        });
        
        /*아이콘 색깔 변하기*/
        num=$(this).index()+1;
        $(this).find("a div img").attr({"src":"img/icon_hover"+num+".png"});

    },function(){
        /* 아이콘 위아래 움직이기*/
        $(this).find("a div img").stop(true,true)
            .animate({"margin-top":"0"},500);
        
        /* 아이콘 색깔 변하기*/
        $(this).find("a div img").attr({"src":"img/icon"+num+".png"});
    });
    
    
    
    
    
    
    
    
    
/*검색,상세검색 버튼 hover 시__________________*/
    $(".btn1").hover(function(){
        $(this).css({"color":"#1c8ac3","font-weight":"800"})
    },function(){
        $(this).css({"color":"#fff"})
    });
    
     $(".btn2").hover(function(){
        $(this).css({"color":"#1c8ac3","font-weight":"800"})
    },function(){
        $(this).css({"color":"#fff"})
    });
    
   
    
    
    
    
    
/*휴관일 아이콘 hover 시 ____________________*/
    $(".more").hover(function(){
        $(".more a:first-child").stop(true,true).animate({"margin-left":"70px"},250);
    },function(){
        $(".more a:first-child").stop(true,true).animate({"margin-left":"0px"},250);
    });
    
    
    
    
    
    
    
    
    
    
/*event banner  _______________________*/
    

    //자동으로 슬라이드 함수 생성
    function slideAuto(){
    
        $(".event_img ul").stop(true,true).animate({marginLeft:"-=220px"},1000,function(){
            //-= (대입연산자(누적연산자/계속 쌓임))
            $(".event_img ul li:first-child").appendTo(".event_img ul"); //첫번째 이미지 맨뒤로 이동
            $(this).css({marginLeft:"0px"}); //최종목적지
        });
    
    }
    auto=setInterval(slideAuto,4000);



    //마우스를 올리면 슬라이드 자동함수 멈추고, 마우스를 내리면 다시 자동함수 실행..
    $(".event_img").hover(function(){
        clearInterval(auto);
    },function(){
        auto=setInterval(slideAuto,4000);
    });
    
    
    //다음보기
    $(".ev_right_btn").click(function(){

         clearInterval(auto);//클릭하는순간 자동함수 멈춤
        
         $(".event_img ul").stop(true,true).animate({marginLeft:"-=220px"},1000,function(){
            //-= (대입연산자(누적연산자/계속 쌓임)
             
            $(".event_img ul li:first-child").appendTo(".event_img ul"); //마지막이미지 첫번째로 이동
            $(this).css({marginLeft:"0px"}); //최종목적지 
             
        });
        
        auto=setInterval(slideAuto,4000);//클릭하지않으면 자동함수실행
    });
    
    
    //이전보기
    $("ev_left_btn").click(function(){
        
        clearInterval(auto);//클릭하는순간 자동함수 멈춤
        
        
         $(".event_img ul").stop(true,true).animate({marginLeft:"+=220px"},1000,function(){
            //-= (대입연산자(누적연산자/계속 쌓임)
            $(".event_img ul li:last-child").prependTo(".event_img ul"); //마지막이미지 첫번째로 이동
            $(this).css({marginLeft:"0px"}); //최종목적지
             
        });
        
        auto=setInterval(slideAuto,4000);//클릭하지않으면 자동함수실행
    });
 
    
    
    
    
/*____________________________알림게시판 Notice*/
    
    
    $(".desc>ul>li:not(:first)").hide();
    
    $(".Not_menu li a").click(function(){
        $(".Not_menu li a").removeClass("selected");
        $(this).addClass("selected");
        $(".desc>ul>li").hide();
        $($(this).attr("href")).show();
        return false; //a 기능 차단 
    });
    
    
    
    
});






