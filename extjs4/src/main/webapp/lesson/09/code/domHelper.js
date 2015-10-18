Ext.onReady(function(){
	//append( Mixed el, Object/String o, [Boolean returnElement] ) :
	var p = Ext.create("Ext.panel.Panel",{//
		width:400,
		height:300,
		html:"<p id='p1'>hello word</p>",
		id:'myp01',
		title:'my panel',
		renderTo:"myp"
	});
	//dom粘合剂 在p1内最后追加 当孩子
	Ext.core.DomHelper.append(Ext.get("p1"),"<br><div id='d'>wo sho bei zhuijia de </div>");
	
	//applyStyles 添加一个样式表 style="color: red;"
	Ext.core.DomHelper.applyStyles(Ext.get("p1"),"color:red");
	//下面两个是被当做兄弟追加的
	//insertAfter( Mixed el, Object o, [Boolean returnElement] ) : //在之前加入 当兄弟
	//insertBefore( Mixed el, Object/String o, [Boolean returnElement] ) ://在之后加入 当兄弟
	
	// createDom( Object/String o ) : HTMLElement 创建dom元素
	var html = Ext.core.DomHelper.createDom("<h1>hello</h1>");
	alert(html)
	
})