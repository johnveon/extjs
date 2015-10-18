Ext.onReady(function(){
	//为dom的id为btn5的组件注册click事件，处理函数
	Ext.EventManager.addListener("btn5",'click',function(){
		alert("通过事件管理器进行事件的监听注册");
	})
})