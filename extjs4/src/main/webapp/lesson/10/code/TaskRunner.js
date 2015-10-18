Ext.onReady(function(){//模仿多线程
	var runner = new Ext.util.TaskRunner();
	var task = {
		run:function(){
			Ext.getDom("t1").value = Ext.util.Format.date(new Date(),"Y-m-d-s");
			//Ext.get("t1").dom.value
		},
		interval:1000//间隔时间
	}
	runner.start(task);//开始这个线程
	Ext.get("b6").on("click",function(){
	
		runner.stop(task);//停止
	})
})