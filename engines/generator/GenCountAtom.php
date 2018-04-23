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

class GenCountAtom extends GeneratorBase
{
    public function generate($question_template, $difficulty)
    {
        // TODO: Implement generate() method.
        // Get atom from images
        $question = [];

        $collection = \Yii::$app->mongodb->getCollection('images');
        $models = $collection->aggregate([
                [
                    '$match' => [
                        'type' => 'atom'
                    ]
                ],
                [
                    '$sample' => [
                        'size' => 1
                    ],
                ]

            ],
            [
                'cursor' => ['batchSize' => 0]
            ]
        )->toArray();

        if(count($models) > 0) {
            $query = new Query();

            $atom = Image::toRepresentation($models[0]);

            if(!isset($atom['plural']))
                $atom['plural'] = $atom['name'] . 's';

            if(isset($atom['_id']))
                $atom['_id'] = (string) $atom['_id'];

            $problem = rand(1, $difficulty);

            $question['template'] = $question_template;
            $question['render_options'] = [
                'atom' => $atom,
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
        else {
            return NULL;
        }
    }
}