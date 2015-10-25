Ext.onReady(function(){
	Ext.QuickTips.init();
	Ext.create('Ext.Panel', {
	    width: 500,
	    height: 280,
	    title: "AutoLayout布局的面板",
	    layout: 'fit',//设置布局 他的(第一个也是唯一个)子元素填满自身的body
	    renderTo: 'demo',
	    items: [{
	        xtype: 'panel',
	        title: '第一个面板'
	    },{//这个不显示了
	        xtype: 'panel',
	        title: '第二个面板'
	    }]
	});
})