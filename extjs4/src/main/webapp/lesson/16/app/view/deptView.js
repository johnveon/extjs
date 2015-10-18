Ext.define("AM.view.deptView",{
	extend:'Ext.tree.Panel',
	alias: 'widget.deptTree',
	title : '部门树形',
	width : 250,
	height: 300,
	padding : '5 3 3 10',
	rootVisible : false,//控制显隐的属性root
	dockedItems:[{//加上工具栏
		xtype:'toolbar',
		dock:'left',
		//ui:'footer',//样式
		items:[
			{xtype:'button',text:'add',id:'add'},
			{xtype:'button',text:'copy',id:'copy'},
			{xtype:'button',text:'delete',id:'delete'}
		]
	},{//第二个工具栏
		xtype:'toolbar',
		//dock:'top',//默认为上可以不写
		items:[{
			xtype:'button',
			id:'allopen',
			text:'展开全部'
		},{
			xtype:'button',
			id:'allclose',
			text:'收起全部'
		}]
	}],
	store:'deptStore'
//	root:{//根
//		text:'root',//显示名字
//		id : '0',
//		leaf:false,
//		children:[{
//			text:'技术部门',
//			checked:false,//显示选框
//			id : '01',
//			leaf:false,
//			children:[{
//				checked:false,
//				text:'研发部',
//				id : '0101',
//				leaf:true		
//			},{
//				checked:false,
//				text:'实施部',
//				id : '0102',
//				leaf:true		
//			}]
//		},{
//			text:'后勤部门',
//			id : '02',
//			checked:false,
//			leaf:false,
//			children:[{
//				text:'人事部',
//				id : '0201',
//				checked:false,
//				leaf:true		
//			},{
//				text:'行政部',
//				id : '0202',
//				checked:false,
//				leaf:true		
//			}]
//		}]
//	}
});