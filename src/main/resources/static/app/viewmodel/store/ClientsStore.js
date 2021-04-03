Ext.define('AppExtJS.viewmodel.store.ClientsStore', {
    extend: 'Ext.data.Store',
	model: 'AppExtJS.viewmodel.model.modelClients',
	
    alias: 'store.clients',
	storeId: 'clients',
	autoSync: true,
	autoLoad: true,
	loading: true,

    proxy: {
        type: 'ajax',

	headers: {
            'Content-Type': 'application/json'
        },

	api:{
		read:'/clients',
        create: '/clients/create',
        update: '/clients/update',
        destroy: '/clients/delete',
	},
       reader: {
    		type: 'json',
   			 rootProperty: 'clients',
			},
		writer:	{
			type:'json',
		//	writeAllFields: false,
			allowSingle: false
		}
    },
    sorters : [{
        property : 'id',
        direction : 'ASC'
    }]
});