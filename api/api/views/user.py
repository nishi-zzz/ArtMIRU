from flask import Blueprint, request, jsonify
from api.database import db
from api.models import User
from api.models import UserSchema

# ルーティング設定
user_router = Blueprint('user_router', __name__)

@user_router.route('/users', methods=['GET'])
def show_users():
    users = User.query.order_by(User.id.desc()).all()
    users_schema = UserSchema(many=True)
    return jsonify({'users': users_schema.dump(users)})

@user_router.route('/users', methods=['POST'])
def signup():
    json = request.get_json()  # Get POST JSON
    name = json['name']
    password = json['password']
    email = json['email']
    image_path = json['image_path']
    profile = json['profile']

    new_user = User(name=name, password=password, email=email, image_path=image_path, profile=profile, is_admin=False)
    db.session.add(new_user)
    db.session.commit()
