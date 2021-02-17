Ext.define('AppExtJS.viewmodel.model.modelPart', {
    extend: 'Ext.data.Model',
    entityName: 'Глава',
    idProperty: 'part',
//    glyph: 'xf024@FontAwesome',
    fields: [{
        name: "part",
        convert: undefined
    }],
 columns: [
       {name: 'id'},
        {name: 'name'},
       	],
});