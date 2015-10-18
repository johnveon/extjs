//User类
Ext.define('AM.model.User', {//model层的名字 AM注意 最好是User.js文件路径
    extend: 'Ext.data.Model',//指定这是个Model
	fields: [
		{name: 'name',  type: 'string',sortable : true},
	    {name: 'age',   type: 'int',sortable : true},
	    {name: 'email',   type: 'string',sortable : true}
	]
});