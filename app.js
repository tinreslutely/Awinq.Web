/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Awinq.Web.Application',

    name: 'Awinq.Web',

    requires: [
        'Awinq.Web.*'
    ],
    mainView: 'Awinq.Web.view.main.Main'
});
