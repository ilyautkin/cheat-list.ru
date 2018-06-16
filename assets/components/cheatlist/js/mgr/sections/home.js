cheatList.page.Home = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        components: [{
            xtype: 'cheatlist-panel-home',
            renderTo: 'cheatlist-panel-home-div'
        }]
    });
    cheatList.page.Home.superclass.constructor.call(this, config);
};
Ext.extend(cheatList.page.Home, MODx.Component);
Ext.reg('cheatlist-page-home', cheatList.page.Home);