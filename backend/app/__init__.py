from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app, resources={
        r"/analyze": {
            "origins": [
                "http://localhost:8080",
                "http://127.0.0.1:8080"
            ],
            "methods": ["POST"],
            "allow_headers": ["Content-Type"]
        }
    })

    from app.routes import routes
    app.register_blueprint(routes)

    return app
