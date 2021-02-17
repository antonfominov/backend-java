Ext.define('AppExtJS.viewmodel.view.Trainers', {
	extend : 'Ext.grid.Panel',
	xtype : 'trainers',
	id : 'trainers',
	title : 'Тренеры',
	width : 900,
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
	reference : 'trainers',

//	controller : 'viewportTrainersController',

	buttonAlign : 'center',
	reference : 'trainers',
	listeners : {
		select : 'myItemClick',
	},

	style : 'margin: 0 10px 5px 0',

	columnLines : true,
	store : {
	//	type : 'trainers'
	},
	
	plugins: {
        ptype: 'rowediting',
        clicksToEdit: 2,
        saveBtnText : "Применить",
        cancelBtnText : "Отмена",
        listeners: {
        	beforeedit: { 
        	    fn: function(event,editor){
        	    var isEdit = Ext.getCmp('trainers').getViewModel().data.isEdit;
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
		width : 100,
		sortable : true,
		dataIndex : 'id',
	}, {
		text : "Фамилия",
		width : 170,
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
		text : "Дата рождения",
		width : 170,
		sortable : true,
		dataIndex : 'birthday',
		editor : {
			editor : 'textfield',
			allowBlank : false
		}
	},  {
		text : "Оплата в час",
		flex : 1,
		sortable : true,
		dataIndex : 'price',
		editor : {
			editor : 'textfield',
			allowBlank : false
		}
	},],
	tbar : [ {
		text : 'Добавить тренера',
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
			disabled : '{trainers.readOnly}'
		}
	}, {
		handler : 'onRefreshClick',
		tooltip : 'Обновить',
		iconCls : 'x-fa fa-refresh',
	},
	/*{
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
    }*/],
});