<?php
/**
 * Created by PhpStorm.
 * UserType: osboxes
 * Date: 07/11/17
 * Time: 16:47
 */
namespace app\engines\generator;

use app\models\Image;
use yii\data\ActiveDataProvider;
use yii\helpers\Url;
use yii\mongodb\Query;

class GenTallyMark extends GeneratorBase
{
    public function generate($question_template, $difficulty)
    {
        // TODO: Implement generate() method.
        // Get atom from images
        $question = [];

        $problem = rand(1, $difficulty);

        $r = $problem % 5;
        $tally_numbers = [];
        if($r == 0) {
            $tally_numbers = [5];
        } else {
            $tally_numbers = [$r, 5];
        }

        $collection = \Yii::$app->mongodb->getCollection('images');

        $tally_marks = [];

        $models = $collection->find(
            [
                'type' => 'tally_mark',
                'number' => ['$in' => $tally_numbers]
            ]
        )->toArray();

        foreach ($models as $model) {
            $tally_marks[] = Image::toRepresentation($model);
        }

        $question['template'] = $question_template;
        $question['render_options'] = [
            'tally_marks' => $tally_marks,
            'problem' => $problem
        ];
        $question['difficulty'] = $difficulty;
        $question['validation'] = [
            'valid_response' => [
                'score' => 10,
                'value' => $problem
            ],
            'alt_responses' => []
        ];

        return $question;
    }
}