Ext.define('AppExtJS.viewmodel.view.JoinEditor', {
    extend: 'Ext.window.Window',
    xtype: 'join-editor',
    id: 'joinEditor',
    controller: 'viewportSheduleController',
    reference : 'join-editor',
    height: 200,
    width: 250,
    title: 'Выберите тренировку',
    scrollable: false,
    constrain: true,
    closable: true,
	autoshow: true,
	
	items: [{
        xtype: 'combobox',
        emptyText: 'Выберите тренировку',
        valueField:'id',
        displayField: 'name',
        id: 'join-combo',
        queryMode:'remote',
        margin: 10,
        width: 200,
        listeners : {
    		afterrender: function(component, eOpts, record){
    				var id = Ext.getCmp('shedule-combo').getValue();
    				Ext.Ajax.request({
    					url : '/shedule/clubTrainingList',
    					method : 'GET',
    					params: {
    						id_club : id,
    						readOnly: false
    					},
    					success : function(response, options) {
						var data = Ext.decode(response.responseText);
						Ext.getCmp('join-combo').bindStore(Ext.create('Ext.data.Store', {
							fields: ['id', 'name'],
							data: data
						}))
						}
    				})
			
    		}
    	},
    }],

buttons: [{
        text: 'Принять',
        formBind: true,
        handler: 'joinAdd',
},
{
        text: 'Отмена',
        handler: function(){
        	Ext.getCmp('joinEditor').destroy();
        }
    }],
});