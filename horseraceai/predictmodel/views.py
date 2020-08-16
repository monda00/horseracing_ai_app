from horseraceai.settings import BASE_DIR

from rest_framework.decorators import api_view
from rest_framework.response import Response

import numpy as np
import tensorflow as tf
from tensorflow import keras


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
    win_horse = predict_win_horse(model, input_data)

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
    input_data = np.array([list(data.get('data')[i].values())
                           for i in range(len(data.get('data')))])
    input_data = list(input_data.reshape((18, 1, 61)))

    return input_data


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
