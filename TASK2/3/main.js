document.addEventListener("DOMContentLoaded",function(){
	var order = 1, // 正:1|逆:2
        loop = 1, //y:1|n:0
        loopTime = 2000 ; //间隔时间
        index=0;
    var timer;
    var warp = document.getElementById("wrap"),
        btn = document.getElementById("btn"),
        li = document.getElementsByTagName("li");
        img = document.getElementsByTagName("img");
    var marginWrapTop = getClass("activeImg","wrap")[0].offsetHeight+2;

    function photoShow(){
        for(var i=0;i<5;i++){
            if(img[i].className=="activeImg"){
                wrap.style.marginTop=-marginWrapTop*i+"px";
            }
        }
    }

    //显示和DATA分开，显示是 谁有class=activeImg 就显示谁

    function timerNow(){
        photoShow();
        clearcls(img[index],"activeImg"); 
        clearcls(li[index],"active"); 
        index++;
        if(index>4){ //控制循环
            if(loop==0){
                index=4;
                return false;
            }
            else{
                index=0;
            }
        }
        console.log(index);
        addcls(img[index],"activeImg");
        addcls(li[index],"active"); 
        photoShow(); //这儿引起的延时 如果不加这儿 第一个会多一倍的时间 （！
        setTimeoutAgain();
    }
    //声明计时函数

    function setTimeoutAgain(){
        timer = window.setTimeout(timerNow,loopTime); 
    };
    setTimeoutAgain();

    for(var j=0;j<5;j++){
        (function(j){
            li[j].addEventListener("click",function(){
                clearcls(li[0],"active");
                clearcls(li[1],"active");
                clearcls(li[2],"active");
                clearcls(li[3],"active");
                clearcls(li[4],"active");
                addcls(li[j],"active");
                clearcls(document.getElementsByTagName("img")[index],"activeImg"); 
                index=j
                addcls(document.getElementsByTagName("img")[index],"activeImg");
                photoShow();
                clearTimeout(timer);
                setTimeout(function(){
                    //timerNow();
                    setTimeoutAgain();
                },500);
                // 按下返回新的索引，刷新索引值
            })
        }(j))
    }
    //闭包 批量绑定事件



},false);



//class选择器
function getClass(clsName,parent){ //为clsName是为了避免和classname属性重复
	var oParent=parent?document.getElementById(parent):document,
        e=[],
        element = oParent.getElementsByTagName("*");
    for(var i=0,len=element.length;i<len;i++){
        element[i].className = element[i].className.replace(" ","");
    	if(clsName==element[i].className){
    		e.push(element[i]);
    	}
    }
    return e;
}
//确认是否有class
function hasClass(obj, cls) {  
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));  
}  
//ADD
function addcls(obj, cls) {  
    if (!this.hasClass(obj, cls)) obj.className += "" + cls;  
}  
//CLEAR
function clearcls(obj, cls) {  
    if (hasClass(obj, cls)) {  
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
        obj.className = obj.className.replace(reg, '');  
    }  
} 