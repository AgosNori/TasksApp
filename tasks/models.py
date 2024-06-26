from django.db import models

# Create your models here.

class Tasks (models.Model):
    title= models.CharField(max_length=200)
    description=models.TextField(blank=True)
    done= models.BooleanField(default=False)
    
    # para poder traer los titulos en panel del admin
    def __str__(self):
        return self.title