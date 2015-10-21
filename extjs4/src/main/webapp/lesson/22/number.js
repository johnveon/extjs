Ext.onReady(function(){

	var textFomr = Ext.create("Ext.form.Panel",{
		title : "form中文本框数字框的实例",
		bodyStyle :'padding:5 5 5 5',
		frame : true,
		height : 250,
		width : 400,
		id:'my_form',
		renderTo:'formDemo',
		defaultType:'numberfield',//数字框
		defaults:{
			labelSeparator :": ",
			labelWidth : 80,
			width : 200,
			allowBlank: false,
			msgTarget : 'side',
			labelAlign:'left'
		},
		items:[{
			fieldLabel:'整数微调',
			allowDecimals:false,//叫你不能输入小数，没有负数控制，自己控制vtype控制
			name:'num1',
			id:'num1'
		},{
			fieldLabel:'整数',
			allowDecimals:false,//叫你不能输入小数
			name:'num2',
			id:'num2',
			hideTrigger : true//去掉微调
		},{
			fieldLabel:'小数',
			allowDecimals:true,
			name:'num3',
			id:'num3',
			emptyText :'请输入小数',//灰色提示
			hideTrigger : false,
			decimalPrecision:3//3位小数0.000，3位四舍五入
		},{
			fieldLabel:'定界小数',
			name:'num3',
			id:'num3',
			minValue:10,//最小
			maxValue:100,//最大
			emptyText :'请输入小数',
			hideTrigger : false,
			decimalPrecision:3
		},{
			fieldLabel:'输入限定',
			name:'num4',
			id:'num4',
			baseChars:'01',//只能输入0和1
			hideTrigger : true//要屏蔽微调，否则还是可以有01之外的
		},{
			fieldLabel:'限定步长',
			name:'num5',
			id:'num5',
			step:0.8,//限定步长
			hideTrigger : false,
			value:'20'//默认值
		},{
			fieldLabel:'只读字段',
			name:'num6',
			id:'num6',
			step:0.8,
			hideTrigger : false,
			value:'20',
			//readOnly:true//只读
			disabled : true//不可用
		}],
		buttons: [
		  {text:'登陆系统',handler:function(b){
		  	var formObj = Ext.getCmp("my_form");
		  	var basic = formObj.getForm();
		  		console.log(basic.getValues());
		}}]
	})
})


