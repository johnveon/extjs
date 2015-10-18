Ext.define("AM.view.List",{
	extend:'Ext.grid.Panel',
	title : 'Grid Demo',//标题
	alias: 'widget.userlist',
	frame : true,//面板渲染
	width : 1100,
	height: 450,
	features: [//特性
		Ext.create("Ext.grid.feature.RowBody",{//指定用到每一行的特性 可以子在每行下面多显示一条来显示备注
		    getAdditionalData: function(data, idx, record, orig) {
		        var headerCt = this.view.headerCt,
		            colspan  = headerCt.getColumnCount();
		        return {
		            rowBody: record.get('email'),//显示的文字的对象 record行数据对象
		            rowBodyCls: this.rowBodyCls,//
		            rowBodyColspan: colspan
		        };
		    }
		}),{
			ftype: 'summary'//指定用到summary特性 可以求平均值显示在列的最后
		},Ext.create("Ext.grid.feature.Grouping",{//指定用到分组特性
					groupByText : "性别分组",//分组菜单的显示文字
					groupHeaderTpl : "性别{name}  一共{rows.length}人",//分组显示的文字模板
					//startCollapsed:true,//默认展开分组
					//enableGroupingMenu:true//开启分组菜单按钮
					showGroupsText : "展示分组"//是否分组的控制按钮的显示文字
					
				
		})
	],	
	columns : [ //列模式
				Ext.create("Ext.grid.RowNumberer",{}),
				{text:"Name",dataIndex:'name',width:100},
				{text:"age",dataIndex:'age',width:100,
					summaryType:'average',//在列的最后显示求的平均值
					summaryRenderer: function(value, summaryData, dataIndex) {//渲染
			           return Ext.util.Format.number(value,"00.0")//怎么渲染？按return格式
			        }	
				},
				{text:"email",dataIndex:'email',width:200,
					field:{
						xtype:'textfield',
						allowBlank:false
					}
				},{
					text:'sex',
					dataIndex:'sex',
					width:50,
					DDName:'sy_sex',
					renderer:function(value){
						if(value){
							if(value == "女"){
								return "<font color='green'>"+value+"</font>"
							}else if(value == "男"){
								return "<font color='red'>"+value+"</font>"
							}
						}
					}
				},{
					text:'isIt',
					dataIndex:'isIt',
					xtype : "booleancolumn",
					width:50,
					trueText:'是',
					falseText:'不是'
				},{
					text:'birthday',
					dataIndex:'birthday',
					xtype : "datecolumn",
					width:150,
					format:'Y年m月d日'
				},{
					text:'deposit',
					dataIndex:'deposit',
					xtype:'numbercolumn',
					width:150,
					format:'0,000'
				},{
					text:'描述',xtype:'templatecolumn',
					tpl:'姓名是{name} 年龄是{age}',
					width:150
				},{
				 text:'Action',xtype:'actioncolumn',
				 id:'delete',
				 icon:'../../app/view/image/table_delete.png',
				 width:50//,
//				 items :[
//				 	{},{}
//				 ]
//				 handler:function(grid,row,col){
//				 	alert(row+" "+col);
//				 }
				}
	],
	tbar :[
				{xtype:'button',text:'添加',iconCls:'table_add'},
				{xtype:'button',id:'del',text:'删除',iconCls:'table_remove'},//不能有delete关键字做id
				{xtype:'button',text:'修改',iconCls:'table_edit'},
				{xtype:'button',text:'查看',iconCls:'table_comm'},
				{xtype:'button',id:'selection',text:'selection',iconCls:'table_comm'}//增加一个按钮
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
	//selType:'checkboxmodel',//设定行选择模式带选择框
	//selType:'rowmodel',//设定行选择模式  multiSelect:true 按ctrl键多选
	selType:'cellmodel',//设定单元格选择模式 单击就是选择单元格
	//multiSelect:true,//运行多选
	//enableKeyNav :true,//上下键选择行
	store : 'Users', //这个表格panel用Users store进行填充数据
	//renderTo : 'gridDemo',//不写就整个页面都是，写就在特定的div
	initComponent:function(){//初始化
		this.callParent(arguments);
	}
});


