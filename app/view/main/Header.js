Ext.define('Awinq.Web.view.main.MainHeader', {
    extend: 'Ext.Container',
    xtype: 'app-header',
    height: 68,
    layout:"hbox",
    items:[
        {
            xtype:"component",
            cls: [ 'ext', 'ext-sencha' ]
        },
        {
           xtype:"component",
           html:"<span>测试</span>"
        }

    ]
});
