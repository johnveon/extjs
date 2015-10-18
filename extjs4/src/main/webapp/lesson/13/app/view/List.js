Ext.define("AM.view.List",{
	extend:'Ext.grid.Panel',
	title : 'Grid Demo',//标题
	alias: 'widget.userlist',
	frame : true,//面板渲染
	width : 1000,
	height: 280,
	columns : [ //列模式
				Ext.create("Ext.grid.RowNumberer",{}),//出现序号
				{text:"Name",dataIndex:'name',width:100},
				{text:"age",dataIndex:'age',width:100},
				{text:"email",dataIndex:'email',width:200,
					field:{
						xtype:'textfield',//用textfield组件编辑
						allowBlank:false
					}
				},{
					text:'sex',
					dataIndex:'sex',
					width:50,
					DDName:'sy_sex',//不变的字典
					renderer:function(value){//自定义渲染  没有定义xtype 就是普通的column 列模式 要自己写怎么渲染
						//var arr = DDmap.get(this.DDName);
						if(value){
							if(value == "女"){//return就是自己的渲染
								return "<font color='green'>"+value+"</font>"
							}else if(value == "男"){
								return "<font color='red'>"+value+"</font>"
							}
						}
					}
				},{
					text:'isIt',//显示
					dataIndex:'isIt',//返回的json字段
					xtype : "booleancolumn",//字典格式列模式
					width:50,
					trueText:'是',//true显示是
					falseText:'不是'//true显示不是
				},{
					text:'birthday',
					dataIndex:'birthday',
					xtype : "datecolumn",//日期列模式
					width:150,
					format:'Y年m月d日'// 格式显示
				},{
					text:'deposit',
					dataIndex:'deposit',
					xtype:'numbercolumn',//数字列模式
					width:150,
					format:'0,000'//格式显示
				},{
					text:'描述',xtype:'templatecolumn',//模板列模式 虚拟列 定义显示模板 
					tpl:'姓名是{name} 年龄是{age}',//name和age组合显示
					width:150
				},{
				 text:'Action',xtype:'actioncolumn',//动作列模式 虚拟列 text 显示，xtype，类型
				 id:'delete',
				 icon:'app/view/image/table_delete.png',//图标
				 width:50//,
//				 items :[//可以配置按钮组 mvc模式不建议用按钮组
//				 	{},{}
//				 ]
//				 handler:function(grid,row,col){//相应的事件，属于控制层 规范写在控制层里
//				 	alert(row+" "+col);
//				 }
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
				store:'Users',
				dock:'bottom',
				displayInfo:true
	}],
	plugins:[
				Ext.create("Ext.grid.plugin.CellEditing",{
					clicksToEdit : 2
				})
	],
	selType:'checkboxmodel',//设定选择模式  表格有选择框
	multiSelect:true,//运行多选
	store : 'Users',
	initComponent:function(){
		this.callParent(arguments);
	}
});


