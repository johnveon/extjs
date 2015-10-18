(function(){
	Ext.onReady(function(){
		Ext.QuickTips.init();//初始化
		//创建表格时候要 用表格的面板
		var grid = Ext.create("Ext.grid.Panel",{
			title : 'Grid Demo',//标题
			frame : true,//面板渲染周围边框
			//forceFit : true,//自动填充panel空白处
			width : 600,
			height: 280,
			columns : [ //定义显示的列 store集合里有
				{text:"Name",dataIndex:'name',width:100},
				{text:"age",dataIndex:'age',width:100},
				{text:"email",dataIndex:'email',width:350,
					field:{
						xtype:'textfield',//这列指定输入框编辑
						allowBlank:false
					}
				}
			],
			tbar :[//按钮栏 table
				{xtype:'button',text:'添加',iconCls:'table_add'},
				{xtype:'button',text:'删除',iconCls:'table_remove',
					handler:function(o){
						//var gird = o.findParentByType("gridpanel");//获取按钮所在的gird对象1
						var gird = o.ownerCt.ownerCt;//获取按钮所在的gird对象2
						var data = gird.getSelectionModel().getSelection();//先获取选择模式，在获取勾选的行
						//gird.getStore().getCount()
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
							Ext.Ajax.request({//请求后台
								url:'/extjs/extjs!deleteData.action',
								params:{ids:ids.join(",")},//数组直接转字符串用,分割
								method:'POST',
								timeout:2000,//延迟秒杀
								success:function(response,opts){
									//3.前端操作DOM进行删除(ExtJs)
									//在data中删除record数据
									Ext.Array.each(data,function(record){
										st.remove(record);
									})
								}
							})
							
						}
					}
				  },
				{xtype:'button',text:'修改',iconCls:'table_edit'},
				{xtype:'button',text:'查看',iconCls:'table_comm'}
			],
			dockedItems :[{//按钮栏 可以配置任意位置
				xtype:'pagingtoolbar',//分页栏
				store:Ext.data.StoreManager.lookup('s_user'),
				dock:'bottom',//位置
				displayInfo:true
			}],
			plugins:[//加入单元格编辑插件
				Ext.create("Ext.grid.plugin.CellEditing",{//控制单元格触发的配置
					clicksToEdit : 1//单击是1 双击2 还是不能编辑，要指定用什么编辑，在定义的时候指定
				})
			],
			selType:'checkboxmodel',//设定选择模式  多选框
			multiSelect:true,//运行多选
			renderTo :'gridDemo',//页面上有id为gridDemo的div
			store : Ext.data.StoreManager.lookup('s_user')//与数据集合关联
		});
	});
})();


