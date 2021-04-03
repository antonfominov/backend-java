Ext.define('AppExtJS.viewmodel.view.Clients', {
	extend : 'Ext.grid.Panel',
	xtype : 'clients',
	id : 'clients',
	title : 'Клиенты',
	width : 1000,
	height : 500,
	hideMode : 'visibility',
	
	viewModel : {
		data: {
	        isEdit: true
	    }
	},
	config : {
		readOnly : true
	},
	publishes: ['readOnly'],
	reference : 'clients',

	controller : 'viewportClientsController',

	buttonAlign : 'center',
	reference : 'clients',
	listeners : {
		select : 'myItemClick',
	},

	style : 'margin: 0 10px 5px 0',

	columnLines : true,
	store : {
		type : 'clients'
	},
	
	plugins: [{
        ptype: 'rowediting',
        clicksToEdit: 2,
        saveBtnText : "Применить",
        cancelBtnText : "Отмена",
        listeners: {
        	beforeedit: { 
        	    fn: function(event,editor){
        	    var isEdit = Ext.getCmp('clients').getViewModel().data.isEdit;
        	    if(isEdit === false){
        	    	 return false;
        	     }
        	    } 
        	   },
        	edit: 'onItemUpdate'
        },
     
    },{
        ptype: 'rowexpander',
        columnWidth: 30,
        headerWidth: 30,
        expandOnDblClick: false,
        rowBodyTpl : new Ext.XTemplate(
            '<p><b>Фамилия:</b> {secondName}</p>',
            '<p><b>Имя:</b> {firstName}</p>',
        )
    }],

	columns : [ {
		text : "Номер",
		width : 100,
		sortable : true,
		dataIndex : 'id',
	}, {
		text : "Фамилия",
		width: 170,
		sortable : true,
		dataIndex : 'secondName',
		editor : {
			editor : 'textfield',
			allowBlank : false
		}
	}, {
		text : "Имя",
		width : 170,
		sortable : true,
		dataIndex : 'firstName',
		editor : {
			editor : 'textfield',
			allowBlank : false
		}
	}, {
		text : "Отчество",
		width : 170,
		sortable : true,
		dataIndex : 'lastName',
		editor : {
			editor : 'textfield',
			allowBlank : false
		}
	}, {
		xtype: 'datecolumn',
		text : "Дата рождения",
		width : 170,
		sortable : true,
		dataIndex : 'birthday',
		format: '0,0',
		editor : {
			editor : 'datefield',
			allowBlank : false,
			format: 'd/m/Y',
		}
	},
	  {
		text : "Номер телефона",
		//format: '0,0 руб',
		flex : 1,
		sortable : true,
		dataIndex : 'phone',
		editor : {
			xtype : 'textfield',
			allowBlank : false
		}
	}],
	
	/*plugins: [{
        ptype: 'rowexpander',
        rowBodyTpl : new Ext.XTemplate(
            '<p><b>Фамилия:</b> {secondName}</p>',
            '<p><b>Имя:</b> {firstName}</p>',
        )
    }],*/
	
	tbar : [ {
		text : 'Добавить клиента',
		handler : 'onAddClick',
		tooltip : 'Добавить нового',
		iconCls : 'x-fa fa-plus',
		bind : {
			hidden : '{readOnly}'
		}

	}, {
		text : 'Удалить',
		handler : 'onRemoveClick',
		tooltip : 'Удалить выбранного',
		iconCls : 'x-fa fa-minus',
		bind : {
			hidden : '{readOnly}',
			disabled : '{clients.readOnly}'
		}
	}, {
		handler : 'onRefreshClick',
		tooltip : 'Обновить',
		iconCls : 'x-fa fa-refresh',
	},
	/*{
        xtype: 'combobox',
        emptyText: 'Выберите тренера',
        value: 'secondName',
        valueField:'id',
        displayField: 'secondName',
        id: 'trainings-combo',
        queryMode:'remote',
        listeners : {
    		select : 'onComboClick',
    	},
        store: {
        	proxy: {
                type: 'ajax',
                url: '/trainers',
                reader: {
                    type: 'json',
                    rootProperty: 'trainers'
                }
            }
        }
    }*/],
});