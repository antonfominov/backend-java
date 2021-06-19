Ext.define('AppExtJS.viewmodel.view.ExitEditor', {
    extend: 'Ext.window.Window',
    xtype: 'exit-editor',
    id: 'exitEditor',
    controller: 'viewportSheduleController',
    reference : 'exit-editor',
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
        id: 'exit-combo',
        queryMode:'remote',
        margin: 10,
        width: 200,
        listeners : {
    		afterrender: function(component, eOpts, record){
    				var id = Ext.getCmp('shedule-combo').getValue();
    				var idUser = Ext.util.Cookies.get("id");
    				Ext.Ajax.request({
    					url : '/shedule/clientTrainingList',
    					method : 'GET',
    					params: {
    						id_club : id,
    						idUser : idUser,
    						readOnly: false,
    					},
    					success : function(response, options) {
						var data = Ext.decode(response.responseText);
						Ext.getCmp('exit-combo').bindStore(Ext.create('Ext.data.Store', {
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
        handler: 'exitAdd',
},
{
        text: 'Отмена',
        handler: function(){
        	Ext.getCmp('exitEditor').destroy();
        }
    }],
});