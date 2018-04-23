<?php

namespace app\models;

use yii\data\ActiveDataProvider;
use yii\mongodb\Query;

class User extends \yii\mongodb\ActiveRecord implements \yii\web\IdentityInterface
{

    /**
     * @inheritdoc
     */
    public static function findIdentity($id)
    {
        return null;
    }

    /**
     * @inheritdoc
     */
    public static function findIdentityByAccessToken($token, $type = null)
    {
        $query = new Query();
        $user = $query->from('users')->where([
            'accessToken' => $token
        ])->one();

        if($user) {
            return new static($user);
        }
        else {
            return null;
        }
    }

    /**
     * Finds user by username
     *
     * @param string $username
     * @return static|null
     */
    public static function findByUsername($username)
    {
        $user = static::find()->where(['username' => $username])->one();

        if(!$user) {
            return null;

        }

        return $user;
    }

    /**
     * @inheritdoc
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @inheritdoc
     */
    public function getAuthKey()
    {
        return $this->authKey;
    }

    /**
     * @inheritdoc
     */
    public function validateAuthKey($authKey)
    {
        return $this->authKey === $authKey;
    }

    /**
     * Validates password
     *
     * @param string $password password to validate
     * @return bool if password provided is valid for current user
     */
    public function validatePassword($password)
    {
        return password_verify($password, $this->password);
    }

    public function setPassword($value) {
        $this->password = password_hash($value, PASSWORD_DEFAULT);
    }

    public static function collectionName() {
        return 'users';
    }

    public function attributes() {
        return ['_id', 'username', 'password', 'accessToken', 'tokenDate'];
    }

}
