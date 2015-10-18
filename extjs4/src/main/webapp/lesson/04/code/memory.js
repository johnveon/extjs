//proxy: 把model和data用proxy建立关系，用proxy做crud
(function(){
	Ext.onReady(function(){
		Ext.regModel("user",{//定义user model
			fields:[
				{name:'name',type:'string'},
				{anem:'age',type:'int'}
			]
		});
		//不用create方法 我们直接用proxy来创建对象数据
		var userData = [
			{name:'uspcat.com',age:1},
			{name:'yunfengcheng',age:26}
		];
		//创建model的代理类 用proxy方式把userData的数据给user model赋值 
		var memoryProxy = Ext.create("Ext.data.proxy.Memory",{//创建代理实例
			data:userData,
			model:'user'
		})
		
		//修改data数据
		userData.push({name:'new uspcat.com',age:1});
		//update 用proxy 更新
		memoryProxy.update(new Ext.data.Operation({//proxy更新数据
			action:'update',
			data:userData
		}),function(result){},this);
		
		//就可以做CRUD了  //用proxy读出 model
		memoryProxy.read(new Ext.data.Operation(),function(result){
			var datas = result.resultSet.records;
			Ext.Array.each(datas,function(model){//遍历数组
				alert(model.get('name'));
			})
		});
	});
})();