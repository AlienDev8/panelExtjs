/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyDesktop.view.escritorio.Escritorio', {
    extend: 'Ext.container.Viewport',

    xtype: 'app-main',
    
    //controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [
    	{
    		region:"center",
    		layout:"fit",
    		xtype:"container"    		
    	},
    	{        
	        region: 'south',
	        xtype:"toolbar",	        
	        height: 40,
	        //style:"background:#000;",	        
	        items:[
		        {
		        	text:"Inicio",		        	
		        	icon: null,
                    glyph: 72,
                    scale: 'medium',
		        	menuAlign:"bl-tl",		        	
		        	menu:{
		        		defaults:{anchorSize:200},		        	
			        	items:[
			        		{
			        			text:"Modulo",
			        			icon: null,
			                    glyph: 75,
			                    scale: 'medium'
			        		},
			        		{
			        			text:"Modulo",
			        			icon: null,
			                    glyph: 72,
			                    scale: 'medium'
			        		},
			        		{
			        			text:"Modulo",
			        			icon: null,
			                    glyph: 80,
			                    scale: 'medium'
			        		}
		        		]
		        	}
		        },'-'
	        ]	
        }
    ]
});
