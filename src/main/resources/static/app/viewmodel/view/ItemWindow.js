Ext.define('AppExtJS.viewmodel.view.ItemWindow', {
    extend: 'Ext.window.Window',
    xtype: 'basic-window2',

    height: 300,
    width: 400,
    title: 'Добавление нового абзаца',
    scrollable: true,
    bodyPadding: 10,
    constrain: true,
    closable: true,
	autoshow: true,
	 items: [{
        xtype: 'textfield',
        name: 'nameItem',
		id: 'nameItem',
        fieldLabel: 'Название абзаца',
        msgTarget: 'side',
        allowBlank: false
    },],

buttons: [{
        text: 'Принять',
        formBind: true, 
        handler: function() {

			var id = Ext.getCmp('grid-part').getView().getSelectionModel().getSelection()[0].data.id;
			var NAME = Ext.getCmp('nameItem').getValue();
			if(Ext.getCmp('grid-part').getView().getSelectionModel().getSelection()[0] != undefined){
				var select = Ext.getCmp('grid-part').getView().getSelectionModel().getSelection()[0].data.id;
				
			}
			else {
				console.log("data = undefined")
			}

		if(NAME != ''){
		Ext.Ajax.request({
				
            url:'/createItem',

                method:'POST',
				params: {name : NAME, partid: select},
	
			callback: function(){
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
			}
			})}
			else{
				Ext.MessageBox.alert('Внимание', 'Введите название абзаца');
			}
			
}			
},
{
        text: 'Очистить',
        handler: function() {
  
			Ext.getCmp('nameItem').setValue('');
	
        }
    }],
});