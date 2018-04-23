<?php
/**
 * Created by PhpStorm.
 * UserType: osboxes
 * Date: 11/11/17
 * Time: 17:45
 */

namespace app\api\controllers;
use SebastianBergmann\CodeCoverage\Report\Xml\Tests;
use yii\data\ActiveDataProvider;
use yii\mongodb\Query;
use app\models\Test;
use app\models\QuestionTemplate;
use yii\web\Controller;
use yii\web\Response;
use yii\rest\ActiveController;


class TestsController extends ActiveController
{
    public $modelClass = 'app\models\Test';

    public function actionFind()  {
        $search_options = ['grade', 'section_id', 'field'];
        $criteria = [];
        $request = \Yii::$app->request;

        foreach($search_options as $option) {
            $val = $request->get($option, null);
            if($val != null) {
                if ($option === 'section_id') {
                    $criteria[$option] = intval($val);
                } else {
                    $criteria[$option] = $val;
                }
            }
        }

        $provider = new ActiveDataProvider([
            'query' => Test::find()->where($criteria)->orderBy('order'),
            'pagination' => false
        ]);
        $models = $provider->getModels();

        $response = \Yii::$app->response;
        $response->format = Response::FORMAT_JSON;
        $response->data = [
            'success' => true,
            'data' => $models
        ];

        return $response;
    }
}