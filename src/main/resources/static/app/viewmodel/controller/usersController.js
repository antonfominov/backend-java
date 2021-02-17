Ext.define('AppExtJS.viewmodel.controller.usersController',
		{
			extend : 'Ext.app.ViewController',
			alias : 'controller.viewportUsersController',

			onAddClick : function() {
				Ext.create('AppExtJS.viewmodel.view.UsersEditor', {}).show();
			},

			userCreate : function() {
				var secondName = Ext.getCmp('secondName').getValue();
				var firstName = Ext.getCmp('firstName').getValue();
				var lastName = Ext.getCmp('lastName').getValue();
				var username = Ext.getCmp('username').getValue();
				var password = Ext.getCmp('password').getValue();
				var role = Ext.getCmp('role').getValue();

				if (secondName && username && password && role != '') {

					Ext.Ajax.request({
						url : '/users/create',
						method : 'POST',
						params : {
							firstName : firstName,
							secondName : secondName,
							lastName : lastName,
							username : username,
							password : password,
							role : role
						}
					})
				} else {
					Ext.MessageBox.alert('Внимание',
							'Заполните обязательные поля');
				}
				Ext.getCmp('usersEditor').destroy();
				Ext.data.StoreManager.lookup('users').reload();
			},

			onRemoveClick : function(btn) {

				if (Ext.getCmp('users').getView().getSelectionModel()
						.getSelection()[0] != undefined) {
					Ext.MessageBox.show({
						title : 'Внимание',
						msg : 'Удалить пользователя?',
						buttons : Ext.MessageBox.YESNO,
						buttonText : {
							yes : 'Да',
							no : 'Нет'
						},
						scope : this,

						fn : function(btn, text) {
							if (btn == 'yes') {
								var select = this.getView().getSelectionModel()
										.getSelection()[0].data.id;
								Ext.Ajax.request({
									url : '/users/delete',

									method : 'POST',
									params : {
										id : select
									},

									success : function(response, options) {
										var myStore = Ext.data.StoreManager
												.lookup('users');
										var e = Ext.getCmp('users').getView()
												.getSelectionModel()
												.getSelection()[0];
										myStore.remove(e);

									},

								})
							}
						},
						animateTarget : btn,
						icon : Ext.MessageBox.QUESTION,
					});

				} else {
					Ext.MessageBox.alert('Внимание',
							'Выберите абзац для удаления');
				}
			},

			onRefreshClick : function() {
				Ext.data.StoreManager.lookup('users').reload();
			},

			/*updateClick : function() {
				if (!win) {
					var win = new AppExtJS.viewmodel.view.UpdateFormItem();
					this.getView().add(win);
					win.show();
				}
				var select = Ext.getCmp('grid-items').getView()
						.getSelectionModel().getSelection()[0].data.name;
				Ext.getCmp('name').setValue(select);
			},*/
			myItemClick : function() {
				Ext.getCmp('users').setReadOnly(false);
			},
			onItemUpdate(editor,e){
				console.log(e.newValues);
				Ext.Ajax.request({
					url : '/users/update',
					method : 'PUT',
					params:{
						id: e.newValues.id,
						firstName : e.newValues.firstName,
						secondName : e.newValues.secondName,
						lastName : e.newValues.lastName,
						username : e.newValues.username,
						password : e.newValues.password,
						role : e.newValues.role
					},
					callback: function(){
						Ext.data.StoreManager.lookup('users').reload();
					},	   				 
				});
			}
		});