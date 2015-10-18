(function(){
	Ext.onReady(function(){
		Ext.regModel("person",{//定义person model
			fields:[
				{name:'name',type:'string'}
			],
			proxy:{
				type:'jsonp',//跨域
				url:'http://www.uspcat.com/extjs/person.php'//返回jsonp的数据 直接拿别的域名的数据返回赋值给model
			}
		});
		var person = Ext.ModelManager.getModel('person');//获取model实例
		person.load(1,{//proxy给model实例赋值
			scope:this,
			success:function(model){
				alert(model.get('name'));
			}
		});
	})
})();