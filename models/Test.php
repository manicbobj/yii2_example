<?php
namespace app\models;

use yii\mongodb\ActiveRecord;

class Test extends ActiveRecord {
    public static function collectionName() {
        return 'tests';
    }

    public static function primaryKey()
    {
        return ['id'];
    }

    public function attributes() {
        return ['_id', 'id', 'field', 'title', 'grade', 'question_types', 'order', 'difficulty', 'section_id', 'num_question'];
    }

}