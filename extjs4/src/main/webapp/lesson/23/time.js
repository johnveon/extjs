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
			xtype:'timefield',//时间控件
			fieldLabel:'上班时间',
			minValue:'9:00',
			maxValue:'18:00',
			minText:'时间要大于{0}',//超出提示，{0}占位符表示minValue:'9:00'
			maxText:'时间要小于{0}',//超出提示
			format:'G时',//时间24小时格式,g是12小时进制  G时i分s秒
			increment:60,//跨度60分钟一个选项
			invalidText:'时间格式错误',//校验错误提示
			pickerMaxHeight :100 //下拉选框高度，超过滑动条出现
		}]
	});
});














