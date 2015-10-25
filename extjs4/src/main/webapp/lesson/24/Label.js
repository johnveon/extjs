Ext.onReady(function(){
	Ext.QuickTips.init();
	Ext.create("Ext.form.Panel",{
		title:'本地Label实例',
		renderTo:'formDemo',
		bodyPadding:'5 5 5 5',
		height:100,
		width:270,
		frame:true,
		items:[{
			xtype:'label',//标签label
			name:'name',
			text:'展示',
			forId :'myname',//给谁加标签
			overCls:'a'//当鼠标滑过标签的样式
		},{
			xtype:'textfield',
			name:'age',
			value:'1',
			inputId:'myname',//这个收入框的id
			hideLabel:true//隐藏自带的label
		}]
	});	
})






