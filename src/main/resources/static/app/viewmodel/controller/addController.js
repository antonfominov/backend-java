Ext.define('AppExtJS.viewmodel.controller.addController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.viewportAddController',


    index: 1000,
    
    onAddClick: function () {	
	if(Ext.getCmp('grid-part').getView().getSelectionModel().getSelection()[0] != undefined){
		Ext.create('AppExtJS.viewmodel.view.ItemWindow',{}).show();
		}
    else{
	Ext.MessageBox.alert('Внимание', 'Выберите главу для добавления абзаца');
	}
	},

	onRemoveClick: function(btn){

		if(Ext.getCmp('grid-items').getView().getSelectionModel().getSelection()[0] != undefined){
			
			Ext.MessageBox.show({
            title:'Удалить абзац?',
            msg: 'Внимание! Абзац будет удален',
            buttons: Ext.MessageBox.YESNOCANCEL,
            scope: this,
            fn: function(btn, text){

					if(btn == 'yes'){
						var select = this.getView().getSelectionModel().getSelection()[0].data.id;
						Ext.Ajax.request({
						url:'/items/',

                		method:'POST',
						params: {id : select},
				
						success: function(response, options){
						/*var myStore = Ext.data.StoreManager.lookup('items1');
   		
							myStore.reload();*/
							var myStore = Ext.data.StoreManager.lookup('items1');
							var e = Ext.getCmp('grid-items').getView().getSelectionModel().getSelection()[0];
							myStore.remove(e);
	
       				 },
				
		})}
		},
            animateTarget: btn,
            icon: Ext.MessageBox.QUESTION,
        });

			}
		else{
			Ext.MessageBox.alert('Внимание', 'Выберите абзац для удаления');
		}

		},
		
		updateClick : function (){
//		var win = this.lookupReference('popupWindow');
		if(!win){
		var win = new AppExtJS.viewmodel.view.UpdateFormItem();
		 this.getView().add(win);
			win.show();
			}
			var select = Ext.getCmp('grid-items').getView().getSelectionModel().getSelection()[0].data.name;
			Ext.getCmp('name').setValue(select);
		},
});