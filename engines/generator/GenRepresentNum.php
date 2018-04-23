<?php
/**
 * Created by PhpStorm.
 * UserType: osboxes
 * Date: 07/11/17
 * Time: 16:48
 */
namespace app\engines\generator;

use app\models\Image;
use yii\mongodb\Query;

class GenRepresentNum extends GeneratorBase
{
    public function generate($question_template, $difficulty)
    {
        // TODO: Implement generate() method.
        // Get atom from images
        $question = [];

        if(isset($question_template['render_options']))
            $num_atom_box = $question_template['render_options']['default']['num_atom_box'];
        else
            $num_atom_box = 3;

        $collection = \Yii::$app->mongodb->getCollection('images');
        $models = $collection->aggregate([
            [
                '$match' => [
                    'type' => 'atom'
                ]
            ],
            [
                '$sample' => [
                    'size' => $num_atom_box
                ],
            ]

        ],
            [
                'cursor' => ['batchSize' => 0]
            ]
        )->toArray();

        $atoms = [];

        foreach ($models as $model) {
            $atom = Image::toRepresentation($model);

            if(isset($atom['_id']))
                $atom['_id'] = (string) $atom['_id'];

            $atoms[] = $atom;
        }


        $group_nums =  array_rand(range(1, $difficulty), $num_atom_box);
        shuffle($group_nums);

        $problem = $group_nums[rand(1, $num_atom_box) - 1] + 1;

        // Orgnanize final group data.
        $groups = [];
        for($i = 0; $i < count($group_nums); $i++) {
            $groups[] = [
                'num_atoms'=> $group_nums[$i] + 1,
                'atom' => $atoms[$i]
            ];
        }

        $question['template'] = $question_template;
        $question['render_options'] = compact('groups', 'problem');
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