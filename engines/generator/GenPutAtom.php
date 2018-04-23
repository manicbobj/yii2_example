<?php
/**
 * Created by PhpStorm.
 * UserType: osboxes
 * Date: 07/11/17
 * Time: 16:47
 */
namespace app\engines\generator;

use app\models\Image;
use yii\mongodb\Query;

class GenPutAtom extends GeneratorBase
{
    public function generate($question_template, $difficulty)
    {
        // TODO: Implement generate() method.
        $question = [];

        $collection = \Yii::$app->mongodb->getCollection('images');
        $backgrounds = $collection->aggregate([
                [
                    '$match' => [
                        'type' => 'background'
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

        // Randomly select background
        while(true) {
            if(count($backgrounds) == 0)
                break;
            $background = $backgrounds[0];

            $atoms = $collection->aggregate([
                [
                    '$match' => [
                        'tag' => ['$all' => $background['match']],
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

            if(count($atoms) == 0)
                break;
            $atom = $atoms[0];

            $problem = rand(1, $difficulty);

            // Determine number of rendered atoms based on problem and difficulty
            if($difficulty <= 3) {
                $render_atom_num = rand($problem, 5);
            } else if($difficulty <= 5) {
                $render_atom_num = rand($problem, 6);
            } else if($difficulty <= 10){
                $render_atom_num = rand($problem, 10);
            } else {
                $render_atom_num = rand($problem, $difficulty + 2);
            }

            $question['template'] = $question_template;
            $question['render_options'] = [
                'atom' => Image::toRepresentation($atom),
                'background' => Image::toRepresentation($background),
                'atom_num' => $render_atom_num,
                'problem' => $problem
            ];
            $question['diffculty'] = $difficulty;
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