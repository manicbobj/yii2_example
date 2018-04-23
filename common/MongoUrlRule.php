<?php
/**
 * Created by PhpStorm.
 * User: osboxes
 * Date: 08/12/17
 * Time: 15:10
 */
namespace app\common;

use yii\rest\UrlRule;

class MongoUrlRule extends UrlRule
{
    public $tokens = [
        '{id}' => '<id:[\\da-f]+>',
    ];
}