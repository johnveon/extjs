Ext.define('AM.controller.Users', {//控制层
    extend: 'Ext.app.Controller',//指定是控制器
	init:function(){
		this.control({//userlist 别名
			'userlist button[id=delete]':{
				click:function(o){
					var gird = o.ownerCt.ownerCt;
						var data = gird.getSelectionModel().getSelection();
						if(data.length == 0){
							Ext.Msg.alert("提示","您最少要选择一条数据");
						}else{
							//1.先得到ID的数据(name)
							var st = gird.getStore();
							var ids = [];
							Ext.Array.each(data,function(record){
								ids.push(record.get('name'));
							})
							//2.后台操作(delet)
							Ext.Ajax.request({
								url:'/extjs/extjs!deleteData.action',
								params:{ids:ids.join(",")},
								method:'POST',
								timeout:2000,
								success:function(response,opts){
									Ext.Array.each(data,function(record){
										st.remove(record);
									})
								}
							})
							//3.前端操作DOM进行删除(ExtJs)
						}
				}
			}
		});
	},
	views:[
		'List'//很多view层 类名
	],
	stores :[
		"Users"//很多model层 类名
	],
	models :[
		"User"//很多model层 类名
	] 
});