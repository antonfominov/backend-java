Ext.define('AppExtJS.viewmodel.view.Login', {
    extend: 'Ext.form.Panel',
    alias : 'widget.loginview',
    title : 'Авторизация',
    controller: 'viewportLoginController',
    width : 550,
    bodyPadding: 10,
    style : 'margin: auto',
    frame : true,
    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Логин',
            name: 'username',
            itemId: 'username',
            allowBlank: false,
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Пароль',
            name: 'password',
            itemId: 'password',
            allowBlank: false,
            inputType: 'password',
        }
    ],
    buttons:[
        {
            text: 'Авторизация',
            listeners :{
                click: function(){
                    var username = this.up('form').down('#username').getValue();
                    var password = this.up('form').down('#password').getValue();
                    this.fireEvent('signin', username, password);
                }
            }
        }
    ]
});