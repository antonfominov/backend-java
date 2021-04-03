Ext.define('AppExtJS.viewmodel.store.StatisticStore', {
    extend: 'Ext.data.Store',
	model: 'AppExtJS.viewmodel.model.modelStatistic',
	
    alias: 'store.statistic',
	storeId: 'statistic',
	autoSync: true,
	autoLoad: true,
	loading: true,

    proxy: {
        type: 'ajax',

	headers: {
            'Content-Type': 'application/json'
        },

	api:{
		read:'/statistic',
        //create: '/trainers/create',
        //update: '/trainers/update',
        //destroy: '/trainers/delete',
	},
       reader: {
    		type: 'json',
   			 rootProperty: 'statistic',
			},
		writer:	{
			type:'json',
		//	writeAllFields: false,
			allowSingle: false
		}
    }
});