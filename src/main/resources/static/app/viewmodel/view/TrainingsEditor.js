Ext.define('AppExtJS.viewmodel.view.TrainingsEditor', {
    extend: 'Ext.window.Window',
    xtype: 'trainings-editor',
    id: 'trainingsEditor',
    controller: 'viewportTrainingsController',
    reference : 'trainings-editor',
    height: 400,
    width: 400,
    title: 'Добавление новой тренировки',
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
        allowBlank: true,
        labelWidth: 130
    },
    {
        xtype: 'textfield',
        name: 'startTime',
		id: 'startTime',
        fieldLabel: 'Время начала',
        allowBlank: false,
        labelWidth: 130
    },
    {
        xtype: 'numberfield',
        name: 'time',
		id: 'time',
        fieldLabel: 'Продолжительность',
        allowBlank: false,
        labelWidth: 130
    },
    {
        xtype: 'numberfield',
        name: 'maxValue',
		id: 'maxValue',
        fieldLabel: 'Максимальное количество',
        allowBlank: false,
        labelWidth: 130
    },
    {
        xtype: 'numberfield',
        name: 'price',
		id: 'price',
        fieldLabel: 'Стоимость',
        allowBlank: false,
        labelWidth: 130
    },
    {
        xtype: 'combobox',
        name: 'trainer',
		id: 'trainer',
        fieldLabel: 'Тренер',
        forceSelection: true,
        allowBlank: false,
        value: 'secondName',
        valueField:'id',
        displayField: 'secondName',
        queryMode:'remote',
        labelWidth: 130,
        store: {
        	proxy: {
                type: 'ajax',
                url: '/trainers',
                reader: {
                    type: 'json',
                    rootProperty: 'trainers'
                }
            }
        }
    },],

buttons: [{
        text: 'Принять',
        formBind: true,
        handler: 'trainingCreate',
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