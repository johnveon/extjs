var dataStore = Ext.create("Ext.data.Store",{
	fields:[
		'name','data'
	],
	data:[
		{name:'0~10岁',data:120},
		{name:'11~18岁',data:170},
		{name:'19~24岁',data:175}
	]
});
var b1 = Ext.create("Ext.Window",{//弹出
	width:600,
	height:500,
	title:'年龄身高分布图',
	shadow:false,//阴影
	maximizable:true,//可放大缩小
	layout:'fit',//只展示一个，填满父组件
	items:[{
		xtype:'chart',//图表
		style:'background:#fff',//控制背景颜色
		animate :true,//运行动画
		shadow : true,
		theme:"Category1",//Category1 ext提供皮肤
		store:dataStore,//数据集
        axes:[{//轴：纵轴
        	type:'Numeric',
        	position:'left',//放置到左边
        	dashSize:5,//引导线的宽度设置
        	title:'身高分布(CM)',
        	fields:['data'],//显示的数据索引，数据集中fields定义
        	majorTickSteps:5,//大跨跨几
        	minorTickSteps:6,//大跨里小跨跨几
        	grid:{
        		odd:{//奇数行
        			opacity:1,//不透明
        			'stroke-width':0.5//表格线宽
        		},
        		even:{//偶数行
        			opacity:1,//不透明
        			stroke:'#DDD',
        			'stroke-width':0.5//表格线宽
        		}
        	}
        },{//轴：横轴
        	type:'Category',
        	position:'bottom',
        	fields:['name'],//数据集中fields定义
        	title:'年龄段',
        	grid:true//默认样式
        }],
        series:[{//序列：图表里面的图形
        	type:'line',
        	axis:'left',
	       	xField: 'name',
	        yField: 'data',
	        highlight:true,//鼠标经过高亮数据序列
	        tips:{
			  trackMouse: true,//鼠标经过提示
			  width: 140,
			  height: 28,
			  renderer: function(storeItem, item) {//提示内容
			    this.setTitle(storeItem.get('name') + ': ' +
			    storeItem.get('data') + 'CM');
			  }
	        }
        }]
	}]
});







