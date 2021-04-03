Ext.define('AppExtJS.viewmodel.controller.trainersController',
		{
			extend : 'Ext.app.ViewController',
			alias : 'controller.viewportTrainersController',

			onAddClick : function() {
				Ext.create('AppExtJS.viewmodel.view.TrainersEditor', {}).show();
			},

			trainerCreate : function() {
				var secondName = Ext.getCmp('secondName').getValue();
				var firstName = Ext.getCmp('firstName').getValue();
				var lastName = Ext.getCmp('lastName').getValue();
				var price = Ext.getCmp('price').getValue();
				var club = Ext.getCmp('club').getValue();

				if (secondName && firstName != '') {

					Ext.Ajax.request({
						url : '/trainers/create',
						method : 'POST',
						params : {
							secondName : secondName,
							firstName : firstName,
							lastName : lastName,
							price : price,
							club: club
						}
					})
				} else {
					Ext.MessageBox.alert('Внимание',
							'Заполните обязательные поля');
				}
				Ext.getCmp('trainersEditor').destroy();
				Ext.data.StoreManager.lookup('trainers').reload();
			},

			onRemoveClick : function(btn) {
				if (Ext.getCmp('trainers').getView().getSelectionModel()
						.getSelection()[0] != undefined) {
					Ext.MessageBox.show({
						title : 'Внимание',
						msg : 'Удалить выбранного тренера?',
						buttons : Ext.MessageBox.YESNO,
						buttonText : {
							yes : 'Да',
							no : 'Нет'
						},
						scope : this,

						fn : function(btn, text) {
							if (btn == 'yes') {
								var select = this.getView().getSelectionModel().getSelection()[0].data.id;
								Ext.Ajax.request({
									url : '/trainers/delete',
									method : 'POST',
									params : {
										id : select
									},

									success : function(response, options) {
										Ext.data.StoreManager.lookup('trainers').reload();
									},
								})
							}
						},
						animateTarget : btn,
						icon : Ext.MessageBox.QUESTION,
					});

				} else {
					Ext.MessageBox.alert('Внимание',
							'Выберите клуб для удаления');
				}
			},

			onRefreshClick : function() {
				Ext.data.StoreManager.lookup('trainers').reload();
				Ext.getCmp('trainers-combo').clearValue();
			},
			updateClick(){
			//	Ext.create('AppExtJS.viewmodel.view.ClubsEditor', {}).show();
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
				Ext.getCmp('trainers').setReadOnly(false);
			},
			onItemUpdate(editor,e){
				Ext.Ajax.request({
					url : '/trainers/update',
					method : 'PUT',
					params:{
						id: e.newValues.id,
						secondName : e.newValues.secondName,
						firstName : e.newValues.firstName,
						lastName : e.newValues.lastName,
						price : e.newValues.price,
						//city : e.newValues.city
					},
					callback: function(){
						Ext.data.StoreManager.lookup('trainers').reload();
					},	   				 
				});
			},
			onComboClick : function(combo, nameIn, nameOut){
				var id = combo.getValue();
				Ext.Ajax.request({
					url: '/clubs/trainers',
						method: 'POST',
						params: {id: id},
						
			        success: function(response, options){
				
					var myStore = Ext.data.StoreManager.lookup('trainers');
					var data = Ext.decode(response.responseText);
					myStore.setData(data);
			        },

			        failure: function(response, options){
			            Ext.MessageBox.alert("Ошибка: " + response.statusText);
			        }
			    })
			}
		});