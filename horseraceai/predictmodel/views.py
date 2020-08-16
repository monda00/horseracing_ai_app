from horseraceai.settings import BASE_DIR

from rest_framework.decorators import api_view
from rest_framework.response import Response

import numpy as np
import tensorflow as tf
from tensorflow import keras


@api_view(['POST'])
def predict_race(request):
    input_data = set_data(request.data)
    model = load_model()
    return Response(input_data)


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

    return input_data


def load_model():
    '''
    学習済みのモデルをインポート

    Returns
    -------
    model : model
    '''
    model = keras.models.load_model(
        BASE_DIR + '/predictmodel/keras_model/multi_input_model.h5')

    return model
