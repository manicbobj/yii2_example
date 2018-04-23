<?php
/**
 * Created by PhpStorm.
 * UserType: osboxes
 * Date: 21/11/17
 * Time: 18:49
 */

namespace app\engines\scoring;


class ScoreEngineFactory
{
    public static function instantiate($classname): ScoreEngineBase {
        $fullname = 'app\\engines\\scoring\\' . $classname;
        if(class_exists($fullname)) {
            return new $fullname();
        } else {
            return NULL;
        }
    }
}