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

class GenMoreOrLess extends GeneratorBase
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
                $num_atoms = rand(1, $difficulty - 1);
                $problem = $num_atoms + 1;
            } else {
                $num_atoms = rand(2, $difficulty);
                $problem = $num_atoms - 1;
            }

            // Generate atom group information
            $num_array = range(1, $difficulty);
            $num_array = array_filter($num_array, function($val) use($problem) {
                if($val == $problem)
                    return false;
                else
                    return true;
            });

            $rand_key = array_rand($num_array, 1);
            $num_array = [
                $num_array[$rand_key],
                $problem
            ];
            shuffle($num_array);

            $question['template'] = $question_template;
            $question['render_options'] = [
                'atom' => $atom,
                'num_atoms' => $num_atoms,
                'groups' => $num_array,
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