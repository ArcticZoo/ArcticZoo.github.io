$(document).ready(function() {
	//生成粒子
  $('#particles').particleground({
    dotColor: '#cfeef6',
    lineColor: '#cfeef6'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });

  //改变标尺坐标
  $(document).mousemove(function(e){  //body只是元素的显示范围,document是整个文档的范围
        $(".move-line").css("left",e.pageX);
  });

});