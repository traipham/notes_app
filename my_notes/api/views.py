from django.shortcuts import render
# from django.http import JsonResponse
from rest_framework.response import Response # Make JSON repsonse prettier
from rest_framework.decorators import api_view

from .models import Note
from .serializers import NoteSerializer
from .utils import *

# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Update existing note with data sent in post'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Delete an existing note'
        }
    ]
    return Response(routes)

# Restful API:
# /notes GET
# /notes POST
# /notes/<id> GET
# /notes/<id> PUT

@api_view(['GET', 'POST'])
def getNotes(request):
    if request.method == 'GET':
        return getNoteList(request)
    if request.method == 'POST':
        return createNote(request)
@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def getNote(request, pk):
    if request.method == 'GET':
        return getNoteDetails(request, pk)
    if request.method == 'PUT':
        return updateNote(request, pk)
    if request.method == 'DELETE':
        return deleteNote(request, pk)

# @api_view(['POST'])
# def createNote(request):
#     data = request.data
#     note = Note.objects.create(
#         body=data['body']
#     )
#     serializer = NoteSerializer(note, many=False)
#     return Response(serializer.data)

# @api_view(['PUT'])
# def updateNote(request, pk):
#     data = request.data
#     note = Note.objects.get(id=pk)
#     serialier = NoteSerializer(instance=note, data=data) # data = new_data, modify the data
#     if serialier.is_valid():
#         serialier.save() # Saving the form
#     return Response(serialier.data)

# @api_view(['DELETE'])
# def deleteNote(request, pk):
#     note = Note.objects.get(id=pk) # Grab entry from database
#     note.delete()
#     return Response("Deleted Note!")