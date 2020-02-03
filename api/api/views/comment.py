from flask import Blueprint, request, jsonify
from api.database import db
from api.models import Comment
from api.models import CommentSchema
from flask_cors import CORS

comment_router = Blueprint('comment_router', __name__)
CORS(comment_router)

@comment_router.route('/comments', methods=['POST'])
def register_comment():
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
