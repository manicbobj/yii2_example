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

class GenCountUpDown extends GeneratorBase
{
    public function generate($question_template, $difficulty)
    {
        // TODO: Implement generate() method.
        // Get atom from images
        $question = [];

        $count_type = $question_template['count'];

        if($count_type == 'up') {
            $org_number = rand(1, $difficulty - 1);
            $exp_answer = $org_number + 1;
        } else {
            $org_number = rand(2, $difficulty);
            $exp_answer = $org_number - 1;
        }

        // Generate atom group information

        $question['template'] = $question_template;
        $question['render_options'] = [
            'number' => $org_number,
            'count_type' => $count_type
        ];
        $question['difficulty'] = $difficulty;
        $question['validation'] = [
            'valid_response' => [
                'score' => 10,
                'value' => $exp_answer
            ],
            'alt_responses' => []
        ];

        return $question;
    }
}