(function(){
	Ext.data.validations.lengthMessage = "错误的长度";//修改错误提示的英文为中文
	Ext.onReady(function(){
		//扩展也就是我们自定义验证机制的的一个新的验证方法
		Ext.apply(Ext.data.validations,{//自定义验证方式  // apply 是为 Ext.data.validations 加入 age规则
			age:function(config, value){//校验type为age
				var min = config.min;
				var max = config.max;
				if(min <= value && value<=max){
					return true;
				}else{
					this.ageMessage = this.ageMessage+"他的范围应该是["+min+"~"+max+"]";
					return false;
				}
			},
			ageMessage:'age数据出现的了错误'//错误的提示信息
		});
		
		
		Ext.define("person",{//定义一个person类model
			extend:"Ext.data.Model",
			fields:[
				{name:'name',type:'auto'},
				{name:'age',type:'int'},
				{name:'email',type:'auto'}
			],
			validations:[//定义校验
				{type:"length",field:"name",min:2,max:6},//定义校验规则
				{type:'age',field:"age",min:0,max:150}//使用自定义的age校验规则
			]
		});
		var p1 = Ext.create("person",{//创建person类model实例
			name:'uspcat.com',
			age:-26,
			email:'yunfengcheng2008@126.com'
		});	
		var errors = p1.validate();//校验的结果存在数组中
		var errorInfo = [];
		errors.each(function(v){
			errorInfo.push(v.field+"  "+v.message);
		});
		alert(errorInfo.join("\n"));//数组的每个元素换行
	});
	/**
	 * name 2~6
	 * set(String name){
	 * 	 if(){
	 * 	 }else{
	 * 	 }
	 * }
	 */
	//age 不能小于0也不能大于150
})();









