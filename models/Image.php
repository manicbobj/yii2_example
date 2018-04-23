<?php
/**
 * Created by PhpStorm.
 * UserType: osboxes
 * Date: 15/11/17
 * Time: 01:09
 */

namespace app\models;


use yii\helpers\Url;
use yii\mongodb\ActiveRecord;

class Image extends ActiveRecord
{
    public static function collectionName()
    {
        return 'images';
    }

    public function attributes()
    {
        return ['_id', 'name', 'tag', 'url'];
    }

    public static function toRepresentation($atom) {
        if(is_array($atom)) {
            $atom['url'] = Url::to('@web/images/'. $atom['url'], true);
        } else if(is_object($atom)) {
            $atom->url = Url::to('@web/images/'. $atom->url, true);
        } else {
          return null;
        }

        return $atom;
    }
}