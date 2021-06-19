Ext.define('AppExtJS.viewmodel.controller.loginController', {
    extend : 'Ext.app.ViewController',
    alias: 'controller.viewportLoginController',
    viewModel:{
    	type: 'globalViewModel'
    },
    init: function() {
        this.control({
            'loginview button': {
                signin: this.signinuser
            }
        });
    },
    signinuser : function(username, password) {
        // здесь якобы проверяем валидность полей
        if(username && password != ''){

            Ext.Ajax.request({
                url: '/login',
                params: {username : username, password: password},
                success: function(response, options){
                	var ob = Ext.decode(response.responseText);
                    if(ob != 'null' && ob < 3){
                        Ext.create('AppExtJS.viewmodel.Container', {
                                items: [
                                    {xtype: 'side-navigation-tabs'}
                                ]
                            }
                        );
                        if(ob == '1'){
                        Ext.getCmp('main-window').getViewModel().data.readOnly = true;
                        Ext.getCmp('users').setReadOnly(true);
                        Ext.getCmp('clients').setReadOnly(true);
                        
                        // Запрет редактирования записей если не хватает прав
                        Ext.getCmp('clubs').getViewModel().data.isEdit = false;
                        Ext.getCmp('cities').getViewModel().data.isEdit = false;
                        Ext.getCmp('trainers').getViewModel().data.isEdit = false;
                        Ext.getCmp('trainings').getViewModel().data.isEdit = false;
                        
                        Ext.getCmp('shedule').setReadOnly(true);
                        }
                    }
                    else{
                        Ext.MessageBox.alert("Ошибка", 'Не правильно введен логин и/или пароль');
                    };
                   // Ext.MessageBox.alert('Status', response.responseText);
                },
                failure: function(response, options){
                    Ext.MessageBox.alert("Ошибка: " + response.statusText);
                }
                });
        }
    }
});