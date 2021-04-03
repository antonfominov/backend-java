Ext.define('AppExtJS.viewmodel.view.TrainersEditor', {
    extend: 'Ext.window.Window',
    xtype: 'trainers-editor',
    id: 'trainersEditor',
    controller: 'viewportTrainersController',
    reference : 'trainers-editor',
    height: 400,
    width: 400,
    title: 'Добавление нового тренера',
    scrollable: true,
    bodyPadding: 10,
    constrain: true,
    closable: true,
	autoshow: true,
	
	
	 items: [{
        xtype: 'textfield',
        name: 'secondName',
		id: 'secondName',
        fieldLabel: 'Фамилия',
        allowBlank: true
    },
    {
        xtype: 'textfield',
        name: 'firstName',
		id: 'firstName',
        fieldLabel: 'Имя',
        allowBlank: false
    },
    {
        xtype: 'textfield',
        name: 'lastName',
		id: 'lastName',
        fieldLabel: 'Отчество',
        allowBlank: false
    },
    {
        xtype: 'numberfield',
        name: 'price',
		id: 'price',
        fieldLabel: 'Оплата в час',
        allowBlank: false
    },
    {
        xtype: 'combobox',
        name: 'club',
		id: 'club',
        fieldLabel: 'Клуб',
        forceSelection: true,
        allowBlank: false,
        value: 'name',
        valueField:'id',
        displayField: 'name',
        queryMode:'remote',
        store: {
        	proxy: {
                type: 'ajax',
                url: '/clubs',
                reader: {
                    type: 'json',
                    rootProperty: 'clubs'
                }
            }
        }
    },],

buttons: [{
        text: 'Принять',
        formBind: true,
        handler: 'trainerCreate',
},
{
        text: 'Очистить',
        handler: function() {
			Ext.getCmp('name').setValue('');
			Ext.getCmp('adress').setValue('');
			Ext.getCmp('openTime').setValue('');
			Ext.getCmp('closeTime').setValue('');
			Ext.getCmp('city').setValue('');
        }
    }],
});