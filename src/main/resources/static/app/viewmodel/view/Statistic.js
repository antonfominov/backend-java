Ext.define('AppExtJS.viewmodel.view.Statistic', {
	extend : 'Ext.panel.Panel',
	xtype : 'statistic',
	id : 'statistic',
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
	//reference : 'trainings',

	//controller : 'viewportTrainingsController',

	buttonAlign : 'center',
	reference : 'statistic',
	listeners : {
		select : 'myItemClick',
	},

	style : 'margin: 0 10px 5px 0',

	columnLines : true,
	store : {
		type : 'statistic'
	},
	
	/*items: [{
		xtype: 'displayfield',
		name: 'secondName',
		id: 'secondName',
		textTpl: [
            '{value}%'
        ]
    }, {
        //title: 'Inactive Tab',
        html: 'Статистика2'
    }, {
        //title: 'Disabled Tab',
        disabled: true
    }],*/
    
    tpl:new Ext.XTemplate(
            '<tpl for="0">',       // process the data.kids node
            '<h1>Добро пожаловать, {secondName} {firstName}</h1></br>',
            	'<tpl switch="role">',
            	'<tpl case="admin">',
                '<h2>Администратор</h2>',
                '<h3>Ожидаемое количество клиентов: 31</h3>',
                '<h3>Ожидаемый доход клубов: 3100 рублей</h3>',
                '<h3>Ожидаемые зарплаты сотрудников: 1200 рублей</h3>',
                '<tpl default>',
                '<h2>Пользователь</h2>',
                '<h3>Вы записаны:</h3>',
                '<ul><li>Силовая 12:00</li><li>HIIT 17:00</li></ul>',
                '</tpl>',
            '</tpl>',    
        ),
	
	listeners: {
        afterrender: function(component, eOpts){
        	Ext.Ajax.request({
				url : '/statistic',
				method : 'GET',
				
				success : function(response, options) {
					var data = Ext.decode(response.responseText);
					//Ext.getCmp('secondName').setValue(data.secondName);
					Ext.getCmp('statistic').setData(data);
				}
			})
		}
     }
	
});