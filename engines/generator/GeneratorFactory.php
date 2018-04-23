<?php
/**
 * Created by PhpStorm.
 * UserType: osboxes
 * Date: 14/11/17
 * Time: 18:42
 */

namespace app\engines\generator;


class GeneratorFactory
{
    public static function instantiate($classname): GeneratorBase {
        $fullname = 'app\\engines\\generator\\' . $classname;
        if(class_exists($fullname)) {
            return new $fullname();
        } else {
            return NULL;
        }

    }
}