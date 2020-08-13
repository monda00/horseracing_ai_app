from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['POST'])
def predict_race(request):
    data = request.data
    name = data.get("name")
    return Response(name)


def set_data(data):
    input_data = {
        'horse_number': data.get('horse_nuber'),
        'frame_number': data.get('frame_number'),
        'age': data.get('age'),
        'gen': data.get('gen'),
        'weight': data.get('weight'),
        'weight_diff': data.get('weight_diff'),
        'burden_weight': data.get('burden_weight'),
        'place': data.get('place'),
        'race_horse_number': data.get('race_horse_number'),
        'distance': data.get('distance'),
        'clockwise': data.get('clockwise'),
        'field_type': data.get('field_type'),
        'field_condition': data.get('field_condition'),
        'weather': data.get('weather'),
        'time_hour': data.get('time_hour'),
        'season': data.get('season'),
        'one_before_odd': data.get('one_before_odd'),
        'one_before_popular': data.get('one_before_popular'),
        'one_before_rank': data.get('one_before_rank'),
        'one_before_time': data.get('one_before_time'),
        'one_before_epapsed_day': data.get('one_before_epapsed_day'),
        'one_before_distance': data.get('one_before_distance'),
        'one_before_field_type': data.get('one_before_field_type'),
        'one_before_field_condition': data.get('one_before_field_condition'),
        'one_before_weather': data.get('one_before_weather'),
        'two_before_odd': data.get('two_before_odd'),
        'two_before_popular': data.get('two_before_popular'),
        'two_before_rank': data.get('two_before_rank'),
        'two_before_time': data.get('two_before_time'),
        'two_before_epapsed_day': data.get('two_before_epapsed_day'),
        'two_before_distance': data.get('two_before_distance'),
        'two_before_field_type': data.get('two_before_field_type'),
        'two_before_field_condition': data.get('two_before_field_condition'),
        'two_before_weather': data.get('two_before_weather'),
        'three_before_odd': data.get('three_before_odd'),
        'three_before_popular': data.get('three_before_popular'),
        'three_before_rank': data.get('three_before_rank'),
        'three_before_time': data.get('three_before_time'),
        'three_before_epapsed_day': data.get('three_before_epapsed_day'),
        'three_before_distance': data.get('three_before_distance'),
        'three_before_field_type': data.get('three_before_field_type'),
        'three_before_field_condition': data.get('three_before_field_condition'),
        'three_before_weather': data.get('three_before_weather'),
        'four_before_odd': data.get('four_before_odd'),
        'four_before_popular': data.get('four_before_popular'),
        'four_before_rank': data.get('four_before_rank'),
        'four_before_time': data.get('four_before_time'),
        'four_before_epapsed_day': data.get('four_before_epapsed_day'),
        'four_before_distance': data.get('four_before_distance'),
        'four_before_field_type': data.get('four_before_field_type'),
        'four_before_field_condition': data.get('four_before_field_condition'),
        'four_before_weather': data.get('four_before_weather'),
        'five_before_odd': data.get('five_before_odd'),
        'five_before_popular': data.get('five_before_popular'),
        'five_before_rank': data.get('five_before_rank'),
        'five_before_time': data.get('five_before_time'),
        'five_before_epapsed_day': data.get('five_before_epapsed_day'),
        'five_before_distance': data.get('five_before_distance'),
        'five_before_field_type': data.get('five_before_field_type'),
        'five_before_field_condition': data.get('five_before_field_condition'),
        'five_before_weather': data.get('five_before_weather'),
    }

    return input_data
