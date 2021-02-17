Ext.define('AppExtJS.viewmodel.view.Grid', {
    extend: 'Ext.grid.Panel',
    xtype: 'row-numberer',
	id: 'grid-part',
    title: 'Главы',
    width: 450,
    height: 300,
	hideMode: 'visibility',
	requieres: ['AppExtJS.viewmodel.controller.itemController',
	'Ext.grid.plugin.RowEditing',],
	controller: 'viewportItemController',
	buttonAlign: 'center',
	
	reference: 'asGrid',
	
	listeners: {
		select: 'myItemClick',
		rowdblclick: 'updateClick',
	},
	
	style: 'margin: 0 10px 5px 0',

    columnLines: true,
	store: {
		type: 'parts1'
	},

    columns: [{
        text: "ID главы",
        flex: 1,
        sortable: true,
        dataIndex: 'id',
		editor: {
            allowBlank: false
        },
    }, {
        text: "Название",
        width:120,
        sortable: true,
        dataIndex: 'name',
editor: {
            allowBlank: false
        },
    },],
	tbar: [{
        text: 'Добавить главу',
        handler: 'onAddClick',
		tooltip: 'Добавить новую',
		iconCls: 'x-fa fa-plus'
		
    }, {
        text: 'Удалить главу',
   	    handler: 'onRemoveClick',
		tooltip: 'Удалить выбранную',
		iconCls: 'x-fa fa-minus',
    },
{
   	    handler: 'onRefrechClick',
		tooltip: 'Обновить',
		iconCls: 'x-fa fa-refresh',
    }],
});