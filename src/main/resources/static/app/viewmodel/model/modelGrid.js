Ext.define('AppExtJS.viewmodel.model.modelGrid', {
    extend: 'Ext.data.Model',
	requires: [
       'Ext.data.field.String',
		'Ext.data.proxy.Rest',
	],
    fields: [
       {name: 'id'},
        {name: 'name', },
//        {name: 'items', },
       	],
});

