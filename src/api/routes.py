"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, redirect
from api.models import db, User, Role, Suscription, Sessions, Sessions_type, Suscription_type, Weekdays, User_sessions, Icon_library, Payments
from api.utils import generate_sitemap, APIException
from sqlalchemy.exc import IntegrityError
from psycopg2.errors import NotNullViolation, UniqueViolation
from flask_jwt_extended import jwt_required, create_access_token, get_jwt_identity
from datetime import date, timedelta, datetime
import calendar
from sqlalchemy import extract  
import json
import os
import stripe
import cloudinary
import cloudinary.uploader
stripe.api_key = 'sk_test_51Kj4gkDlzem2mj3wDWi04s8L4wuY6z5JyfSowGjpDreXl81PbLpgU54KKex8ZycEMrmGXFF5YyNYj3ELJ4iuZtZd00GSOzhcF4'


from babel.dates import format_date

api = Blueprint('api', __name__)

@api.route('/postUser', methods=["POST"])
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

    try:

        role = Role.query.filter_by(name="user").first() if not role_id else Role.query.filter_by(id=role_id).first()
        new_user = User(username = username, password = password, email = email, phone = phone, 
                        first_name = first_name, last_name = last_name, adress = adress, 
                        avatar_url = avatar_url, conditions_terms = conditions_terms, 
                        marketing_comunication = marketing_comunication, info = info, is_active = False, role = role, role_id = role_id)
        db.session.add(new_user)
        db.session.commit()
        data_response = create_token(new_user)
    except IntegrityError as ex:
        print(ex)
        if isinstance(ex.orig, NotNullViolation):
            return jsonify({"message" : "Los campos son obligatorios no pueden quedar como null."}),400
        elif isinstance(ex.orig, UniqueViolation):
            return jsonify({"message" : "Ya se encuentra un usuario registrado con estos datos"}),400
        return jsonify({"message" : ex.orig}),400 

    # if None in [username, password, email, phone, first_name, last_name, conditions_terms]:
    #     return jsonify({"message" : "Alguno de los campos obligatorios no furula"}),400
   

    return jsonify({"message" : "Usuario registrado", "response": data_response}),200

# Eliminar usuarios
@api.route("/delete_user/<id>", methods=["DELETE"])
def delete_user(id):
    try:
        user = User.query.filter_by(id=id).first()
        db.session.delete(user)
        db.session.commit()

    except:
        return jsonify({"message": "Error"}), 400
    
    return jsonify({"message": "Usuario eliminado."})

# @api.route("/delete_user_sessu/<id>", methods=["DELETE"])
# def delete_user(id):
#     try:
#         user = User.query.filter_by(id=id).first()
#         db.session.delete(user)
#         db.session.commit()

#     except:
#         return jsonify({"message": "Error"}), 400
    
#     return jsonify({"message": "Usuario eliminado."})


# Modificar usuarios desde el administrador
@api.route("/edit_user/<id>", methods=["PUT"])
def edit_user(id):
    try:
        user = User.query.filter_by(id=id).first()
    except:
        return jsonify({"message": "usuario no existe"}), 400

    new_username = request.json.get("username", user.username)
    new_email = request.json.get("email", user.email)
    new_phone = request.json.get("phone", user.phone)
    new_first_name = request.json.get("first_name", user.first_name)
    new_last_name = request.json.get("last_name", user.last_name)
    new_adress = request.json.get("adress", user.adress)
    new_info = request.json.get("info", user.info)
    new_role_id = request.json.get("role_id", user.role_id)
    new_remaining_tokens = request.json.get("remaining_tokens", user.remaining_tokens)

    setattr(user, "username", new_username)
    setattr(user, "email", new_email)
    setattr(user, "phone", new_phone)
    setattr(user, "first_name", new_first_name)
    setattr(user, "last_name", new_last_name)
    setattr(user, "adress", new_adress)
    setattr(user, "info", new_info)
    setattr(user, "role_id", new_role_id)
    setattr(user, "remaining_tokens", new_remaining_tokens)

    db.session.commit()
       
    return jsonify(user.serialize()), 200

