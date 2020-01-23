from flask import Flask, make_response, jsonify
from .views.user import user_router
from api.database import init_db
import api.models

def create_app():
    app = Flask(__name__)
    app.config.from_object('api.config.Config')
    app.register_blueprint(user_router, url_prefix='/api')

    init_db(app)

    return app

app = create_app()
