<?php
if (file_exists(dirname(dirname(dirname(dirname(__FILE__)))) . '/config.core.php')) {
    /** @noinspection PhpIncludeInspection */
    require_once dirname(dirname(dirname(dirname(__FILE__)))) . '/config.core.php';
} else {
    require_once dirname(dirname(dirname(dirname(dirname(__FILE__))))) . '/config.core.php';
}
/** @noinspection PhpIncludeInspection */
require_once MODX_CORE_PATH . 'config/' . MODX_CONFIG_KEY . '.inc.php';
/** @noinspection PhpIncludeInspection */
require_once MODX_CONNECTORS_PATH . 'index.php';
/** @var cheatList $cheatList */
$cheatList = $modx->getService('cheatList', 'cheatList', MODX_CORE_PATH . 'components/cheatlist/model/');
$modx->lexicon->load('cheatlist:default');

// handle request
$corePath = $modx->getOption('cheatlist_core_path', null, $modx->getOption('core_path') . 'components/cheatlist/');
$path = $modx->getOption('processorsPath', $cheatList->config, $corePath . 'processors/');
$modx->getRequest();

/** @var modConnectorRequest $request */
$request = $modx->request;
$request->handleRequest([
    'processors_path' => $path,
    'location' => '',
]);