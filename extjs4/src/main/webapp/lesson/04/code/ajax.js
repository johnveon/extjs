(function(){
	Ext.onReady(function(){
		Ext.regModel("person",{//定义person model
			fields:[
				{name:'name',type:'string'}
			]
		});
		
		//创建ajaxProxy
		var ajaxProxy = new Ext.data.proxy.Ajax({
			url:'person.jsp',//后台服务url
			model:'person',//代理 person model
			reader:'json',//json格式
			
			limitParam : 'indexLimit'//改变请求参数的名字：本来是limit改成indexLimit
		});	
		
		//请求后台赋值data到model，然后读出来
		ajaxProxy.doRequest(new Ext.data.Operation({//new Ext.data.Operation()这样默认是读
				action:'read',
				limit:10,//页大小
				start :1,//第几页
				sorters:[//排序
					new Ext.util.Sorter({
						property:'name',
						direction:'ASC'
					})
				]
			}),function(o){
			var text = o.response.responseText;//读出后台返回的数据
			alert(Ext.JSON.decode(text)['name']);//string变成json对象
		});
	});
})();