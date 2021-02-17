Ext.define('AppExtJS.viewmodel.model.modelHeaderFooter', {
    extend: 'Ext.data.Model',
	requires: [
       'Ext.data.field.String',
		'Ext.data.proxy.Rest',
	],
    fields: [
       {name: 'header'},
        {name: 'footer', },
       	],
});
