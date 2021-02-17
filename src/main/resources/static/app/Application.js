Ext.application({
    name : 'AppExtJS',
    
    requires:[
        'Ext.container.Viewport',
        'AppExtJS.viewmodel.view.Login',
        'AppExtJS.viewmodel.Container',
        'AppExtJS.viewmodel.controller.loginController'
    ],
    
	
    enableAria: false,
    
  //  mainView : 'AppExtJS.viewmodel.Container',
	
    
    init : function (application) {
    	Ext.ariaWarn = Ext.emptyFn;
    },
    
    launch : function() {
        // Ext.Msg.alert('Fiddle', 'Welcome to Sencha Fiddle!');
    	//Ext.ariaWarn = Ext.emptyFn;
        Ext.create('Ext.container.Viewport',{
            items:[
                { xtype: 'loginview'}
            ]
        })
    }
});