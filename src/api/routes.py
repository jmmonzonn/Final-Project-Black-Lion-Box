"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Role, Suscription, Sessions, Sessions_type, Suscription_type, Weekdays, User_sessions
from api.utils import generate_sitemap, APIException
from sqlalchemy.exc import IntegrityError
from psycopg2.errors import NotNullViolation, UniqueViolation
from flask_jwt_extended import jwt_required, create_access_token, get_jwt_identity
from datetime import date, timedelta
import calendar

from babel.dates import format_date

api = Blueprint('api', __name__)

@api.route('/signup', methods=["POST"])
def create_user():
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    email = request.json.get("email", None)
    phone = request.json.get("phone", None)
    first_name = request.json.get("first_name", None)
    last_name = request.json.get("last_name", None)
    adress = request.json.get("adress", None)
    avatar_url = request.json.get("avatar_url", None)
    conditions_terms = request.json.get("conditions_terms", None)
    marketing_comunication = request.json.get("marketing_comunication", None)
    info = request.json.get("info", None)
    role_id = request.json.get("role_id", None)

    # if None in [username, password, email, phone, first_name, last_name, conditions_terms]:
    #     return jsonify({"message" : "Alguno de los campos obligatorios no furula"}),400
    try:

        role = Role.query.filter_by(name="user").first() if not role_id else Role.query.filter_by(id=role_id).first()
        new_user = User(username = username, password = password, email = email, phone = phone, 
                        first_name = first_name, last_name = last_name, adress = adress, 
                        avatar_url = avatar_url, conditions_terms = conditions_terms, 
                        marketing_comunication = marketing_comunication, info = info, is_active = False, role = role)
        db.session.add(new_user)
        db.session.commit()
        token = create_access_token(identity=new_user.username)
    except IntegrityError as ex:
        print(ex)
        if isinstance(ex.orig, NotNullViolation):
            return jsonify({"message" : "Los campos son obligatorios no pueden quedar como null."}),400
        elif isinstance(ex.orig, UniqueViolation):
            return jsonify({"message" : "Ya se encuentra un usuario regisgtrado con estos datos"}),400
        return jsonify({"message" : ex.orig}),400 

    return jsonify({"message" : "Usuario registrado", "token": token}),200

@api.route("/get_users", methods=["GET"])
def get_users():
    return jsonify([user.serialize() for user in User.query.all()]), 200

@api.route('/login', methods=['POST'])
def login():
    username = request.json.get("username")
    password = request.json.get("password")

    user = User.query.filter_by(username=username, password=password).first()
    if not user:
        return jsonify({"message": "El usuario no fue encontrado."}), 401

    token = create_access_token(identity=user.id)

    data_response = {
        "token": token,
        "username": user.username,
        "role": user.role.name
    }
    return jsonify(data_response), 200

@api.route('/suscription', methods=["POST"])
@jwt_required()
def create_suscription():
     name = request.json.get("name", None)
     description = request.json.get("description", None)
     price = request.json.get("price", None)
     tokens = request.json.get("tokens", None)
     suscription_type_id = request.json.get("suscription_type_id", None)
    #  suscription_type = request.json.get("suscription_type", None)

    #  not_unique_name = Suscription.query.filter_by(name = name).first()  
    #  if not_unique_name != None:
    #     return jsonify({"message": "Este suscritor ya existe, prueba con otro."}),401

    #  if name == '' or name == None or description == '' or description == None or price == '' or price == None or tokens == '' or tokens == None:
    #     return jsonify({"message": "Rellena todos los campos obligatorios"}), 401
    
    
     new_suscription = Suscription(name = name, description = description, price = price, tokens = tokens, suscription_type_id = suscription_type_id)
     db.session.add(new_suscription)
     db.session.commit()
 
     return jsonify({"message" : "Suscription nueva creada"}),200

@api.route("/get_suscriptions", methods=["GET"])
@jwt_required()
def get_suscriptions():
    return jsonify([suscription.serialize() for suscription in Suscription.query.all()]), 200


@api.route('/sessions', methods=["POST"])
@jwt_required()
def create_sessions():
     name = request.json.get("name", None)
     description = request.json.get("description", None)
     regular = request.json.get("regular", None)
     weekdays_id = request.json.get("weekdays_id", None)
     start_time = request.json.get("start_time", None)
     duration = request.json.get("duration", None)
     max_users = request.json.get("max_users", None)
     sessions_type_id = request.json.get("sessions_type_id", None)
     
    #  not_unique_name = Sessions.query.filter_by(name = name).first()  
    #  if not_unique_name != None:
    #     return jsonify({"message": "Este nombre ya existe, prueba con otro."}),401
    
    #  if name == '' or name == None or description == '' or description == None or regular == '' or regular == None or days == '' or days == None or start_time == '' or start_time == None or duration == '' or duration == None or max_users == '' or max_users == None or sessions_type_id == '' or sessions_type_id == None:
    #     return jsonify({"message": "Rellena todos los campos obligatorios"}), 401

     new_sessions = Sessions(name = name, description = description, regular = regular, weekdays_id = weekdays_id, start_time = start_time, duration = duration, max_users = max_users, sessions_type_id = sessions_type_id)
     db.session.add(new_sessions)
     db.session.commit()
 
     return jsonify({"message" : "Session nueva creada"}),200


