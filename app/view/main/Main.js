Ext.define('Awinq.Web.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'Awinq.Web.view.main.MainController',
        'Awinq.Web.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',
    layout: 'border',
    items: [
        {
            region: 'north',
            xtype: 'app-header'
        }, {
            region: 'center',
            xtype: 'panel'
        }, {
            xtype: 'navigation-toolbar',
            region: 'west',
            split: true,
            collapsible: true,
            collapsed: true,
            width: 200,
            minWidth: 100
        },
        {
            region: 'south',
            xtype:"panel",
            split: true,
            height:30
        }
    ]
});
