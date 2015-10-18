		Ext.define("ux.mywin",{//创建类，ux.mywin类名
			extend:'Ext.window.Window',//继承
			width:400,
			height:300,
			config: {
			   price: 500//可以自动生成get set方法
			},
			newtitle: 'new uspcat',
			mySetTitle:function(){
				this.title = this.newtitle;
			},
			title:'uspcat',
			initComponent: function() {
				this.mySetTitle();
				this.callParent(arguments);
			}
		})