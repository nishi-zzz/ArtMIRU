from flask import Blueprint, request, jsonify
from api.database import db
from api.models import Art
from api.models import ArtSchema
from flask_cors import CORS

art_router = Blueprint('art_router', __name__)
CORS(art_router)

@art_router.route('/arts', methods=['GET'])
def show_arts():
    arts = Art.query.order_by(Art.id.desc()).all()
    arts_schema = ArtSchema(many=True)
    return jsonify({'arts': arts_schema.dump(arts)})

@art_router.route('/arts', methods=['POST'])
def register_art():
    print('-----------')
    print(request.get_json())
    print('-----------')

    post_contents = request.get_json()
    if isinstance(post_contents, type(None)):
        return 'json is empty'
    title = post_contents['title']
    author = post_contents['author']
    image_path = post_contents['image_path']

    try:
        new_art = Art(title=title, author=author, image_path=image_path)
        db.session.add(new_art)
        db.session.commit()
    except:
        return 'sql error'

    return 'got request'

@art_router.route('/arts/<int:id>', methods=['PUT'])
def update_art(id):
    print('-----------')
    print(request.get_json())
    print('-----------')

    post_contents = request.get_json()
    if isinstance(post_contents, type(None)):
        return 'json is empty'
    title = post_contents['title']
    author = post_contents['author']
    image_path = post_contents['image_path']

    art = Art.query.get(id)
    if isinstance(art, type(None)):
        return 'PUT fail, {} is not found'.format(id)

    try:
        art.title = title
        art.author = author
        art.image_path = image_path
        db.session.add(art)
        db.session.commit()
    except:
        return 'sql error'

    return 'got request'
