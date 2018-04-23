<?php

$I = new ApiTester($scenario);
$username = 'username' . rand();
$password = 'blabla';

$I->wantTo('Create user and test login via API');
$I->amHttpAuthenticated('abcd', 'abcd');
$I->haveHttpHeader('Content-Type', 'application/json');
$I->sendPOST('account/register', ['username' => $username, 'password' => $password]);
$I->seeResponseCodeIs(\Codeception\Util\HttpCode::OK); // 200
$I->seeResponseIsJson();
$I->seeResponseContainsJson(['success' => true]);

$I->haveHttpHeader('Content-Type', 'application/json');
$I->sendPOST('account/login', ['username' => $username, 'password' => $password]);
$I->seeResponseCodeIs(\Codeception\Util\HttpCode::OK); // 200
$I->seeResponseIsJson();
$I->seeResponseContainsJson(['success' => true]);