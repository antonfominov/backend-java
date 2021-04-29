Ext.define('AppExtJS.viewmodel.store.SheduleStore', {
    extend: 'Ext.data.Store',
//	model: 'AppExtJS.viewmodel.model.modelShedule',
	
    alias: 'store.shedule',
	storeId: 'shedule',
	autoSync: true,
	autoLoad: true,
	loading: true,

    proxy: {
        type: 'ajax',

	headers: {
            'Content-Type': 'application/json'
        },

	api:{
		read:'/shedule',
        create: '/clubs/create',
        update: '/clubs/update',
        destroy: '/clubs/delete',
	},
       reader: {
    		type: 'json',
   			 rootProperty: 'shedule',
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