Ext.define('AppExtJS.viewmodel.view.Window', {
    extend: 'Ext.window.Window',
    xtype: 'basic-window',



	reference: 'popupWindow',

    height: 300,
    width: 400,
    title: 'Добавление новой главы',
    scrollable: true,
    bodyPadding: 10,
 //   html: [{text:'name', dataIndex:'name'}],
    constrain: true,
    closable: true,
	autoshow: true,
	id: 'login-form',
	 items: [/*{
        xtype: 'textfield',
        name: 'id',
		id: 'id',
        fieldLabel: 'Номер главы',
        msgTarget: 'side',
        allowBlank: false
    }*/,
{
        xtype: 'textfield',
        name: 'name',
		id: 'name',
        fieldLabel: 'Название главы',
        msgTarget: 'side',
        allowBlank: false
    }],

buttons: [{
        text: 'Принять',
        formBind: true,
        handler: function() {
			var NAME = Ext.getCmp('name').getValue();
			console.log(NAME);
		if(NAME != ""){
		Ext.Ajax.request({
				
            url:'/create',

                method:'POST',
				params: {name : NAME},
				
				success: function(response, options){
				var myStore1 = Ext.data.StoreManager.lookup('parts1');
				myStore1.reload();
	
        },

        failure: function(response, options){
            Ext.MessageBox.alert("Ошибка: " + response.statusText);
        }
			})}
		else{
			Ext.MessageBox.alert('Внимание', 'Необходимо указать название новой главы');
		}
			
		//	var myStore1 = Ext.data.StoreManager.lookup('parts1');
			
//			setTimeout(myStore1.load(), 1000);
//			{timeout: 600000} ;
		//	myStore1.load();
//			myStore.load();
			}
},
{
        text: 'Очистить',
        handler: function() {
			Ext.getCmp('name').setValue('');
        }
    }],
});