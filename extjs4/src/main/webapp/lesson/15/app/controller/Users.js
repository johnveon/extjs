Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',
	init:function(){
		this.control({
			'userlist':{//userlist这个表格的单元格编辑事件
				edit:function(editor,e,options){
					//Model
					//e.record.commit();//e.record 是model  model可以提交未与后台同步的数据				

				}
			},
			'userlist button[id=save]':{//
				click:function(o){
					var gird = o.ownerCt.ownerCt;//得到表格对象
					var st = gird.getStore();//得到store数据集
					st.sync();//告诉store已经同步 ，数据与后台同步
					var records = st.getUpdatedRecords();//数据集里获取更改的数据
					Ext.Array.each(records,function(model){
						model.commit();
					});	
				}
			},
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
		'proerty',//控制层控制的view
		'List'
	],
	stores :[
		"Users"//控制层控制的stores
	],
	models :[
		"User"//控制层控制的models
	] 
});