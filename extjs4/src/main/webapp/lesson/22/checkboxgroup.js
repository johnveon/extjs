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
			xtype:'radiogroup',//radiogroup能布局的
			fieldLabel:'性别',
			columns:2,//1行有2列	
			items:[{
					xtype:'radiofield',
					boxLabel :'男',
					inputValue:'m',
					checked:true,
					name:'sex'
				},{
					xtype:'radiofield',
					boxLabel :'女',
					inputValue:'w',
					name:'sex'
				}]
			},{
				xtype:'checkboxgroup',//checkboxgroup能布局的
				fieldLabel:'爱好',
				//allowBlank:true,//这个组可以为空
				width:335,
				columns:4,//1行有4列	
			items:[{
					xtype:'checkboxfield',
					inputValue:'1',
					name:'hobby',
					boxLabel:'唱歌'
				},{
					xtype:'checkboxfield',
					inputValue:'2',
					name:'hobby',
					boxLabel:'看书'
				},{
					xtype:'checkboxfield',
					inputValue:'3',
					name:'hobby',
					checked:true,
					boxLabel:'编程'
				},{
					xtype:'checkboxfield',
					inputValue:'4',
					name:'hobby',
					boxLabel:'交友'
			}]
		}],
		dockedItems:[{
			xtype:'toolbar',
			dock:'top',
			items:[{
				text:'选择全部的爱好',
				iconCls:'table_comm',
				handler:function(){
				  	var formObj = Ext.getCmp("my_form");
				  	var basic = formObj.getForm();
				  	var fields = basic.getFields();
				  	fields.each(function(field){
				  		if("hobby" == field.getName()){
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






