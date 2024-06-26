from rest_framework import serializers
from .models import Tasks
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tasks
        # si tengo muchos campos se puede usar el all
        fields = '__all__'
        #fields= ('id','title','descripcion','done')