<?php
/**
 * Created by PhpStorm.
 * UserType: osboxes
 * Date: 17/11/17
 * Time: 05:28
 */

namespace app\models;


use yii\mongodb\ActiveRecord;

class Question extends ActiveRecord
{
    public static function collectionName() {
        return 'questions';
    }

    public function attributes() {
        return ['template', 'atom', 'problem', 'validation', 'difficulty', 'response', 'result'];
    }
}