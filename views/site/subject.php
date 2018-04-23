<?php
/**
 * Created by PhpStorm.
 * UserType: songxun
 * Date: 11/2/2017
 * Time: 3:16 AM
 */
use yii\helpers\Url;

$this->title = $grade['title'] . ' math';
?>
<div class="site-skilltest-list">
    <div class="hkmp-page-title orange1-txt">
         <?= $grade['title'] ?> maths
    </div>
    <p class="hkmp-page-desc">
        Here is a list of all of the maths skills students learn in <?= $grade['title'] ?>! These skills are organised into categories, and you can move your mouse over any skill name to preview the skill. To start practising, just click on any link. IXL will track your score, and the questions will automatically increase in difficulty as you improve!
    </p>

    <div class="hkmp-page-test-list row">
        <?php
        foreach($sections as $section) {
            ?>
            <div class="col-sm-6 col-md-4 hkmp-test-section">
                <div class="hkmp-test-section-title">
                    <?=$section['title']?>
                </div>
                <ul class="hkmp-test-list">
                    <?php foreach($tests[$section['id']] as $test) {
                        ?>
                        <li>
                            <a href="<?=Url::toRoute(['site/test', 'id' => $test['id']])?>">
                                <span class="skill-test-number"><?=$section['order']?>.<?=$test['order']?></span>
                                <span class="skill-test-title"><?= $test['title'] ?></span>
                            </a>
                        </li>
                    <?php } ?>
                </ul>
            </div>

            <?php
        }
        ?>
    </div>
</div>