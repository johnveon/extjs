//User类
Ext.define('AM.store.Users', {
	extend: 'Ext.data.Store',
	model: 'AM.model.User',
	storeId: 's_user',
	groupField : 'sex',//以这个字段分组
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
	autoLoad: true //
});