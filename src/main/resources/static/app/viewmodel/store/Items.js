Ext.define('AppExtJS.viewmodel.store.Items', {
    extend: 'Ext.data.Store',
	model: 'AppExtJS.viewmodel.model.modelItems',
	
    alias: 'store.items1',
	storeId: 'items1',
	autoLoad: true,
	
//	autoSync: true,

//	loading: true,

    proxy: {
        type: 'rest',
		api:{
			read:'/items',
        	create: '/createItems',
//        	update: 'index.php?r=...',
       		destroy: '/deleteItem',
	},
       reader: {
    		type: 'json',
  			 rootProperty: 'items',
			},
//       url: '/items',
		writer:	{
			type:'json',
			allowSingle: false
			}
    }
});