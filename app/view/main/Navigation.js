Ext.define("Awinq.Web.view.main.Navigation",{
    extend:"Ext.toolbar.Breadcrumb",
    xtype:"navigation-toolbar",
    reference: 'navigation-toolbar',
    baseCls: Ext.baseCSSPrefix + 'toolbar',
    showIcons: false,
    items: [{
        xtype: 'tool',
        type: 'down',
        margin: '3 3 3 3',
        tooltip: 'Switch to Tree View \u2325N'
    }]
});