$(document).ready(function(){
    //初始化地图
	var map = new BMap.Map("allmap",{minZoom:18,maxZoom:19});
    	map.centerAndZoom(new BMap.Point(106.613922,29.53832),18); 
    	map.enableScrollWheelZoom(true);

    map.addControl(new BMap.MapTypeControl()); //添加地图类型控件

	mapApp.out(map);
    mapApp.mark(map);
	map.addEventListener("click", function(e){
        $("txtGeoLng").value=e.point.lng;
        $("txtGeoLat").value=e.point.lat;
        console.log("当前位置：" + e.point.lng + ", " + e.point.lat);
    });         
})

var mapApp = {};

//越界
mapApp.out = function(map){
	var b = new BMap.Bounds(new BMap.Point(106.603922,29.52832),new BMap.Point(106.623922,29.54832));
    	try {	
    		BMapLib.AreaRestriction.setBounds(map, b);
    	} catch (e) {} 
}
    
mapApp.mark = function(map){
	//创建樱花标注
    var pt = [];
    var marker = [];
	    pt[0] = new BMap.Point(106.613671, 29.540932);
	    pt[1] = new BMap.Point(106.612673, 29.539235);
	    pt[2] = new BMap.Point(106.613671, 29.54028);//三教门口的樱花
        pt[3] = new BMap.Point(106.612063, 29.539581);
	    pt[4] = new BMap.Point(106.612853, 29.539573);
	    pt[5] = new BMap.Point(106.614479, 29.540963);//樱花园的樱花
	    pt[6] = new BMap.Point(106.616154, 29.537546);//15栋的樱花
	    pt[7] = new BMap.Point(106.613221, 29.536046);
	    pt[8] = new BMap.Point(106.611865, 29.536336);
	    //樱花的点
	var myIcon = new BMap.Icon("sakura.png", new BMap.Size(50,50));
	for(var i=0;i<9;i++){
		marker[i] = new BMap.Marker(pt[i],{icon:myIcon});  // 创建标注
	    map.addOverlay(marker[i]); //添加
	}
} 

 
//定位服务
/*
var geolocation = new BMap.Geolocation();
	geolocation.getCurrentPosition(function(r){
		if(this.getStatus() == BMAP_STATUS_SUCCESS){
			var mk = new BMap.Marker(r.point);
			map.addOverlay(mk);
			map.panTo(r.point);
			//alert('您的位置：'+r.point.lng+','+r.point.lat);
		}
		else {
			console.log('failed'+this.getStatus());
		}        
	},{enableHighAccuracy: true})
	*/

	
