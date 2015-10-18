(function(){
	Ext.onReady(function(){
		Ext.Ajax.request({
			url : 'person.jsp',//请求路径
			params:{id:'01'},//请求参数
			method : 'POST',//请求方式
			timeout :3000,//请求超时
			success :function(response , options){//请求成功
				alert(eval(response.responseText)[0].name);//eval 执行 可用的代码 js 认识的代码 []是认识的代码 alert(0)也是，{}不是
			},
			failure  :function(response , options){//请求失败
				alert(response.responseText+" "+options)
			}
		});
	})
})();
