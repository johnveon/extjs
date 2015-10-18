Ext.onReady(function(){
	//1.ellipsis() : void
	var str = "www.uspcat.com";
		//alert(Ext.util.Format.ellipsis(str,10));//超过10就用...代替
	//2.capitalize( ) : void
	 	//alert(Ext.util.Format.capitalize(str));//返回首字母的字符串
	//3.date( String/Date value, String format ) : String
		//alert(Ext.util.Format.date(new Date(),"Y年-m月-d日"));//格式化日期
	//4.substr( String value, Number start, Number length ) : String
		//alert(Ext.util.Format.substr(str,0,5));//截取字符串0~5的
	//5.lowercase( String value ) : String
		//alert(Ext.util.Format.lowercase("USPCAT.COM"))//全部字母变小写
	//6.number( Number v, String format ) : String
		//alert(Ext.util.Format.number("12344556.7892","0,000.00"))//格式数字
	//7.nl2br( String The ) : String
	alert(Ext.util.Format.nl2br("asd\n123"))//\n 变成 <br/>
})