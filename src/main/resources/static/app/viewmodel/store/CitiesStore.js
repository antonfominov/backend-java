Ext.define('AppExtJS.viewmodel.store.CitiesStore', {
	extend : 'Ext.data.Store',
	model : 'AppExtJS.viewmodel.model.modelCities',

	alias : 'store.cities',
	storeId : 'cities',
	autoLoad : true,

	proxy : {
		type : 'ajax',
		headers: {
            'Content-Type': 'application/json'
        },
		api : {
			read : '/cities',
			create : '/cities/create',
			update : '/cities/update',
			destroy : '/cities/delete',
		},
		reader : {
			type : 'json',
			rootProperty : 'cities',
		},
		writer : {
			type : 'json',
			allowSingle : false
		}
	},
	sorters : [{
        property : 'id',
        direction : 'ASC'
    }],
});