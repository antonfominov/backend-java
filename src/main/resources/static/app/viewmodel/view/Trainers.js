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

	controller : 'viewportTrainersController',

	buttonAlign : 'center',
	reference : 'trainers',
	listeners : {
		select : 'myItemClick',
	},

	style : 'margin: 0 10px 5px 0',

	columnLines : true,
	store : {
		type : 'trainers'
	},
	
	plugins: [{
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
     
    },{
        ptype: 'rowexpander',
        columnWidth: 30,
        headerWidth: 30,
        expandOnDblClick: false,
        rowBodyTpl : new Ext.XTemplate(
            '<p><b>Расходы:</b> 1300 рублей</p>',
            '<p><b>Ожидаемые тренировки:</b> 15</p>',
        )
    }],

	columns : [{
        xtype: 'rownumberer'
    }, {
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
	},
	  {
		xtype: 'numbercolumn',
		text : "Оплата в час",
		format: '0,0 руб',
		flex : 1,
		sortable : true,
		dataIndex : 'price',
		editor : {
			xtype : 'numberfield',
			allowBlank : false
		}
	},],
	
	/*plugins: [{
        ptype: 'rowexpander',
        rowBodyTpl : new Ext.XTemplate(
            '<p><b>Фамилия:</b> {secondName}</p>',
            '<p><b>Имя:</b> {firstName}</p>',
        )
    }],*/
	
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
	{
        xtype: 'combobox',
        emptyText: 'Выберите клуб',
        value: 'name',
        valueField:'id',
        displayField: 'name',
        id: 'trainers-combo',
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
});