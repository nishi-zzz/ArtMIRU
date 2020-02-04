from flask import Blueprint, request, jsonify
from api.database import db
from api.models import Comment, Reply
from api.models import CommentSchema
from flask_cors import CORS

comment_router = Blueprint('comment_router', __name__)
CORS(comment_router)

@comment_router.route('/comments', methods=['GET'])
def show_comments():
    comments = Comment.query.order_by(Comment.id.desc()).all()
    comments_schema = CommentSchema(many=True)
    return jsonify({'comments': comments_schema.dump(comments)})

@comment_router.route('/comments', methods=['POST'])
def register_comment():
    print('-----------')
    print(request.get_json())
    print('-----------')

    post_contents = request.get_json()
    if isinstance(post_contents, type(None)):
        return 'json is empty'
    art_id = post_contents['art_id']
    user_id = post_contents['user_id']
    tag_id = post_contents['tag_id']
    content = post_contents['content']

    try:
        new_comment = Comment(art_id=art_id, user_id=user_id, tag_id=tag_id, content=content)
        db.session.add(new_comment)
        db.session.commit()
    except:
        return 'sql error'

    return 'got request'

@comment_router.route('/comments/<int:id>', methods=['POST'])
def like(id):
    comment = Comment.query.get(id)
    if isinstance(comment, type(None)):
        return 'GET fail, {} is not found'.format(id)

    comment.like += 1

    try:
        db.session.add(comment)
        db.session.commit()
    except:
        return 'sql error'

    return 'got request'


@comment_router.route('/comments/<int:id>/reply', methods=['POST'])
def register_reply(id):
    print('-----------')
    print(request.get_json())
    print('-----------')

    post_contents = request.get_json()
    if isinstance(post_contents, type(None)):
        return 'json is empty'
    user_id = post_contents['user_id']
    content = post_contents['content']

    try:
        new_reply = Reply(comment_id=id, user_id=user_id, content=content)
        db.session.add(new_reply)
        db.session.commit()
    except:
        return 'sql error'

    return 'got request'