@api.route("/edit_suscriptions/<int:id>", methods=["PUT"])
# @jwt_required()
def edit_suscriptions(id):
    try:
        suscription = Suscription.query.get(id)
    except:
        return jsonify({"message": "Error"}), 400

    new_name = request.json.get("name", suscription.name)
    new_description = request.json.get("description", suscription.description)
    new_price = request.json.get("price", suscription.price)
    new_tokens = request.json.get("tokens", suscription.tokens)
    new_suscription_type_id = request.json.get("suscription_type_id", suscription.suscription_type_id)
   

    setattr(suscription, "name", new_name)
    setattr(suscription, "description", new_description)
    setattr(suscription, "price", new_price)
    setattr(suscription, "tokens", new_tokens)
    setattr(suscription, "suscription_type_id", new_suscription_type_id)
    
    db.session.commit()
       
    return jsonify(suscription.serialize()), 200

@api.route("/edit_session/<int:id>", methods=["PUT"])
# @jwt_required()
def edit_session(id):
    try:
        session = Sessions.query.get(id)
    except:
        return jsonify({"message": "Error"}), 400

    new_name = request.json.get("name", session.name)
    new_description = request.json.get("description", session.description)
    new_regular = request.json.get("regular", session.regular)
    new_weekdays_id = request.json.get("weekdays_id", session.weekdays_id)
    new_start_time = request.json.get("start_time", session.start_time)
    new_duration = request.json.get("duration", session.duration)
    new_max_users = request.json.get("max_users", session.max_users)
    new_sessions_type_id = request.json.get("sessions_type_id", session.sessions_type_id)

   

    setattr(session, "name", new_name)
    setattr(session, "description", new_description)
    setattr(session, "regular", new_regular)
    setattr(session, "weekdays_id", new_weekdays_id)
    setattr(session, "start_time", new_start_time)
    setattr(session, "duration", new_duration)
    setattr(session, "max_users", new_max_users)
    setattr(session, "sessions_type_id", new_sessions_type_id)
    
    db.session.commit()
       
    return jsonify(session.serialize()), 200
    
def create_token(user): 
    token = create_access_token(identity=user.id)

    return {
        "token": token,
        "username": user.username,
        "id": user.id,
        "role": user.role.name, 
        "email": user.email
    }

@api.route("/get_users", methods=["GET"])
def get_users():
    return jsonify([user.serialize() for user in User.query.all()]), 200

@api.route("/stripe_pay", methods=["POST"])
def payload():
    data = request.json['type']
    if data == "charge.succeeded":
        
        email = request.json['data']['object']['billing_details']['email']
        user = User.query.filter_by(email=email).first()
        subscription = Suscription.query.filter_by(id=user.suscription_id).first()
        now = datetime.now()
        new_payment = Payments(user_id = user.id, suscription_id = subscription.id, payment_date = str(now)[:-7])
        db.session.add(new_payment)
        setattr(user, "remaining_tokens", subscription.tokens)
        db.session.commit()
            
    
    
            
        
    return jsonify(request.json)

@api.route("/stripe_pay/<subs_id>/<user_id>", methods=["POST"])
def create_checkout_session(subs_id, user_id):
    try:
        subscription = Suscription.query.filter_by(id=subs_id).first()
        user = User.query.filter_by(id=user_id).first()
        checkout_session = stripe.checkout.Session.create(
            customer_email=user.email,
            billing_address_collection='auto',
            line_items=[
                {
                    'price_data': {
                        'currency': 'eur',
                        'product_data': {
                            'name': subscription.name,
                        },
                        'unit_amount': subscription.price * 100,
                    },
                    'quantity': 1,
                },
            ],
            mode='payment',
            success_url='https://3000-jmmonzonn-finalprojectb-nuuo6x68ja9.ws-eu45.gitpod.io/user/dashboard',
            cancel_url='https://3000-jmmonzonn-finalprojectb-lcmruucp4ya.ws-eu45.gitpod.io/cancel',
        )
        setattr(user, "suscription_id", subs_id)
        db.session.commit()
    except Exception as e:
        return str(e)

    return redirect(checkout_session.url, code=303)

