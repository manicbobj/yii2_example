<?php
$url_rules = [
    'api/tests/by-section/<section:\d+>' => 'api/tests/by-section',
    'api/tests/by-subject-grade/<subject:\w+>/<grade:\w+>' => 'api/tests/by-subject-grade',
    'api/sections/by-subject-grade/<subject:\w+>/<grade:\w+>' => 'api/sections/by-subject-grade',
    'api/grades/<grade:\w+>' => 'api/grades/view',
    'api/questions/by-session/<session_id:\w+>/<index:\d+>' => 'api/questions/by-session',
    'POST api/questions/score/<session_id:\w+>/<index:\d+>' => 'api/questions/score',
    'OPTIONS api/questions/score/<session_id:\w+>/<index:\d+>' => 'api/questions/options',

    [
        'class' => 'app\common\MongoUrlRule',
        'controller' => ['api/tests', 'api/sections', 'api/test-sessions', 'api/questions'],
    ],
];

return $url_rules;