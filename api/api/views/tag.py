from flask import Blueprint, request, jsonify
from api.database import db
from api.models import Tag
from api.models import TagSchema
from flask_cors import CORS

tag_router = Blueprint('tag_router', __name__)
CORS(tag_router)

@tag_router.route('/tags', methods=['GET'])
def show_tags():
    tags = Tag.query.order_by(Tag.id.desc()).all()
    tags_schema = TagSchema(many=True)
    return jsonify({'tags': tags_schema.dump(tags)})


@tag_router.route('/tags', methods=['POST'])
def register_tags():
    print('-----------')
    print(request.get_json())
    print('-----------')

    post_contents = request.get_json()
    if isinstance(post_contents, type(None)):
        return 'json is empty'
    name = post_contents['name']

    try:
        new_tag = Tag(name=name)
        db.session.add(new_tag)
        db.session.commit()
    except:
        return 'sql error'

    return 'got request'