@api.route("/upload/<user_id>", methods=["POST"])
def upload(user_id):
    user = User.query.filter_by(id=user_id).first()
    print(user.id)
    result = cloudinary.uploader.upload(request.files['profile_image'], public_id=f'user_images/{user.username}')
    
    new_avatar_url = result['secure_url']
   
    setattr(user, "avatar_url", new_avatar_url)
    
    db.session.commit()
    
    return jsonify("que pasa nota"), 200

@api.route('/login', methods=['POST'])
def login():
    username = request.json.get("username")
    password = request.json.get("password")

    user = User.query.filter_by(username=username, password=password).first()
    if not user:
        return jsonify({"message": "El usuario no fue encontrado."}), 401

    token = create_access_token(identity=user.id)

    data_response = create_token(user)

    return jsonify(data_response), 200

@api.route('/suscription', methods=["POST"])
#@jwt_required()
def create_suscription():
    name = request.json.get("name", None)
    description = request.json.get("description", None)
    price = request.json.get("price", None)
    tokens = request.json.get("tokens", None)
    suscription_type_id = request.json.get("suscription_type_id", None)
    

    try:

        suscription_type = Suscription_type.query.filter_by(id=suscription_type_id).first()
        new_suscription = Suscription(name = name, description = description, price = price, tokens = tokens, suscription_type_id = suscription_type_id, suscription_type = suscription_type)
        db.session.add(new_suscription)
        db.session.commit()

    except IntegrityError as ex:
        print(ex)
        if isinstance(ex.orig, NotNullViolation):
            return jsonify({"message" : "Los campos son obligatorios no pueden quedar como null."}),400
        elif isinstance(ex.orig, UniqueViolation):
            return jsonify({"message" : "Ya se encuentra una suscripción registrado con estos datos"}),400
        return jsonify({"message" : ex.orig}),400 

    
     
    suscription_type = request.json.get("suscription_type", None)

    not_unique_name = Suscription.query.filter_by(name = name).first()  
    if not_unique_name != None:
        return jsonify({"message": "Este suscritor ya existe, prueba con otro."}),401

    if name == '' or name == None or description == '' or description == None or price == '' or price == None or tokens == '' or tokens == None:
        return jsonify({"message": "Rellena todos los campos obligatorios"}), 401
    
    
    new_suscription = Suscription(name = name, description = description, price = price, tokens = tokens, suscription_type_id = suscription_type_id)
    db.session.add(new_suscription)
    db.session.commit()

    return jsonify({"message" : "Suscription nueva creada"}),200

@api.route("/get_suscriptions", methods=["GET"])
#@jwt_required()
def get_suscriptions():
    return jsonify([suscription.serialize() for suscription in Suscription.query.all()]), 200

@api.route("/get_suscription/<id>", methods=["GET"])
#@jwt_required()
def get_suscription(id):
    return jsonify([suscription.serialize() for suscription in Suscription.query.filter_by(id=id)]), 200


@api.route("/delete_suscriptions/<int:id>", methods=["DELETE"])
# @jwt_required()
def delete_suscriptions(id):

    try:
        suscription = Suscription.query.get(id)
        db.session.delete(suscription)
        db.session.commit()

    except Exception as e: 
        print(e) 
        return jsonify({"message": "Error"}), 400
    
    return jsonify({"message": "suscription eliminada."}), 200


# Modificar subscripciones desde el administrador



@api.route('/postSession', methods=["POST"])
#@jwt_required()
def create_sessions():
    name = request.json.get("name", None)
    description = request.json.get("description", None)
    regular = request.json.get("regular", None)
    weekdays_id = request.json.get("weekdays_id", None)
    start_time = request.json.get("start_time", None)
    duration = request.json.get("duration", None)
    max_users = request.json.get("max_users", None)
    sessions_type_id = request.json.get("sessions_type_id", None)
