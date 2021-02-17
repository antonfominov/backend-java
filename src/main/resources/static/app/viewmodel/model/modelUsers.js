Ext.define('AppExtJS.viewmodel.model.modelUsers', {
    extend: 'Ext.data.Model',

    columns: [
       {name: 'id'},
        {name: 'firstName'},
        {name: 'secondName'},
        {name: 'lastName'},
        {name: 'username'},
        {name: 'password'},
        {name: 'role'},
       	],
});