var pagetop, glovalmenu, yPos;
function yScroll(){
	pagetop = document.getElementById('pagetop');
	glovalmenu = document.getElementById('glovalmenu');
	yPos = window.pageYOffset;
	if(yPos > 150){
		pagetop.style.height = "120px";
		pagetop.style.paddingTop = "50px";
		glovalmenu.style.height = "50px";

	} else {
		pagetop.style.height = "36px";
		pagetop.style.paddingTop = "8px";
		glovalmenu.style.height = "0px";
	}
}
window.addEventListener("scroll", yScroll);//スクロールしたら発火。コントロール付属のスクロールバー位置が変更されたときに発火



$(function() {
  var h = $(window).height();
 
  $('#wrap').css('display','none');
  $('#loader-bg ,#loader').height(h).css('display','block');
});

jQuery.event.add(window,"load",function() { //全ての読み込みが完了したら実行
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
  $('#wrap').css('display', 'block');
});	

$(window).load(function () {
		$('#massage01').delay(1500).animate({
				'opacity':'1',
				'top':'0'
		},{ duration: 600, easing: 'swing', });
		$('#massage02').delay(1500).animate({
				'opacity':'1',
				'top':'0'
		},{ duration: 600, easing: 'swing', });
});
$(function(){
    $(window).scroll(function () {
        // var ScrTop = $(document).scrollTop();
 		var windowHeight = $(window).height();
        var windowScrolltop = $(window).scrollTop();
        var scrollBottom = windowHeight + windowScrolltop;
        var offsetTop01 = $('#titleTxt01').offset().top;
        var offsetTop02 = $('#titleTxt02').offset().top;
        var offsetTop03 = $('#titleTxt03').offset().top;
        var offsetTop04 = $('#titleTxt04').offset().top;
        var offsetTop05 = $('#titleTxt05').offset().top;
        console.log(windowScrolltop,windowHeight,scrollBottom,offsetTop01,offsetTop02);
        if(scrollBottom-100 > offsetTop01){
        	$('#titleTxt01').delay(200).animate({
        		opacity:1
        	},'slow');
        }
        if(scrollBottom-100 > offsetTop02){
        	$('#titleTxt02').delay(200).animate({
        		opacity:1
        	},'slow');
        }
        if(scrollBottom-100 > offsetTop03){
        	$('#titleTxt03').delay(200).animate({
        		opacity:1,
        		top:0
        	},'slow');

	        if(scrollBottom-100 > offsetTop04){
	        	$('#titleTxt04').delay(300).animate({
        			opacity:1,
        			top:0
	        	},'slow');
	
		        if(scrollBottom-100 > offsetTop05){
		        	$('#titleTxt05').delay(400).animate({
        				opacity:1,
        				top:0
		        	},'slow');
		        }

	        }
        }

    });
});

	// $(function() {
 //    	var offsetTop01 = $('#titleTxt').offset().top;
 //    	var ingFlag01 = false;
	//     var	scrollValue = $(window).scrollTop();
	// 	console.log(offsetTop01,scrollValue,ingFlag01);
 //        var floatMenu = function() {
 //        	if (scrollValue > offsetTop01+500 && ingFlag01==false) {
	// 			ingFlag01=true;
 //            	$('#titleTxt').animate({
	// 				opacity:1
 //            	},'slow');
 //        	}
 //    	}
 //        $(window).scroll(floatMenu);
 //    });


	// $(window).load(function () { //全ての読み込みが完了したら実行
	//   $('#loader-bg').delay(900).fadeOut(800);
	//   $('#loader').delay(600).fadeOut(300);
	//   $('#wrap').css('display', 'block');
	//   $('#massage').delay(900).animate({
	// 	'opacity':'0.5'
	// 	},'slow');;
	// });
	 
	//10秒たったら強制的にロード画面を非表示
	$(function(){
	  setTimeout('stopload()',10000);
	});
	 
	function stopload(){
	  $('#wrap').css('display','block');
	  $('#loader-bg').delay(900).fadeOut(800);
	  $('#loader').delay(600).fadeOut(300);
	}