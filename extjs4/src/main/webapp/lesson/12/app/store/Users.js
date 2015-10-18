//User数据集合
Ext.define('AM.store.Users', {//model层的名字
	extend: 'Ext.data.Store',//指定这是个store
	model: 'AM.model.User',//这个Users store是User的集合
	storeId: 's_user',
	proxy:{
	    type:'ajax',
	    url:'/extjs/extjs!getUserList.action',
	    reader: {
	        type: 'json',
	        root: 'topics'
	    },writer:{
			type:'json'
		}
	},
	autoLoad: true //很关键
});