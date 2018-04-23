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

class GenCountMoreOrLess extends GeneratorBase
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
            $atom = Image::toRepresentation($models[0]);

            if(!isset($atom['plural']))
                $atom['plural'] = $atom['name'] . 's';

            if(isset($atom['_id']))
                $atom['_id'] = (string) $atom['_id'];

            $count_type = $question_template['count'];

            if($count_type == 'more') {
                $top_atoms = rand(1, $difficulty - 1);
                $problem = $top_atoms + 1;
            } else {
                $top_atoms = rand(2, $difficulty);
                $problem = $top_atoms - 1;
            }

            // Determine frame size
            if($difficulty <= 5) {
                $frame_size = 5;
            } else if($difficulty <= 10) {
                $frame_size = 10;
            } else {
                return NULL;
            }

            $question['template'] = $question_template;
            $question['render_options'] = [
                'atom' => $atom,
                'top_atoms' => $top_atoms,
                'bottom_atoms' => $problem,
                'frame_size' => $frame_size,
                'count_type' => $count_type
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