@api.route("/get_sessions", methods=["GET"])
@jwt_required()
def get_sessions():
    return jsonify([sessions.serialize() for sessions in Sessions.query.all()]), 200

@api.route("/get_user_sessions", methods=["GET"])
@jwt_required()
def get_user_sessions():
    return jsonify([user_sessions.serialize() for user_sessions in User_sessions.query.all()]), 200


@api.route('/user_sessions', methods=["POST"])
@jwt_required()
def create_user_sessions():
     user_id = request.json.get("user_id", None)
     sessions_id = request.json.get("sessions_id", None)
     
    #  not_unique_name = Sessions.query.filter_by(name = name).first()  
    #  if not_unique_name != None:
    #     return jsonify({"message": "Este nombre ya existe, prueba con otro."}),401
    
    #  if name == '' or name == None or description == '' or description == None or regular == '' or regular == None or days == '' or days == None or start_time == '' or start_time == None or duration == '' or duration == None or max_users == '' or max_users == None or sessions_type_id == '' or sessions_type_id == None:
    #     return jsonify({"message": "Rellena todos los campos obligatorios"}), 401

     new_user_sessions = User_sessions(user_id = user_id, sessions_id = sessions_id)
     db.session.add(new_user_sessions)
     db.session.commit()
 
     return jsonify({"message" : "User sesion nueva creada"}),200


@api.route('/role', methods=["POST"])
@jwt_required()
def create_role():
    name = request.json.get("name", None)

    not_unique_name = Role.query.filter_by(name = name).first()
    if not_unique_name != None:
        return jsonify({"message": "Este rol ya existe, prueba con otro."}),401
    
    if name == '' or name == None:
        return jsonify({"message": "Introduce un rol"}), 401

    new_role = Role(name = name)
    db.session.add(new_role)
    db.session.commit()

    return jsonify({"message" : "Rol creado"}),200

@api.route("/get_role", methods=["GET"])
@jwt_required()
def get_role():
    return jsonify([role.serialize() for role in Role.query.all()]), 200

@api.route("/weekdays", methods=["GET"])
@jwt_required()
def get_weekdays():
    return jsonify([name.serialize() for name in Weekdays.query.all()]), 200

@api.route('/weekdays', methods=["POST"])
@jwt_required()
def create_weekdays():
    name = request.json.get("name", None)

    not_unique_name = Weekdays.query.filter_by(name = name).first()
    if not_unique_name != None:
        return jsonify({"message": "Este día de la semana ya está creado, burro"}),401
    
    if name == '' or name == None:
        return jsonify({"message": "Debes introducir un nombre"}), 401

    new_sessions_type = Weekdays(name = name)
    db.session.add(new_sessions_type)
    db.session.commit()

    return jsonify({"message" : "Día de la semana creado con éxito"}),200
    

@api.route('/sessions_type', methods=["POST"])
@jwt_required()
def create_sessions_type():
    name = request.json.get("name", None)

    not_unique_name = Sessions_type.query.filter_by(name = name).first()
    if not_unique_name != None:
        return jsonify({"message": "Esta no es tu sesion, prueba con otra."}),401
    
    if name == '' or name == None:
        return jsonify({"message": "Introduce un tipo de sesion"}), 401

    new_sessions_type = Sessions_type(name = name)
    db.session.add(new_sessions_type)
    db.session.commit()

    return jsonify({"message" : "Nuevo tipo de sesion creada"}),200

@api.route("/get_session_types", methods=["GET"])
@jwt_required()
def get_session_types():
    return jsonify([session_type.serialize() for session_type in Sessions_type.query.all()]), 200

@api.route('/suscription_type', methods=["POST"])
@jwt_required()
def create_suscription_type():
    name = request.json.get("name", None)

    not_unique_name = Suscription_type.query.filter_by(name = name).first()
    if not_unique_name != None:
        return jsonify({"message": "Esta no es tu suscripcion, prueba con otra."}),401
    
    if name == '' or name == None:
        return jsonify({"message": "Introduce otra suscripcion"}), 401

    new_suscription_type = Suscription_type(name = name)
    db.session.add(new_suscription_type)
    db.session.commit()

    return jsonify({"message" : "Tu suscripcion ha sido creada"}),200

@api.route("/get_suscription_types", methods=["GET"])
@jwt_required()
def get_suscription_type():
    return jsonify([suscription_type.serialize() for suscription_type in Suscription_type.query.all()]), 200

@api.route("/validate", methods=["GET"])
@jwt_required()
def handle_validate():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    if user:
        return jsonify({"validate": True}), 200
    else:
        return jsonify({"validate": False}), 400

@api.route("/thisweek", methods=["GET"])
# @jwt_required()
def weeklysessions():
    today = date.today()
    data_response = []
    for i in range(7):
        endDate = date.today() + timedelta(days=i)
        whichDay = format_date(endDate, format='EEEE', locale='es').capitalize()
        dsessions = Sessions.query.filter(Sessions.weekdays.has(name=whichDay)).order_by(Sessions.start_time).all()
        for n in dsessions:
            userspersession = User_sessions.query.filter_by(sessions_id=n.id).count()
            n.users_per_session = userspersession
        data_response.append({
            "label": whichDay,
            "sessions": [dailysessions.serialize() for dailysessions in dsessions],
            "date": endDate,
        })

    return jsonify(data_response),200