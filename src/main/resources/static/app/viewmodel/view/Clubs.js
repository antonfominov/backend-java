Ext.define('AppExtJS.viewmodel.view.Clubs', {
	extend : 'Ext.grid.Panel',
	xtype : 'clubs',
	id : 'clubs',
	title : 'Клубы',
	width : 800,
	height : 300,
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
	reference : 'clubs',

	controller : 'viewportClubsController',

	buttonAlign : 'center',
	reference : 'clubs',
	listeners : {
		select : 'myItemClick',
	},

	style : 'margin: 0 10px 5px 0',

	columnLines : true,
	store : {
		type : 'clubs'
	},
	
	plugins: {
        ptype: 'rowediting',
        clicksToEdit: 2,
        saveBtnText : "Применить",
        cancelBtnText : "Отмена",
        listeners: {
        	beforeedit: { 
        	    fn: function(event,editor){
        	    var isEdit = Ext.getCmp('clubs').getViewModel().data.isEdit;
        	    if(isEdit === false){
        	    	 return false;
        	     }
        	    } 
        	   },
        	edit: 'onItemUpdate'
        },
     
    },

	columns : [ {
		text : "Номер",
		flex : 1,
		sortable : true,
		dataIndex : 'id',
	}, {
		text : "Название",
		width : 170,
		sortable : true,
		dataIndex : 'name',
		editor : {
			editor : 'textfield',
			allowBlank : false
		}
	}, {
		text : "Адрес",
		width : 170,
		sortable : true,
		dataIndex : 'adress',
		editor : {
			editor : 'textfield',
			allowBlank : false
		}
	}, {
		text : "Время открытия",
		width : 170,
		sortable : true,
		dataIndex : 'openTime',
		editor : {
			editor : 'textfield',
			allowBlank : false
		}
	}, {
		text : "Время закрытия",
		width : 170,
		sortable : true,
		dataIndex : 'closeTime',
		editor : {
			editor : 'textfield',
			allowBlank : false
		}
	}, ],
	tbar : [ {
		text : 'Добавить клуб',
		handler : 'onAddClick',
		tooltip : 'Добавить новый',
		iconCls : 'x-fa fa-plus',
		bind : {
			hidden : '{readOnly}'
		}

	}, {
		text : 'Удалить',
		handler : 'onRemoveClick',
		tooltip : 'Удалить выбранный',
		iconCls : 'x-fa fa-minus',
		bind : {
			hidden : '{readOnly}',
			disabled : '{clubs.readOnly}'
		}
	}, {
		handler : 'onRefreshClick',
		tooltip : 'Обновить',
		iconCls : 'x-fa fa-refresh',
	},
	{
        xtype: 'combobox',
        emptyText: 'Выберите город',
        value: 'name',
        valueField:'id',
        displayField: 'name',
        id: 'clubs-combo',
        queryMode:'remote',
        listeners : {
    		select : 'onComboClick',
    	},
        store: {
        	proxy: {
                type: 'ajax',
                url: '/cities',
                reader: {
                    type: 'json',
                    rootProperty: 'cities'
                }
            }
        }
    }],
});