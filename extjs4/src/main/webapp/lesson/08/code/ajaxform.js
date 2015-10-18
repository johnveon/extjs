(function(){
	Ext.onReady(function(){
		Ext.get('b').on("click",function(){
			Ext.Ajax.request({
				url : 'person.jsp',
				params:{id:'01'},
				method : 'POST',
				timeout :3000,
				form:"myform",//form 的id  把控制层和显示层分开 可以提交form里面name 元素值
				success :function(response , options){
					alert(eval(response.responseText)[0].name);
				},
				failure  :function(response , options){
					alert(response.responseText+" "+options)
				}
			});
		})
	})
})()
