Ext.define('AM.controller.deptController', {
    extend: 'Ext.app.Controller',
	init:function(){
		this.control({
			'deptTree':{//为树增加事件
				checkchange : function(node,checked,options){//勾选变换
					if(node.data.leaf == false){//不是叶子
						if(checked){
							//打开节点
							node.expand();
							//遍历孩子
							node.eachChild(function(n){
								n.data.checked = true;
								n.updateInfo({checked:true});
							})
						}else{
							node.expand();
							node.eachChild(function(n){
								n.data.checked = false;
								n.updateInfo({checked:false});
							})							
						}
					}else{//单击叶子
						if(!checked){
							node.parentNode.data.checked = false;
							node.parentNode.updateInfo({checked:false});
						}
					}
				}
			},
			'deptTree button[id=delete]':{//删除节点
				click:function(b,e){
					var tree = b.ownerCt.ownerCt;
					var nodes = tree.getChecked();
					for(i=0;i<nodes.length;i++){
						nodes[i].remove(true);//删除
					}
				}
			},
			'deptTree button[id=copy]':{//拷贝节点
				click:function(b,e){
					var tree = b.ownerCt.ownerCt;
					//得到数据集合
					var nodes = tree.getChecked();//获得勾选
					if(nodes.length>0){
						//把数据放到剪切板中
						tree.setCopyNodes(Ext.clone(nodes));
						alert("拷贝"+nodes.length+"个节点");
						for(i=0;i<nodes.length;i++){//去掉勾选
							nodes[i].data.checked = false;
							nodes[i].updateInfo();//更新
						}
					}
				}					
			},
			"deptTree button[id=paste]":{//粘贴节点
				click:function(b,e){
					var tree = b.ownerCt.ownerCt;
					//被追加孩子的节点集合
					var checkednodes = tree.getChecked();
					if(checkednodes.length == 1){
						//被追加孩子的节点
						var node = checkednodes[0];
						//去剪切板中区数据
						var nodes = tree.getCopyNodes();//剪切板
						if(nodes.length>0){
							for(i=0;i<nodes.length;i++){
								var n = nodes[i].data;
								n['id'] = n['id']+'1';
								node.appendChild(n);//增加节点
							}
						}
					}else{
						alert("剪切板中无数据或者你没有选择要追加孩子的节点");
					}
				}				
			},
			"deptTree button[id=allopen]":{
				click:function(b,e){
					var tree = b.ownerCt.ownerCt;
					tree.expandAll();
				}			
			},			
			"deptTree button[id=allclose]":{
				click:function(b,e){
					var tree = b.ownerCt.ownerCt;
					tree.collapseAll();
				}			
			},
			"deptTree button[id=add]":{
				click:function(b,e){
					var tree = b.ownerCt.ownerCt;
					var nodes = tree.getChecked();
					if(nodes.length == 1){
						var node = nodes[0];
						node.appendChild({
							checked:true,
							text:'技术架构组',
							id : '0103',
							leaf:true		
						});
					}else{
						alert("请您选择一个节点");
					}
				}
			}//,
//			"deptTree":{
//				itemclick:function(tree,record,item,index,e,options){
//					alert(record.get('id'));
//				}
//			}
		});
	},
	views:[
		'deptView'
	],
	stores :[
		'deptStore'
	],
	models :[
		'deptModel'
	] 
});