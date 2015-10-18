(function(){
	Ext.onReady(function(){
		//类老师
		Ext.regModel("teacher",{//定义teacher类model
			fideld:[
				{name:'teacherId',type:"int"},
				{name:'name',type:"auto"}
			],
			hasMany:{//一个老师对多个学生
				 model: 'student',//对的是student类model
			     name : 'getStudent',//
       			 filterProperty: 'teacher_Id'//关联student类的属性
			}
		});
		//学生
		Ext.regModel("student",{//定义student类model
			fideld:[
				{name:'studentId',type:"int"},
				{name:'name',type:"auto"},
				{name:"teacher_Id",type:'int'}
			]
		});
		//t.students 得到子类的一个store数据集合
	})
})();