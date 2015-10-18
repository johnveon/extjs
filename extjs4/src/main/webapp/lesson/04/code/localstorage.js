(function(){
	Ext.onReady(function(){
		Ext.regModel("user",{//定义model 在定义的model 写好proxy
			fields:[
				{name:'name',type:'string'}
			],
			proxy:{
				//model:user //在user model里面可以不写
				type:'localstorage',//浏览器关闭不会清除
				id  : 'twitter-Searches'//全局唯一的id
			}
		});
		//我们用store来初始化数据  数据集的概念 model的集合
		var store = new Ext.data.Store({
			model:user//放的是user model
		});
		store.add({name:'uspcat.com'});//加入data
		store.sync();//保存数据在浏览器，像cookie 用proxy localstorage 保存
		store.load();//加载数据 把刚才保存的数据加载进来
		var msg = [];
		store.each(function(rec){//遍历
			msg.push(rec.get('name'));
		});
		alert(msg.join("\n"));
	})
})();
	