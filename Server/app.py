from flask import Flask, jsonify, request, abort
from flask_restful import Api, Resource
import requests
import json
import os
import numpy as np
import base64
from flask_cors import CORS
from model.predict import predict

app = Flask(__name__)
CORS(app)
api = Api(app)

class Predict(Resource):
    def post(self):
        postedData = request.get_json()
        
        encodeString = postedData["encodeString"]

        try:
            result = predict(encodeString)
            return { 
                    "status": 200,
                    "result": result
                }
        except:
            abort( 400, "Bad request, predict failed.")

class Cat(Resource):
    def get(self):

        ROOT_DIR = os.path.dirname(os.path.realpath(__file__))
        data_path = os.path.join(ROOT_DIR, "DB", "data.json")
        print(data_path)
        
        try:
            with open(data_path) as json_file:
                json_data = json.load(json_file)

                for i in json_data["items"]:
                    file_path = os.path.join(ROOT_DIR, "DB/images", i["Image"])

                    with open(file_path, "rb") as image_file:
                        encoded_string = base64.b64encode(image_file.read())
                        i['image_string'] = encoded_string.decode('utf-8')
                        image_file.close()
                json_file.close()  
                return {
                            **json_data,
                            "status":200
                        }
        except:
            abort( 400, "Bad request, get cat data failed.")


api.add_resource(Predict, "/predict")
api.add_resource(Cat, "/cat")

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8000)
