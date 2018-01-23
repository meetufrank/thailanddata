<?php
//判断当前链接
//$url='http://'.$_SERVER['SERVER_NAME'].$_SERVER["REQUEST_URI"];
//if($url=='http://'.$_SERVER['SERVER_NAME'].'/'){
//    header("Location:http://www.advance-medical.net");
//    exit;
//}
// WEB目录
define('WEB_PATH', __DIR__ . DIRECTORY_SEPARATOR);

// 跟目录
define('ROOT_PATH', dirname(WEB_PATH) . DIRECTORY_SEPARATOR);

// 应用目录
define('APP_PATH', ROOT_PATH . 'application' . DIRECTORY_SEPARATOR);
// 定义应用缓存目录
define('RUNTIME_PATH', __DIR__ . '/../runtime/');

// 框架引导文件
require ROOT_PATH . 'thinkphp' . DIRECTORY_SEPARATOR . 'start.php';