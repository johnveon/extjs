Ext.onReady(function(){
	var dt = new Ext.util.DelayedTask(function(){//延迟执行
		alert("-----");
	});
	Ext.get("b5").on("click",function(){
		dt.delay(4000);//4秒之后执行
		//dt.cancel();//取消延迟
	});
	//dt.cancel();
})