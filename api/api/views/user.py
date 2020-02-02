from flask import Blueprint, request, jsonify
from api.database import db
from api.models import User
from api.models import UserSchema
from flask_cors import CORS

# ルーティング設定
user_router = Blueprint('user_router', __name__)
CORS(user_router)

@user_router.route('/users', methods=['GET'])
def show_users():
    users = User.query.order_by(User.id.desc()).all()
    users_schema = UserSchema(many=True)
    return jsonify({'users': users_schema.dump(users)})

@user_router.route('/users', methods=['POST'])
def signup():
    # name = request.args.get('name', default='', type=str)
    # password = request.args.get('password', default='', type=str)
    # email = request.args.get('email', default='', type=str)
    # image_path = request.args.get('image_path', default='', type=str)
    # profile = request.args.get('profile', default='', type=str)

    print('-----------')
    print(request.get_json())
    print('-----------')
    print('-----------')
    print(request.args)
    print('-----------')

    # post_contents = request.get_json()
    # name = post_contents['name']
    # password = post_contents['password']
    # email = post_contents['email']
    # image_path = post_contents['image_path']
    # profile = post_contents['profile']
    #
    # new_user = User(name=name, password=password, email=email, image_path=image_path, profile=profile, is_admin=False)
    # db.session.add(new_user)
    # db.session.commit()

    # return jsonify({'name': name})
    return 'got request'
