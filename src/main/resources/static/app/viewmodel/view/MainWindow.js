Ext.define('AppExtJS.viewmodel.view.MainWindow', {
	extend : 'Ext.tab.Panel',
	xtype : 'side-navigation-tabs',

	requires : [ 'Ext.layout.container.Border',
			'AppExtJS.viewmodel.store.Part',
			'AppExtJS.viewmodel.store.Items',
			'AppExtJS.viewmodel.store.HeaderFooter',
			'AppExtJS.viewmodel.store.UsersStore',
			'AppExtJS.viewmodel.store.CitiesStore',
			'AppExtJS.viewmodel.store.ClubsStore',
			'AppExtJS.viewmodel.store.TrainersStore',
			'AppExtJS.viewmodel.store.TrainingsStore',
			'AppExtJS.viewmodel.store.ClientsStore',
			'AppExtJS.viewmodel.store.StatisticStore',
			
			'AppExtJS.viewmodel.controller.itemController',
			'AppExtJS.viewmodel.controller.addController',
			'AppExtJS.viewmodel.controller.labelController',
			'AppExtJS.viewmodel.controller.usersController',
			'AppExtJS.viewmodel.controller.citiesController',
			'AppExtJS.viewmodel.controller.clubsController',
			'AppExtJS.viewmodel.controller.trainersController',
			'AppExtJS.viewmodel.controller.trainingsController',
			'AppExtJS.viewmodel.controller.clientsController',
			'AppExtJS.viewmodel.view.Window', ],
			
			viewModel: {
		        data: {
		            readOnly: false
		        }
		    },
	id: 'main-window',

	height : 900,
	width : 1500,

	tabPosition : 'left',
	tabRotation : 0,
	tabBar : {
		border : false
	},

	defaults : {
		textAlign : 'left',
		bodyPadding : 15
	},

	items : [ {
		title : 'Главная',
		iconCls : 'x-fa fa-home',
		layout : {
			type : 'hbox',
		},
		items : [ {
			xtype : 'row-numberer'
		}, {
			xtype : 'row-numberer-2'
		}, ],
	}, {
		title : 'Общие',
		iconCls : 'x-fa fa-list-alt',
		items : [ {
			xtype : 'row-numberer4'
		} ]
	}, {
		title : 'Статистика',
		iconCls : 'x-fa fa-list-alt',
		items : [ {
			xtype : 'statistic'
		} ]
	}, {
		title : 'Города',
		iconCls : 'x-fa fa-globe',
		items : [ {
			xtype : 'cities'
		} ]
	},{
		title : 'Клубы',
		iconCls : 'x-fa fa-building-o',
		items : [ {
			xtype : 'clubs'
		}]
	},{
		title : 'Тренеры',
		iconCls : 'x-fa fa-male',
		items : [ {
			xtype : 'trainers'
		}]
	},{
		title : 'Тренировки',
		iconCls : 'x-fa fa-futbol-o',
		items : [ {
			xtype : 'trainings'
		}]
	},{
		title : 'Клиенты',
		iconCls : 'x-fa fa-futbol-o',
		items : [ {
			xtype : 'clients'
		}]
	},{
		title : 'Пользователи',
		iconCls : 'x-fa fa-users',
		items : [ {
			xtype : 'users'
		}],
		hidden: true,
		tabConfig: {
			bind: {
				hidden : '{readOnly}'
			}
		},
		bind: {
			//disabled: '{readOnly}'
		}
	}, ]
});