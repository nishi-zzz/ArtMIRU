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

@user_router.route('/users/<int:id>', methods=['GET'])
def show_user(id):
    user = User.query.get(id)
    if isinstance(user, type(None)):
        return 'GET fail, {} is not found'.format(id)
    users_schema = UserSchema()
    return jsonify({'user': users_schema.dump(user)})

@user_router.route('/users', methods=['POST'])
def signup():
    print('-----------')
    print(request.get_json())
    print('-----------')

    post_contents = request.get_json()
    if isinstance(post_contents, type(None)):
        return 'json is empty'
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

@user_router.route('/users/<int:id>', methods=['PUT'])
def update_user(id):
    print('-----------')
    print(request.get_json())
    print('-----------')

    post_contents = request.get_json()
    if isinstance(post_contents, type(None)):
        return 'json is empty'
    name = post_contents['name']
    password = post_contents['password']
    email = post_contents['email']
    image_path = post_contents['image_path']
    profile = post_contents['profile']

    user = User.query.get(id)
    if isinstance(user, type(None)):
        return 'PUT fail, {} is not found'.format(id)

    try:
        user.name = name
        user.password = password
        user.email = email
        user.image_path = image_path
        user.profile = profile
        db.session.add(user)
        db.session.commit()
    except:
        return 'sql error'

    return 'got request'

@user_router.route('/users/<int:id>', methods=['DELETE'])
def delete_user(id):
    try:
        db.session.query(User).filter(User.id==id).delete()
        db.session.commit()
    except:
        return 'sql error'

    return 'user #{} deleted'.format(id)
