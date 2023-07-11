from django.db import models

# Create your models here. database replica of how we want our database tables to look like

# Note Model
class Note(models.Model):
    body = models.TextField(null=True, blank=True) # can be saved with a null value, 'blank': can submit a form with null values
    updated = models.DateTimeField(auto_now=True) # every time saved, take time_stamp of when it happens
    created = models.DateTimeField(auto_now_add=True) # only take time stamp on creation 

    def __str__(self):
        return self.body[:50]
    