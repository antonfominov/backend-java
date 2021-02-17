Ext.define('AppExtJS.viewmodel.controller.labelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.labelController',


    index: 1000,
    
  	
	updateClick : function (){

		if(!win){}
		var win = new AppExtJS.viewmodel.view.UpdateFormLabel();
		 this.getView().add(win);
			win.show();
			
			var header = Ext.getCmp('grid-label').getView().getSelectionModel().getSelection()[0].data.header;
			var footer = Ext.getCmp('grid-label').getView().getSelectionModel().getSelection()[0].data.footer;
			Ext.getCmp('header').setValue(header);
			Ext.getCmp('footer').setValue(footer);			
		
	},


	onAddClick: function(){
//		 window.location = "http://localhost:8090/list";
		var myStore = Ext.data.StoreManager.lookup('headerfooter').getCount();
			if(myStore < 1){
				Ext.create('AppExtJS.viewmodel.view.LabelWindow',{}).show();
			}
			else {
				Ext.MessageBox.alert('Внимание', 'Подписей не может быть больше одной');
			}
		
	},
	
	onRemoveClick: function(btn){
			
		if(Ext.getCmp('grid-label').getView().getSelectionModel().getSelection()[0] != undefined){
			
			Ext.MessageBox.show({
            title:'Удалить подписи?',
            msg: 'Внимание! Подписи будут удалены',
            buttons: Ext.MessageBox.YESNOCANCEL,
            scope: this,
            fn: function(btn, text){

					if(btn == 'yes'){
						var select = this.getView().getSelectionModel().getSelection()[0].data.id;
						Ext.Ajax.request({
						url:'/label/delete',

                		method:'POST',
						params: {id : select},
				
						success: function(response, options){
						var myStore = Ext.data.StoreManager.lookup('headerfooter');
   		
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
					var myStore = Ext.data.StoreManager.lookup('headerfooter');
					myStore.reload()
		},
});