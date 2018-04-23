<?php 
$I = new ApiTester($scenario);
$I->wantTo('Get grade data for several types of grades');
$grades = ['foundation', '1_year', '2_year', '3_year', '4_year', '5_year', '6_year', '7_year', '8_year'];
foreach ($grades as $grade) {
    $I->sendGET('grades/'.$grade);
    $I->seeResponseIsJson();
    $I->seeResponseContainsJson(['success' => true]);
}

