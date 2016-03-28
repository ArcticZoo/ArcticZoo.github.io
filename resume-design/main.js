$(document).ready(function(){
	//初始化右边index 再绑定一些其他的事件
	main.index();
    main.bindUI();
    //如果是火狐大爷的话
    if (navigator.userAgent.indexOf('Firefox') >= 0){
	    $("#top").css("display","block");
	    $("#top").on("click",function(){
	    	this.style.opacity = 0;
	    })
    }

	//监听滚动事件
	$(document).on("DOMMouseScroll",function(){
		main.index();
	}); //兼容火狐大爷
	$(document).on("mousewheel",function(){
		main.index();
	});

	//监听鼠标移动
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

main.bindUI = function(){
	$(".section3 p").on("mousemove",function(){
		console.log("1");
		this.style.border=".8px solid #5db1ff";
	    this.style.color="#5db1ff";
	})
	$("html").on("click",function(){
		console.log("1");
		for(var i=0;i<$(".section3 p").length;i++){
			$(".section3 p")[i].style.color="#888";
	     	$(".section3 p")[i].style.border=".8px solid #888";
		}
	})
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
