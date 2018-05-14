window.onload=function(){
	//1.首次加载的时候 调用动态设置rem的api
	setRemSize();
	document.getElementById("floatZhe").style.display="none";
	window.addEventListener("resize",setRemSize,false);
	function setRemSize(){
	//1.在任何尺寸中都可以获得rem值
	var _clientWidth=document.documentElement.clientWidth/7.5+"px";
	//将得到的rem值赋值给根元素的font-size
	document.documentElement.style.fontSize=_clientWidth;
	}
};

