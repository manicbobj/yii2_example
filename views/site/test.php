<?php
/**
 * Created by PhpStorm.
 * UserType: songxun
 * Date: 11/2/2017
 * Time: 3:16 AM
 */
use yii\helpers\Url;

$this->title = "Skill TestType Page";
?>
<div class="site-skilltest-page">
    <?php
        if(!isset($test)) {
    ?>
            <div class="text-center">
                <span style="font-size: 25px"><i class="em em-disappointed"></i><br>
                    Test was not found
                </span>
            </div>
    <?php
        } else {
    ?>
            <div id="test-widget">
            </div>
    <?php
        }
    ?>
</div>