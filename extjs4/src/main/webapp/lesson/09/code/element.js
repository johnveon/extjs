(function(){
	Ext.onReady(function(){
		var div01 = Ext.core.Element.fly("div01");//直接从页面用fly获取Ext.core.Element
		//1.鼠标滑过的时候增加一个样式滑出的时候移除样式
		div01.addClsOnOver("divC");//divC是样式表
		//2.得到el的方法是Ext.get()
		var input01 = Ext.get("input01");//先从Element集合获取，没有再从页面获取放入Element集合，然后在从Element集合用get获取Ext.core.Element
		var fn1 = function(){
			alert("单击B按钮调用这个函数")
		}
		//增加键盘事件两种方法1 Ext.EventObject.B 键盘B 
		input01.addKeyMap({key:Ext.EventObject.B,ctrl:false,fn:fn1,stope:input01});
		//增加键盘事件两种方法2
		input01.addKeyListener({key:Ext.EventObject.X,ctrl:true},function(){
			alert("单击ctrl+x")
		},input01);
		
		function createChild(){//返回生成的DOM元素
			var el = document.createElement("h5");
			//appendChild 是dom 方法
			el.appendChild(document.createTextNode("我是被追加的"));
			return el;
		}
		//在元素div02内追加已有的dom元素
		Ext.get("div02").appendChild(createChild());
		
		//在body内最后创建一个元素
		Ext.getBody().createChild({
			tag:'li',
			id:'item1',
			html:'我是第一个个节点'
		});
	});
})();