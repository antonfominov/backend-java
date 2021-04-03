Ext.define('AppExtJS.viewmodel.controller.trainingsController',
		{
			extend : 'Ext.app.ViewController',
			alias : 'controller.viewportTrainingsController',

			onAddClick : function() {
				Ext.create('AppExtJS.viewmodel.view.TrainingsEditor', {}).show();
			},

			trainingCreate : function() {
				var name = Ext.getCmp('name').getValue();
				var startTime = Ext.getCmp('startTime').getValue();
				var time = Ext.getCmp('time').getValue();
				var maxValue = Ext.getCmp('maxValue').getValue();
				var price = Ext.getCmp('price').getValue();
				var trainer = Ext.getCmp('trainer').getValue();

				if (name && startTime != '') {

					Ext.Ajax.request({
						url : '/trainings/create',
						method : 'POST',
						params : {
							name : name,
							startTime : startTime,
							time : time,
							maxValue : maxValue,
							price : price,
							trainer: trainer
						}
					})
				} else {
					Ext.MessageBox.alert('Внимание',
							'Заполните обязательные поля');
				}
				Ext.getCmp('trainingsEditor').destroy();
				Ext.data.StoreManager.lookup('trainings').reload();
			},

			onRemoveClick : function(btn) {
				if (Ext.getCmp('trainings').getView().getSelectionModel()
						.getSelection()[0] != undefined) {
					Ext.MessageBox.show({
						title : 'Внимание',
						msg : 'Удалить выбранную тренировку?',
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
									url : '/trainings/delete',
									method : 'POST',
									params : {
										id : select
									},

									success : function(response, options) {
										Ext.data.StoreManager.lookup('trainings').reload();
									},
								})
							}
						},
						animateTarget : btn,
						icon : Ext.MessageBox.QUESTION,
					});

				} else {
					Ext.MessageBox.alert('Внимание',
							'Выберите тренировку');
				}
			},

			onRefreshClick : function() {
				Ext.data.StoreManager.lookup('trainings').reload();
				Ext.getCmp('trainings-combo').clearValue();
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
				Ext.getCmp('trainings').setReadOnly(false);
			},
			onItemUpdate(editor,e){
				Ext.Ajax.request({
					url : '/trainings/update',
					method : 'PUT',
					params:{
						id: e.newValues.id,
						name : e.newValues.name,
						startTime : e.newValues.startTime,
						time : e.newValues.time,
						maxValue : e.newValues.maxValue,
						price : e.newValues.price,
						//city : e.newValues.city
					},
					callback: function(){
						Ext.data.StoreManager.lookup('trainings').reload();
					},	   				 
				});
			},
			onComboClick : function(combo, nameIn, nameOut){
				var id = combo.getValue();
				Ext.Ajax.request({
					url: '/trainers/trainings',
						method: 'POST',
						params: {id: id},
						
			        success: function(response, options){
				
					var myStore = Ext.data.StoreManager.lookup('trainings');
					var data = Ext.decode(response.responseText);
					myStore.setData(data);
			        },

			        failure: function(response, options){
			            Ext.MessageBox.alert("Ошибка: " + response.statusText);
			        }
			    })
			}
		});