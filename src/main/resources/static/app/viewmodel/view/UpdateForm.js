Ext.define('AppExtJS.viewmodel.view.UpdateForm', {
    extend: 'Ext.window.Window',
    xtype: 'basic-window3',



	reference: 'popupWindow',

    height: 200,
    width: 400,
    title: 'Редактирование главы',
    scrollable: true,
    bodyPadding: 10,
    constrain: true,
    closable: true,
	autoshow: true,
	id: 'update-form',
	layout: {
            type: 'vbox',
            align: 'stretch'
        },
fieldDefaults: {
            msgTarget: 'side',
            labelAlign: 'top',
            labelWidth: 100,
            labelStyle: 'font-weight:bold'
        },
	 items: [
{
        xtype: 'textfield',
        name: 'name',
		id: 'name',
        fieldLabel: 'Новое название главы',
        msgTarget: 'side',
        allowBlank: false,
    }],

buttons: [{
        text: 'Принять',
        formBind: true,
        handler: function() {
			var NAME = Ext.getCmp('name').getValue();
			var select = Ext.getCmp('grid-part').getView().getSelectionModel().getSelection()[0].data.id;
			console.log(select, NAME)
		if(NAME != ''){
		Ext.Ajax.request({
				
            url:'/updatePart',

                method:'PUT',
				params: {id: select, name : NAME},
				
				success: function(response, options){
	
        },

        failure: function(response, options){
            Ext.MessageBox.alert("Ошибка: " + response.statusText);
        }
			})
			var myStore1 = Ext.data.StoreManager.lookup('parts1');
				myStore1.reload();
			Ext.getCmp('update-form',{}).close();
		}
		else{
			Ext.MessageBox.alert('Внимание', 'Введите название главы');
		}
			
		//	var myStore1 = Ext.data.StoreManager.lookup('parts1');
			
//			setTimeout(myStore1.load(), 1000);
//			{timeout: 600000} ;
		//	myStore1.load();
//			myStore.load();
			}
},
{
        text: 'Очистить',
        handler: function() {
			Ext.getCmp('name').setValue('');
        }
    }],
});