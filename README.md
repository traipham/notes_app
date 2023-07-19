# Notes App
This will be a note webapp that will be used to help me learn React + Django

# Video Progress:
[Link](https://www.youtube.com/watch?v=tYKRAXIio28&ab_channel=DennisIvy) [COMPLETED!]
[Link](<LINK TO DEPLOYMENT VIDEO FOR DJANGO >)

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
