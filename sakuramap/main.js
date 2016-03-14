
//初始化地图
    var map = new BMap.Map("allmap",{minZoom:18,maxZoom:19});
    	map.centerAndZoom(new BMap.Point(106.613922,29.53832),18); 
    	map.enableScrollWheelZoom(true);

//防止越界
    var b = new BMap.Bounds(new BMap.Point(106.603922,29.52832),new BMap.Point(106.623922,29.54832));
    	try {	
    		BMapLib.AreaRestriction.setBounds(map, b);
    	} catch (e) {
    		alert(e);
    	}

//创建樱花标注
	var pt = new BMap.Point(106.613922,29.53832);
	var myIcon = new BMap.Icon("img/sakura.png", new BMap.Size(50,50));
	var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
	map.addOverlay(marker2);       // 将标注添加到地图中 

//定位服务
var geolocation = new BMap.Geolocation();
	geolocation.getCurrentPosition(function(r){
		if(this.getStatus() == BMAP_STATUS_SUCCESS){
			var mk = new BMap.Marker(r.point);
			map.addOverlay(mk);
			map.panTo(r.point);
			alert('您的位置：'+r.point.lng+','+r.point.lat);
		}
		else {
			console.log('failed'+this.getStatus());
		}        
	},{enableHighAccuracy: true})