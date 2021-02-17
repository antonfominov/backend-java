Ext.define('AppExtJS.viewmodel.view.Items', {
    extend: 'Ext.grid.Panel',
    xtype: 'row-numberer-2',
	requieres: ['AppExtJS.viewmodel.controller.addController',
	'Ext.grid.plugin.RowEditing',],
	controller: 'viewportAddController',
	id: 'grid-items',
    title: 'Абзацы',
    width: 450,
    height: 300,
	hideMode: 'visibility',
	autoScroll : true,
	
	reference: 'itemGrid',
	
	listeners: {
		rowdblclick: 'updateClick',
	},
	

    columnLines: true,
	store: {
		type: 'items1'
	},

    columns: [{
        text: "ID абзаца",
        flex: 1,
        sortable: true,
        dataIndex: 'id'
    }, {
        text: "Текст",
        width:120,
        sortable: true,
        dataIndex: 'name'
    },],
	tbar: [{
        text: 'Добавить абзац',
        handler: 'onAddClick',
		iconCls: 'x-fa fa-plus-circle'
    }, {
        text: 'Удалить абзац',
   	    handler: 'onRemoveClick',
		iconCls: 'x-fa fa-minus-circle'
    }],
});