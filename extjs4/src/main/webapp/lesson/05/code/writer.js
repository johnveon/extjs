Ext.onReady(function(){
	Ext.regModel("person",{//定义person model
		fields:[
			'name','age'
		],
		proxy :{
			type:'ajax',
			url:'person.jsp',
			writer:{
				//type:'json'//写操作器json格式
				type:'xml'//写操作器xml格式
			}
		}
	});
	//用proxy把create的数据按model格式转成writer的格式
	Ext.ModelMgr.create({
		name:'uspcat.con',
		age:1
	},'person').save(new Ext.data.Operation({
							callback : function(text){
								alert(text.raw[0]);
							}
					 }));//请求到后台，这里没有返回函数,只能这样？
		
})