cheatList.panel.Home = function (config) {
    config = config || {};
    Ext.apply(config, {
        baseCls: 'modx-formpanel',
        layout: 'anchor',
        /*
         stateful: true,
         stateId: 'cheatlist-panel-home',
         stateEvents: ['tabchange'],
         getState:function() {return {activeTab:this.items.indexOf(this.getActiveTab())};},
         */
        hideMode: 'offsets',
        items: [{
            html: '<h2>' + _('cheatlist') + '</h2>',
            cls: '',
            style: {margin: '15px 0'}
        }, {
            xtype: 'modx-tabs',
            defaults: {border: false, autoHeight: true},
            border: true,
            hideMode: 'offsets',
            items: [{
                title: _('cheatlist_customers'),
                layout: 'anchor',
                items: [{
                    html: _('cheatlist_intro_msg'),
                    cls: 'panel-desc',
                }, {
                    xtype: 'cheatlist-grid-customers',
                    cls: 'main-wrapper',
                }]
            }]
        }]
    });
    cheatList.panel.Home.superclass.constructor.call(this, config);
};
Ext.extend(cheatList.panel.Home, MODx.Panel);
Ext.reg('cheatlist-panel-home', cheatList.panel.Home);
