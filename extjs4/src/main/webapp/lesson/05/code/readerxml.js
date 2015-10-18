(function(){
	Ext.onReady(function(){
		Ext.regModel("user",{//定义user model
			fields:[
				{name:'name'},
				{name:'id'}
			],
			proxy:{//读xml数据 xml文件在后台，所以proxy类型是ajax
				type:'ajax',
				url:'users.xml',
				reader:{
					type:'xml',//读操作器是xml格式
					record:'user'
				}
			}
		});	
		//获取实例
		var user = Ext.ModelManager.getModel('user');
	    //用proxy给实例赋值
		user.load(1,{
			success:function(model){
				alert(model)
				alert(model.get('id'))
			}
		})
	});
})();