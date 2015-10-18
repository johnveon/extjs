(function(){
	Ext.onReady(function(){
		var tbar = Ext.create('Ext.toolbar.Toolbar',{//创建Toolbar类的实例
			renderTo:Ext.getBody(),
			width:500,
			items:[
				{xtype:'button',id:'create',text:'create'},
				{xtype:'button',id:'delete',text:'delete'},
				{xtype:'button',text:'销毁删除按钮',handler:function(){
					var c = Ext.getCmp("delete");//获取组件内的组件 Ext.get(id)id是dom里的id
					if(c){
						c.destroy();//销毁删除按钮 会把create按钮上的事件也销毁
					}
				}}			
			]
		});
		//获取ext组件内的组件
		var deleteB = Ext.getCmp("delete");
		//注册click事件 可以管理的事件   delete组件 管理 create 组件的click 事件
		//可以这么理解：create组件的click事件是由delete组件注册为create组件添加的，delete组件销毁时也会销毁为create组件添加的事件
		deleteB.addManagedListener(Ext.getCmp("create"),'click',function(){
			alert('添加操作');
		});
		//Ext.getCmp("create").on("click",function(){});
	});
})();