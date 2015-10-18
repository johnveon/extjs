/**
 * ClassName 部门管理main布局
 */
Ext.define("AM.view.MainLayout",{
	extend:'Ext.panel.Panel',
	alias:'widget.mainlayout',
	defaults:{
		split:true,//分割中间线有个缩进按钮
		bodyStyle:'padding:1px'//默认body的样式 里面的组件都有间距
	},
	layout:'border', //布局器 东南西北中
	items:[{
		title:'部门树形',
		region:'west',//位置 西边
		iconCls:'dept_tree',//图标
		xtype:'panel',
		margins:'5 2 5 5',
		width: 200,
		collapsible:true,//panel可以被折叠
		id:'west-tree',
		layout:'fit',//填满 宽定了 高填满
		items:[{
			xtype:'depTree',//放树 depTree是别名
			id:'dept-tree'
		}]
	},{
		title:'部门数据表格',
		iconCls:'dept_table',//图标
		region:'center',//位置中间
		xtype:'panel',
		id:'center-grid',
		margins:'5 5 5 0',
		layout:'fit',//宽 高填满
		items:[{
			id:'dept-grid',//放表格 dept-grid是别名
			xtype:'deptlist'
		}]
	}]
});