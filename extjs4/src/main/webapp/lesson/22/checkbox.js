Ext.onReady(function(){
	var textFomr = Ext.create("Ext.form.Panel",{
		title : "form中文本框选框的实例",
		bodyStyle :'padding:5 5 5 5',
		frame : true,
		height : 250,
		width : 400,
		id:'my_form',
		renderTo:'formDemo',
		defaults:{
			labelSeparator :": ",
			labelWidth : 50,
			width : 200,
			allowBlank: false,
			msgTarget : 'side',
			labelAlign:'left'
		},
		items:[{
			xtype:'radiofield',//单选框
			boxLabel :'男',//文字在右边
			inputValue:'m',//男对应的值是m
			fieldLabel:'性别',
			checked:true,//指定选上
			name:'sex'//名字一样就只能选一个
		},{
			xtype:'radiofield',//单选框
			boxLabel :'女',
			inputValue:'w',
			fieldLabel:'性别',
			name:'sex'//名字一样就只能选一个
		},{
			xtype:'checkboxfield',
			inputValue:'1',
			name:'hobby',
			boxLabel:'唱歌',
			fieldLabel:'爱好'
		},{
			xtype:'checkboxfield',
			inputValue:'2',
			name:'hobby',
			boxLabel:'看书',
			fieldLabel:'爱好'
		},{
			xtype:'checkboxfield',
			inputValue:'3',
			name:'hobby',
			checked:true,
			boxLabel:'编程',
			fieldLabel:'爱好'
		},{
			xtype:'checkboxfield',
			inputValue:'4',
			name:'hobby',
			boxLabel:'交友',
			fieldLabel:'爱好'
		}],
		dockedItems:[{//工具栏
			xtype:'toolbar',
			dock:'top',
			items:[{
				text:'选择全部的爱好',
				iconCls:'table_comm',//图标
				handler:function(){
				  	var formObj = Ext.getCmp("my_form");
				  	var basic = formObj.getForm();
				  	var fields = basic.getFields();//basic得到全部字段
				  	fields.each(function(field){
				  		if("hobby" == field.getName()){//等于hobby全部标上
				  			field.setValue(true)
				  		}
				  	})
				}
			}]
		}],
		buttons: [
		  {text:'登陆系统',handler:function(b){
		  	var formObj = Ext.getCmp("my_form");
		  	var basic = formObj.getForm();
		  		console.log(basic.getValues());
		  }}]
	})
})






