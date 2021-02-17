Ext.define('AppExtJS.viewmodel.view.HeaderFooter', {
    extend: 'Ext.grid.Panel',
    xtype: 'row-numberer4',
	id: 'grid-label',
    title: 'Header и Footer',
    width: 450,
    height: 300,
	hideMode: 'visibility',
	requieres: ['AppExtJS.viewmodel.controller.labelController'],
	controller: 'labelController',
	buttonAlign: 'center',
	
	listeners: {
		rowdblclick: 'updateClick',
	},
	
	style: 'margin: 0 10px 5px 0',

    columnLines: true,
	store: {
		type: 'headerfooter'
	},

    columns: [{
        text: "Header",
        flex: 1,
        sortable: true,
        dataIndex: 'header',
		editor: {
            allowBlank: false
        },
    }, {
        text: "Footer",
        width:220,
        sortable: true,
        dataIndex: 'footer',
editor: {
            allowBlank: false
        },
    },],
	tbar: [{
        text: 'Добавить подписи',
        handler: 'onAddClick',
		tooltip: 'Добавить новую',
		iconCls: 'x-fa fa-plus'
		
    }, {
        text: 'Удалить подписи',
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