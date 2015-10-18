var onl = function(){
	//alert("2 我是呗body的onload事件调用的")
}
Ext.onReady(function(){
	//1.onReady 这个个方法里面的第一个参数(funcion)他执行在页面文件按加载完毕和onload完成之后.
	//alert("3 extjs")
	
	//2.通过类似XML的选测方式来查询我们的节点
	var arr = Ext.query("TR TD");//获取所有tr 下面的td
	//alert(arr)
	
	//3.getCmp
	Ext.create("Ext.panel.Panel",{//创建一个Ext.panel.Panel
		width:400,
		height:300,
		html:'<p>hello word</p>',
		id:'myp01',
		title:'my panel',
		renderTo:"myp"//这个panel 在myp元素下渲染
	});
	var myp = Ext.getCmp("myp01");//ext 组件的获取方法
	myp.setTitle("new title");
	//4.isEmpty //判断传入的对象是否为空
//	alert(Ext.isEmpty({})); //返回false
//	alert(Ext.isEmpty('',true));//flase
//	alert(Ext.isEmpty('',false));//true
	
	//5.namespace 定义命名空间
	Ext.namespace("COM.PCAT.MODE","COM.PCAT.CORE");
	COM.PCAT.MODE.A = {//定义不同包下的A
		name:'uspcat'
	};
	COM.PCAT.CORE.A = function(){//定义不同包下的A
		alert("COM.PCAT.CORE.A");//
	};
	//6.each
	var array = [-1,23,43543,4,6,7,8];
	Ext.each(array,function(i){//遍历数组
		//alert(i)
	})
	//7.apply 扩展属性
	var a = {
		name:'yfc'
	}
	Ext.apply(a,{getName:function(){
		alert(this.name);
	}});
	//a.getName();//a 没定义getName 是apply出来的
	
	//8.encode( Mixed o ) : String  编码
	//alert(Ext.encode(a));//对象变成字符串
	
	//9.htmlDecode 	把>转译&gt
	//Ext.Msg.alert("hello",Ext.htmlDecode("<h1>hel>lo</h1>"));
	//10.select  根据样式表取元素
	//var o1 = Ext.select("divC");
	//alert(o1)
	
	//11.typeOf( Mixed value ) : String  返回对象类型
	alert(Ext.typeOf({}));//object
	alert(Ext.typeOf(""));//string
	alert(Ext.typeOf(function(){}));//function
})






