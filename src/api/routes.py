"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Role, Suscription, Sessions, Sessions_type, Suscription_type
from api.utils import generate_sitemap, APIException
from sqlalchemy.exc import IntegrityError
from psycopg2.errors import NotNullViolation, UniqueViolation
from flask_jwt_extended import jwt_required, create_access_token, get_jwt_identity

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

    # if None in [username, password, email, phone, first_name, last_name, conditions_terms]:
    #     return jsonify({"message" : "Alguno de los campos obligatorios no furula"}),400
    try:
        role = Role.query.filter_by(name="user").first()
        new_user = User(username = username, password = password, email = email, phone = phone, 
                        first_name = first_name, last_name = last_name, adress = adress, 
                        avatar_url = avatar_url, conditions_terms = conditions_terms, 
                        marketing_comunication = marketing_comunication, info = info, is_active = False, role_id = role.id)
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
def create_suscription():
     name = request.json.get("name", None)
     description = request.json.get("description", None)
     price = request.json.get("price", None)
     tokens = request.json.get("tokens", None)
     suscription_image = request.json.get("suscription_image", None)

     not_unique_name = Suscription.query.filter_by(name = name).first()  
     if not_unique_name != None:
        return jsonify({"message": "Este suscritor ya existe, prueba con otro."}),401

     if name == '' or name == None or description == '' or description == None or price == '' or price == None or tokens == '' or tokens == None or suscription_image == '' or suscription_image == None:
        return jsonify({"message": "Rellena todos los campos obligatorios"}), 401
    
    
     new_suscription = Suscription(name = name, description = description, price = price, tokens = tokens, suscription_image = suscription_image)
     db.session.add(new_suscription)
     db.session.commit()
 
     return jsonify({"message" : "Suscription nueva creada"}),200


@api.route('/sessions', methods=["POST"])
def create_sessions():
     name = request.json.get("name", None)
     description = request.json.get("description", None)
     regular = request.json.get("regular", None)
     days = request.json.get("days", None)
     start_time = request.json.get("start_time", None)
     duration = request.json.get("duration", None)
     max_users = request.json.get("max_users", None)
     sessions_type_id = request.json.get("session_type_id", None)
     
     not_unique_name = Sessions.query.filter_by(name = name).first()  
     if not_unique_name != None:
        return jsonify({"message": "Este nombre ya existe, prueba con otro."}),401
    
     if name == '' or name == None or description == '' or description == None or regular == '' or regular == None or days == '' or days == None or start_time == '' or start_time == None or duration == '' or duration == None or max_users == '' or max_users == None or sessions_type_id == '' or sessions_type_id == None:
        return jsonify({"message": "Rellena todos los campos obligatorios"}), 401

     new_sessions = Sessions(name = name, description = description, regular = regular, days = days, start_time = start_time, duration = duration, max_users = max_users, sessions_type_id = sessions_type_id)
     db.session.add(new_sessions)
     db.session.commit()
 
     return jsonify({"message" : "Session nueva creada"}),200


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
def get_role():
    return jsonify([role.serialize() for role in Role.query.all()]), 200


    

@api.route('/sessions_type', methods=["POST"])
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