document.addEventListener("DOMContentLoaded",function(){

    var inp = document.getElementById("inp");
    var about = document.getElementById("about");

    //模拟从后端来的数据
    var suggestData = ['about', 'after', 'add','aaa','ask','cut','cook','cost','berserker','best','bbb','be','br'];

    //监听输入 这儿有onchange onkeyup onfocse等事件 选择keyup是因为能及时监听
    inp.addEventListener("keyup",function(){
        var inpval = inp.value;
        var returnData = matchData(inpval,suggestData);
        about.innerHTML="";//在打印前清除旧的 刷新数据
        printf(returnData,about,inp);

    });
    
    //闭包绑定点击函数 不能对新插入的li进行绑定 所以没有在这儿绑定 而是改为生成一个绑定一个


    //点击页面空白部分清除list
    document.addEventListener("click",function(){
        about.innerHTML="";
    })
});

//数据匹配
function matchData(inpval,suggestData){
    //var valData = inpval.split(/(.)/);//取出单字 
    //var valDataNew = uniqArray(valData); 想错了 不用取出单字
    //console.log(inpval);
    listArray = [];
    for(var i=0;i<suggestData.length;i++){
        var reg = new RegExp("^"+inpval,"i"); //正则加入变量
        if(suggestData[i].match(reg)){
            if(inpval==""){
                return false;
            } 
            listArray.push(suggestData[i]);  
        }
        
    }
    return listArray;

    
}

//数组去空
/*
function uniqArray(valData){
    var a=[];
    for(var j=0,len=valData.length;j<len;j++){
        if(valData[j]!==""){
            a.push(valData[j]);
        }
    }
    return a;
}
*/

//打印数据
function printf(returnData,about,inp){
    for(var i=0;i<returnData.length;i++){
        (function(){
            var a = i;
            about.innerHTML+="<li class=li"+a+">"+returnData[a]+"</li>"; //+=否则会覆盖
            console.log("  "+a);
        })();
    };
    for(var j=0;j<returnData.length;j++){
        (function(){
            getClass("li"+j)[0].addEventListener("click",function(){
                inp.value = this.innerHTML;
            });
        })()
    }     
   //迷之BUG 不知道为什么这儿必须要分开写循环才能成功绑定
}

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