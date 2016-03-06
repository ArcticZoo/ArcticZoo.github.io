document.addEventListener('DOMContentLoaded',function(){
	//利用addEventListener绑定DOMcontentLoaded事件来确认页面完成加载（这儿只兼容IE9以上）
	var inp = document.getElementById("input");
	var outp = document.getElementById("output");
	var btn1 = document.getElementById("btn");
	var err = document.getElementById("err");
	//不加#
	btn1.addEventListener("click",function(){
		outp.innerHTML="";
		var value=inp.value.split(/\,|\，|\、|\;|\；/);
		//利用split方法将字符串转化为数组，用正则进行分割
		var newValue=uniqArray(value);
		//利用函数进行数组去重
		var len=newValue.length;
		if(len>10){
			err.innerHTML="爱好超出了10个";
			err.style.color="red";
			return false;
		}
		err.innerHTML="";
		for (var i = 0; i<len ; i++) {
			var trimValue=trim(newValue[i]);
			//利用trim函数修建每个元素前后的空格
			if(trimValue!==""){
				outp.innerHTML+="<ul><input type='checkbox'>"+trimValue+"</ul>";
			}
		}
	},false);
},false);
	
function uniqArray(value){
    var n = [] ;
    //临时数组 思路是将旧的数组的内容向新的送 这个过程中用indexOf查重
    for(var i=0;i<value.length;i++){
    	//如果第i项已经保存进去，则跳过 否则利用push方法
    	if(n.indexOf(value[i])==-1){
    		n.push(value[i]);
    	}
    } 
    return n;
    //注意 在IE8以下的浏览器不支持indexOf这个查找索引的方法 需要用其他方法替代
}
function trim(trimArray){
	var trimer = new RegExp("(^\s+)|(\s+$)","g");
	//去除前后的空格
	return String(trimArray).replace(trimer,"");
}
/*
知识要点
正则表达式的简单应用 / replace的使用
split方法的应用
数组去重方法 / indexOf方法的应用
click的事件绑定
innerHTML和getElementById
*/