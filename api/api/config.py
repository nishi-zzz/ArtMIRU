import os

class SystemConfig:
  DEBUG = True
  SQLALCHEMY_DATABASE_URI = 'postgresql://{user}:{password}@{host}/{db_name}'.format(**{
      'user': os.environ.get('USER'),
      'password': os.environ.get('PASSWORD'),
      'host': 'localhost',
      'db_name': 'artmiru'
  })

  SQLALCHEMY_TRACK_MODIFICATIONS = False

Config = SystemConfig
