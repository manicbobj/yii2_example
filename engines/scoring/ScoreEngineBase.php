<?php
/**
 * Created by PhpStorm.
 * UserType: osboxes
 * Date: 21/11/17
 * Time: 18:47
 */

namespace app\engines\scoring;


abstract class ScoreEngineBase
{
    public abstract function score($question);
}