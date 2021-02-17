Ext.define('AppExtJS.viewmodel.store.UsersStore', {
    extend: 'Ext.data.Store',
	model: 'AppExtJS.viewmodel.model.modelUsers',
	
    alias: 'store.users',
	storeId: 'users',
	autoSync: true,
	autoLoad: true,
	loading: true,

    proxy: {
        type: 'ajax',

	headers: {
            'Content-Type': 'application/json'
        },

	api:{
		read:'/users',
        create: '/users/create',
        update: '/users/update',
        destroy: '/users/delete',
	},
       reader: {
    		type: 'json',
   			 rootProperty: 'users',
			},
		writer:	{
			type:'json',
			writeAllFields: false,
			allowSingle: false
		}
    },
    sorters : [{
        property : 'id',
        direction : 'ASC'
    }]
});