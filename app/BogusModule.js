/*!
* Ext JS Library
* Copyright(c) 2006-2014 Sencha Inc.
* licensing@sencha.com
* http://www.sencha.com/license
*/

var windowIndex = 0;

Ext.define('MyDesktop.BogusModule', {
    extend: 'Ext.ux.desktop.Module',
    id:'bogus',

    init : function(){
    	console.log("modulo");
        this.launcher = {
            text: 'Window '+(++windowIndex),
            iconCls:'i-status',
            handler : this.createWindow,
            scope: this,
            windowId:windowIndex
        }
    },

    createWindow : function(){
    	console.log("create window");
    	var index = Math.round(Math.random()*10);
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('bogus'+index);
        if(!win){
            win = desktop.createWindow({
                id: 'bogus'+index,
                title:"Window",
                width:640,
                height:480,
                html : '<p>Something useful would be in here.</p>',
                iconCls: 'bogus',
                animCollapse:false,
                constrainHeader:true
            });
        }
        win.show();
        return win;
    }
});