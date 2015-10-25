Ext.onReady(function(){
	Ext.QuickTips.init();
	Ext.create("Ext.form.Panel",{
		title:'本地FieldContainer实例',
		renderTo:'formDemo',
		bodyPadding:'5 5 5 5',
		height:100,
		width:500,
		frame:true,
		defaults:{
			msgTarget:'side',
			labelAlign:'left'
		},
		items:[{
			xtype:'fieldcontainer',//字段组合成一个大的字段，提示信息就针对这个就是，不用一个一个写
			layout:{
				type:'hbox',//横排列
				align:'middle'//放中间
			},
			combineLabels:true,//标签合并
			combineErrors:true,//错误提示合并
			fieldDefaults:{
				hideLabel:true,//默认字段会隐藏lebel
				allowBlank:false
			},
			defaultType:'textfield',
			items:[{
				xtype:'label',
				forId:'name',
				text:'姓名'//文字
			},{
				fieldLabel:'name',//标签
				name:'name',
				inputId:'name'
			},{
				xtype:'label',
				forId:'phone',
				text:'电话'
			},{
				fieldLabel:'phone',
				name:'phone',
				inputId:'phone'
			}]
		}],
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