#  session_type_icon_id = request.json.get("sessions_type_icon_id", None)

    
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
#@jwt_required()
def get_sessions():
    return jsonify([sessions.serialize() for sessions in Sessions.query.all()]), 200

@api.route("/get_user_sessions", methods=["GET"])
#@jwt_required()
def get_user_sessions():
    return jsonify([user_sessions.serialize() for user_sessions in User_sessions.query.all()]), 200

@api.route("/get_user_session/<user_id>", methods=["GET"])
#@jwt_required()
def user_sessions(user_id):
    currentMonth = datetime.now().month
    currentYear = datetime.now().year
    results = User_sessions.query.filter_by(user_id=user_id).filter(extract('month', User_sessions.date)==currentMonth).filter(extract('year', User_sessions.date)==currentYear).all()
    return jsonify([user_sessions.serialize() for user_sessions in results]), 200

@api.route("/user_sessions2/<user_id>/<sessions_id>", methods=["GET"])
#@jwt_required()
def user_sessions2(user_id, sessions_id):
    currentMonth = datetime.now().month
    currentYear = datetime.now().year
    results = User_sessions.query.filter_by(user_id=user_id,sessions_id=sessions_id).filter(extract('month', User_sessions.date)==currentMonth).filter(extract('year', User_sessions.date)==currentYear).all()
    return jsonify([user_sessions.serialize() for user_sessions in results]), 200

@api.route("/get_user/<id>", methods=["GET"])
#@jwt_required()
def user_info(id):
    user = User.query.filter_by(id=id)
    if user:
        return jsonify(user[0].serialize()), 200
    return jsonify("usuario no encontrado"), 400

@api.route("/joinsession", methods=["POST"])
@jwt_required()
def joinsession():
    date = request.json.get("date", None)
    sessions_id = request.json.get("sessions_id", None)
    user = get_jwt_identity()

    usersession = User_sessions(user_id = user, date = date, sessions_id = sessions_id)
    db.session.add(usersession)
    db.session.commit()

    return jsonify([user_sessions.serialize() for user_sessions in User_sessions.query.all()]),200


@api.route("/delete_user_session/<user_id>/<sessions_id>/<year>/<month>/<day>", methods=["DELETE"])
@jwt_required()
def delete_user_session(user_id, sessions_id, year, month, day):
    try:
        date = year + "/" + month + "/" + day
        user_session = User_sessions.query.filter_by(user_id=user_id, sessions_id=sessions_id, date=date).first()
        db.session.delete(user_session)
        db.session.commit()

    except:
        return jsonify({"message": "Error"}), 400
    
    return jsonify([user_sessions.serialize() for user_sessions in User_sessions.query.all()]), 200

@api.route("/delete_session/<id>", methods=["DELETE"])
# @jwt_required()
def delete_session(id):
    try:
        sessions = Sessions.query.filter_by(id=id).first()
        db.session.delete(sessions)
        db.session.commit()

    except Exception as e:
        print(e)
        return jsonify({"message": "Error"}), 400
    
    return jsonify({"message": "Sesion eliminada."}), 200


@api.route('/role', methods=["POST"])
#@jwt_required()
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

@api.route("/get_roles", methods=["GET"])
#@jwt_required()
def get_roles():
    return jsonify([role.serialize() for role in Role.query.all()]), 200

@api.route("/get_weekdays", methods=["GET"])
#@jwt_required()
def get_weekdays():
    return jsonify([name.serialize() for name in Weekdays.query.all()]), 200

@api.route('/weekdays', methods=["POST"])
#@jwt_required()
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
#@jwt_required()
def create_sessions_type():
    name = request.json.get("name", None)
    icon_id = request.json.get("icon_id", None)


    not_unique_name = Sessions_type.query.filter_by(name = name).first()
    if not_unique_name != None:
        return jsonify({"message": "Esta no es tu sesion, prueba con otra."}),401
    
    if name == '' or name == None:
        return jsonify({"message": "Introduce un tipo de sesion"}), 401

    new_sessions_type = Sessions_type(name = name, icon_id = icon_id)
    db.session.add(new_sessions_type)
    db.session.commit()

    return jsonify({"message" : "Nuevo tipo de sesion creada"}),200

