Ext.onReady(function(){
	Ext.QuickTips.init();
	Ext.create('Ext.Panel', {
	    width: 1000,
	    height: 200,
	    title: "column布局的面板",
	    layout: 'column',//设置布局，列布局
	    renderTo: 'demo',
		items: [{//后面一个宽度固定，前面两个按25%，75%布局
		    title: '宽 = (总宽度-250)*25%',
		    columnWidth: .25,//这个布局特有的写法
		    html: 'Content'
		},{
		    title: '宽 = (总宽度-250)*75%',
		    columnWidth: .75,
		    html: 'Content'
		},{
		    title: '宽 = 250px',
		    width: 250,
		    html: 'Content'
		}]
	});
})