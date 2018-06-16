cheatList.window.CreateCustomer = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'cheatlist-customer-window-create';
    }
    Ext.applyIf(config, {
        title: _('cheatlist_create'),
        width: 550,
        autoHeight: true,
        url: cheatList.config.connector_url,
        action: 'mgr/customer/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    cheatList.window.CreateCustomer.superclass.constructor.call(this, config);
};
Ext.extend(cheatList.window.CreateCustomer, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('cheatlist_customer_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textarea',
            fieldLabel: _('cheatlist_customer_description'),
            name: 'description',
            id: config.id + '-description',
            height: 150,
            anchor: '99%'
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('cheatlist_customer_active'),
            name: 'active',
            id: config.id + '-active',
            checked: true,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('cheatlist-customer-window-create', cheatList.window.CreateCustomer);


cheatList.window.UpdateCustomer = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'cheatlist-customer-window-update';
    }
    Ext.applyIf(config, {
        title: _('cheatlist_customer_update'),
        width: 550,
        autoHeight: true,
        url: cheatList.config.connector_url,
        action: 'mgr/customer/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    cheatList.window.UpdateCustomer.superclass.constructor.call(this, config);
};
Ext.extend(cheatList.window.UpdateCustomer, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('cheatlist_customer_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textarea',
            fieldLabel: _('cheatlist_customer_description'),
            name: 'description',
            id: config.id + '-description',
            anchor: '99%',
            height: 150,
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('cheatlist_customer_active'),
            name: 'active',
            id: config.id + '-active',
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('cheatlist-customer-window-update', cheatList.window.UpdateCustomer);