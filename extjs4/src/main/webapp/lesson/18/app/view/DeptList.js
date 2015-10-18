/**
 * ClassName 部门管理数据列表视图
 */
Ext.define("AM.view.DeptList",{
	extend:'Ext.grid.Panel',
	alias:'widget.deptlist',
	store:'DeptStore',
	width:540,
	height:400,
	selModel:{//选择模式
		selType:'checkboxmodel'//类型
	},
	border:0,
	multiSelect: true,//多选
	frame:true,
	tbar:[//表格工具栏
		{xtype:'button',text:'添加',id:'add',iconCls:'table_add'},
		{xtype:'button',text:'删除',id:'delete',iconCls:'table_remove'},
		{xtype:'button',text:'保存',id:'save',iconCls:'table_save'}
	],
	dockedItems:[{
		xtype:'pagingtoolbar',//分页组件
		store:'DeptStore',//数据集
		dock:'bottom',//位置 下
		displayInfo:true//显示
	}],
    enableKeyNav:true,//键盘移动选择
	columnLines: true,//列线显示
	columns:[//
		{text:'部门名称',dataIndex:'text',width:100,
			field:{
				xtype:'textfield',
				allowBlank:false//不能为空
			}
		},
		{text:'部门经理',dataIndex:'manager',width:100,
			field:{
				xtype:'textfield',
				allowBlank:false
			}		
		},
		{text:'顺序排序',dataIndex:'orderIndex',width:100},
		{text:'只能简介',dataIndex:'info',width:100}
	],
	initComponent:function(){//初始化
		this.editing = Ext.create("Ext.grid.plugin.CellEditing");
 		this.plugins = [this.editing];//加入插件 默认单击2次可以启动编辑 用什么编辑在类模式定义
		this.callParent(arguments)
	}
});





