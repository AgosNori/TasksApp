#  Task App
Es una apliciación CRUD (Crear, Leer, Actualizar y Eliminar) para gestionar tareas. Esta aplicación utiliza Django para el backend y React para el frontend.

## Características
  - Crear: Los usuario pueden crear nuevas tareas
  - Leer : Los usuarios pueden ver todas las tareas
  - Actualizar : Los usuarios pueden modificar las tareas existentes
  - Eliminar: Los usuarios pueden eliminar tareas que ya se hayan finalizado.

## Requerimento
  - Python 3.x
  - Node Js y npm
## Instalación y configuración

  - Clonar el repo : git clone https://github.com/AgosNori/TasksApp.git
  - Crear y activar un entorno virtual python -m venv env , env\Scripts\activate
  - Instalar las dependencias pip install -r requirement.txt
  - Realizar las migraciones de la base de datos python manage.py migrate
  - Ejecutar el proyecto python manage.py runserver 
  - Para levantar el frontend; instalar las dependencias y ejecutarlo : npm i , npm run dev 
