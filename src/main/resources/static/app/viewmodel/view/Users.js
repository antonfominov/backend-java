Ext.define('AppExtJS.viewmodel.view.Users', {
	extend : 'Ext.grid.Panel',
	xtype : 'users',
	controller : 'viewportUsersController',
	id : 'users',
	title : 'Пользователи',
	width : 800,
	height : 500,
	hideMode : 'visibility',
	buttonAlign : 'center',
	
	plugins: {
        ptype: 'rowediting',
        clicksToEdit: 2,
        saveBtnText : "Применить",
        cancelBtnText : "Отмена",
        listeners: {
        	edit: 'onItemUpdate'
        }
    },

    viewModel: {
        
    },
    config: {
        readOnly: true
    },
    publishes: ['readOnly'],
	reference : 'users',

	listeners : {
		select : 'myItemClick',
	},

	style : 'margin: 0 10px 5px 0',

	columnLines : true,
	store : {
		type : 'users'
	},

	columns : [ {
		text : "Номер",
		flex : 1,
		sortable : true,
		dataIndex : 'id',
	}, {
		text : "Фамилия",
		width : 120,
		sortable : true,
		dataIndex : 'secondName',
		editor : {
			xtype: 'textfield',
			allowBlank : false
		}
	}, {
		text : "Имя",
		width : 120,
		sortable : true,
		dataIndex : 'firstName',
		editor : {
			xtype: 'textfield',
			allowBlank : false
		}
	}, {
		text : "Отчество",
		width : 120,
		sortable : true,
		dataIndex : 'lastName',
		editor : {
			xtype: 'textfield',
			allowBlank : false
		}
	}, {
		text : "Логин",
		width : 120,
		sortable : true,
		dataIndex : 'username',
		editor : {
			xtype: 'textfield',
			allowBlank : false
		}
	}, {
		text : "Пароль",
		width : 120,
		sortable : true,
		dataIndex : 'password',
		editor : {
			xtype: 'textfield',
			allowBlank : false
		}
	}, {
		text : "Права",
		width : 120,
		sortable : true,
		dataIndex : 'role',
		editor : {
			xtype: 'combobox',
			allowBlank : false,
			store: [
	            ['user', 'Пользователь'],
	            ['admin', 'Администратор']
	        ]
		},
	}, ],

	tbar : [ {
		text : 'Добавить пользователя',
		handler : 'onAddClick',
		tooltip : 'Добавить нового',
		iconCls : 'x-fa fa-plus',

	}, {
		text : 'Удалить',
		handler : 'onRemoveClick',
		tooltip : 'Удалить выбранную',
		iconCls : 'x-fa fa-minus',
		bind: {
			disabled: '{users.readOnly}'
		}
	}, {
		handler : 'onRefreshClick',
		tooltip : 'Обновить',
		iconCls : 'x-fa fa-refresh',
	} ],
});