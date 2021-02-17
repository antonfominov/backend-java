Ext.define('AppExtJS.viewmodel.view.UsersEditor', {
    extend: 'Ext.window.Window',
    xtype: 'users-editor',
    id: 'usersEditor',
    controller: 'viewportUsersController',
    height: 400,
    width: 400,
    title: 'Добавление нового пользователя',
    scrollable: true,
    bodyPadding: 10,
    constrain: true,
    closable: true,
	autoshow: true,
	 items: [{
        xtype: 'textfield',
        name: 'secondName',
		id: 'secondName',
        fieldLabel: 'Фамилия',
        allowBlank: true
    },
    {
        xtype: 'textfield',
        name: 'firstName',
		id: 'firstName',
        fieldLabel: 'Имя',
        allowBlank: false
    },
    {
        xtype: 'textfield',
        name: 'lastName',
		id: 'lastName',
        fieldLabel: 'Отчество',
        allowBlank: false
    },
    {
        xtype: 'textfield',
        name: 'username',
		id: 'username',
        fieldLabel: 'Логин',
        allowBlank: false
    },
    {
        xtype: 'textfield',
        name: 'password',
		id: 'password',
        fieldLabel: 'Пароль',
        allowBlank: false
    },
    {
        xtype: 'combobox',
        name: 'role',
		id: 'role',
        fieldLabel: 'Права',
        forceSelection: true,
        allowBlank: false,
        value: 'user',
        store: [
            ['user', 'Пользователь'],
            ['admin', 'Администратор']
        ]
    },],

buttons: [{
        text: 'Принять',
        formBind: true,
        handler: 'userCreate',
},
{
        text: 'Очистить',
        handler: function() {
			Ext.getCmp('secondName').setValue('');
			Ext.getCmp('firstName').setValue('');
			Ext.getCmp('lastName').setValue('');
			Ext.getCmp('username').setValue('');
			Ext.getCmp('password').setValue('');
			Ext.getCmp('role').setValue('user');
			//Ext.getCmp('usersEditor').getFields().setValues('');
        	//Ext.getCmp('usersEditor').child('secondName').setValue('');
        }
    }],
});