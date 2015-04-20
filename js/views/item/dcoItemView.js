define([
    'backbone',
    'hbs!tmpl/item/dcoItemView-tmpl',
    'views/item/moduleBaseItemView'
    ],
    
    function(Backbone, Template, ModuleBaseItemView) {
        return ModuleBaseItemView.extend({
            
            className: 'dco',
            
            template: Template,
            
            onShow: function() {
                this.styleParent('eight');
                this.bindSwitches();
                this.bindButtons();
            }
            
        });
    });