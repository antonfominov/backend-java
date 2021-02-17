Ext.define('AppExtJS.viewmodel.view.UpdateFormLabel', {
    extend: 'Ext.window.Window',
    xtype: 'basic-window6',



	reference: 'lableWindow',

    height:	300,
    width: 400,
    title: 'Редактирование подписи',
    scrollable: true,
    bodyPadding: 10,
    constrain: true,
    closable: true,
	autoshow: true,
	id: 'update-form-label',
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
        xtype: 'textarea',
        name: 'header',
		id: 'header',
        fieldLabel: 'Новый header',
        msgTarget: 'side',
        allowBlank: false,
    },
{
        xtype: 'textarea',
        name: 'footer',
		id: 'footer',
        fieldLabel: 'Новый footer',
        msgTarget: 'side',
        allowBlank: false,
    }],

buttons: [{
        text: 'Принять',
        formBind: true,
        handler: function() {
			var HEADER = Ext.getCmp('header').getValue();
			var FOOTER = Ext.getCmp('footer').getValue();
			var ID = Ext.getCmp('grid-label').getView().getSelectionModel().getSelection()[0].data.id;
		if(HEADER || FOOTER  != '' ){
		Ext.Ajax.request({
				
            url:'/label/update',

                method:'PUT',
				params: {id: ID, header : HEADER, footer: FOOTER},
				
				success: function(response, options){
	
        },

        failure: function(response, options){
            Ext.MessageBox.alert("Ошибка: " + response.statusText);
        }
			})
			var myStore = Ext.data.StoreManager.lookup('headerfooter');
				myStore.reload();
			Ext.getCmp('update-form-label',{}).close();
		}
		else{
			Ext.MessageBox.alert('Внимание', 'Введите header или footer');
		}
			
		//	var myStore1 = Ext.data.StoreManager.lookup('parts1');
			}
},
{
        text: 'Очистить',
        handler: function() {
			Ext.getCmp('header').setValue('');
			Ext.getCmp('footer').setValue('');
        }
    }],
});