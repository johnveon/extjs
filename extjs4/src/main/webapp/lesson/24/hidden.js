Ext.onReady(function(){
	Ext.QuickTips.init();
	Ext.create("Ext.form.Panel",{
		title:'本地hiddenfield实例',
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
			xtype:'textfield',
			name:'name',
			fieldLabel:'name',
			value:'USPCAT.COM'
		},{
			xtype:'hiddenfield',//隐藏字段
			name:'age',
			value:'1'
		}],
		buttons:[{
			text:'提交',
			handler:function(){
				//根据层次找到组件
				//this是button up找到组件的上一层 有form字符串的组件
				this.up("form").getForm().submit({//提交
					params:{
						info:'age是隐藏字段'
					}
				});
			}
		}]
	});	
})






