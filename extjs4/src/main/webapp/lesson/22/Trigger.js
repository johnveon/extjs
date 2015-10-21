Ext.onReady(function(){

	var textFomr = Ext.create("Ext.form.Panel",{
		title : "form中文本框触发器的实例",
		bodyStyle :'padding:5 5 5 5',
		frame : true,
		height : 250,
		width : 400,
		id:'my_form',
		renderTo:'formDemo',
		defaults:{
			labelSeparator :": ",
			labelWidth : 50,
			width : 200,
			allowBlank: false,
			msgTarget : 'side',
			labelAlign:'left'
		},
		items:[{
			xtype:'triggerfield',//触发器
			fieldLabel:'Name',
			name:'userName',
			id:'userName',
			onTriggerClick:function(e){//重写下拉事件
				var formObj = Ext.getCmp("my_form");
			  	var basic = formObj.getForm();
			  	console.log(basic.getValues());
			}
		}]
	})
})


