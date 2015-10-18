(function(){
	Ext.onReady(function(){
		var userData = {//模拟用户data数据
			//total : 200,//默认total 
			count:250,
			user:[{auditor:'yunfengcheng',info:{//只是读info里的数据
				userID:'1',
				name:'uspcat.com',
				orders:[
					{id:'001',name:'pen'},
					{id:'002',name:'book'}
				]
			}}]
		};
		//model //定义user model
		Ext.regModel("user",{
			fields:[
				{name:'userID',type:'string'},
				{name:'name',type:'string'}
			],
			hasMany: {model: 'order'}//一对多个order name:orders 默认可以不写
		});
		//定义order model
		Ext.regModel("order",{
			fields:[
				{name:'id',type:'string'},
				{name:'name',type:'string'}
			],
			belongsTo: {type: 'belongsTo', model: 'user'}//多对一个user
		});
		//用proxy操作数据data
		var mproxy = Ext.create("Ext.data.proxy.Memory",{//内存的数据，proxy类型就是Memory
			model:'user',
			data:userData,//数据源  proxy 把 data 绑定到 model 还需要读写器才能读写数据到model
			reader:{
				type:'json',//读操作器是json格式
				root:'user',//数据的根 必须的
				implicitIncludes:true,//是否级联
				totalProperty:'count',//把数据data中的count当做total来读
				record : 'info'//服务器返回的数据可能很复杂,用record可以删选出有用的数据信息当做数据源,装在带Model中
			}
		});
		
		//用proxy给model实例赋值，然后读数据data
		mproxy.read(new Ext.data.Operation(),function(result){
			var datas = result.resultSet.records;
			alert(result.resultSet.total);
			Ext.Array.each(datas,function(model){//遍历数组
				alert(model.get('name'));
			});
			var user = result.resultSet.records[0];
			var orders = user.orders();
			orders.each(function(order){//遍历store
				alert(order.get('name'))
			});
			
		})
	});
})();



