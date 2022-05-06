  
import os
from flask_admin import Admin
from .models import db, User, Suscription, Sessions, Payments, Role, Sessions_type, Suscription_type, User_sessions, Available_sessions, Weekdays, Icon_library
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Suscription, db.session))
    admin.add_view(ModelView(Sessions, db.session))
    admin.add_view(ModelView(Payments, db.session))
    admin.add_view(ModelView(Role, db.session))
    admin.add_view(ModelView(Sessions_type, db.session))
    admin.add_view(ModelView(Suscription_type, db.session))
    admin.add_view(ModelView(User_sessions, db.session))
    admin.add_view(ModelView(Available_sessions, db.session))
    admin.add_view(ModelView(Weekdays, db.session))
    admin.add_view(ModelView(Icon_library, db.session))


    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))