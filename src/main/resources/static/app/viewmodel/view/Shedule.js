Ext.define('AppExtJS.viewmodel.view.Shedule', {
	extend : 'Ext.panel.Panel',
	xtype : 'shedule',
	id : 'shedule',
	//title : 'Тренировки',
	width : 1000,
	height : 500,
	hideMode : 'visibility',
	
    border: false,
	
	viewModel : {
		data: {
	        isEdit: true
	    }
	},
	config : {
		readOnly : true
	},
	publishes: ['readOnly'],
	reference : 'shedule',

	controller : 'viewportSheduleController',

	buttonAlign : 'center',
	reference : 'statistic',
	listeners : {
		select : 'myItemClick',
	},

	style : 'margin: 0 10px 5px 0',

	columnLines : true,
	store : {
		//type : 'shedule'
	},
	
	items: [{
        xtype: 'combobox',
        emptyText: 'Выберите клуб',
        value: 'name',
        valueField:'id',
        displayField: 'name',
        id: 'shedule-combo',
        queryMode:'remote',
        listeners : {
    		select : 'onComboClick',
    	},
        store: {
        	proxy: {
                type: 'ajax',
                url: '/clubs',
                reader: {
                    type: 'json',
                    rootProperty: 'clubs'
                }
            }
        }
    }],
	
    /*tpl:new Ext.XTemplate(
    		'<table>',
            '<tpl for=".">',
		            '<tpl switch="name">',
		            	'<tpl case="Понедельник">',
		                	'<p>Понедельник</p></br>',
		                		'<tpl for="trainings">',
		                			'<p>{startTime} - {name}</p>',
		                		'</tpl>',
		                '<tpl case="Вторник">',
		                	'<p>Вторник</p></br>',
		                '<tpl default>',
		                	'<p>boy</p>',
		            '</tpl>',
            '</tpl>',    
        ),*/
    

//	'<tpl for="trainings">',
//		'<tr><p>{startTime} - {name}</p></tr>',
//	'</tpl>',
    
    tpl:new Ext.XTemplate(
    		'<table style="border: 1px solid black; border-collapse: collapse;">',
    		'<tr>',
            '<tpl for=".">',
            	'<th style="width: 500px; border: 1px solid black;">',
		    	'<p>{name}</p></br>',
		    	'</th>',
            '</tpl>',
            '</tr>',
            '<tr>',
	            '<tpl for=".">',
	            	'<td style="border: 1px solid black;">',
	            	'<tpl for="trainings">',
	    				'<p>{startTime} - {name}</p></br>',
	    				'<div id="box-holder">',
	                    	'<div id="box-{id}"></div>',
	                    '</div>',
	    			'</tpl>',
	    			'</td>',
	    		'</tpl>',
          
            '</tr>',
            '</table>',
        ),
	
//	listeners: {
//        afterrender: function(component, eOpts){
//        	Ext.Ajax.request({
//				url : '/shedule',
//				method : 'GET',
//				params: {id_club : 474},
//				
//				success : function(response, options) {
//					var data = Ext.decode(response.responseText);
//					//Ext.getCmp('secondName').setValue(data.secondName);
//					Ext.getCmp('shedule').setData(data);
//				}
//			})
//		}
//     }
        
//        beforeselect: function(records) {
//			
//
//			var data = Ext.getCmp('shedule').getData();
//			console.log(data);
//                var renderTo = this.element.select('#box-' + data.id).elements[0];
//
//                var button1 = new Ext.Button({
//                    action:             'doPresent',
//                    xtype:              'button',
//                    align:              'right',
//                    text:               'Present',
//                    ui:                 'present',
//                    renderTo:            renderTo,
//                    schoolpersonid:      data.id
//                });
//            
//        }
        
	
});