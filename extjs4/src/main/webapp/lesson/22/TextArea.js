Ext.onReady(function(){

	var textFomr = Ext.create("Ext.form.Panel",{
		title : "form中文本框大文本的实例",
		bodyStyle :'padding:5 5 5 5',
		frame : true,
		height : 250,
		width : 400,
		id:'my_form',
		renderTo:'formDemo',
		defaultType:'textfield',//默认类型是文本输入款
		defaults:{
			labelSeparator :": ",//文字与输入框控件的分割符
			labelWidth : 50,//文本宽
			width : 200,//输入框宽
			allowBlank: false,//校验不能为空
			msgTarget : 'side',//提示检验错误的模式
			labelAlign:'left'//文本放在右边
		},
		items:[{//这个form有的字段
					fieldLabel:'Name',
					name:'userName',
					id:'userName',
					selectOnFocus:true//得到焦点就选择这个控件的全部文本
				},
				{
					xtype:'textareafield',//指定类型就不需要用defaultType:'textfield'
					width:300,
					height:150,
					name:'info',
					selectOnFocus:true,//得到焦点就选择这个控件的全部文本
					fieldLabel:'Info'
				}
		],
		buttons: [//按钮栏 默认位置在右边起
		  {text:'登陆系统',handler:function(b){
		  	var formObj = Ext.getCmp("my_form");
		  	var basic = formObj.getForm();//basic 才有getValues方法
		  		console.log(basic.getValues());//这个form
		  }}]
	})
})


