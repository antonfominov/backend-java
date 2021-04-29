Ext.define('AppExtJS.viewmodel.view.SheduleEditor', {
    extend: 'Ext.window.Window',
    xtype: 'shedule-editor',
    id: 'sheduleEditor',
    controller: 'viewportSheduleController',
    reference : 'shedule-editor',
    height: 400,
    width: 600,
    title: 'Редактирование расписания',
    scrollable: true,
    constrain: true,
    closable: true,
	autoshow: true,
	
    items: [{
        xtype: 'grid',
        border: false,
        
        plugins: [{
            ptype: 'rowexpander',
            columnWidth: 30,
            headerWidth: 30,
            expandOnDblClick: false,
            rowBodyTpl : new Ext.XTemplate(
            		'<tpl for=".">',
            			'<tpl for="trainings">',
            				'<p>{startTime} - {name}</p></br>',
            			'</tpl>',
                	'</tpl>',
            )
        }],
    	
    	
    	
        columns: [{
            header: 'Номер',
            dataIndex: 'id',
            flex: 1
        }, {
            header: 'Имя',
            dataIndex: 'name',
            flex: 1
        },{
        	xtype: 'actioncolumn',
        	flex: 1,
        	width: 50,
            items: [{
            	iconCls : 'x-fa fa-plus',
                tooltip: 'Добавить тренировку',
                handler: 'onAddTraining'
            },{
            	iconCls : 'x-fa fa-minus',
                tooltip: 'Удалить тренировку',
                //handler: 'onRemoveClick'
            }]
        }],
    store: Ext.create('Ext.data.Store', {
    	storeId: 'dayData',
    	data:[]
    }),
    }],
    
    
    
    listeners: {
      afterrender: function(component, eOpts){
    	var id = Ext.getCmp('shedule-combo').getSelection().id;
      	Ext.Ajax.request({
				url : '/shedule',
				method : 'GET',
				params: {id_club : id},
				
				success : function(response, options) {
					var data = Ext.decode(response.responseText);
					Ext.getStore('dayData').setData(data);
				}
			})
		}
   },

buttons: [{
        text: 'Принять',
        formBind: true,
        handler: 'trainerCreate',
},
{
        text: 'Отмена',
        handler: function(){
        	Ext.getCmp('sheduleEditor').destroy();
        }
    }],
});