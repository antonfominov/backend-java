Ext.define('AppExtJS.viewmodel.controller.sheduleController',
		{
			extend : 'Ext.app.ViewController',
			alias : 'controller.viewportSheduleController',
		
			onSheduleClick : function() {
				Ext.create('AppExtJS.viewmodel.view.SheduleEditor', {}).show();
			},

			onRefreshClick : function() {
				Ext.data.StoreManager.lookup('clubs').reload();
				Ext.getCmp('clubs-combo').clearValue();
			},
			
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
				var id = Ext.getCmp('shedule-combo').getValue();
				Ext.Ajax.request({
					url: '/shedule',
						method: 'GET',
						params: {id_club: id},
						
			        success: function(response, options){
			        	var data = Ext.decode(response.responseText);
						Ext.getCmp('shedule').setData(data);
						Ext.getCmp('shedule').setReadOnly(false);
						
			        },

			        failure: function(response, options){
			            Ext.MessageBox.alert("Ошибка: " + response.statusText);
			        }
			    })
			},
			
			onAddTraining : function(combo, nameIn, nameOut, grid, rowIndex, colIndex){
				var dayId = rowIndex.record.data.id;
				Ext.getCmp('sheduleEditor').setTestVar(dayId);
				Ext.getCmp('sheduleEditor').setReadOnly(false);
				Ext.create('AppExtJS.viewmodel.view.SheduleEditorAdd', {}).show();
			},
			
			onRemoveTraining : function(combo, nameIn, nameOut, grid, rowIndex, colIndex){
				var dayId = rowIndex.record.data.id;
				Ext.getCmp('sheduleEditor').setTestVar(dayId);
				Ext.getCmp('sheduleEditor').setReadOnly(true);
				Ext.create('AppExtJS.viewmodel.view.SheduleEditorAdd', {}).show();
			},
			
			trainingAdd : function(){
				if (Ext.getCmp('sheduleEditor').getReadOnly() == true){
					var dayId = Ext.getCmp('sheduleEditor').getTestVar();
					var trainingId = Ext.getCmp('shedule-combo-add').getValue();
					Ext.Ajax.request({
						url: '/shedule/clubTrainingList/delete',
						method: 'POST',
						params:{
							dayId : dayId,
							trainingId : trainingId
						},
						success: function(response, options){
							var id = Ext.getCmp('shedule-combo').getSelection().id;
							Ext.Ajax.request({
								url : '/shedule',
								method : 'GET',
								params: {id_club : id},
								
								success : function(response, options) {
									var data = Ext.decode(response.responseText);
									Ext.getStore('dayData').setData(data);
								}
							});
							Ext.getCmp('sheduleEditor').getController('sheduleController').onComboClick();
							Ext.getCmp('sheduleEditorAdd').destroy();
							Ext.MessageBox.alert('Уведомление', 'Тренировка удалена из расписания');
						},
						failure: function(response, options){
							Ext.MessageBox.alert("Ошибка: " + response.statusText);
						}
					})
				}
				else {
					var dayId = Ext.getCmp('sheduleEditor').getTestVar();
					var trainingId = Ext.getCmp('shedule-combo-add').getValue();
					Ext.Ajax.request({
							url: '/shedule/clubTrainingList/create',
							method: 'POST',
							params:{
								dayId : dayId,
								trainingId : trainingId
							},
						success: function(response, options){
							var id = Ext.getCmp('shedule-combo').getSelection().id;
								Ext.Ajax.request({
									url : '/shedule',
									method : 'GET',
									params: {id_club : id},
									
									success : function(response, options) {
										var data = Ext.decode(response.responseText);
										Ext.getStore('dayData').setData(data);
									}
								});
							Ext.getCmp('sheduleEditor').getController('sheduleController').onComboClick();
							Ext.getCmp('sheduleEditorAdd').destroy();
							Ext.MessageBox.alert('Уведомление', 'Тренировка добавлена в расписание');
			        	},
			        	failure: function(response, options){
			            	Ext.MessageBox.alert("Ошибка: " + response.statusText);
			        	}
			    	})
				}
			},
			
			onJoinClick: function(){
				Ext.create('AppExtJS.viewmodel.view.JoinEditor', {}).show();
			},
			
			joinAdd: function(){
				var idTraining = Ext.getCmp('join-combo').getValue();
				var idUser = Ext.util.Cookies.get("id");
				Ext.Ajax.request({
					url: '/shedule/join',
						method: 'POST',
						params: {
							idTraining: idTraining,
							idUser : idUser
						},
						
			        success: function(response, options){
			        	var data = Ext.decode(response.responseText);
						console.log(data);
			        },

			        failure: function(response, options){
			            Ext.MessageBox.alert("Ошибка: " + response.statusText);
			        }
			    });
			},
			onExitClick: function(){
				Ext.create('AppExtJS.viewmodel.view.ExitEditor', {}).show();
			},
			exitAdd: function(){
				var idTraining = Ext.getCmp('join-combo').getValue();
				Ext.Ajax.request({
					url: '/shedule/exit',
						method: 'POST',
						params: {
							idTraining: idTraining
						},
						
			        success: function(response, options){
			        	var data = Ext.decode(response.responseText);
						console.log(data);
			        },

			        failure: function(response, options){
			            Ext.MessageBox.alert("Ошибка: " + response.statusText);
			        }
			    });
			},
			
			
		});