Ext.define('AppExtJS.viewmodel.view.ClubsEditor', {
    extend: 'Ext.window.Window',
    xtype: 'clubs-editor',
    id: 'clubsEditor',
    controller: 'viewportClubsController',
    reference : 'clubs-editor',
    height: 400,
    width: 400,
    title: 'Добавление нового клуба',
    scrollable: true,
    bodyPadding: 10,
    constrain: true,
    closable: true,
	autoshow: true,
	
	
	 items: [{
        xtype: 'textfield',
        name: 'name',
		id: 'name',
        fieldLabel: 'Название',
        allowBlank: true
    },
    {
        xtype: 'textfield',
        name: 'adress',
		id: 'adress',
        fieldLabel: 'Адрес',
        allowBlank: false
    },
    {
        xtype: 'textfield',
        name: 'openTime',
		id: 'openTime',
        fieldLabel: 'Время открытия',
        allowBlank: false
    },
    {
        xtype: 'textfield',
        name: 'closeTime',
		id: 'closeTime',
        fieldLabel: 'Время закрытия',
        allowBlank: false
    },
    {
        xtype: 'combobox',
        name: 'city',
		id: 'city',
        fieldLabel: 'Город',
        forceSelection: true,
        allowBlank: false,
        value: 'name',
        valueField:'id',
        displayField: 'name',
        queryMode:'remote',
        store: {
        	proxy: {
                type: 'ajax',
                url: '/cities',
                reader: {
                    type: 'json',
                    rootProperty: 'cities'
                }
            }
        }
    },],

buttons: [{
        text: 'Принять',
        formBind: true,
        handler: 'userCreate',
},
{
        text: 'Очистить',
        handler: function() {
			Ext.getCmp('nameItem').setValue('');
	
        }
    }],
});