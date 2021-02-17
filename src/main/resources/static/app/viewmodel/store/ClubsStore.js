Ext.define('AppExtJS.viewmodel.store.ClubsStore', {
    extend: 'Ext.data.Store',
	model: 'AppExtJS.viewmodel.model.modelClubs',
	
    alias: 'store.clubs',
	storeId: 'clubs',
	autoSync: true,
	autoLoad: true,
	loading: true,

    proxy: {
        type: 'ajax',

	headers: {
            'Content-Type': 'application/json'
        },

	api:{
		read:'/clubs',
        create: '/clubs/create',
        update: '/clubs/update',
        destroy: '/clubs/delete',
	},
       reader: {
    		type: 'json',
   			 rootProperty: 'clubs',
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