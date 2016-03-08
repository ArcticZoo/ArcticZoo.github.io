$(document).ready(function(){
	touch.on("#wrap", 'touchstart', function(ev){
	    ev.preventDefault();
    });
    var dy=0, //相对坐标
        offydata=0;//绝对坐标 在外部声明 不然每次触发会重置

    touch.on(".a", 'drag', function(ev){
	    offydata =dy + ev.y ;//前一个加了px的
	    if(offydata>=0){
	    	offydata=0;
	    }
	    $(".a")[0].style.webkitTransform = "translate3d(0,"+ offydata + "px,0)";
	    if(offydata < -300){
	    	$(".a")[0].style.webkitTransform = "translate3d(0,-100%,0)";
	    	    window.setTimeout(function(){
	    	    	offydata=0,
	    	        dy=0;//绝对坐标和相对坐标清零
	            },400)
	    	
	    }
	    
    });

    touch.on('.a', 'dragend', function(ev){
	    dy += ev.y;
	    console.log(offydata);
	    if(dy>-300){
	    	$(".a")[0].style.webkitTransform = "translate3d(0,0,0)";
	    }
    });

    touch.on(".b", 'drag', function(ev){
	    offydata =dy + ev.y ;//前一个加了px的
	    if(offydata>=0){
	    	offydata=0;
	    }
	    $(".b")[0].style.webkitTransform = "translate3d(0,"+ offydata + "px,0)";
	    if(offydata < -300){
	    	$(".b")[0].style.webkitTransform = "translate3d(0,-100%,0)";
	    	    window.setTimeout(function(){
	    	        offydata=0,
	            	dy=0;//绝对坐标和相对坐标清零
	            },400)
	    	
	    }
	    
    });

    touch.on('.b', 'dragend', function(ev){
	    dy += ev.y;
	    console.log(offydata);
	    if(dy>-300){
	    	$(".b")[0].style.webkitTransform = "translate3d(0,0,0)";
	    }
    });

    touch.on(".c", 'drag', function(ev){
	    offydata =dy + ev.y ;//前一个加了px的
	    if(offydata>=0){
	    	offydata=0;
	    }
	    $(".c")[0].style.webkitTransform = "translate3d(0,"+ offydata + "px,0)";
	    if(offydata < -300){
	    	$(".c")[0].style.webkitTransform = "translate3d(0,-100%,0)";
	    	    window.setTimeout(function(){
	    	        offydata=0,
	            	dy=0;//绝对坐标和相对坐标清零
	            },400)
	    	
	    }
	    
    });

    touch.on('.c', 'dragend', function(ev){
	    dy += ev.y;
	    console.log(offydata);
	    if(dy>-300){
	    	$(".c")[0].style.webkitTransform = "translate3d(0,0,0)";
	    }
    });

    touch.on(".back","tap",function(){
    	$(".a")[0].style.webkitTransform = "translate3d(0,0,0)";
    	$(".b")[0].style.webkitTransform = "translate3d(0,0,0)";
    	$(".c")[0].style.webkitTransform = "translate3d(0,0,0)";
    	
    })

});
