var cheatList = function (config) {
    config = config || {};
    cheatList.superclass.constructor.call(this, config);
};
Ext.extend(cheatList, Ext.Component, {
    page: {}, window: {}, grid: {}, tree: {}, panel: {}, combo: {}, config: {}, view: {}, utils: {}
});
Ext.reg('cheatlist', cheatList);

cheatList = new cheatList();