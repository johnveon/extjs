(function(){
	Ext.onReady(function(){//request 可以向后台传json,xml格式的数据
			var data = "{id:'01',name:'uspcat.com','age':26,email:'yunfengcheng2008@126.com'}";
			Ext.Ajax.request({
				url : 'person.jsp',
				method : 'POST',
				timeout :3000,
				//xmlData : xmlStr,
				jsonData:data,
				success :function(response , options){
					alert(eval(response.responseText)[0].name);
				},
				failure  :function(response , options){
					alert(response.responseText+" "+options)
				}
			});
	})
})()
