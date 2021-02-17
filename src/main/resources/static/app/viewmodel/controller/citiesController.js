Ext.define('AppExtJS.viewmodel.controller.citiesController',{
	extend : 'Ext.app.ViewController',
	alias : 'controller.viewportCitiesController',
	onAddClick : function() {
		Ext.create('AppExtJS.viewmodel.view.CitiesEditor', {}).show();
			},
	userCreate : function() {
		var name = Ext.getCmp('name').getValue();
		if (name != '') {
					Ext.Ajax.request({
						url : '/cities/create',
						method : 'POST',
						params : {
							name : name
						}
					})
				} else {
					Ext.MessageBox.alert('Внимание',
							'Заполните обязательные поля');
				}
				Ext.getCmp('citiesEditor').destroy();
				Ext.data.StoreManager.lookup('cities').reload();
			},

			onRemoveClick : function(btn) {

				if (Ext.getCmp('cities').getView().getSelectionModel()
						.getSelection()[0] != undefined) {
					Ext.MessageBox.show({
						title : 'Внимание',
						msg : 'Удалить город?',
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
									url : '/cities/delete',

									method : 'POST',
									params : {
										id : select
									},

									success : function(response, options) {
										var myStore = Ext.data.StoreManager
												.lookup('cities');
										var e = Ext.getCmp('cities').getView()
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
							'Выберите город для удаления');
				}
			},

			onRefreshClick : function() {
				Ext.data.StoreManager.lookup('cities').reload();
			},

			/*
			 * updateClick : function() { if (!win) { var win = new
			 * AppExtJS.viewmodel.view.UpdateFormItem();
			 * this.getView().add(win); win.show(); } var select =
			 * Ext.getCmp('grid-items').getView()
			 * .getSelectionModel().getSelection()[0].data.name;
			 * Ext.getCmp('name').setValue(select); },
			 */
			myItemClick : function() {
				Ext.getCmp('cities').setReadOnly(false);
			},
			onItemUpdate(editor,e){
				console.log(e.newValues);
				Ext.Ajax.request({
					url : '/cities/update',
					method : 'PUT',
					params:{
						id: e.newValues.id,
						name : e.newValues.name
					},
					callback: function(){
						Ext.data.StoreManager.lookup('cities').reload();
					},
						
						// onRefreshClick();
	   				 
				});
			}
		});