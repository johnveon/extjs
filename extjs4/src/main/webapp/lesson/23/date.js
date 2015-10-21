Ext.onReady(function(){
	Ext.QuickTips.init();
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
			xtype:'datefield',//日期控件
			fieldLabel:'工作日',
			minValue:'01/01/2011',//控制可选区间
			maxValue:'31/12/2011',//控制可选区间
			disabledDays :[0,6],//周六周日不可选
			disabledDates:['11年11月08日'],//某日不可选
			disabledDatesText:'这个日期你不能选择'//不可选提示 悬浮提示
		}]
	});
});














