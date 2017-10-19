
var timeset=0;
$(".btn").click(function(){
  var x;
  var y;
  timeset++;
  $(".eat").css("opacity","1");
  x=Math.random()*15;
  x=Math.floor(x);
  console.log(x);
  switch(x){
  	case 1:$(".eat").text("吃佳豆御坊");
  	break;
  	case 2:$(".eat").text("吃老北方");
  	break;
  	case 3:$(".eat").text("吃老乡家");
  	break;
  	case 4:$(".eat").text("吃重庆小面");
  	break;
  	case 5:$(".eat").text("吃小米姑娘");
  	break;
  	case 6:$(".eat").text("吃兰州拉面");
  	break;
  	case 7:$(".eat").text("吃龙虾饭");
  	break;
  	case 8:$(".eat").text("吃蒸菜");
  	break;
  	case 9:$(".eat").text("吃潮之味");
  	break;
  	case 10:$(".eat").text("吃湘味100");
  	break;
  	case 11:$(".eat").text("吃福香苑");
  	break;
  	case 12:$(".eat").text("吃黄焖鸡");
  	break;
  	case 13:$(".eat").text("吃兰州拉面");
  	break;
  	case 14:$(".eat").text("吃龙虾饭");
  	break;
  }
  if(timeset>=10){
  	$(".eat").text("就你最矫情，甭吃了(微笑");
  }
});

function addtext(){
	$(".text1").html()
}
function addtext_2(){
	console.log("b");
}

