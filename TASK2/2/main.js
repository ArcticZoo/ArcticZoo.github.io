document.addEventListener('DOMContentLoaded',function(){
	var inp =document.getElementById("input");
	var outp =document.getElementById("output");
	var btn =document.getElementById("btn");
	var trueinp = new RegExp("[0-9]{4}-([0-9]{2}|[1-9]{1})-([0-9]{2}|[1-9]{1})","g");
	var timeID;//定时器的id值，在进行计时后下次计时前需要clearInterval
	btn.addEventListener("click",function(){

		function newcount(){
			err.innerHTML = "";
	    	outp.innerHTML = "";
	    	window.clearInterval(timeID); 
	    	//复位函数
		}
		newcount();

		if(trueinp.test(inp.value)==false){
			err.innerHTML = "不符合格式" ; //不是（）形式而是=形式
			return false;
		}
		trueinp.lastIndex=0;//因为使用了test函数改变了索引位置，所以得重置

	    var inpTimeArray = inp.value.split(/-/);

	    if(inpTimeArray[1]<10){
	        inpTimeArray[1] = "0"+inpTimeArray[1];
	       }
	       if(inpTimeArray[2]<10){
	        inpTimeArray[2] = "0"+inpTimeArray[2];
	       }
	       if(inpTimeArray[1]>12){
	        err.innerHTML = "月份不能大于12";
	        console.log("err");
	        return false;
	       }
	       if(inpTimeArray[2]>31){
	        err.innerHTML = "日期不能大于31";
	        return false;
	       }

		//将月和日提出来，对个位数的进行前面加0的处理
		
		timeID=window.setInterval(function(){  //DOM定时方法
			var nowTime = new Date();//获取当前的时间 使用getTime后返回的是毫秒数
    		var inpTime = new Date(inpTimeArray[0]+"/"+inpTimeArray[1]+"/"+inpTimeArray[2]+" 00:00:00");
    		var timeDis=inpTime.getTime()-nowTime.getTime();
    		if(timeDis==0){
    			return false;
    		}
    		var timeDay = Math.floor(timeDis/86400000);
            timeDis-=timeDay*86400000;
            var timeHour = Math.floor(timeDis/3600000);
            timeDis-=timeHour*3600000;
            var timeMin = Math.floor(timeDis/60000);
            timeDis-=timeMin*60000;
            var timeS = Math.floor(timeDis/1000);
            timeDis-=timeS*1000;
    		outp.innerHTML = "距离"+inpTimeArray[0]+"年"+inpTimeArray[1]+"月"+inpTimeArray[2]+"日还有"+timeDay+"天"+timeHour+"小时"+timeMin+"分钟"+timeS+"秒";
		},1000);
		
	},false);

},false);
