Ext.onReady(function(){
	Ext.QuickTips.init();
	Ext.create('Ext.Panel', {
	    width: 600,
	    height: 600,
	    title: "Anchor布局的面板",
	    layout: 'anchor',//设置布局
	    renderTo: 'demo',
	    items: [{
	        xtype: 'panel',
	        title: '75% 宽 and 20% 高',
	        anchor: '75% 20%'
	    },{
	        xtype: 'panel',
	        title: '偏移量 -300 宽 & -200 高',//父面板的宽，高减去300，减去200
	        anchor: '-300 -200'     
	    },{
	        xtype: 'panel',
	        title: '综合使用 -250 宽   20% 高',//父面板的宽减去250，高的20%
	        anchor: '-250 20%'
	    }]
	});
})