<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit2b745cdb16a1a1b57a0c5a8cf4e54276
{
    public static $files = array (
        '7e9bd612cc444b3eed788ebbe46263a0' => __DIR__ . '/..' . '/laminas/laminas-zendframework-bridge/src/autoload.php',
        '07d7f1a47144818725fd8d91a907ac57' => __DIR__ . '/..' . '/laminas/laminas-diactoros/src/functions/create_uploaded_file.php',
        'da94ac5d3ca7d2dbab84ce561ce72bfd' => __DIR__ . '/..' . '/laminas/laminas-diactoros/src/functions/marshal_headers_from_sapi.php',
        '3d97c8dcdfba8cb85d3b34f116bb248b' => __DIR__ . '/..' . '/laminas/laminas-diactoros/src/functions/marshal_method_from_sapi.php',
        'e6f3bc6883e449ab367280b34158c05b' => __DIR__ . '/..' . '/laminas/laminas-diactoros/src/functions/marshal_protocol_version_from_sapi.php',
        'd59fbae42019aedf227094ac49a46f50' => __DIR__ . '/..' . '/laminas/laminas-diactoros/src/functions/marshal_uri_from_sapi.php',
        'de95e0ac670b27c84ef8c5ac41fc1b34' => __DIR__ . '/..' . '/laminas/laminas-diactoros/src/functions/normalize_server.php',
        'b6c2870932b0250c10334a86dcb33c7f' => __DIR__ . '/..' . '/laminas/laminas-diactoros/src/functions/normalize_uploaded_files.php',
        'd02cf21124526632320d6f20b1bbf905' => __DIR__ . '/..' . '/laminas/laminas-diactoros/src/functions/parse_cookie_header.php',
        'd919fc9d5ad52cfb7f322f7fe36458ab' => __DIR__ . '/..' . '/laminas/laminas-diactoros/src/functions/create_uploaded_file.legacy.php',
        'e397f74f8af3b1e56166a6e99f216ee7' => __DIR__ . '/..' . '/laminas/laminas-diactoros/src/functions/marshal_headers_from_sapi.legacy.php',
        'd154b49fab8e4da34fb553a2d644918c' => __DIR__ . '/..' . '/laminas/laminas-diactoros/src/functions/marshal_method_from_sapi.legacy.php',
        '9d3db23ca418094bcf0b641a0c9559ed' => __DIR__ . '/..' . '/laminas/laminas-diactoros/src/functions/marshal_protocol_version_from_sapi.legacy.php',
        'b0b88a3b89caae681462c58ff19a7059' => __DIR__ . '/..' . '/laminas/laminas-diactoros/src/functions/marshal_uri_from_sapi.legacy.php',
        'cc8e14526dc240491e17a838cb78508c' => __DIR__ . '/..' . '/laminas/laminas-diactoros/src/functions/normalize_server.legacy.php',
        '786bf90caabc9e09b6ad4cc5ca8f0e30' => __DIR__ . '/..' . '/laminas/laminas-diactoros/src/functions/normalize_uploaded_files.legacy.php',
        '751a5a3f463e4be759be31748b61737c' => __DIR__ . '/..' . '/laminas/laminas-diactoros/src/functions/parse_cookie_header.legacy.php',
        '253c157292f75eb38082b5acb06f3f01' => __DIR__ . '/..' . '/nikic/fast-route/src/functions.php',
    );

    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'Psr\\Http\\Server\\' => 16,
            'Psr\\Http\\Message\\' => 17,
            'Psr\\Container\\' => 14,
        ),
        'L' => 
        array (
            'League\\Route\\' => 13,
            'Laminas\\ZendFrameworkBridge\\' => 28,
            'Laminas\\HttpHandlerRunner\\' => 26,
            'Laminas\\Diactoros\\' => 18,
        ),
        'F' => 
        array (
            'FastRoute\\' => 10,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Psr\\Http\\Server\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/http-server-handler/src',
            1 => __DIR__ . '/..' . '/psr/http-server-middleware/src',
        ),
        'Psr\\Http\\Message\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/http-factory/src',
            1 => __DIR__ . '/..' . '/psr/http-message/src',
        ),
        'Psr\\Container\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/container/src',
        ),
        'League\\Route\\' => 
        array (
            0 => __DIR__ . '/..' . '/league/route/src',
        ),
        'Laminas\\ZendFrameworkBridge\\' => 
        array (
            0 => __DIR__ . '/..' . '/laminas/laminas-zendframework-bridge/src',
        ),
        'Laminas\\HttpHandlerRunner\\' => 
        array (
            0 => __DIR__ . '/..' . '/laminas/laminas-httphandlerrunner/src',
        ),
        'Laminas\\Diactoros\\' => 
        array (
            0 => __DIR__ . '/..' . '/laminas/laminas-diactoros/src',
        ),
        'FastRoute\\' => 
        array (
            0 => __DIR__ . '/..' . '/nikic/fast-route/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit2b745cdb16a1a1b57a0c5a8cf4e54276::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit2b745cdb16a1a1b57a0c5a8cf4e54276::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
