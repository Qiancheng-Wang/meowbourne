from flask import Flask, jsonify, request, abort
from flask_restful import Api, Resource
import requests
import json
import os

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

class Cat(Resource):
    def get(self):

        ROOT_DIR = os.path.dirname(os.path.realpath(__file__)).rsplit(os.sep, 1)[0]
        data_path = os.path.join(ROOT_DIR, "DB", "data.json")
        print(data_path)
        
        try:
            with open(data_path) as json_file:
                json_data = json.load(json_file)
                return {
                    **json_data
                }
        except:
           abort( 400, "Bad request, get cat data failed.")


api.add_resource(Predict, "/predict")
api.add_resource(Cat, "/cat")

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8000)
