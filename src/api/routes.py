"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Role, Suscription, Sessions
from api.utils import generate_sitemap, APIException

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
    is_active = request.json.get("is_active", None)
  
    not_unique_username = User.query.filter_by(username = username).first()
    if not_unique_username != None:
        return jsonify({"message": "Este usuario ya existe, prueba con otro."})  

    not_unique_email = User.query.filter_by(email=email).first()
    if not_unique_email != None:
        return jsonify({"message": "Este email ya existe, prueba con otro."})

    not_unique_phone = User.query.filter_by(phone=phone).first()
    if not_unique_phone != None:
        return jsonify({"message": "Este teléfono ya existe, prueba con otro."})

    if username == '' or username == None:
        return jsonify({"message": "Introduce un usuario."}), 401
        
    if password == '' or password == None:
        return jsonify({"message": "Introduce una contraseña."}), 401
        
    if email == '' or email == None:
        return jsonify({"message": "Introduce un email."}), 401

    if phone == '' or phone == None:
        return jsonify({"message": "Introduce un número de teléfono."}), 401

    if first_name == '' or first_name == None:
        return jsonify({"message": "Introduce un nombre."}), 401

    if last_name == '' or last_name == None:
        return jsonify({"message": "Introduce un apellido."}), 401

    if avatar_url == '' or avatar_url == None:
            return jsonify({"message": "Introduce un avatar."}), 401

    if conditions_terms == False or conditions_terms == None:
        return jsonify({"message": "Acepta los términos y condiciones."}), 401

    if marketing_comunication == False or marketing_comunication == None:
        return jsonify({"message": "Acepta los el marketing, puto ruso."}), 401

    if info == '' or info == None:
        return jsonify({"message": "Introduce la info, verga, marico."}), 401

    if is_active == None:
        return jsonify({"message": "Estás active?"}), 401

      # Query your database for username and password
    new_user = User(username = username, password = password, email = email, phone = phone, first_name = first_name, last_name = last_name, adress = adress, avatar_url = avatar_url, conditions_terms = conditions_terms, marketing_comunication = marketing_comunication, info = info, is_active = is_active)
    db.session.add(new_user)
    db.session.commit()
    
    return jsonify({"message" : "Usuario registrado"}),200


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

     not_unique_name = Sessions.query.filter_by(name = name).first()  
     if not_unique_name != None:
        return jsonify({"message": "Este nombre ya existe, prueba con otro."}),401
    
     if name == '' or name == None or description == '' or description == None or regular == '' or regular == None or days == '' or days == None or start_time == '' or start_time == None or duration == '' or duration == None or max_users == '' or max_users == None:
        return jsonify({"message": "Rellena todos los campos obligatorios"}), 401

     new_sessions = Sessions(name = name, description = description, regular = regular, days = days, start_time = start_time, duration = duration, max_users = max_users)
     db.session.add(new_sessions)
     db.session.commit()
 
     return jsonify({"message" : "Session nueva creada"}),200


@api.route('/role', methods=["POST"])
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