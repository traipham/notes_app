# Convert python object/instances and turn in JSON format

from rest_framework.serializers import ModelSerializer

from .models import Note

class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__' # The fields to serialize