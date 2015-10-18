(function(){
	Ext.onReady(function(){
		if(Ext.isIE){//判断是否IE
			document.getElementById("btn2").attachEvent("onclick",function(){//适合ie
				alert("第二种事件绑定方式");
			});
		}else{
			document.getElementById("btn2").addEventListener("click",function(){//适合firefox
				alert("第二种事件绑定方式");
			});		
		}
		Ext.get('btn3').on("click",function(){//ext 跨浏览器兼容
			alert("第三种事件绑定方式");
		})
	})
})();