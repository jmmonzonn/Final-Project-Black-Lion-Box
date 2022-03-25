"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
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

  
    not_unique_username = User.query.filter_by(username = username).first()
    if not_unique_username != None:
        return jsonify({"message": "Este usuario ya existe, prueba con otro."})  

    not_unique_email = User.query.filter_by(email=email).first()
    if not_unique_email != None:
        return jsonify({"message": "Este email ya existe, prueba con otro."})

    not_unique_phone = User.query.filter_by(phone=phone).first()
    if not_unique_phone != None:
        return jsonify({"message": "Este teléfono ya existe, prueba con otro."})

    if username == '':
        return jsonify({"message": "Introduce un usuario."}), 401
        
    if password == '':
        return jsonify({"message": "Introduce una contraseña."}), 401
        
    if email == '':
        return jsonify({"message": "Introduce un email."}), 401

    if phone == '':
        return jsonify({"message": "Introduce un número de teléfono."}), 401

    if first_name == '':
        return jsonify({"message": "Introduce un nombre."}), 401

    if last_name == '':
        return jsonify({"message": "Introduce un apellido."}), 401

    if conditions_terms == False:
        return jsonify({"message": "Acepta los términos y condiciones."}), 401

      # Query your database for username and password
    new_user = User(username = username, password = password, email = email, phone = phone, first_name = first_name, last_name = last_name, adress = adress, avatar_url = avatar_url, conditions_terms = conditions_terms, marketing_comunication = marketing_comunication, info = info, is_active = False)
    db.session.add(new_user)
    db.session.commit()
    
    return jsonify({"message" : "Usuario registrado"}),200