@api.route("/get_session_types", methods=["GET"])
#@jwt_required()
def get_session_types():
    return jsonify([session_type.serialize() for session_type in Sessions_type.query.all()]), 200

@api.route('/suscription_type', methods=["POST"])
#@jwt_required()
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
#@jwt_required()
def get_suscription_type():
    return jsonify([suscription_type.serialize() for suscription_type in Suscription_type.query.all()]), 200

@api.route("/validate", methods=["GET"])
#@jwt_required()
def handle_validate():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    if user:
        return jsonify({"validate": True}), 200
    else:
        return jsonify({"validate": False}), 400

@api.route("/get_thisweek", methods=["GET"])
@jwt_required()
def weeklysessions():
    user = get_jwt_identity()
    today = date.today()
    data_response = []
    for i in range(7):
        endDate = date.today() + timedelta(days=i)
        whichDay = format_date(endDate, format='EEEE', locale='es').capitalize()
        labelDate = format_date(endDate, format='EEEE d', locale='es').capitalize()
        dsessions = Sessions.query.filter(Sessions.weekdays.has(name=whichDay)).order_by(Sessions.start_time).all()
        for n in dsessions:
            userspersession = User_sessions.query.filter_by(sessions_id=n.id)
            n.users_per_session = userspersession.count()
            isuserinsession = User_sessions.query.filter_by(sessions_id=n.id,user_id=user).first()
            if isuserinsession:
                n.user_logged = True
        data_response.append({
            "label": whichDay,
            "sessions": [dailysessions.serialize() for dailysessions in dsessions],
            "date": endDate.strftime("%Y/%m/%d"),
            "labelDate":labelDate
        })

    return jsonify(data_response),200

@api.route('/icon_library', methods=["POST"])
#@jwt_required()
def create_icon_style():
    name = request.json.get("name", None)
    icon = request.json.get("icon", None)
    color = request.json.get("color", None)

    not_unique_name = Icon_library.query.filter_by(name = name).first()
    if not_unique_name != None:
        return jsonify({"message": "Ya existe un estilo con este nombre."}),401
    
    if name == '' or name == None:
        return jsonify({"message": "El campo 'Nombre' no puede estar vacío"}), 401

    new_icon_style = Icon_library(name = name, icon = icon, color = color)
    db.session.add(new_icon_style)
    db.session.commit()
    
    return jsonify({"message" : "Estilo de icono creado con éxito"}),200







    # This is your Stripe CLI webhook secret for testing your endpoint locally.
endpoint_secret = os.getenv("endpoint_secret")

@api.route('/webhook', methods=['POST'])
def webhook():
    event = None
    payload = request.data

    try:
        event = json.loads(payload)
    except:
        print('⚠️  Webhook error while parsing basic request.' + str(e))
        return jsonify(success=False)
    if endpoint_secret:
        # Only verify the event if there is an endpoint secret defined
        # Otherwise use the basic event deserialized with json
        sig_header = request.headers.get('stripe-signature')
        try:
            event = stripe.Webhook.construct_event(
                payload, sig_header, endpoint_secret
            )
        except stripe.error.SignatureVerificationError as e:
            print('⚠️  Webhook signature verification failed.' + str(e))
            return jsonify(success=False)

    
     # Handle the event
    if event['type'] == 'checkout.session.async_payment_failed':
      session = event['data']['object']
    elif event['type'] == 'checkout.session.async_payment_succeeded':
      session = event['data']['object']
    elif event['type'] == 'checkout.session.completed':
      session = event['data']['object']
    elif event['type'] == 'checkout.session.expired':
      session = event['data']['object']
    # ... handle other event types
    else:
      print('Unhandled event type {}'.format(event['type']))

    return jsonify(success=True)

