import os

class SystemConfig:
  DEBUG = True
  SQLALCHEMY_DATABASE_URI = 'postgresql://{user}:{password}@{host}/{db_name}'.format(**{
      'user': os.environ['USER'],
      'password': os.environ['PASSWORD'],
      'host': 'localhost',
      'db_name': 'artmiru'
  })

  SQLALCHEMY_TRACK_MODIFICATIONS = False

Config = SystemConfig
