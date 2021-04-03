Ext.define('AppExtJS.viewmodel.store.TrainingsStore', {
    extend: 'Ext.data.Store',
	model: 'AppExtJS.viewmodel.model.modelTrainings',
	
    alias: 'store.trainings',
	storeId: 'trainings',
	autoSync: true,
	autoLoad: true,
	loading: true,

    proxy: {
        type: 'ajax',

	headers: {
            'Content-Type': 'application/json'
        },

	api:{
		read:'/trainings',
        create: '/trainings/create',
        update: '/trainings/update',
        destroy: '/trainings/delete',
	},
       reader: {
    		type: 'json',
   			 rootProperty: 'trainings',
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