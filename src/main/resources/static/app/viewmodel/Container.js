Ext.define('AppExtJS.viewmodel.Container', {
	extend : 'Ext.container.Viewport',
	requires : [ 
		'Ext.tab.Panel', 
		'AppExtJS.viewmodel.view.MainWindow',
		'AppExtJS.viewmodel.view.Window',
		'AppExtJS.viewmodel.view.Grid',
		'AppExtJS.viewmodel.view.Items',
		'AppExtJS.viewmodel.view.Cities',
		'AppExtJS.viewmodel.view.Clubs',
		'AppExtJS.viewmodel.view.Trainers',
		'AppExtJS.viewmodel.view.Users',
		
		'AppExtJS.viewmodel.view.UpdateForm',
		'AppExtJS.viewmodel.view.UpdateFormItem',
		'AppExtJS.viewmodel.view.HeaderFooter',
		'AppExtJS.viewmodel.view.UpdateFormLabel',
		'AppExtJS.viewmodel.model.globalViewModel',
		
		
	
	],
	
	stateful : true,

	
	items : [ 
	{xtype: 'side-navigation-tabs'}
	],
	
	
		
	applyState : function(state) {
		// this.getController().applyState(state);

	},

	getState : function() {
		// return this.getController().getState();
	}

});

