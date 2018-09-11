var hwSlideSpeed = 900;
var hwTimeOut = 3000;

$(document).ready(function(e) {
	$("#slider1").swipe( {
		swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
		  if(direction=="left"){
			 animSlide("prew");
			 return false;
			 }
		  if(direction=="right"){
			 animSlide("next");
			 return false;
		  }
		},
		threshold:0
 	});

	$('#slider1 .slide').css({"position" : "absolute", "top":'0', "left": '0'}).hide().eq(0).show();

	var slideNum = 0;
	var slideTime;
	slideCount = $("#slider1 .slide").size();

	var animSlide = function(arrow){
		clearTimeout(slideTime);
		$('#slider1 .slide').eq(slideNum).fadeOut(hwSlideSpeed);

		if(arrow == "next"){
			if(slideNum == (slideCount-1)){slideNum=0;}
			else{slideNum++}
			}
		else if(arrow == "prew")
		{
			if(slideNum == 0){slideNum=slideCount-1;}
			else{slideNum-=1}
		}
		else{
			slideNum = arrow;
		}

		$('#slider1 .slide').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
		$(".control-slide.active").removeClass("active");
		$('.control-slide').eq(slideNum).addClass('active');
	}

	var pause = false;
	var rotator = function(){
		if(!pause){slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);}
	}

	$('#slider1').hover(
		function(){clearTimeout(slideTime); pause = true;},
		function(){pause = false; rotator();
	});

	rotator();
});

$(document).ready(function(e) {
	$("#slider2").swipe( {
		swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
		  if(direction=="left"){
			 animSlide("prew");
			 return false;
			 }
		  if(direction=="right"){
			 animSlide("next");
			 return false;
		  }
		},
		threshold:0
 	});

	$('#slider2 .slide').css({"position" : "absolute", "top":'0', "left": '0'}).hide().eq(0).show();

	var slideNum = 0;
	var slideTime;
	slideCount = $("#slider2 .slide").size();

	var animSlide = function(arrow){
		clearTimeout(slideTime);
		$('#slider2 .slide').eq(slideNum).fadeOut(hwSlideSpeed);

		if(arrow == "next"){
			if(slideNum == (slideCount-1)){slideNum=0;}
			else{slideNum++}
			}
		else if(arrow == "prew")
		{
			if(slideNum == 0){slideNum=slideCount-1;}
			else{slideNum-=1}
		}
		else{
			slideNum = arrow;
		}

		$('#slider2 .slide').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
		$(".control-slide.active").removeClass("active");
		$('.control-slide').eq(slideNum).addClass('active');
	}

	var pause = false;
	var rotator = function(){
		if(!pause){slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);}
	}

	$('#slider2').hover(
		function(){clearTimeout(slideTime); pause = true;},
		function(){pause = false; rotator();
	});

	rotator();
});
