Ext.define("AM.util.GridDoActionUtil",{
	doDelete:function(grid,treeObj){
		if(!grid){
			alert("参数传递不正确");
			return;
		}
		//得到数据集合
		var store = grid.getStore(); 
		var records = grid.getSelectionModel().getSelection();//grid表格对象
		var data = [];
		Ext.Array.each(records,function(model){
			data.push(Ext.JSON.encode(model.get('id')));
		});		
		if(data.length > 0){
			Ext.Ajax.request({
				url:store.getProxy().api['remove'],
				params:{data:"["+data.join(",")+"]"},
				method:'POST',
				timeout:4000,
				success:function(response,opts){
					Ext.Array.each(records,function(model){
						//tree删除节点
						var node = treeObj.getStore().getNodeById(model.get('id'));
						var parentNode = node.parentNode;
						try{
							node.remove(true);//节点有删除功能
							if(parentNode){
								if(!parentNode.getChildAt(0)){
									parentNode.data['leaf'] = true;
									parentNode.updateInfo();
								}
							}
						}catch(e){
							console.log(e);
						}
						//表格删除数据
						store.remove(model);	//数据集里删除					
					})
				}
			})
		}
		
	},
	/**
	 * 列表的批量修改
	 * @param {} grid
	 * @param {} treeObj
	 */
	doSave:function(grid,treeObj){
		if(!grid){
			alert("参数传递不正确");
			return;
		}	
		//得到数据集合
		var store = grid.getStore();
		//records 被你修改过的数据
		var records = store.getUpdatedRecords();//从数据集中得到被你修改过的数据
		var data = [];
		Ext.Array.each(records,function(model){
			data.push(Ext.JSON.encode(model.data));//把json对象变成json string
		});
		//异步的操作数据 请求后台方式1
//		store.getProxy().update(new Ext.data.Operation({
//			action:'update'
//		}));
		if(data.length > 0){
			Ext.Ajax.request({//请求后台方式2
				url:store.getProxy().api['update'],//指定调用update url 在 store 中定义
				params:{data:"["+data.join(",")+"]"},
				method:'POST',
				timeout:4000,
				success:function(response,opts){//opts 参数列表
					console.log(response.responseText);
					Ext.Array.each(records,function(model){
						var node = treeObj.getStore().getNodeById(model.get('id'));
						node.data['text'] = model.get('text');
						node.updateInfo();
						//取消小箭头
						model.commit();
					});
				}
			});
		}
	},
	/**
	 * 树形维护表格的插入操作
	 * @param {} grid
	 * @param {} modelObj
	 * @param {} treeObj
	 */
	doInsert:function(grid,modelObj,treeObj){
		if(!(grid && modelObj)){
			alert("参数传递不正确");
			return;
		}
		//得到表格数据集合
		var store = grid.getStore();
		//得到目前表格的数据集合长度
		var storeCount = store.getCount();
		//得到编辑插件
		var edit = grid.editing;
		//得到数据模型
		var model = store.model;
		if(storeCount == 0){//证明添加的节点是ROOT
			//初始化一个模型的类
			var deptObj = new model(modelObj);
			edit.cancelEdit();//取消其他插件的编辑活动
			store.insert(0,deptObj);
			edit.startEditByPosition({
				row:0,
				column:1
			});
			if(treeObj){//我们需要树形操作
				var rootNode = treeObj.getStore().getRootNode();
				rootNode.appendChild({
					id:modelObj["id"],
					text:modelObj["text"],
					leaf:modelObj["leaf"]
				});
			}
		}else{
			//得到被选择的数据集合
			var checkedRecords = grid.getSelectionModel().getSelection();
			if(checkedRecords.length == 1){
				var parentRecord = checkedRecords[0];
				modelObj['nodeType'] = 'GENERAL';
				//第二讲中改********************************
				modelObj['id'] = 'A010101';
				//得到父节点
				var parentNode = treeObj.getStore().getNodeById(parentRecord.get('id'));
				try{
					parentNode.data['leaf'] = false;
					parentNode.updateInfo();
					//给它加一个孩子节点
					parentNode.appendChild({
						id:"A010101",
						text:'',
						leaf:true
					});	
					parentNode.expand();
				}catch(e){
				}
				edit.cancelEdit();//取消其他插件的编辑活动
				var deptObj = new model(modelObj);
				store.insert(0,deptObj);
				edit.startEditByPosition({
					row:0,
					column:1
				});
			}else{
				alert("请选择1个父级部门,您现在选择的是["+checkedRecords.length+"]个");
			}
		}
	}
});

