<?php
namespace app\api;

use yii\filters\auth\HttpBearerAuth;

class ApiModule extends \yii\base\Module
{
    public function behaviors()
    {
        $behaviors = parent::behaviors();
        $behaviors=array_merge($behaviors,
        [
            'corsFilter' => [
                'class' => \yii\filters\Cors::className(),
                'cors' => [
                    // restrict access to
                    'Origin' => ['http://localhost:4200'],
                    'Access-Control-Request-Method' => ['POST', 'PUT'],
                    // Allow only POST and PUT methods
                    'Access-Control-Request-Headers' => ['X-Wsse', 'Content-Type'],
                    // Allow only headers 'X-Wsse'
                    'Access-Control-Allow-Credentials' => true,
                    // Allow OPTIONS caching
                    'Access-Control-Max-Age' => 3600,
                    // Allow the X-Pagination-Current-Page header to be exposed to the browser.
                    'Access-Control-Expose-Headers' => ['X-Pagination-Current-Page'],
                ],
            ]

        ]);
        return $behaviors;
    }
    public function init() {
        parent::init();
        \Yii::$app->user->enableSession=false;

    }
}