Ext.define("AM.view.List",{//view层名字
	extend:'Ext.grid.Panel',//指定这是个panel
	title : 'Grid Demo',//标题
	alias: 'widget.userlist',//别名 为什么要有widget？
	frame : true,//面板渲染
	width : 600,
	height: 280,
	columns : [ //列模式
				{text:"Name",dataIndex:'name',width:100},
				{text:"age",dataIndex:'age',width:100},
				{text:"email",dataIndex:'email',width:350,
					field:{
						xtype:'textfield',
						allowBlank:false
					}
				}
	],
	tbar :[
				{xtype:'button',text:'添加',iconCls:'table_add'},
				{xtype:'button',id:'delete',text:'删除',iconCls:'table_remove'},
				{xtype:'button',text:'修改',iconCls:'table_edit'},
				{xtype:'button',text:'查看',iconCls:'table_comm'}
	],	
	dockedItems :[{
				xtype:'pagingtoolbar',
				store:'Users',//类名
				dock:'bottom',
				displayInfo:true//显示
	}],
	plugins:[
				Ext.create("Ext.grid.plugin.CellEditing",{
					clicksToEdit : 2//单击次数
				})
	],
	selType:'checkboxmodel',//设定选择模式
	multiSelect:true,//运行多选
	store : 'Users',//类名
	initComponent:function(){
		this.callParent(arguments);//继承要写的函数
	}
});


