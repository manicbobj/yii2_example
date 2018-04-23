<?php
namespace app\models;

use yii\mongodb\ActiveRecord;

class QuestionTemplate extends ActiveRecord
{
    public static function collectionName() {
        return 'question_templates';
    }

    public function attributes() {
        return [
            '_id',
            'render_options',
            'generator_engine',
            'render_engine',
            'scoring_engine',
            'feedback_engine',
            'template'
        ];
    }
}