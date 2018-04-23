<?php 
$I = new ApiTester($scenario);
$I->wantTo('API Test Case: Generate test session -> Get test session -> Get next question');

$I->amHttpAuthenticated('abcd', 'abcd');

$I->wantTo('Test Skill : Learn to count 3');
test($I, 1);

$I->wantTo('Test Skill : Count to 3');
test($I, 2);

$I->wantTo('Test Skill : Count using stickers');
test($I, 3);

$I->wantTo('Test Skill : Count on ten frames');
test($I, 4);

$I->wantTo('Test Skill : Represent numbers - up to 3');
test($I, 5);

$I->wantTo('Test Skill : Ordinal Square');
test($I, 6);

$I->wantTo('Test Skill : One more');
test($I, 12);

$I->wantTo('Test Skill : Count up and down');
test($I, 28);

$I->wantTo('Test Skill : Tally marks');
test($I, 30);

function test(ApiTester $i, $test_id) {
    $i->haveHttpHeader('Content-Type', 'application/json');
    $i->sendPOST('test-sessions', ['test_id' => $test_id]);
    $i->seeResponseCodeIs(\Codeception\Util\HttpCode::OK); // 200
    $i->seeResponseIsJson();
    $i->seeResponseContainsJson(['success' => true]);

    $response = $i->grabResponse();
    print $response;
    $response = json_decode($response);

    $i->haveHttpHeader('Content-Type', 'application/json');
    $i->sendGET('test-sessions/' . $response->data->_id );
    $i->seeResponseCodeIs(\Codeception\Util\HttpCode::OK); // 200
    $i->seeResponseIsJson();

    $i->haveHttpHeader('Content-Type', 'application/json');
    $i->sendPOST('questions/next', ['session_id' => $response->data->_id]);
    $i->seeResponseCodeIs(\Codeception\Util\HttpCode::OK);
    $i->seeResponseIsJson();
    $i->seeResponseContainsJson(['success' => true]);
}
