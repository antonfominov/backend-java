Ext.define('AppExtJS.viewmodel.store.Part', {
    extend: 'Ext.data.Store',
	model: 'AppExtJS.viewmodel.model.modelPart',
	
    alias: 'store.parts1',
	storeId: 'parts1',
	autoLoad: true,

	loading: true,

    proxy: {
        type: 'rest',

	headers: {
            'Content-Type': 'application/json'
        },

	api:{
		read:'/part',
        create: '/create',
//        update: 'index.php?r=...',
       destroy: '/delete',
	},
       reader: {
    		type: 'json',
   			 rootProperty: 'items',
			},
 //       url: '/part',
		writer:	{
			type:'json',
			allowSingle: false
		}
    }
});