<?php

/* @var $this yii\web\View */
use yii\helpers\Url;

$this->title = 'High School Math Project';
?>
<div class="site-index">
    <?php
        foreach($grades_info as $key=>$grade) {
    ?>
            <div class="col-sm-6 col-md-4">
                <div class="hkmp-card <?=$grade['styling'][0] ?>">
                    <a class="hkmp-card-tab <?=$grade['styling'][1] ?>"><?=$grade['tab']?></a>
                    <a class="hkmp-card-title <?=$grade['styling'][2] ?>"><?=$grade['title']?></a>
                    <p class="hkmp-card-desc">
                        <?= $grade['desc'] ?>
                    </p>

                    <div class="hkmp-card-subject-links">
                        <ol>
                            <li>
                                <span>
                                    Maths
                                </span>
                                <a href="<?=Url::toRoute('math/' . $key)?>" class="subject-link">
                                    <?= $grade['subjects']['math'] ?> skills >>>
                                </a>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
    <?php
        }
    ?>

</div>
