<?php
/**
 * Created by PhpStorm.
 * UserType: osboxes
 * Date: 07/11/17
 * Time: 16:47
 */
namespace app\engines\scoring;

class ScoreSimpleMatch extends ScoreEngineBase
{
    private function match($v1, $r1) {
        return $v1 === $r1;
    }

    public function score($question) {
        $result = [
            'max_score' => 0,
            'score' => 0
        ];

        $validation = $question['validation'];

        $answers = [];
        $answers[] = $validation['valid_response'];
        foreach($validation['alt_responses'] as $alt_response) {
            $answers[] = $alt_response;
        }

        foreach($answers as $answer) {
            $result['max_score'] = max($result['max_score'], $answer['score']);

            $response_val = trim(strval($question['response']['value']));

            if($this->match(strval($answer['value']), $response_val)) {
                $result['score'] = $answer['score'];
            }
        }
        $result['suggestion'] = $answers[0]['value'];

        return $result;
    }
}