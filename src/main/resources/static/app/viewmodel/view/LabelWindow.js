Ext.define('AppExtJS.viewmodel.view.LabelWindow', {
    extend: 'Ext.window.Window',
    xtype: 'basic-window6',
	id: 'label-window',
    height: 300,
    width: 400,
    title: 'Добавление новых подписей',
    scrollable: true,
    bodyPadding: 10,
    constrain: true,
    closable: true,
	autoshow: true,
	 items: [{
        xtype: 'textarea',
        name: 'header',
		id: 'header',
        fieldLabel: 'Header',
        msgTarget: 'side',
        allowBlank: false
    },
{
        xtype: 'textarea',
        name: 'footer',
		id: 'footer',
        fieldLabel: 'Footer',
        msgTarget: 'side',
        allowBlank: false
    },],

buttons: [{
        text: 'Принять',
        formBind: true, 
        handler: function() {
			var HEADER = Ext.getCmp('header').getValue();
			var FOOTER = Ext.getCmp('footer').getValue();
			var myStore = Ext.data.StoreManager.lookup('headerfooter').getCount();
			
		if(HEADER || FOOTER  != '' ){	
		Ext.Ajax.request({
				
            url:'/label/create',

                method:'POST',
				params: {header : HEADER, footer: FOOTER}
			})
			var myStore = Ext.data.StoreManager.lookup('headerfooter');

			myStore.reload()
			Ext.getCmp('label-window',{}).close();
			}
			else{
				Ext.MessageBox.alert('Внимание', 'Введите header или footer');
			}
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