Ext.define('AppExtJS.viewmodel.store.TrainersStore', {
    extend: 'Ext.data.Store',
	model: 'AppExtJS.viewmodel.model.modelTrainers',
	
    alias: 'store.trainers',
	storeId: 'trainers',
	autoSync: true,
	autoLoad: true,
	loading: true,

    proxy: {
        type: 'ajax',

	headers: {
            'Content-Type': 'application/json'
        },

	api:{
		read:'/trainers',
        create: '/trainers/create',
        update: '/trainers/update',
        destroy: '/trainers/delete',
	},
       reader: {
    		type: 'json',
   			 rootProperty: 'trainers',
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