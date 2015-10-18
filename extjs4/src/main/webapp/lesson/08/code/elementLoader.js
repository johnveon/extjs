Ext.onReady(function(){
	Ext.get('b1').on("click",function(){
		var time = Ext.get("time").getLoader();//Ext.ElementLoader 实例
		time.load({//
			url:'/extjs/extjs!getTime.action',
			renderer:function(loader,response,request){//返回的数据并写好填充
				var time = response.responseText;
				Ext.getDom("time").value = time;//Ext.get("time") 不能操作，要操作用Ext.getDom("time")
			}
		});
	});
	Ext.get('b2').on("click",function(){
		var i = Ext.get('i').getLoader();
		i.startAutoRefresh(1000,{//定时请求后台刷新元素的值，写在click事件说明：点击时才触发，说明时候停止？i.stopAutoRefresh()
			url:'/extjs/extjs!getI.action',
			renderer:function(loader,response,request){//渲染器渲染数据
				var i = response.responseText;
				Ext.getDom("i").value = i;
			}			
		});
	});
})