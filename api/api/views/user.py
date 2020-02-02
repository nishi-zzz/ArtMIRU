from flask import Blueprint, request, jsonify
from api.database import db
from api.models import User
from api.models import UserSchema
from flask_cors import CORS

user_router = Blueprint('user_router', __name__)
CORS(user_router)

@user_router.route('/users', methods=['GET'])
def show_users():
    users = User.query.order_by(User.id.desc()).all()
    users_schema = UserSchema(many=True)
    return jsonify({'users': users_schema.dump(users)})

@user_router.route('/users', methods=['POST'])
def signup():
    print('-----------')
    print(request.get_json())
    print('-----------')

    post_contents = request.get_json()
    name = post_contents['name']
    password = post_contents['password']
    email = post_contents['email']
    image_path = post_contents['image_path']
    profile = post_contents['profile']

    try:
        new_user = User(name=name, password=password, email=email, image_path=image_path, profile=profile, is_admin=False)
        db.session.add(new_user)
        db.session.commit()
    except:
        return 'sql error'

    return 'got request'
