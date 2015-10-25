Ext.onReady(function(){
	Ext.QuickTips.init();
	var navigate = function(panel, direction,btn){
	    var layout = panel.getLayout();//得到布局 Ext.layout.container.Card 他有 next() prev()
	    
	    //if(direction == "next"){
	    	//layout.next();
	    //}else if(direction == "prev"){
	    	//layout.prev();
	    //}
	    layout[direction]();//相当于执行next(),prev() 即上面的if else if 代码
	    //card的关键函数next( ) : Ext.Component,prev( ) : Ext.Component
	    //getNext( ) : Ext.Component,getPrev( ) : Ext.Component
	    Ext.getCmp('move-prev').setDisabled(!layout.getPrev());//禁用按钮
	    Ext.getCmp('move-next').setDisabled(!layout.getNext());//禁用按钮
	};
	Ext.create('Ext.Panel', {
	    width: 500,
	    height: 280,
	    layout: 'card',//设置布局
	    activeItem:0,//默认展示的子节点索引
	    renderTo: 'demo',
	    items: [{
	    	id: 'card-0',
	        xtype: 'panel',
	        title: '第一个面板',
	        html:'第一个面板'
	    },{
	    	id: 'card-1',
	        xtype: 'panel',
	        title: '第二个面板',
	        html:'第二个面板'
	    },{
	    	id: 'card-3',
	        xtype: 'panel',
	        title: '第三个面板',
	        html:'第三个面板'
	    }],
	    index:1,//自定义索引                       //自定义的，这个是在api找不到的
	   	titleInfo: "cardt布局的面板",//这个是在api找不到的
	   	listeners: {
	   		render:function(){ 
	   			var panel = this;
	   			//重置panel头信息文字
	   			panel.setTitle(panel.titleInfo+"("+(this.activeItem+1)+"/"+panel.items.length+")");
	   		}
	   	},
	    bbar: [{//底部工具栏
	            id: 'move-prev',
	            text: '上一页',
	            handler: function(btn) {
	            	var panel = btn.up("panel");
	            	panel.index = panel.index-1;
	            	panel.setTitle(panel.titleInfo+"("+panel.index+"/"+panel.items.length+")");
	                navigate(panel, "prev");
	            },
	            disabled: true
	        },
	        '->',//这个的意思是这两个按钮分别在左右
	        {
	            id: 'move-next',
	            text: '下一页',
	            handler: function(btn) {
	            	var panel = btn.up("panel");
	            	panel.index = panel.index+1;
	                panel.setTitle(panel.titleInfo+"("+panel.index+"/"+panel.items.length+")");	            	
	                navigate(panel, "next");
	            }
	        }
	    ]
	});
})