<?php
/**
 * Created by PhpStorm.
 * UserType: osboxes
 * Date: 07/11/17
 * Time: 16:48
 */
namespace app\engines\generator;

use app\models\Colors;
use app\models\Image;
use yii\mongodb\Query;

class GenOrdinalSquare extends GeneratorBase
{
    public function generate($question_template, $difficulty)
    {
        // TODO: Implement generate() method.
        // Get atom from images
        $question = [];

        $problem = rand(1, $difficulty);

        $available_colors = Colors::list();

        // Random select square colors
        $square_colors = [];
        $keys = array_rand($available_colors, $difficulty);
        foreach($keys as $key) {
            $square_colors[] = $available_colors[$key];
        }

        $colors = $square_colors;
        shuffle($colors);

        $question['template'] = $question_template;
        $question['render_options'] = [
            'square_colors' => $square_colors,
            'colors' => $colors,
            'problem' => $problem
        ];
        $question['difficulty'] = $difficulty;
        $question['validation'] = [
            'valid_response' => [
                'score' => 10,
                'value' => $square_colors[$problem - 1]
            ],
            'alt_responses' => []
        ];

        return $question;
    }

}