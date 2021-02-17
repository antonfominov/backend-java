Ext.define('AppExtJS.viewmodel.controller.itemController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.viewportItemController',


    index: 1000,
    
    myItemClick: function (grid, rowIndex, e) {
	
	var id = rowIndex.data.id;
	
	Ext.Ajax.request({
		
		url: '/part/items',
			method: 'POST',
			params: {id: id},
			
        success: function(response, options){
	
		var myStore = Ext.data.StoreManager.lookup('items1');
		var ot = Ext.decode(response.responseText);
		myStore.setData(ot);
        },

        failure: function(response, options){
            Ext.MessageBox.alert("Ошибка: " + response.statusText);
        }
    })

    },
		
	updateClick : function (){
//		var win = this.lookupReference('popupWindow');
		if(!win){}
		var win = new AppExtJS.viewmodel.view.UpdateForm();
		 this.getView().add(win);
			win.show();
			
			var select = Ext.getCmp('grid-part').getView().getSelectionModel().getSelection()[0].data.name;
			Ext.getCmp('name').setValue(select);
		
		
		/*var name = this.getView().getSelectionModel().getSelection()[0].data.name;
		var id = this.getView().getSelectionModel().getSelection()[0].data.id;
		
		Ext.Ajax.request({
			url:'/updatePart',

                method:'POST',
				params: {name: name}
				
		})*/
		
		
//		var pl = Ext.getCmp('grid-part').getPlugin('rowediting').editor.floatingButtons.child('#update');
	/*	console.log(pl);
		pl.handler = ({click: function(){console.log('click!');},});*/
		/*pl.on('edit', function(editor, e) {
    		console.log('Click!');
    	e.record.commit();
		}),*/
		/*grid.on('edit', function(editor, e) {
    		console.log('Click!');
    	e.record.commit();
		})*/
	},


	onAddClick: function(){
		Ext.create('AppExtJS.viewmodel.view.Window',{}).show();
	},
	
	onRemoveClick: function(btn){
		
		
/*		if(this.getView().getSelectionModel().getSelection()[0] != undefined){
			var select = this.getView().getSelectionModel().getSelection()[0].data.id;
		Ext.Ajax.request({
			url:'/part/',

                method:'POST',
				params: {id : select},
				
				success: function(response, options){
					var myStore = Ext.data.StoreManager.lookup('items1');
   					var myStore1 = Ext.data.StoreManager.lookup('parts1');

					myStore1.reload();
					myStore.reload();
	
        },
				
		})}
		else{
			Ext.MessageBox.alert('Внимание', 'Выберите главу для удаления');
		}
		*/
		
		if(Ext.getCmp('grid-part').getView().getSelectionModel().getSelection()[0] != undefined){
			
			Ext.MessageBox.show({
            title:'Удалить главу?',
            msg: 'Внимание! Глава будет удалена',
            buttons: Ext.MessageBox.YESNOCANCEL,
            scope: this,
            fn: function(btn, text){

					if(btn == 'yes'){
						var select = this.getView().getSelectionModel().getSelection()[0].data.id;
						Ext.Ajax.request({
						url:'/part/',

                		method:'POST',
						params: {id : select},
				
						success: function(response, options){
						var myStore = Ext.data.StoreManager.lookup('parts1');
   		
							myStore.reload();
	
       				 },
				
		})}
		},
            animateTarget: btn,
            icon: Ext.MessageBox.QUESTION,
        });

			}
		else{
			Ext.MessageBox.alert('Внимание', 'Выберите главу для удаления');
		}
  },

		onRefrechClick : function(){
					var myStore = Ext.data.StoreManager.lookup('parts1');
					var myStore1 = Ext.data.StoreManager.lookup('items1');
					myStore.reload();
					myStore1.reload();
		},
});