<?php
/**
 * Created by PhpStorm.
 * UserType: osboxes
 * Date: 14/11/17
 * Time: 18:35
 */

namespace app\engines\generator;


abstract class GeneratorBase
{
    public abstract function generate($question_template, $difficulty);
}