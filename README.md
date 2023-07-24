# Notes App
This will be a note webapp that will be used to help me learn React + Django

# Video Progress:
[Link](https://www.youtube.com/watch?v=tYKRAXIio28&ab_channel=DennisIvy) [COMPLETED!]
[Link](<LINK TO DEPLOYMENT VIDEO FOR DJANGO >)
[Link](Follow this guide to deploy on heroku: https://techincent.com/how-to-deploy-django-and-react-in-heroku/)

# Notes:
- Deploy:
  - build Django and React project separately

## Intro:
  - Create Django app with `django-admin startproject <project-name>`
  - Start Django server with `python manage.py runserver`
  - Start a new Django app `python manage.py startapp <app-name>`
  - Connect apps to Django project by adding to `settings.py` file
  - Set up the views where map request to url, Set up routes in app in `urls.py` file, set the connection to project/root `urls.py`
  - Migrate and create connection of project and database
  - Create admin user

## Migration (???):
  - start with sqlite database
  - Run migrations to prep database, and build out database table
  - initial migration: `python manage.py migrate`
  - Create migration file: `python manage.py makemigration`
  - execute migration created from migration file: `python mangepy migrate`

## Django Rest Framework:
  - Documentation : [Link](https://www.django-rest-framework.org/)


## CORS error: [CORS Django Headers](https://pypi.org/project/django-cors-headers/#description)
- React is makign a request to Django, and Django is blocking it 
- Use Cors to allow specific or all urls to connect the BE and FE

## Add Routing to React:
- install `react-router-dom`
- Create a Proxy URL (Home/real domain) # proxy URL?
  - in package.json (React App) use tha attribute `proxy: <url:PORT>`

## Overall Process:
- React.js - Frontend
  - `App.js` - where all the web components can be placed together
  - `index.js` - where App.js components are being rendered
  - `pages/*.js` & `components/*.js` - essentially all web components
    - Contain call to backend's (Django) api url 
    - we're fetching information from these api's so we need to use `async` and `await`
    - Remember the syntax of `fetch('<url>', {method:... , headers: ..., body: ... })`
  - `package.js` - Have the configurations of all FE packages and modules. Can also set proxy
- Django - Backend
  - `api/` folder
    - `models.py` - configure the data model for database
    - `admin.py` - register data model
    - `serializers.py` - convert python instance, returned from grabbing from database, to JSON format
    - `urls.py` - contain all the urls routing and connect it to the API call
      - everytime url is called from browser (FE) it'll trigger the API call that makes backend call to retrieve data 
      - API call will return a response that is called durnig fetch() from FE
    - `views.py` - contain all api/backend functionalities
  - `project` folder
    - `settings.py` - Configuration of project (installed modules/packages, middleware, django-rest-framework, cors, etc)
    - `urls.py` - contain the domain name patterns (this is the more high-level file for the api file)
- Process:
  1. Create backend functionality (api)
  2. Connect url to backend functionality
  3. Create Web component in FE
  4. Make calls to backend to get information 
     1. Make sure the FE and BE can communicate 
     2. Use CORS in order to solve cross origin issue due to urls linkage
     3. Make sure the API/BE functionalty is RESTFUL
        1. requested managed through HTTP requests (GET,POST,PUT,DELETE)
           1. contains Headers and parameters in return value
        2. Stateless = no client info stored between get requests and each request is separate and unconnected
        3. Cacheable data
     4. Appropriate status code
        1. > 200 - OK
        2. > 201 - Create
        3. > 400 - Bad Request
        4. > 404 - Not Found
        5. > 401 - Unauthorized
        6. > 503 - Server Error
  5. Render the web components
  6. Make sure that routes are configure for frontend to display pages
  7. Host App on from Backend
     1. Run `npm run build` on FE 
     2. Configure the setting of the build directory in the `TEMPLATE: {DIR: [<frontend-build-directory>]}`
     3. Configure the setting of the static files in the build directory `STATICFILES_DIRS = [<FRONTEND_BUILD_DIRECTORY> + '\\static']`
     4. Run Django server and it should be on that port


## Deployment:
- Django + React (Django serving React: one-app)
  1. Install modules/packages (FE):
     1. npm install --save-dev @babel/preset-env
     2. remove any '@babel/....plugin' from `package.json` dependencies
  2. Install modules/packages (BE):
     1. Activate virtual environment
     2. Pip install: 
        1. dj_database_url
        2. waitress 
        3. whitenoise
        4. psycopg
  3. Configure `settings.py` in app folder
     1. Add `whitenoise.runserver_nostatic` to <b>INSTALLED_APPS</b>
     2. Add `whitenoise.middleware.WhiteNoiseMiddleware` to <b>MMIDDLEWARE</b> after `django.middleware.security.SecurityMiddleware`
     3. `IS_HEROKU_APP = "DYNO" in os.environ and not "CI" in os.environ` - Settigns for local vs production environment 
     4. Add variables for directories of 
        1. FE build directory
        2. FE static file directory
     5. Add the FE build directory to <b>TEMPLATES.DIRS</b>
     6. Configure the Database:
        1. > $ `db_from_env = dj_database_url.config()`</br>
           > $ `DATABASES['default'].update(db_from_env)`</br>
           > $ `DATABASES['default']['CONN_MAX_AGE'] = 50`
     7. Configure `CORS_ALLOW_ALL_ORIGINS = True` to allow communication between FE and BE
     8. Configure `WHITENOISE_KEEP_ONLY_HASHED_FILES = True`
     9. Configure `STATIC_URL = 'static/'` and `STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')` and `STATICFILES_DIRS = <FE/Build/static_path>`
  4. Heroku Setup
     1. Install heroku with `brew install heroku`
     2. Run `heroku login` in terminal
        1. Login to heroku
     3. Create a heroku app `heroku create APP_NAME`
        1. Or create through the Heroku dashboard
     4. Get the heroku remote repo: `heroku git:remote -a REPO_NAME`
     5. Configure Heroku Buildpacks:
        1. Run `$ heroku buildpacks:add --index 1 heroku/nodejs`
        2. Run `$ heroku buildpacks:add --index 2 heroku/python`
     6. Configure PostgresSQL Heroku addon: `heroku addons:create heroku-postgresql:mini`
     7. Disable collectstatic file?: `heroku config:set DISABLE_COLLECTSTATIC=1`
  5. Create a `package.json` in project location: 
     1. `{
          "name": "CHANGE_APP_NAME",
          "version": "1.0.1",
          "description": "CHANGE DISCRIPTION",
          "main": "index.js",
          "repository": "CHANGE_YOUR_GIT_REPO.git",
          "author": "CHANGE_YOUR_NAME <CHANGE_YOUR_EMAIL>",
          "license": "MIT",
          "private": true,
          "scripts": {
              "heroku-prebuild": "NODE_ENV=production cd frontend/ && yarn install && yarn build && cd .."
          },
          "cacheDirectories": [
              "frontend/node_modules"
          ],
          "engines": {
              "node": "16.15.0",
              "npm": "8.10.0"
          }
      }`
  6. Create `runtime.txt` that include the Python version `python-x.x.x`
  7. Create `requirements.txt` for Django project. Do `pip freeze > requirements.txt`
  8. Create Procfile that will include:
     1. `release: python manage.py migrate`
     2. `web: sh -c 'cd ./APP_NAME/ && waitress-serve --port=$PORT APP_NAME.wsgi:application'`
  9. Commit and push to heroku: `git push heroku main`
