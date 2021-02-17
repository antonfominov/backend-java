Ext.define('AppExtJS.viewmodel.store.HeaderFooter', {
    extend: 'Ext.data.Store',
	model: 'AppExtJS.viewmodel.model.modelHeaderFooter',
	
    alias: 'store.headerfooter',
	storeId: 'headerfooter',
	autoLoad: true,

	loading: true,

    proxy: {
        type: 'rest',

	headers: {
            'Content-Type': 'application/json'
        },

	api:{
		read:'/label',
        create: '/label/create',
        update: 'label/update',
       destroy: '/label/delete',
	},
       reader: {
    		type: 'json',
   			 rootProperty: 'items',
			},
		writer:	{
			type:'json',
			allowSingle: false
		}
    }
});