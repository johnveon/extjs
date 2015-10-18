Ext.onReady(function(){
	Ext.QuickTips.init();
	Ext.Loader.setConfig({
		enabled:true
	});
	//引入分页类SlidingPager
	Ext.Loader.setPath('Ext.ux', '../../../extjs4/examples/ux');
	Ext.require([//引入 打开页面就先引入 Ext.create 没有引入就引入但是会浪费时间引入
	    'Ext.ux.data.PagingMemoryProxy',
	    'Ext.ux.SlidingPager',
	    'Ext.ux.grid.FiltersFeature'
	]);	
	Ext.application({
		name : 'AM',
		appFolder : "app",
		launch:function(){
	        Ext.create('Ext.container.Viewport', { 
	        	layout:'auto',
	            items:[{
	            	xtype: 'userlist',
	                title: 'Users'
	            },{
	            	xtype:'proList'
	            }]
	        });
		},
		controllers:[
			'Users'
		]
	});
})