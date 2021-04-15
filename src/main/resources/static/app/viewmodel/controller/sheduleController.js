Ext.define('AppExtJS.viewmodel.controller.sheduleController',
		{
			extend : 'Ext.app.ViewController',
			alias : 'controller.viewportSheduleController',

			onAddClick : function() {
				Ext.create('AppExtJS.viewmodel.view.ClubsEditor', {}).show();
			},

			userCreate : function() {
				var name = Ext.getCmp('name').getValue();
				var adress = Ext.getCmp('adress').getValue();
				var openTime = Ext.getCmp('openTime').getValue();
				var closeTime = Ext.getCmp('closeTime').getValue();
				var city = Ext.getCmp('city').getValue();

				if (name && adress != '') {

					Ext.Ajax.request({
						url : '/clubs/create',
						method : 'POST',
						params : {
							name : name,
							adress : adress,
							openTime : openTime,
							closeTime : closeTime,
							city: city
						}
					})
				} else {
					Ext.MessageBox.alert('Внимание',
							'Заполните обязательные поля');
				}
				Ext.getCmp('clubsEditor').destroy();
				Ext.data.StoreManager.lookup('clubs').reload();
			},

			onRemoveClick : function(btn) {

				if (Ext.getCmp('clubs').getView().getSelectionModel()
						.getSelection()[0] != undefined) {
					Ext.MessageBox.show({
						title : 'Внимание',
						msg : 'Удалить выбранный клуб?',
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
									url : '/clubs/delete',
									method : 'POST',
									params : {
										id : select
									},

									success : function(response, options) {
										Ext.data.StoreManager.lookup('clubs').reload();
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
				Ext.data.StoreManager.lookup('clubs').reload();
				Ext.getCmp('clubs-combo').clearValue();
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
				Ext.getCmp('clubs').setReadOnly(false);
			},
			onItemUpdate(editor,e){
				Ext.Ajax.request({
					url : '/clubs/update',
					method : 'PUT',
					params:{
						id: e.newValues.id,
						name : e.newValues.name,
						openTime : e.newValues.openTime,
						closeTime : e.newValues.closeTime,
						adress : e.newValues.adress,
						//city : e.newValues.city
					},
					callback: function(){
						Ext.data.StoreManager.lookup('clubs').reload();
					},	   				 
				});
			},
			onComboClick : function(combo, nameIn, nameOut){
				var id = combo.getValue();
				Ext.Ajax.request({
					url: '/shedule',
						method: 'GET',
						params: {id_club: id},
						
			        success: function(response, options){
			        	var data = Ext.decode(response.responseText);
						Ext.getCmp('shedule').setData(data);
						
						
			        },

			        failure: function(response, options){
			            Ext.MessageBox.alert("Ошибка: " + response.statusText);
			        }
			    })
			}
		});