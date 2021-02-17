Ext.define('AppExtJS.viewmodel.view.Cities', {
	extend : 'Ext.grid.Panel',
	xtype : 'cities',
	id : 'cities',
	title : 'Города',
	width : 450,
	height : 300,
	hideMode : 'visibility',

	controller : 'viewportCitiesController',

	buttonAlign : 'center',
	reference : 'cities',
	listeners : {
		select : 'myItemClick',
	},

	style : 'margin: 0 10px 5px 0',

	columnLines : true,
	store : {
		type : 'cities'
	},
	plugins: {
        ptype: 'rowediting',
        clicksToEdit: 2,
        saveBtnText : "Применить",
        cancelBtnText : "Отмена",
        listeners: {
        	beforeedit: { 
        	    fn: function(event,editor){
        	    var isEdit = Ext.getCmp('cities').getViewModel().data.isEdit;
        	    if(isEdit === false){
        	    	 return false;
        	     }
        	    } 
        	   },
        	edit: 'onItemUpdate'
        },
     
    },
    viewModel : {
		data: {
	        isEdit: true
	    }
	},
	config : {
		readOnly : true
	},
	publishes: ['readOnly'],
	reference : 'cities',

	columns : [ {
		text : "Номер",
		flex : 1,
		sortable : true,
		dataIndex : 'id'
	}, {
		text : "Имя",
		width : 170,
		sortable : true,
		dataIndex : 'name',
		editor : {
			xtype: 'textfield',
			allowBlank : false
		},
	}, ],
	tbar : [ {
		text : 'Добавить город',
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
			disabled: '{cities.readOnly}'
		}
	}, {
		handler : 'onRefreshClick',
		tooltip : 'Обновить',
		iconCls : 'x-fa fa-refresh',
	} ],
});