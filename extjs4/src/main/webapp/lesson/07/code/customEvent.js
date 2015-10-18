(function(){
	Ext.onReady(function(){
		Ext.define("children",{//定义一个带事件的children类
			extend:'Ext.util.Observable',
			constructor:function(){
				this.state = "hungry",//目前所属的状态 full
				
				this.addEvents({'hungryEvent':true}),//添加一个事件（声明）
				
				this.addListener("hungryEvent",function(milk){//注册一个事件（监听） 事件触发之后的处理函数
					if(this.state == 'hungry'){
						this.drink(milk);
					}else{
						alert("我不饿");				
					}
				}),
				
				this.setMilk = function(milk){
					this.fireEvent('hungryEvent',milk);//触发hungryEvent事件（调用）
				},
				this.drink = function(milk){//children类的方法
					alert("我喝掉了一瓶牛奶: "+milk);
				}
			}
		});
		//创建children类实例
		var children = Ext.create("children",{});//本对象是牛奶过敏的对象
		//capture拦截事件
		Ext.util.Observable.capture(children,function(eventName){
			if(eventName == "hungryEvent"){
				alert('这个孩子牛奶过敏不能和牛奶...');
				return false;//不会触发hungryEvent事件 chrome支持不好
			}else{
				return true;//触发
			}
		});
		//这个实例调用方法：母亲调用孩子的接受牛奶的方法
		children.setMilk("三鹿牛奶");
		
	});
	/***
	 * 为对象添加一个事件addEvents-->事件的监听方式注册这个事件addListener-->触发了这个事件的动作fireEvent
	 */
})();


