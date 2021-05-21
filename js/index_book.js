


$(document).ready(function(){
   
    $(".gnb>li").hover(function(){
        $(this).find(".lnb ul").stop(true,true).slideDown();
        $(".bg_box").stop(true,true).slideDown();
    },function(){
        $(this).find(".lnb ul").stop(true,true).slideUp();
    });
    
    
    $(".bg_box").mouseleave(function(){
        $(this).stop(true,true).slideUp();
    });
    

    
 /*   
    $(".gnb>li").mouseenter(function(){
        $(this).find(".lnb ul").stop(true,true).slideDown();
        $(".bg_box").stop(true,true).slideDown();
    });
        mouseenter 와 mouseleav는 같이 움직이지 않아도 됨 
        마우스엔터는 ㅂbg박스 

    마우스 리브만 적용해보자 !!1 

    hover는 메뉴*/
    
    
    


/*






$(".gnb>li").hover(function(){ // 목록 항목의 이벤트 위로 마우스를 가져갑니다. 
		 $(".bg_box").css({'background':'#1376c9 repeat-x'}); // 호버 된 목록 항목에 배경색 및 이미지 추가 
		$(this).find(".lnb ul").show(); // 하위 탐색 표시 
	},function(){ // 호버 아웃시 ... 
		$(this).find(".lnb ul").css({'background':'none'}); // 배경을 버리십시오 
		$(this).find(".lnb ul").hide(); // 서브 탐색 숨기기
	});
    */
    
    
    
    
});






