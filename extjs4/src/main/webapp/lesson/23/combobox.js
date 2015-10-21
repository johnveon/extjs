﻿Ext.onReady(function(){
	Ext.QuickTips.init();
	//部门类
	Ext.define("department",{//department model类
		extend:'Ext.data.Model',
		fields:[
			{name:'name'},
			{name:'id'}
		]
	});
	var st = Ext.create("Ext.data.Store",{//model类集合Store类
		model:'department',
		data:[
			{name:'销售部',id:'001'},
			{name:'人事部',id:'002'},
			{name:'研发部',id:'003'},
			{name:'产品部',id:'004'},
			{name:'实施部',id:'005'},
			{name:'法务部',id:'006'}
		]
	});
	Ext.create("Ext.form.Panel",{
		title:'本地combobox实例',
		renderTo:'formDemo',
		bodyPadding:'5 5 5 5',
		height:100,
		width:270,
		frame:true,
		defaults:{
			labelSeparator :": ",
			labelWidth : 70,
			width : 200,
			allowBlank: false,
			msgTarget : 'side',
			labelAlign:'left'
		},
		items:[{
			xtype:'combobox',//下拉框
			listConfig:{//控制下拉列表的样式
				emptyText:'没有找到匹配的数值',
				maxHeight:200//高过这个就会出现滑动条
			},
			fieldLabel:'选择部门',
			name:'post',
			queryMode:'local',//[local|remot]//查询模式
			store:st,//数据集
			valueField:"id",//值字段
			displayField :'name',//显示字段
			forceSelection:true,//不运行使用数据集合中没有的数值
			typeAhead : true,//当输入查询出一个时就自动补全
			value:'001'//默认值
		}]
	});
});














