release: python ./my_notes/manage.py migrate
web: sh -c 'cd ./my_notes/ && waitress-serve --port=$PORT my_notes.wsgi:application'