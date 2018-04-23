<?php
/**
 * Created by PhpStorm.
 * UserType: osboxes
 * Date: 08/11/17
 * Time: 10:25
 */
namespace app\engines;

class TestGenerator
{
    public static function generate($test, $templates) {
        $num_question = isset($test->num_question) ? $test->num_question : 10;
        $test->num_question = $num_question;
        return $test;
    }
}