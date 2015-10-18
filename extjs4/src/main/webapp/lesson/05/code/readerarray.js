Ext.onReady(function(){
	Ext.regModel("person",{//定义person model
		fields:[
			'name','age'
//			{name:'name'},
//			{name:'age'}
		],
		proxy :{
			type:'ajax',//获取后台数据用ajax类型的proxy
			url:'person.jsp',
			reader:{
				type:'array'//读操作器array格式
			}
		}
	});
	//获取person实例
	var person = Ext.ModelManager.getModel('person');
    //用proxy给person model实例赋值数据data
	person.load(1,{
		success:function(model){
			alert(model.get('name'))
		}
	});
});