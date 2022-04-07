from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(24), unique=True, nullable=False)
    password = db.Column(db.String(32), unique=False, nullable=False)
    email = db.Column(db.String(128), unique=True, nullable=False)
    phone = db.Column(db.String(16), unique=True, nullable=False)
    first_name = db.Column(db.String(24), unique=False, nullable=False)
    last_name = db.Column(db.String(32), unique=False, nullable=False)
    adress = db.Column(db.String(64), unique=False, nullable=True)
    avatar_url = db.Column(db.String(128), unique=False, nullable=True)
    conditions_terms = db.Column(db.Boolean(), unique=False, nullable=False)
    marketing_comunication = db.Column(db.Boolean(), unique=False, nullable=True)
    info = db.Column(db.String(256), unique=False, nullable=True)
    is_active = db.Column(db.Boolean(), unique=False, nullable=True)
    role_id = db.Column(db.Integer, db.ForeignKey('role.id'))
    suscription_id = db.Column(db.Integer, db.ForeignKey('suscription.id'))
    role = db.relationship('Role', backref='user', lazy=True)
    suscription = db.relationship('Suscription', backref='user', lazy=True)
   

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "password": self.password,
            "email": self.email,
            "phone": self.phone,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "adress": self.adress,
            "avatar_url": self.avatar_url,
            "conditions_terms": self.conditions_terms,
            "marketing_comunication": self.marketing_comunication,
            "info": self.info,
            "is_active": self.is_active,
            "role_id": self.role_id,
            "role": self.role.name if self.role else None
        }

class Weekdays(db.Model):
    __tablename__ = 'weekdays'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(24), unique=True, nullable=False)
        
    def __repr__(self):
        return '<Weekdays %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
        }

class Suscription(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(24), unique=True, nullable=False)
    description = db.Column(db.String(48), unique=False, nullable=False)
    price = db.Column(db.Float, unique=False, nullable=False)
    tokens = db.Column(db.Integer, unique=False, nullable=False)
    suscription_image = db.Column(db.String(256), unique=False, nullable=False)
    suscription_type_id = db.Column(db.Integer, db.ForeignKey('suscription_type.id'), unique=False, nullable=True)
    suscription_type = db.relationship('Suscription_type', backref='suscription', lazy=True)

    def __repr__(self):
        return '<Suscription %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "price": self.price,
            "tokens": self.tokens
        }

class Sessions(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(24), unique=True, nullable=False)
    description = db.Column(db.String(48), unique=False, nullable=False)
    regular = db.Column(db.Boolean(), unique=False, nullable=False)
    start_time = db.Column(db.Time, unique=False, nullable=False)
    duration = db.Column(db.Integer, unique=False, nullable=False)
    max_users = db.Column(db.Integer, unique=False, nullable=False)
    sessions_type_id = db.Column(db.Integer, db.ForeignKey('sessions_type.id'), nullable=False)
    session_type = db.relationship('Sessions_type', backref='sessions', lazy=True)
    weekdays_id = db.Column(db.Integer, db.ForeignKey('weekdays.id'), nullable=False)
    weekdays = db.relationship('Weekdays', backref='sessions', lazy=True)
    
    def __repr__(self):
        return '<Sessions %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "regular": self.regular,
            "start_time": self.start_time.strftime("%H:%M:%S"),
            "duration": self.duration,
            "max-users": self.max_users,
            "session_type": self.session_type.name if self.session_type else None,
            "weekdays": self.weekdays.name if self.weekdays else None

        }
        
class Payments(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    suscription_id = db.Column(db.Integer, db.ForeignKey('suscription.id'), unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), unique=False, nullable=False)
    payment_date = db.Column(db.DateTime, nullable=False)
    stripe_id = db.Column(db.Integer, unique=True, nullable=False)

    def __repr__(self):
        return '<Payments %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "suscription_id": self.suscription_id,
            "user_id": self.user_id,
            "payment_date": self.payment_date,
            "stripe_id": self.stripe_id
        }
        
class Role(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(24), unique=True, nullable=True)

    def __repr__(self):
        return self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name
        }

class Sessions_type(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(24), unique=True, nullable=False)

    def __repr__(self):
        return '<Sessions_type %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name
        }

class Suscription_type(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(24), unique=True, nullable=False)

    def __repr__(self):
        return self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name
        }

class User_sessions(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), unique=False, nullable=False)
    user = db.relationship('User', backref='user_sessions', lazy=True)
    sessions_id = db.Column(db.Integer, db.ForeignKey('sessions.id'), unique=False, nullable=False)
    session = db.relationship('Sessions', backref='user_sessions', lazy=True)
    is_coach = db.Column(db.Boolean)

    def __repr__(self):
        return '<User_sessions %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "sessions_id": self.sessions_id,
            "is_coach": self.is_coach
        }

class Available_sessions(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    sessions_type_id = db.Column(db.Integer, db.ForeignKey('sessions_type.id'), unique=False, nullable=False)
    session_type = db.relationship('Sessions_type', backref='available_sessions', lazy=True)
    suscription_id = db.Column(db.Integer, db.ForeignKey('suscription.id'), unique=False, nullable=False)
    suscription = db.relationship('Suscription', backref='available_sessions', lazy=True)

    def __repr__(self):
        return '<User_sessions %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "sessions_id": self.sessions_id,
            "is_coach": self.is_coach
        }