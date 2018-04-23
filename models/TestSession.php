<?php
/**
 * Created by PhpStorm.
 * UserType: osboxes
 * Date: 08/11/17
 * Time: 13:21
 */

namespace app\models;

use yii\mongodb\ActiveRecord;

class TestSession extends ActiveRecord
{
    public static function collectionName() {
        return 'test_sessions';
    }

    public static function primaryKey()
    {
        return ['_id'];
    }

    public function attributes() {
        return [
            '_id',
            'test_id',
            'difficulty',
            'start_at',
            'score',
            'questions',
            'open_question',
            'num_questions'
        ];
    }
}