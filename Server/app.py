from flask import Flask, jsonify, request, abort
from flask_restful import Api, Resource
import requests
import json

from model.predict import predict

app = Flask(__name__)
api = Api(app)

class Predict(Resource):
    def post(self):
        postedData = request.get_json()
        
        path = postedData["path"]

        try:
            result = predict(path)
            return { 
                "status": 200,
                "result": result
            }
        except:
            abort( 400, "Bad request, predict failed.")


api.add_resource(Predict, "/predict")

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8000)
