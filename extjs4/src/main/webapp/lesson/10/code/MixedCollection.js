Ext.onReady(function(){
	//1.集合类中的add( String key, Object o ) : Object
	var item1 = new Ext.util.MixedCollection();
	var a = {name:'a'};
	var b = {name:'b'};
	item1.add("01",a);
	item1.add("02",b);
	//alert(item1)
	//2.addAll( Object/Array objs ) : void
	var item2 = new Ext.util.MixedCollection();
	var array = [];
	array.push(a);
	array.push(b);
	item2.addAll(array);//加入数组 和 一个一个add是一样的
	//alert(item2)
	//3.clear( ) : void//删除所有的
	item2.clear();
	//alert(item2)1
	//4.clone( ) : MixedCollection
	var item3 = item1.clone();//克隆
	//alert(item3)
	/**
	 * 5.判断集合中是否有相应的对象
	 * contains( Object o ) : Boolean
	 * containsKey( String key ) : Boolean
	 */
	//alert(item1.contains(a));是否有a对象 true
	//alert(item1.containsKey("01"));是否有01key true
	//6.each( Function fn, [Object scope] ) : void//遍历
	item1.each(function(item){
		//alert(item.name)
	});
	//7.从集合中得到单个的对象
	//get( String/Number key ) : Object
	//first( ) : Object
	//alert(item1.get("01").name);
	//alert(item1.first().name);
	//集合的有关事件
	//add,clear,remove,replace
	item1.on("add",function(index,o,key ){
		alert("集合item1有了一个新的成员 : "+key)
	});
	//item1.add("03",{name:'c'});

})







