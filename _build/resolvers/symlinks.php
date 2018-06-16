<?php
/** @var xPDOTransport $transport */
/** @var array $options */
/** @var modX $modx */
if ($transport->xpdo) {
    $modx =& $transport->xpdo;

    $dev = MODX_BASE_PATH . 'Extras/cheatList/';
    /** @var xPDOCacheManager $cache */
    $cache = $modx->getCacheManager();
    if (file_exists($dev) && $cache) {
        if (!is_link($dev . 'assets/components/cheatlist')) {
            $cache->deleteTree(
                $dev . 'assets/components/cheatlist/',
                ['deleteTop' => true, 'skipDirs' => false, 'extensions' => []]
            );
            symlink(MODX_ASSETS_PATH . 'components/cheatlist/', $dev . 'assets/components/cheatlist');
        }
        if (!is_link($dev . 'core/components/cheatlist')) {
            $cache->deleteTree(
                $dev . 'core/components/cheatlist/',
                ['deleteTop' => true, 'skipDirs' => false, 'extensions' => []]
            );
            symlink(MODX_CORE_PATH . 'components/cheatlist/', $dev . 'core/components/cheatlist');
        }
    }
}

return true;