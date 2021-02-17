Ext.define('AppExtJS.viewmodel.controller.editController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.viewportEditController',
	requires: [ 'AppExtJS.viewmodel.store.Users' ],

    index: 1000,
    
    onMyClick: function () {
		
		Ext.Ajax.request({
        url: '/users',
        success: function(response, options){
            Ext.MessageBox.alert('Status', response.responseText);
        },
        failure: function(response, options){
            Ext.MessageBox.alert("Ошибка: " + response.statusText);
        }
    });
    },
    
    
});