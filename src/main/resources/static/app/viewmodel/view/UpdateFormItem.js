Ext.define('AppExtJS.viewmodel.view.UpdateFormItem', {
    extend: 'Ext.window.Window',
    xtype: 'basic-window4',


	reference: 'popupWindow',

    height: 200,
    width: 400,
    title: 'Редактирование абзаца',
    scrollable: true,
    bodyPadding: 10,
    constrain: true,
    closable: true,
	autoshow: true,
	id: 'update-form2',
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
        fieldLabel: 'Новое название абзаца',
        msgTarget: 'side',
        allowBlank: false,
    }],

buttons: [{
        text: 'Принять',
        formBind: true,
        handler: function() {
			var NAME = Ext.getCmp('name').getValue();
			var select = Ext.getCmp('grid-items').getView().getSelectionModel().getSelection()[0].data.id;
			console.log(select, NAME)
		if(NAME != ''){
		Ext.Ajax.request({
				
            url:'/updateItem',

                method:'PUT',
				params: {id: select, name : NAME},
				
				success: function(response, options){
	
        },

        failure: function(response, options){
            Ext.MessageBox.alert("Ошибка: " + response.statusText);
        }
			})
			var myStore1 = Ext.data.StoreManager.lookup('items1');
				myStore1.reload();
			Ext.getCmp('update-form2',{}).close();
		}
		else{
			Ext.MessageBox.alert('Внимание', 'Введите название абзаца');
		}
			}
},
{
        text: 'Очистить',
        handler: function() {
			Ext.getCmp('name').setValue('');
        }
    }],
});