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

/*一個前の*/
// $(function(){
//     $(window).scroll(function () {
//         // var ScrTop = $(document).scrollTop();
//  		var windowHeight = $(window).height();
//         var windowScrolltop = $(window).scrollTop();
//         var scrollBottom = windowHeight + windowScrolltop;
//         var offsetTop01 = $('#titleTxt01').offset().top;
//         var offsetTop02 = $('#titleTxt02').offset().top;
//         var offsetTop03 = $('#titleTxt03').offset().top;
//         var offsetTop04 = $('#titleTxt04').offset().top;
//         var offsetTop05 = $('#titleTxt05').offset().top;
//         var titleTxt03_Opacity = $('#titleTxt03').css('opacity');
//         var titleTxt04_Opacity = $('#titleTxt04').css('opacity');

//         console.log(titleTxt03_Opacity,titleTxt04_Opacity);
//         // console.log(titleTxt03_Opacity,windowScrolltop,windowHeight,scrollBottom,offsetTop01,offsetTop02);
//         if(scrollBottom-100 > offsetTop01){
//         	$('#titleTxt01').delay(200).animate({
//         		opacity:1
//         	},'slow');
//         }

//         if(scrollBottom-100 > offsetTop02){
//         	$('#titleTxt02').delay(200).animate({
//         		opacity:1
//         	},'slow');
//         }
//         if(scrollBottom-100 > offsetTop03){
//         	$('#titleTxt03').delay(200).animate({
//         		opacity:1,
//         		top:0
//         	},'slow');
//         	if(titleTxt03_Opacity == 1){
//         		console.log(titleTxt03_Opacity,"透明度が1になったよ");
// 	        	$('#titleTxt04').animate({
//         			opacity:1,
//         			top:0
// 	        	},'slow');
// 	        	if(titleTxt04_Opacity == 1){
// 	        		console.log(titleTxt04_Opacity,"透明度が1になったよ");
// 		        	$('#titleTxt05').animate({
// 	        			opacity:1,
// 	        			top:0
// 		        	},'slow');
// 		        }
//         	}

//         }
       
//     });
// });
/*最新案*/
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
        var i = 150;

        var serviceMenuImg = $('#service_menu').offset().top;

        // console.log(serviceMenuImg,windowScrolltop,windowHeight,scrollBottom,offsetTop01,offsetTop02);
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

	       
        	$('#titleTxt04').delay(200+i).animate({
    			opacity:1,
    			top:0
        	},'slow');

	        
        	$('#titleTxt05').delay(200+(2*i)).animate({
				opacity:1,
				top:0
        	},'slow');
		        
        }

        if(scrollBottom-100 > serviceMenuImg){
        	$('#service_menu').delay(400).animate({
        		opacity:1,
        		top:0,
        		left:0
        	},'slow');
				
				var serviceTop = $('#service_menu').css('top');
				var serviceBtm = $('#service_menu').offset().top;
				
				if (serviceTop == '0px' || scrollBottom == serviceBtm) {
					console.log(serviceTop,scrollBottom,serviceBtm);
		        	// $('#service_menu01').delay(200+i).animate({
		        	// 	opacity:1,
		        	// 	top:0,
		        	// 	left:0
		        	// },'slow');

		        	$('#service_menu02').animate({
		        		opacity:1,
		        		top:-330,
		        		left:290
		        	},'slow');

		        	$('#service_menu03').delay(200).animate({
		        		opacity:1,
		        		top:0,
		        		left:290
		        	},'slow');

		        	$('#service_menu04').delay(400).animate({
		        		opacity:1,
		        		top:0,
		        		left:580
		        	},'slow');

        		};
        }
    });
});



// $(function(){
//     $(window).scroll(function () {
//         // var ScrTop = $(document).scrollTop();
//  		var windowHeight = $(window).height();
//         var windowScrolltop = $(window).scrollTop();
//         var scrollBottom = windowHeight + windowScrolltop;
//         var offsetTop01 = $('#titleTxt01').offset().top;
//         var offsetTop02 = $('#titleTxt02').offset().top;
//         var offsetTop03 = $('#titleTxt03').offset().top;
//         var offsetTop04 = $('#titleTxt04').offset().top;
//         var offsetTop05 = $('#titleTxt05').offset().top;
//         console.log(windowScrolltop,windowHeight,scrollBottom,offsetTop01,offsetTop02);
//         if(scrollBottom-100 > offsetTop01){
//         	$('#titleTxt01').delay(200).animate({
//         		opacity:1
//         	},'slow');
//         }
//         if(scrollBottom-100 > offsetTop02){
//         	$('#titleTxt02').delay(200).animate({
//         		opacity:1
//         	},'slow');
//         }
//         if(scrollBottom-100 > offsetTop03){
//         	$('#titleTxt03').delay(200).animate({
//         		opacity:1,
//         		top:0
//         	},'slow');

// 	        if(scrollBottom-100 > offsetTop04){
// 	        	$('#titleTxt04').delay(300).animate({
//         			opacity:1,
//         			top:0
// 	        	},'slow');
	
// 		        if(scrollBottom-100 > offsetTop05){
// 		        	$('#titleTxt05').delay(400).animate({
//         				opacity:1,
//         				top:0
// 		        	},'slow');
// 		        }

// 	        }
//         }

//     });
// });
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