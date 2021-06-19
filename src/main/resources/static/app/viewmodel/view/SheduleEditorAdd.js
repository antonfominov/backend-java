Ext.define('AppExtJS.viewmodel.view.SheduleEditorAdd', {
    extend: 'Ext.window.Window',
    xtype: 'shedule-editor-add',
    id: 'sheduleEditorAdd',
    controller: 'viewportSheduleController',
    reference : 'shedule-editor-add',
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
        //value: 'name',
        valueField:'id',
        displayField: 'name',
        id: 'shedule-combo-add',
        queryMode:'remote',
        margin: 10,
        width: 200,
        listeners : {
    		afterrender: function(component, eOpts, record){
    			if(Ext.getCmp('sheduleEditor').getReadOnly() == true){
    				var dayId = Ext.getCmp('sheduleEditor').getTestVar();
        			Ext.Ajax.request({
    				url : '/shedule/clubTrainingList',
    				method : 'GET',
    				params: {
    					dayId : dayId,
    					readOnly: true
    					},
    				success : function(response, options) {
    					var data = Ext.decode(response.responseText);
    					Ext.getCmp('shedule-combo-add').bindStore(Ext.create('Ext.data.Store', {
                            fields: ['id', 'name'],
                            data: data
                        }))
    				}
        			})
    			}
    			else {
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
						Ext.getCmp('shedule-combo-add').bindStore(Ext.create('Ext.data.Store', {
							fields: ['id', 'name'],
							data: data
						}))
						}
    				})}
			
    		}
    	},
    }],
    
//    listeners: {
//      afterrender: function(component, eOpts){
//    	  var id = Ext.getCmp('shedule-combo').getValue();
//      		Ext.Ajax.request({
//				url : '/shedule/clubTrainingList',
//				method : 'GET',
//				params: {id_club : id},
//				success : function(response, options) {
//					var data = Ext.decode(response.responseText);
//					Ext.getStore('dayData').setData(data);
//					console.log(Ext.getStore('dayData').getData());
//				}
//			})
//		}
//   },

buttons: [{
        text: 'Принять',
        formBind: true,
        handler: 'trainingAdd',
},
{
        text: 'Отмена',
        handler: function(){
        	Ext.getCmp('sheduleEditorAdd').destroy();
        }
    }],
});