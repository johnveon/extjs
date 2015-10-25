Ext.onReady(function(){
	Ext.QuickTips.init();
	Ext.create("Ext.form.Panel",{
		title:'本地htmleditor实例',
		renderTo:'formDemo',
		bodyPadding:'5 5 5 5',
		height:400,
		width:600,
		frame:true,
		items:[{
			xtype:'htmleditor',//文本编辑器
			name:'HTML',
			height:320,
			width:580,
			fontFamilies :['宋体','黑体','楷体'],//规定成中文的字体
			defaultLinkValue :'http://www.uspcat.com'//超链接默认值
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






