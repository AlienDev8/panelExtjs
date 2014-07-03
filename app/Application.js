/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('MyDesktop.Application', {
    //extend: 'Ext.app.Application',
    extend:"Ext.ux.desktop.App",    
    requires: [
        'Ext.ux.desktop.ShortcutModel',
        'Ext.window.MessageBox',
        'MyDesktop.BogusModule',
        'MyDesktop.Settings'
    ],       
    init:function(){      
        this.callParent();
    },
    getModules: function(){
        return [
            new MyDesktop.BogusModule()            
        ];
    },
    getDesktopConfig: function () {
        
        var me = this, ret = me.callParent();        

        return Ext.apply(ret, {
            //cls: 'ux-desktop-black',            
            contextMenuItems: [
                { text: 'Change Settings', handler: me.onSettings, scope: me }
            ],
            shortcuts: Ext.create('Ext.data.Store', {
                model: 'Ext.ux.desktop.ShortcutModel',                
                data: [                    
                    { name: 'Panel', iconCls: 'i-status', module: ''},                    
                    { name: 'Grid', iconCls: 'i-status', module: ''},                    
                    { name: 'Formulario', iconCls: 'i-status', module: ''},                    
                    { name: 'Tree', iconCls: 'i-status', module: 'bogus'},                    
                    { name: 'Modulo Bogus', iconCls: 'i-status', module: 'bogus'}                                        
                ]
            }),

            wallpaper: 'resources/images/wallpapers/Dark-Sencha.jpg',
            wallpaperStretch: true
        });
    },
     getStartConfig : function() {
        var me = this, ret = me.callParent();

        return Ext.apply(ret, {
            title: 'Menu',
            iconCls: 'i-menu',

            height: 300,
            toolConfig: {
                width: 100,                
                items: [
                    {
                        text:'Configuración',
                        iconCls:'i-status',
                        handler: me.onSettings,
                        scope: me
                    },
                    '-',
                    {
                        text:'Salir',
                        iconCls:'logout',                        
                        handler: me.onLogout,
                        scope: me
                    }
                ]
            }
        });
    },
     getTaskbarConfig: function () {
        var ret = this.callParent();

        return Ext.apply(ret, {
            startBtnIcon:'i-start',
            //startBtnText:'Inicio',
            quickStart: [                
                { name: 'Accordion Window', iconCls: 'i-shortcut', module: 'acc-win' },
                { name: 'Grid Window', iconCls: 'i-shortcut', handler: function(){alert("Hola");}}                
            ],
            trayItems: [
                { xtype: 'trayclock', flex: 1 }
            ]
        });
    },
    onLogout: function () {
        Ext.Msg.confirm('Logout', 'Are you sure you want to logout?');
    },

    onSettings: function () {
        var dlg = new MyDesktop.Settings({
            desktop: this.desktop
        });
        dlg.show();
    }
});
