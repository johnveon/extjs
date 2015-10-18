(function(){
	Ext.Loader.setConfig({//启用预加载js
		enabled:true
	});
	Ext.onReady(function(){
//		Ext.define("person",{//定义person model
//			extend:'Ext.data.Model',
//			fields:[
//				{name:'name'},
//				{name:'age'}
//			],
//			proxy:{
//				type:'memory'//proxy类型还内存
//			}
//		})
		var s = new Ext.data.Store({
			fields:[//根据这些fields创建model，就可以不用define
				{name:'name'},
				{name:'age'}
			],			
//			data:[//数据源 优先级比proxy高
//				{name:'uspcat.com',age:1},
//				{name:'yfc',age:26}
//			],
			proxy:{
				type:'ajax',//代理
				url:'person.jsp'
			}//,
			//model:'person',//没有define就不用
			//autoLoad:true//默认是不加载，用自己写的proxy就不用 ,放开就会请求两遍
		});
		//用了ajax请求后台数据没load是遍历不到数据的
//		s.each(function(model){
//			alert(model.get('name'));
//		});
		//store加载ajax请求得到的数据
		s.load(function(records, operation, success){//store
			Ext.Array.each(records,function(model){//遍历数组
				//alert(model.get('name'));
			});
			s.filter('name',"yfc");//只遍历yfc的数据
			s.each(function(model){//遍历集合
				alert(model.get('name'));
			});	
			var index = s.find('name','yfc',0,false,true,false);//根据条件查找，返回找到的位置
			alert(index)
			
			//alert(person.getName());//应该类名
		});
	})
})();


