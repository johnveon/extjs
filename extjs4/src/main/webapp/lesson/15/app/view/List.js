Ext.define("AM.view.List",{
	extend:'Ext.grid.Panel',
	title : 'Grid Demo',//标题
	alias: 'widget.userlist',
	frame : true,//面板渲染
	width : 500,
	height: 380,
	columns : [ //列模式
				//{text:"Name",dataIndex:'name',width:100,locked:true},//locked:true列锁定
				{text:"Name",dataIndex:'name',width:100},
				//{text:'others',columns:[//复杂表头 不能和列锁定，字段过滤一起使用 
					{text:"age",dataIndex:'age',width:100,filterable: true,filter: {type: 'numeric'}}, //指定启用字段过滤
					{text:"email",dataIndex:'email',width:250,
						field:{
							xtype:'textfield',
							allowBlank:false
						}
					},{
						text:'index',dataIndex:'index',width:100
					}					
				//]}
	],
	features: [Ext.create("AM.util.filters")],//指定用的是字段过滤特性
	tbar :[
				{xtype:'button',text:'添加',iconCls:'table_add'},
				{xtype:'button',id:'delete',text:'删除',iconCls:'table_remove'},
				{xtype:'button',text:'修改',iconCls:'table_edit'},
				{xtype:'button',text:'查看',iconCls:'table_comm'},
				{xtype:'button',text:'save',id:'save',iconCls:'table_comm'}
	],	
	dockedItems :[{//分页组件
				xtype:'pagingtoolbar',
				store:'Users',
				dock:'bottom',
				displayInfo:true,
				plugins: Ext.create('Ext.ux.SlidingPager', {}) //使用拖拽分页SlidingPager
	}],
	//plugins:[//打开编辑单元格 需要配合指定 xtype:'textfield',
//				Ext.create("Ext.grid.plugin.CellEditing",{
//					clicksToEdit : 2
//				})
//				Ext.create('Ext.grid.plugin.RowEditing', {
//           		 clicksToEdit: 1
//        		})
	//],
	viewConfig:{//拖拽行排序
		plugins:[
	        Ext.create('Ext.grid.plugin.DragDrop', {
	        	ddGroup:'ddTree', //拖放组的名称
	            dragGroup :'userlist', //拖拽组名称
	            dropGroup :'userlist',  //释放租名称
	            enableDrag:true, //是否启用
	            enableDrop:true
	        })],
		listeners: {//放下的事件
        	drop: function(node, data, dropRec, dropPosition) {
              		var st = this.getStore();//获取数据集store
              		for(i=0;i<st.getCount();i++){
                  		st.getAt(i).set('index',i+1);//设置model的index 字段的值 不成功的？
            		}
        	}
    	}		        
	},	
	//selType:'checkboxmodel',//设定选择模式
	//multiSelect:true,//运行多选
	store : 'Users',
	initComponent:function(){
		this.callParent(arguments);
	}
});


