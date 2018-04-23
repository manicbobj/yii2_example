<?php
namespace app\models;

use yii\mongodb\ActiveRecord;

class Section extends ActiveRecord
{
    public static function collectionName() {
        return 'sections';
    }

    public function attributes() {
        return ['_id', 'grade', 'id', 'order', 'title'];
    }
}