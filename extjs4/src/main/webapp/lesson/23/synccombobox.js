Ext.onReady(function(){
	Ext.QuickTips.init();
	//部门类
	Ext.define("department",{
		extend:'Ext.data.Model',
		fields:[
			{name:'name'},
			{name:'id'},
			{name:'c'}
		]
	});
	var st = Ext.create("Ext.data.Store",{
		model:'department',
		pageSize:4,//分页，每页4条
		proxy:{
			type:'ajax',
			url:'/extjs/extjs!getComboBox.action'//从后台取数据
		}
	});
	Ext.create("Ext.form.Panel",{
		title:'本地combobox实例',
		renderTo:'formDemo',
		bodyPadding:'5 5 5 5',
		height:100,
		width:470,
		frame:true,
		defaults:{
			labelSeparator :": ",
			labelWidth : 70,
			width : 300,
			allowBlank: false,
			msgTarget : 'side',
			labelAlign:'left',
			pageSize:4//分页，每页4条
		},
		items:[{
			xtype:'combobox',
			listConfig:{//控制下拉列表的样式
				emptyText:'没有找到匹配的数值',
				maxHeight:200,
				getInnerTpl :function(){//模板，用什么颜色显示 //c后台数据指定样式a
					return "<div class='{c}'>{name}.{id}</div>";
				}
			},
			fieldLabel:'城市',
			name:'post',
			queryMode:'remot',//[local|remot]
			store:st,
			valueField:"id",
			minChars:1,//输入多少字符时，去后台查
			triggerAction :'all',//查询全部的标识
			queryDelay : 400,//查询延迟，4秒后查询
			queryParam:'whereSql',//查询参数字段名
			multiSelect:true,//允许多选
			displayField :'name'//,
			//forceSelection:true,//不运行使用数据集合中没有的数值
			//typeAhead : true,
			//value:'001'
		}]
	});
});














