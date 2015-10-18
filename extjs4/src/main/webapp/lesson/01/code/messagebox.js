Ext.onReady(function(){
	//Ext.MessageBox.alert("hello word世界","hello extjs4.0");
	//Ext.Msg.alert("dd","ddd");
	//Ext.Msg.prompt('名字','请输入名字',function(btn, text){
	       //if(btn == 'ok'){
	       			//Ext.Msg.alert("dd",text);
	       //}
	//});
	Ext.Msg.show({
     title:'Save Changes?',
     msg: 'You are closing a tab that has unsaved changes. Would you like to save your changes?',
     buttons: Ext.Msg.YESNOCANCEL,
     fn: processResult,
     animateTarget: 'elId',
     icon: Ext.window.MessageBox.QUESTION
	});
	
	
	
});

function processResult(e){
	//Ext.Msg.alert("dd","processResult");
}