release: python ./my_notes/manage.py migrate
web: waitress-serve --port=$PORT ./my_notes/my_notes.wsgi:application