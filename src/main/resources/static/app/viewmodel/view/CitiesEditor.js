Ext.define('AppExtJS.viewmodel.view.CitiesEditor', {
	extend : 'Ext.window.Window',
	xtype : 'cities-editor',
	id : 'citiesEditor',
	controller : 'viewportCitiesController',
	height : 400,
	width : 400,
	title : 'Добавление нового города',
	scrollable : true,
	bodyPadding : 10,
	constrain : true,
	closable : true,
	autoshow : true,
	items : [ {
		xtype : 'textfield',
		name : 'name',
		id : 'name',
		fieldLabel : 'Имя',
		allowBlank : true
	}, ],
	buttons : [ {
		text : 'Принять',
		formBind : true,
		handler : 'userCreate',
	}, {
		text : 'Очистить',
		handler : function() {
			Ext.getCmp('nameItem').setValue('');

		}
	} ],
});