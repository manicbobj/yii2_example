<?php
/**
 * Created by PhpStorm.
 * UserType: osboxes
 * Date: 06/11/17
 * Time: 13:42
 */

namespace app\models;


class GradeData
{
    public static function getGradeInfo() {
        return [
            "foundation" => [
                "styling" => [
                    'orange1-bdr',
                    'orange1-bg',
                    'orange1-txt'
                ],
                "title" => 'Foundation',
                'tab' => 'F',
                'desc' => 'Comparing numbers, names of shapes, consonant and vowel sounds, sight words and more.'
            ],
            "1_year" => [
                "styling" => [
                    'green1-bdr',
                    'green1-bg',
                    'green1-txt'
                ],
                'title' => 'Year 1',
                'tab' => '1',
                'desc' => 'Adding and subtracting, telling time, equal parts, categories, nouns, verb tense, time order and more.'
            ],

            "2_year" => [
                "styling" => [
                    'red1-bdr',
                    'red1-bg',
                    'red1-txt'
                ],
                'title' => 'Year 2',
                'tab' => '2',
                'desc' => 'Place-value models, recognising fractions, using a dictionary, synonyms, antonyms and more.'
            ],

            "3_year" => [
                'styling' => [
                    'blue1-bdr',
                    'blue1-bg',
                    'blue1-txt'
                ],
                'title' => 'Year 3',
                'tab' => '3',
                'desc' => 'Multiplication facts, symmetry, conjunctions, contractions, prefixes, suffixes and more.'
            ],

            "4_year" => [
                'styling' => [
                    'purple1-bdr',
                    'purple1-bg',
                    'purple1-txt'
                ],
                'title' => 'Year 4',
                'tab' => '4',
                'desc' => 'Adding decimals, calculating probabilities, prepositions, formatting titles, commas and more.'
            ],

            "5_year" => [
                'styling' => [
                    'green2-bdr',
                    'green2-bg',
                    'green2-txt'
                ],
                'title' => 'Year 5',
                'tab' => '5',
                'desc' => 'Adding fractions, perimeter, possessive nouns, commonly confused words and more.'
            ],

            "6_year" => [
                'styling' => [
                    'orange2-bdr',
                    'orange2-bg',
                    'orange2-txt'
                ],
                'title' => 'Year 6',
                'tab' => '6',
                'desc' => 'Percentages, variable expressions, personification, complex sentences, shades of meaning and more.'
            ],
            "7_year" => [
                'styling' => [
                    'green3-bdr',
                    'green3-bg',
                    'green3-txt'
                ],
                'title' => 'Year 7',
                'tab' => 7,
                'desc' => 'Proportional relationships, rational numbers, phrases and clauses, allusions, connotations and more.'
            ],
            "8_year" => [
                'styling' => [
                    'lemon1-bdr',
                    'lemon1-bg',
                    'lemon1-txt'
                ],
                'title' => 'Year 8',
                'tab' => 8,
                'desc' => 'Linear functions, exponents, Pythagoras\' theorem, active and passive voice, ellipses and more.'
            ]
        ];
    }

}