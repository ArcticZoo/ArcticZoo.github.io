$(document).ready(function(){
	main.index();
	$(document).on("mousewheel",function(){
		main.index();
	});
	$(window).mousemove(function(e){
		$("#withMe").css("top",e.clientY + "px");
	}) //不能使用on来绑定 不知道什么问题 使用on来绑定只会计算鼠标落在元素上的坐标
	$(window).bind("touchmove",function(ev){
		var yTouch = ev.originalEvent.changedTouches[0].clientY;
		$("#withMe").css("top",yTouch + "px");
		main.touchShow(ev);
	});
});

var main = {};

var ev = 0;

main.index = function(){
	var scrollTop = $(document).scrollTop();
	if(scrollTop<902){
		clearClass();
		$("#index1").addClass("on");
	}
	else if(902<scrollTop && scrollTop<1330){
		clearClass();
		$("#index2").addClass("on");
	}
	else if(1330<scrollTop && scrollTop<2273){
		clearClass();
		$("#index3").addClass("on");
	}
	else if(2273<scrollTop && scrollTop<2825){
		clearClass();
		$("#index4").addClass("on");
	}
	else if(2825<scrollTop){
		clearClass();
		$("#index5").addClass("on");
	}
}

main.touchShow = function(ev){
	var yShow = ev.originalEvent.changedTouches[0].pageY;
	console.log(yShow);
}


function clearClass(){
	for(var i=1;i<6;i++){
		$("#index"+i).removeClass();
	}
}

function goTo(number){
	if(number==2){
		$("body").animate({scrollTop:"0px"},300);
		clearClass();
		$("#index1").addClass("on");
	}
	else if(number==3){
		$("body").animate({scrollTop:"903px"},300);
		clearClass();
		$("#index2").addClass("on");
	}
	else if(number==4){
		$("body").animate({scrollTop:"1331px"},300);
		clearClass();
		$("#index3").addClass("on");
	}
	else if(number==5){
		$("body").animate({scrollTop:"2274px"},300);
		clearClass();
		$("#index4").addClass("on");
	}
	else if(number==6){
		$("body").animate({scrollTop:"2826px"},300);
		clearClass();
		$("#index5").addClass("on");
	}

}
