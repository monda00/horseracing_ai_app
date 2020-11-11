from horseraceai.settings import BASE_DIR

from rest_framework.decorators import api_view
from rest_framework.response import Response

import numpy as np
import tensorflow as tf
from tensorflow import keras
from sklearn.preprocessing import LabelEncoder


@api_view(['POST'])
def predict_race(request):
    '''
    １レース分の特徴量を受け取って複勝となる馬を予測するAPI

    Parameters
    ----------
    request : Request
        POSTされたリクエスト

    Returns
    -------
    response : Response
        レスポンスするデータ
    '''
    input_data = set_data(request.data)
    model = load_model()
    win_horse = predict_win_horse(model, input_data)+1

    ret = {"win horse number": win_horse}
    return Response(ret)


def set_data(data):
    '''
    リクエストのボディから送られたデータをモデルに入力できる形式に変換

    Parameters
    ----------
    data : list
        APIで送られてきたデータ
        レースに出場している馬の数だけリストがある
        それぞれの馬の特徴量は辞書型

    Returns
    -------
    input_data : ndarray
        モデルに入力できる形式の特徴量
    '''
    data = transform_categorical_data(data)
    input_data = np.array([list(data[i].values())
                           for i in range(len(data))])
    input_data = list(input_data.reshape((18, 1, 61)))

    return input_data


def transform_categorical_data(data):
    '''
    カテゴリデータをLabel Encoding

    Parameters
    ----------
    data : list
        APIで送られてきたデータ
        レースに出場している馬の数だけリストがある
        それぞれの馬の特徴量は辞書型

    Returns
    -------
    data : list
        カテゴリデータを変換したデータ
    '''
    le_li = np.load(
        BASE_DIR + '/predictmodel/label_encoding/le_list.npy', allow_pickle=True)
    categorical_cols = create_categorical_cols()
    data = data.get('data')

    for l, c in zip(le_li, categorical_cols):
        le = LabelEncoder()
        le.classes_ = l.classes_
        # 一時対応
        if c == 'season':
            le.classes_ = ['0', '秋', '春', '夏', '冬']
        for i in range(len(data)):
            data[i][c] = le.transform([str(data[i][c])])[0]

    return data


def create_categorical_cols():
    '''
    カテゴリデータのカラム名を生成

    Returns
    -------
    categorical_cols : list
        カテゴリデータのカラム名
    '''
    categorical_cols = ['gen', 'place', 'clockwise',
                        'field_type', 'field_condition', 'weather', 'season']
    categorical_cols_past_base = ['field_type', 'field_condition', 'weather']
    past_race_num = ['one', 'two', 'three', 'four', 'five']
    categorical_cols_past = []
    for n in past_race_num:
        for c in categorical_cols_past_base:
            categorical_cols_past.append('{}_before_{}'.format(n, c))
    categorical_cols = categorical_cols + categorical_cols_past

    return categorical_cols


def load_model():
    '''
    学習済みのモデルをインポート

    Returns
    -------
    model : model
        学習済みの機械学習モデル
    '''
    model = keras.models.load_model(
        BASE_DIR + '/predictmodel/keras_model/multi_input_model.h5')

    return model


def predict_win_horse(model, input_data):
    '''
    モデルと特徴量から複勝となる可能性の高い馬を予測

    Parameters
    ----------
    model : model
        学習済みの機械学習モデル
    input_data : ndarray
        モデルに入力できる形式の特徴量

    Returns
    -------
    horse_number : int
        複勝と予測された馬の馬番
    '''
    pred = model.predict(input_data)
    horse_number = np.argmax(pred)

    return horse_number
