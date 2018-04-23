<?php
/**
 * Created by PhpStorm.
 * User: osboxes
 * Date: 12/03/18
 * Time: 01:43
 */

namespace app\engines\generator;


use Colors\RandomColor;

class GenFillShapeInFrame extends GeneratorBase
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
                "fill_color" => RandomColor::one(),
                "num_shapes" => $problem
            ];

            $question['difficulty'] = $difficulty;
            $question['validation'] = [
                'valid_response' => [
                    'score' => 10,
                    'value' => $frame_size - $problem
                ],
                'alt_responses' => []
            ];

            return $question;
        }

        return null;
    }
}