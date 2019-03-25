
var touchNum=0;


		
//映射
function convertToRange(value, srcRange, dstRange){
  // value is outside source range return
  if ( value > srcRange[1]){
    return 71; 
  }
  if (value < srcRange[0]){
    return 0; 
  }

  var srcMax = srcRange[1] - srcRange[0],
      dstMax = dstRange[1] - dstRange[0],
      adjValue = value - srcRange[0];

  return (adjValue * dstMax / srcMax) + dstRange[0];

}



$(document).ready(function () {
 var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: false, // 循环模式选项
    freeMode : true,
    freeModeMomentum : false,
    freeModeMomentumVelocityRatio : 0.5,
    freeModeMomentumRatio : 0.5,
    watchSlidesProgress : true,
      on:{
     progress: function(progress){
      //你的事件
      touchNum=Math.floor(convertToRange(progress,[0,1],[0,71]));
      //console.log(touchNum);
    },
    },
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },

  })  


	var myVar;
	 
	function myFunction() {
	    myVar = setInterval(alertFunc, 10);
	}
	 
	function alertFunc() {
	    if(mySwiper.animating){
			//touchNum=Math.floor(convertToRange(mySwiper.progress,[0,1],[0,71]));
	        console.log("1");
		}
	}



	//play
    var canvas = document.getElementById("canvas");
        //设置宽高不从css中设置
        canvas.width = 402;//设置canvas宽
        canvas.height = 720;//设置canvas高
        //获取上下文
        var ctx = canvas.getContext("2d");
        //加载图片
        var img = new Image();
        img.src = "001.jpg";
        var frameIndex = 0,dirIndex = 0;
        img.onload = function () {
            setInterval(function () {
                //清除 之前的 图片墨迹。
                ctx.clearRect(0,0,canvas.width,canvas.height);
                ctx.drawImage(
                    img
                    , touchNum*402    //截取原始图片的 x坐标
                    , dirIndex*720    //截取原始图片的 y坐标
                    , 402    //截取原始图片的 宽度
                    , 720    // 截取的高度
                    , 0    //图片在canvas画布上的x坐标
                    , 0    //图片在canvas画布上的y坐标
                    , 402    //绘制图片的宽度
                    , 720 *1    //绘制图片的高度
                );
                frameIndex++;// 添加到下一帧
                frameIndex %=71;// 取余数   7 %4 = 3   3%4 =3  4%4 =0
            },10)
        }

})






