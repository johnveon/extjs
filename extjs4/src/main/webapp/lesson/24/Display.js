Ext.onReady(function(){
	Ext.QuickTips.init();
	Ext.create("Ext.form.Panel",{
		title:'本地Display实例',
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
		items:[
		
		//14:56 2013-6-20
		{
			xtype:"displayfield",//单纯展示字段
			name:"name",
			value:"fion",
			fieldLabel:"展示"
		}
		
		
		],
		buttons:[{
			text:'提交',
			handler:function(){
				this.up("form").getForm().submit({
					params:{
						info:'age是隐藏字段'
					}
				});
			}
		}]
	});	
})






