Ext.onReady(function(){
	
	//Ext.QuickTips.init();//
	
	//-------------------------------------
	Ext.define("person",{
		extend:'Ext.data.Model',
		fields:[
			{name:'userName',type:'auto'},
			{name:'password',type:'auto'}
		]
	});
	var p = new person({userName:'yunfengcheng2008@126.com',password:"123456"});
	//-------------------------------------
	var passTest = /[123]/i
	Ext.apply(Ext.form.field.VTypes,{//扩展VTypes类
		myPass :function(val,field){//myPass myPassText myPassMask 规定的
			return passTest.test(val);
		},
		myPassText:"密码格式错误",
		myPassMask:/[123]/i    //规定输入123，其他输入不了
	});
	//-------------------------------------
	var textForm = Ext.create("Ext.form.Panel",{
		title : "form中文本框实例",
		bodyStyle :'padding:5 5 5 5',
		frame : true,
		height : 120,
		width : 300,
		id:'my_form',//一般不用id获取组件
		renderTo:'formDemo',
		defaultType:'textfield',//不写xtype的话就默认textfield
		defaults:{//固定字段项默认值
			labelSeparator :": ",
			labelWidth : 50,
			width : 200,
			allowBlank: false,//不能为空
			msgTarget : 'side',//提示位置 qtip
			labelAlign:'left'//对齐
		},
		items:[{//这个form有的输入控件：
			fieldLabel : "Name",
			name:'userName',
			id:'userName',
			blankText : "不能为空11",//检验为空的时候提示的信息，可以不写默认有提示文字
			emptyText : '请输入账号',//灰色的提示输入文字
			selectOnFocus : true,//得到焦点之后全选里面的内容
			regex:/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
			regexText:"请用邮箱来注册",
			grow:false//是否在这个表单字段规定长度内自动根据文字的内容进行伸缩
		},{
			fieldLabel : "Pass",
			name:'password',
			id:'password',
			inputType:'password',//密码类型
			vtype:'myPass'//自定义检验
		}],
		buttons: [//这个form有的按钮
		  {text:'登陆系统',handler:function(b){
		  	//我没想通过base来得到数值,那我们就要先得到base 
		  	//那么base我们有什么办法来的到呢?
		  	//很简单 通过 Ext.form.Basic(findField( String id ) : void)
		  	//那么Ext.form.Basic如何得到呢?
		  	//很简单Ext.form.Panel (getForm( ))
		  	//Ext.form.Panel如何得到呢?
		  	//很简单 1>通过ID来的
		  	var formObj = Ext.getCmp("my_form");//获取组件 前面定义的
		  	var basic = formObj.getForm();
		  	var nameField = basic.findField("userName");//获得输入框对象
		  	var nameValue = nameField.getValue();//获取输入框的值
		  	alert(nameValue);
		  }},{
		  	text:'重置',handler:function(b){
			  	var formObj = Ext.getCmp("my_form");
			  	var basic = formObj.getForm();//获取form对象
			  	basic.reset();//重置表单
		  	}
		  },{
		  	text:'装在数据',handler:function(b){
			  	var formObj = Ext.getCmp("my_form");
			  	var basic = formObj.getForm();//获取form对象
			  	basic.loadRecord(p);//数据填充表单
		  	}		  	
		  }
		]		
	})
});






