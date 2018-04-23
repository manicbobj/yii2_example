<?php
/**
 * Created by PhpStorm.
 * UserType: osboxes
 * Date: 13/11/17
 * Time: 06:04
 */

namespace app\api\controllers;


use app\models\Section;
use yii\data\ActiveDataProvider;
use yii\mongodb\Query;
use yii\rest\ActiveController;
use yii\web\Response;

class SectionsController extends ActiveController
{
    public $modelClass = 'app\models\Section';

    public function actionBySubjectGrade($subject, $grade) {
        $provider = new ActiveDataProvider([
            'query' => Section::find()->where(['grade' => $grade])->addOrderBy(['order' => SORT_ASC]),
            'pagination' => false
        ]);
        $models = $provider->getModels();

        $response = \Yii::$app->response;
        $response->format = Response::FORMAT_JSON;
        $response->data = [
            'success' => true,
            'data' => array_map(function($model) { return $model->attributes; }, $models)
        ];
        return $response;
    }
}