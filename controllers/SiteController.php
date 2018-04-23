<?php

namespace app\controllers;

use app\models\QuestionTemplate;
use Yii;
use yii\base\Action;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\web\Response;
use yii\filters\VerbFilter;
use yii\data\ActiveDataProvider;
use yii\mongodb\Query;

use app\models\Test;
use app\models\Section;
use app\models\GradeData;

use app\engines\TestGenerator;
//use app\models\LoginForm;
//use app\models\ContactForm;


class SiteController extends Controller
{
    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['logout'],
                'rules' => [
                    [
                        'actions' => ['logout'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'logout' => ['post'],
                ],
            ],
        ];
    }

    /**
     * @inheritdoc
     */
    public function actions()
    {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
            ],
            'captcha' => [
                'class' => 'yii\captcha\CaptchaAction',
                'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null,
            ],
        ];
    }

    /**
     * Displays homepage.
     *
     * @return string
     */
    public function actionIndex()
    {

        $grades_info = GradeData::getGradeInfo();

        foreach($grades_info as $key => $grade) {
            $query = new Query();
            $count = $query
                ->from('tests')
                ->filterWhere(['field' => 'math', 'grade' => $key])
                ->count();

            $grades_info[$key]['subjects'] = [
                'math' => $count
            ];
        }

        return $this->render('index', ['grades_info' => $grades_info]);
    }

    /**
     * Login action.
     *
     * @return Response|string
     */

    /*
    public function actionLogin()
    {
        if (!Yii::$app->user->isGuest) {
            return $this->goHome();
        }

        $model = new LoginForm();
        if ($model->load(Yii::$app->request->post()) && $model->login()) {
            return $this->goBack();
        }
        return $this->render('login', [
            'model' => $model,
        ]);
    }
    */

    /**
     * Logout action.
     *
     * @return Response
     */
    public function actionLogout()
    {
        Yii::$app->user->logout();

        return $this->goHome();
    }

    /**
     * Displays contact page.
     *
     * @return Response|string
     */
    /*
    public function actionContact()
    {
        $model = new ContactForm();
        if ($model->load(Yii::$app->request->post()) && $model->contact(Yii::$app->params['adminEmail'])) {
            Yii::$app->session->setFlash('contactFormSubmitted');

            return $this->refresh();
        }
        return $this->render('contact', [
            'model' => $model,
        ]);
    }
    */

    /**
     * Displays about page.
     *
     * @return string
     */
    public function actionAbout()
    {
        return $this->render('about');
    }

    /**
     * Display math page
     */
    public function actionSubject($subject, $grade)
    {
        $grades = GradeData::getGradeInfo();

        $tests = [];

        $query = new Query();
        $sections = $query->from('sections')->where(['grade'=> $grade])->orderBy('order')->all();

        foreach($sections as $section) {
            $section_tests = $query->from('tests')
                ->where(['grade'=>$grade, 'section_id' => $section['id']])
                ->orderBy('order')
                ->all();

            $tests[$section['id']] = $section_tests;
        }

        return $this->render('subject', ['tests' => $tests, 'sections' => $sections, 'grade' => $grades[$grade]]);
    }

    /**
     * Display test page
     */

    public function actionTest($id) {
        $provider = new ActiveDataProvider([
            'query' => Test::find()->where(['id' => intval($id)])
        ]);
        if($provider->getCount() > 0) {
            $test = $provider->getModels()[0];
            $question_types = $test->question_types;

            $provider = new ActiveDataProvider([
                'query' => QuestionTemplate::find()->where(['id' => ['$in' => $question_types]])
            ]);
            $templates = $provider->getModels();
            $test = TestGenerator::generate($test, $templates);
        }

        // TODO: Create test session
        //
        return $this->render('test', compact('test'));

    }
}