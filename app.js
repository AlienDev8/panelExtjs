/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'MyDesktop',

   //extend: 'MyDesktop.Application',
    
   //autoCreateViewport: 'MyDesktop.view.escritorio.Escritorio'
	
   ///desktop---------------------
   requires: [
        'MyDesktop.Application'
    ],
    init: function() {    	
        var app = new MyDesktop.Application();
    }
});
