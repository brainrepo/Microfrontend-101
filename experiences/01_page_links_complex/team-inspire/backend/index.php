<?php declare(strict_types=1);

include './vendor/autoload.php';

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

$request = \Laminas\Diactoros\ServerRequestFactory::fromGlobals(
    $_SERVER, $_GET, $_POST, $_COOKIE, $_FILES
);

function cReadFile($filename) {
    $file = fopen($filename, "r");
    $data = fread($file, filesize($filename));
    fclose($file);
    
    return $data;
}

$router = new League\Route\Router;

$router->map('GET', '/', function (ServerRequestInterface $request, array $args) : ResponseInterface {
    $response = new Laminas\Diactoros\Response;
    return $response->withStatus(404, "endpoint not allowed");
});

$router->map('GET', '/{id}', function (ServerRequestInterface $request, array $args) : ResponseInterface {
    $data = json_decode(cReadFile('./database.json'));
    $response = new Laminas\Diactoros\Response;

    $elements = [
        $data[rand(0, count($data))],
        $data[rand(0, count($data))],
        $data[rand(0, count($data))],
        $data[rand(0, count($data))],
    ];

    $response->getBody()->write(json_encode($elements));
    $response->withHeader('Content-type', 'application/json');

    return $response;
});

$response = $router->dispatch($request);

// send the response to the browser
(new \Laminas\HttpHandlerRunner\Emitter\SapiEmitter)->emit($response);


