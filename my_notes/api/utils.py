from rest_framework.response import Response

from .models import Note
from .serializers import NoteSerializer

def getNoteList(request):
    notes = Note.objects.all().order_by('-updated') # updated notes will appear at top
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)

def createNote(request):
    data = request.data
    note = Note.objects.create(
        body=data['body']
    )
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)

def getNoteDetails(request, pk):
    notes = Note.objects.get(id=pk)
    serializer = NoteSerializer(notes, many=False)
    return Response(serializer.data)

def updateNote(request, pk):
    data = request.data
    note = Note.objects.get(id=pk)
    serialier = NoteSerializer(instance=note, data=data) # data = new_data, modify the data
    if serialier.is_valid():
        serialier.save() # Saving the form
    return Response(serialier.data)

def deleteNote(request, pk):
    note = Note.objects.get(id=pk) # Grab entry from database
    note.delete()
    return Response("Deleted Note!")