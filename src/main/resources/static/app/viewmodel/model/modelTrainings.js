Ext.define('AppExtJS.viewmodel.model.modelTrainings', {
    extend: 'Ext.data.Model',

    columns: [
       {name: 'id'},
        {name: 'name'},
        {name: 'startTime'},
        {name: 'parentName'},
        {name: 'time', type: 'int'},
        {name: 'value', type: 'int'},
        {name: 'maxValue', type: 'int'},
        {name: 'price'},
        {	name: 'progress',
        	type: 'float',
        }
       	],
});