//User数据集合
Ext.define('AM.store.Users', {
	extend: 'Ext.data.Store', //定义model的集合，
	model: 'AM.model.User',
	storeId: 's_user',
	proxy:{
	    type:'ajax',
	    url:'/extjs/extjs!getUserList.action',//从什么地方取数据
	    reader: {
	        type: 'json',
	        root: 'topics'
	    },writer:{
			type:'json'
		}
	},
	autoLoad: true //很关键
});