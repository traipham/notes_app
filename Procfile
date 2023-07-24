release: python ./my_notes/manage.py migrate
web: waitress-server --port=$PORT ./my_notes/my_notes.wsgi:application