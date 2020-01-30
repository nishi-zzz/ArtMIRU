from api.database import db
from datetime import datetime
import pytz
from marshmallow_sqlalchemy import ModelSchema

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    name = db.Column(db.Text, nullable=False)
    password = db.Column(db.Text, nullable=False)
    email = db.Column(db.Text, nullable=False, unique=True)
    image_path = db.Column(db.Text, nullable=False)
    profile = db.Column(db.Text)
    is_admin = db.Column(db.Boolean, nullable=False)
    comments = db.relationship('Comment', backref='user', lazy=True)
    replys = db.relationship('Reply', backref='user', lazy=True)

    def __repr__(self):
        return '<id={id} name={name!r}>'.format(id=self.id, name=self.name)

class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    art_id = db.Column(db.Integer, db.ForeignKey("art.id"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    tag_id = db.Column(db.Integer, db.ForeignKey("tag.id"), nullable=False)
    content = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now(pytz.timezone('Asia/Tokyo')))
    like = db.Column(db.Integer, nullable=False)
    replys = db.relationship('Reply', backref='comment', lazy=True)

    def __repr__(self):
        return '<id={id} content={content!r}>'.format(id=self.id, content=self.content[:11])

class Reply(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    comment_id = db.Column(db.Integer, db.ForeignKey("comment.id"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    content = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now(pytz.timezone('Asia/Tokyo')))
    like = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return '<id={id} content={content!r}>'.format(id=self.id, content=self.content[:11])

class Art(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    title = db.Column(db.Text, nullable=False)
    author = db.Column(db.Text, nullable=False)
    image_path = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now(pytz.timezone('Asia/Tokyo')))
    comments = db.relationship('Comment', backref='art', lazy=True)

    def __repr__(self):
        return '<id={id} title={title!r}>'.format(id=self.id, title=self.title)

class Tag(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    name = db.Column(db.Text, nullable=False)

    def __repr__(self):
        return '<id={id} name={name!r}>'.format(id=self.id, name=self.name)

class UserSchema(ModelSchema):
    class Meta:
        model = User
        # optionally attach a Session
        # to use for deserialization
        # sqla_session = session


class CommentSchema(ModelSchema):
    class Meta:
        model = Comment

class ReplySchema(ModelSchema):
    class Meta:
        model = Reply

class ArtSchema(ModelSchema):
    class Meta:
        model = Art

class TagSchema(ModelSchema):
    class Meta:
        model = Tag
