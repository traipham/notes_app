# Notes App
This will be a note webapp that will be used to help me learn React + Django

## Video Progress:
[Link](https://www.youtube.com/watch?v=tYKRAXIio28&ab_channel=DennisIvy) (1:16:11/3:23:59)

### Notes:
- Deploy:
  - build Django and React project separately

- Intro:
  - Create Django app with `django-admin startproject <project-name>`
  - Start Django server with `python manage.py runserver`
  - Start a new Django app `python manage.py startapp <app-name>`
  - Connect apps to Django project by adding to `settings.py` file
  - Set up the views where map request to url, Set up routes in app in `urls.py` file, set the connection to project/root `urls.py`
  - Migrate and create connection of project and database
  - Create admin user

- Migration (???):
  - start with sqlite database
  - Run migrations to prep database, and build out database table
  - initial migration: `python manage.py migrate`
  - Create migration file: `python manage.py makemigration`
  - execute migration created from migration file: `python mangepy migrate`

-Django Rest Framework:
  - Documentation : [Link](https://www.django-rest-framework.org/)


CORS error: [CORS Django Headers](https://pypi.org/project/django-cors-headers/#description)
- React is makign a request to Django, and Django is blocking it 
- Use Cors to allow specific or all urls to connect the BE and FE

Add Routing to React:
- install `react-router-dom`
- Create a Proxy URL (Home/real domain) # proxy URL?
  - in package.json (React App) use tha attribute `proxy: <url:PORT>`
