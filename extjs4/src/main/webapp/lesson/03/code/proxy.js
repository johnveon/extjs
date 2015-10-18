(function(){
	Ext.onReady(function(){
		Ext.define("person",{//定义数据model
			extend:"Ext.data.Model",
			fields:[
				{name:'name',type:'auto'},
				{name:'age',type:'int'},
				{name:'email',type:'auto'}
			],
			proxy:{//写在person类就是代理他
				type:'ajax',//代理方法
				url:'person.jsp'//代理路径
			}//应该会自动加载person.jsp的返回数据
		});
		var p = Ext.ModelManager.getModel("person");//使用定义的person，不需要create，
		p.load(1, {//用load把从person.jsp来的数据赋值定义的person 1是标识，传入后台的id=1
	        scope: this,
	        failure: function(record, operation) {
	        },
	        success: function(record, operation) {
	        	alert(record.data.name)
	        },
	        callback: function(record, operation) {
	        }
    	});
	})
})();