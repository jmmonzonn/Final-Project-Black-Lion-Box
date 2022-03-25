"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Role
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

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