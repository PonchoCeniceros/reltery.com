![](imgs/logo.png)

**Reltery.com** es una aplicación web diseñada para predecir el valor tu inmueble, implementando el análisis de datos y el uso de redes neuronales entrenadas con información tomada de tu misma localidad.

![](imgs/home.png)

Nuestro **modelo basado en redes neuronales** toma aspectos físicos y económicos de tu inmueble. Esta información será procesada por cada neurona de nuestra red para predecir en conjunto el valor que tu inmueble puede tener en el mercado, de forma rápida y confiable.

![](imgs/view.png)

Todo ello no seria posible sin la aplicación del filosofía de **software como servicio**, con un servidor dedicado a la implementación del modelo de inteligencia artificial, que provee servicio a diversas aplicaciones adaptadas a los dispositivos presentes en el mercado, brindando así una mejor experiencia de al usuario y permitiendo a los desarrolladores implementar mejoras o adecuaciones al modelo.


## Desarrollo del proyecto 
A continuación se provee información para poder correr de forma local **Reltery.com**. Se implementaron las tecnologías **django** del lado del servidor, almacenando el modelo de inteligencia artificial, y **react** del lado del cliente proporcionando diversas funcionalidades al usuario en base a las consultas realizadas al servidor. Para el desarrollo del modelo de red neuronal se implementó **Keras**.

<p align="center">
    <img src="imgs/keras.png" width="230" height="80">
</p>

<p align="center">
    <img src="imgs/django.png" width="200" height="100">
</p>

<p align="center">
    <img src="imgs/reactjs.png" width="230" height="100">
</p>

## Material adicional
[Video promocional](https://www.youtube.com/watch?v=DbNw3UEe5C8)

[Desarrollo del modelo de inteligencia artificial](https://github.com/PonchoCeniceros/reltery.com/blob/main/reltery_model.ipynb)

[Dataset implementado, modelo y pesos calculados](https://github.com/PonchoCeniceros/reltery.com/tree/main/BACK-END/db)

[Demo del proyecto en Heroku](https://realty-com.herokuapp.com/) (los servidores de Heroku podrían estar en suspensión a la hora de una prueba. Dado el caso intentar de nuevo)

## Despliegue en forma local

## Frontend

### Requerimientos 
```
npm
node
```
### Instalación 
En el directorio raíz del proyecto
```
npm install
npm run start-dev
```

## Backend

### Requerimientos 
```
Python3
pip
virtualenv
```
### Instalación 
En el directorio raíz del proyecto
```
virtualenv venv (as administrator or sudo)
cd venv\
source bin\activate (linux)
Scripts\activate (windows)
```
Activar el entorno virtual
```
pip3 install -r requirements.txt
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py createsuperuser
python3 manage.py runserver
Access localhost:8000
```
---
Este es un proyecto para la clase de Inteligencia Artificial. Desarrolladores: @lucapame, @PonchoCeniceros .
