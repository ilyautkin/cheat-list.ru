<?php

/**
 * The home manager controller for cheatList.
 *
 */
class cheatListHomeManagerController extends modExtraManagerController
{
    /** @var cheatList $cheatList */
    public $cheatList;


    /**
     *
     */
    public function initialize()
    {
        $this->cheatList = $this->modx->getService('cheatList', 'cheatList', MODX_CORE_PATH . 'components/cheatlist/model/');
        parent::initialize();
    }


    /**
     * @return array
     */
    public function getLanguageTopics()
    {
        return ['cheatlist:default'];
    }


    /**
     * @return bool
     */
    public function checkPermissions()
    {
        return true;
    }


    /**
     * @return null|string
     */
    public function getPageTitle()
    {
        return $this->modx->lexicon('cheatlist');
    }


    /**
     * @return void
     */
    public function loadCustomCssJs()
    {
        $this->addCss($this->cheatList->config['cssUrl'] . 'mgr/main.css');
        $this->addJavascript($this->cheatList->config['jsUrl'] . 'mgr/cheatlist.js');
        $this->addJavascript($this->cheatList->config['jsUrl'] . 'mgr/misc/utils.js');
        $this->addJavascript($this->cheatList->config['jsUrl'] . 'mgr/misc/combo.js');
        $this->addJavascript($this->cheatList->config['jsUrl'] . 'mgr/widgets/customers.grid.js');
        $this->addJavascript($this->cheatList->config['jsUrl'] . 'mgr/widgets/customers.windows.js');
        $this->addJavascript($this->cheatList->config['jsUrl'] . 'mgr/widgets/home.panel.js');
        $this->addJavascript($this->cheatList->config['jsUrl'] . 'mgr/sections/home.js');

        $this->addHtml('<script type="text/javascript">
        cheatList.config = ' . json_encode($this->cheatList->config) . ';
        cheatList.config.connector_url = "' . $this->cheatList->config['connectorUrl'] . '";
        Ext.onReady(function() {MODx.load({ xtype: "cheatlist-page-home"});});
        </script>');
    }


    /**
     * @return string
     */
    public function getTemplateFile()
    {
        $this->content .= '<div id="cheatlist-panel-home-div"></div>';

        return '';
    }
}