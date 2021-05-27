import json

from .utils import castJson
from .utils import MLPModel
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def computeByMLP(request):
    # método post
    if request.method == "POST":
        # decodificar los datos recibidos a un diccionario
        body = json.loads(request.body.decode('utf-8'))
        # filtrar los datos no requeridos para el calculo
        raw  = {key: value for (key, value) in body.items() if key != 'address' and key != 'name' and key != 'geometry'}
        # transformar el json en un array para que el modelo prediga
        data = castJson(raw)
        # montar el modelo en base a su estructura y pesos
        model = MLPModel()
        
    return JsonResponse({'answer': str(model.predict(data))})
