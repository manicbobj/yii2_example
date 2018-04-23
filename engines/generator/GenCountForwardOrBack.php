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

class GenCountForwardOrBack extends GeneratorBase
{
    public function generate($question_template, $difficulty)
    {
        // TODO: Implement generate() method.
        // Get atom from images
        $question = [];

        $types = ['forward', 'backward'];
        $rand_type_idx = array_rand($types, 1);
        $num_blanks = 5;
        $valid_values = [];

        if($types[$rand_type_idx] === 'forward') {
            $start_val = rand(1, $difficulty - $num_blanks);

            for($i = 1; $i <= $num_blanks; $i ++)
            {
                $valid_values[] = $start_val + $i;
            }
        } else {
            $start_val = rand($num_blanks, $difficulty);

            for($i = 1; $i <= $num_blanks; $i ++)
            {
                $valid_values[] = $start_val - $i;
            }
        }

        $question['template'] = $question_template;
        $question['render_options'] = [
            "from" => $start_val,
            "type" => $types[$rand_type_idx]
        ];
        $question['difficulty'] = $difficulty;
        $question['validation'] = [
            'valid_response' => [
                'score' => 10,
                'value' => $valid_values
            ],
            'alt_responses' => []
        ];

        return $question;
    }
}