Ext.define('AppExtJS.viewmodel.view.Trainings', {
	extend : 'Ext.grid.Panel',
	xtype : 'trainings',
	id : 'trainings',
	title : 'Тренировки',
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
	reference : 'trainings',
	requires: [
        'Ext.ProgressBarWidget'
    ],

	controller : 'viewportTrainingsController',

	buttonAlign : 'center',
	reference : 'trainings',
	listeners : {
		select : 'myItemClick',
	},

	style : 'margin: 0 10px 5px 0',

	columnLines : true,
	store : {
		type : 'trainings'
	},
	
	plugins: [{
        ptype: 'rowediting',
        clicksToEdit: 2,
        saveBtnText : "Применить",
        cancelBtnText : "Отмена",
        listeners: {
        	beforeedit: { 
        	    fn: function(event,editor){
        	    var isEdit = Ext.getCmp('trainings').getViewModel().data.isEdit;
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
            '<p><b>Ожидаемая заполненность:</b> 25%</p>',
            '<p><b>Максимальное кол-во:</b> {maxValue}</p>',
        )
    }],

	columns : [ {
		text : "Номер",
		width : 100,
		sortable : true,
		dataIndex : 'id',
	}, {
		text : "Название",
		width: 170,
		sortable : true,
		dataIndex : 'name',
		editor : {
			editor : 'textfield',
			allowBlank : false
		}
	}, {
		text : "Время начала",
		width : 170,
		sortable : true,
		dataIndex : 'startTime',
		editor : {
			editor : 'textfield',
			allowBlank : false
		}
	}, {
		text : "Тренер",
		width : 170,
		sortable : true,
		dataIndex : 'parentName',
		editor : {
			editor : 'textfield',
			allowBlank : false
		}
	}, {
		xtype: 'numbercolumn',
		text : "Продолжительность",
		width : 170,
		sortable : true,
		dataIndex : 'time',
		format: '0,0',
		editor : {
			editor : 'numberfield',
			allowBlank : false
		}
	},
	  {
		xtype: 'numbercolumn',
		text : "Стоимость",
		format: '0,0 руб',
		flex : 1,
		sortable : true,
		dataIndex : 'price',
		editor : {
			xtype : 'numberfield',
			allowBlank : false
		}
	},{
        text     : 'Заполненность',
        xtype    : 'widgetcolumn',
        width    : 120,
        dataIndex : 'progress',
        value: 0,
        widget: {
            bind: {
            	text: '{record.value}/{record.maxValue}',
            },
            xtype: 'progress',
            /*textTpl: [
                '{value:number("0.0")*100}%'
                ]*/
        }
        /*onWidgetAttach: function(col, widget, record) {
            var sum = col.up("grid").getStore().sum("price")
            widget.setValue(record.get("price")/sum)
        }*/
    }],
	
	/*plugins: [{
        ptype: 'rowexpander',
        rowBodyTpl : new Ext.XTemplate(
            '<p><b>Фамилия:</b> {secondName}</p>',
            '<p><b>Имя:</b> {firstName}</p>',
        )
    }],*/
	
	tbar : [ {
		text : 'Добавить тренировку',
		handler : 'onAddClick',
		tooltip : 'Добавить новую',
		iconCls : 'x-fa fa-plus',
		bind : {
			hidden : '{readOnly}'
		}

	}, {
		text : 'Удалить',
		handler : 'onRemoveClick',
		tooltip : 'Удалить выбранную',
		iconCls : 'x-fa fa-minus',
		bind : {
			hidden : '{readOnly}',
			disabled : '{trainings.readOnly}'
		}
	}, {
		handler : 'onRefreshClick',
		tooltip : 'Обновить',
		iconCls : 'x-fa fa-refresh',
	},
	{
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
    }],
});