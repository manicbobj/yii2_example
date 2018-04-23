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

class GenNumberLine extends GeneratorBase
{
    public function generate($question_template, $difficulty)
    {
        // TODO: Implement generate() method.
        // Get atom from images
        $question = [];

        $num_steps = $question_template['num_steps'];
        $from = rand(1, $difficulty - $num_steps);
        $to = $from + $num_steps;
        $missing = rand($from, $to);

        $question['template'] = $question_template;
        $question['render_options'] = [
            'from' => $from,
            'to' => $to,
            'missing' => $missing
        ];
        $question['difficulty'] = $difficulty;
        $question['validation'] = [
            'valid_response' => [
                'score' => 10,
                'value' => $missing
            ],
            'alt_responses' => []
        ];

        return $question;
    }
}