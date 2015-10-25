Ext.onReady(function(){
	Ext.QuickTips.init();
	Ext.create("Ext.form.Panel",{
		title:'本地File实例',
		renderTo:'formDemo',
		bodyPadding:'5 5 5 5',
		height:100,
		width:270,
		frame:true,
		items:[{
			xtype:'filefield',//上传附件
			name:'photo',
			fieldLabel:'照片',
			labelWidth:50,
			msgTarget:'side',
			allowBlank:false,
			anchor:'98%',
			buttonText:'请选中文件'//按钮的文字
		}],
		buttons:[{
			text:'提交',
			handler:function(){
				this.up("form").getForm().submit({//提交路径
					url:'/platform/assistJsp/upload/cosupload.jsp',
					waitMsg:'文件上传中',//等待进度条上的文字
					success:function(){//上传成功
						Ext.Msg.alert("success","文件上传成功");
					}
				});
			}
		}]
	});	
})






