from flask import Flask, make_response, jsonify
from .views.user import user_router
from api.database import init_db
import api.models
from flask_marshmallow import Marshmallow
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    app.debug = True
    app.config.from_object('api.config.Config')
    app.register_blueprint(user_router, url_prefix='/api')

    init_db(app)
    CORS(app)
    @app.after_request
    def after_request(response):
      response.headers.add('Access-Control-Allow-Origin', '*')
      response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
      response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
      return response

    return app

app = create_app()
ma = Marshmallow(app)

from api.views import user
