from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class Predict(APIView):
    def post(self, request, format=None):
        request_data = request.data
        reqMsg = request_data["reqMsg"] + "!!!???"
        return Response({"message": reqMsg}, status=status.HTTP_201_CREATED)
