<?php
/**
 * Created by PhpStorm.
 * UserType: osboxes
 * Date: 07/11/17
 * Time: 16:48
 */
namespace app\engines\generator;

use yii\mongodb\Query;
use Colors\RandomColor;

class GenShapeInFrame extends GeneratorBase
{
    public function generate($question_template, $difficulty)
    {
        // TODO: Implement generate() method.
        $collection = \Yii::$app->mongodb->getCollection('images');

        // Randomly select shape
        $models = $collection->aggregate([
            [
                '$match' => [
                    'type' => 'shape'
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
            $problem = rand(1, $difficulty);

            $frame_size = ceil($problem / 10) * 10;
            $frame = array_pad([], $frame_size, false);

            for($i = 0; $i < $problem; $i ++) {
                $frame[$i] = true;
            }

            $question = [];

            $question['template'] = $question_template;
            $question['render_options'] = [
                "shape" => $models[0],
                "fill" => $frame,
                "color" => RandomColor::one(),
                "problem" => $problem
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

        return null;
    }
}