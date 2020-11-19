import os
import sys
import numpy as np
import pandas as pd
import tensorflow as tf
import cv2
import json
import base64

def read_image(path, size):
    image = cv2.imread(path, cv2.IMREAD_COLOR)
    image = cv2.resize(image, (size, size))
    image = image / 255.0
    image = image.astype(np.float32)
    return image

def predict(encodeString):
    labels_path = os.path.join(os.path.dirname(__file__), "labels.csv")
    ROOT_DIR = os.path.dirname(os.path.realpath(__file__)).rsplit(os.sep, 2)[0]
    # 1. import model h5 file
    MODEL_DIRECTORY = os.path.join(os.path.dirname(__file__),"model.h5");
    model = tf.keras.models.load_model(MODEL_DIRECTORY)

    # 2. read image
    #image = read_image(os.path.join(ROOT_DIR, "DB", "images", encodeString), 224)

    temp_path = os.path.join(os.path.dirname(__file__), "Temp.jpg")
    imgdata = base64.b64decode(encodeString)
    with open(temp_path, 'wb') as f:
        f.write(imgdata)

    image = read_image(temp_path, 224)

    image = np.expand_dims(image, axis=0)

    # 3. predict
    pred = model.predict(image)[0]
    label_idx = np.argmax(pred)

    # 4. top 5 possibility
    np_pred = np.array(pred)
    top_5_ind = np.argpartition(np_pred, -5)[-5:]
    # print(top_5_ind)
    top_5_res = np_pred[top_5_ind]
    # print(top_5_res)
    labels_df = pd.read_csv(labels_path)
    breed = labels_df["breed"].unique()
    id2breed = {i: name for i, name in enumerate(breed)}
    breed_res = {}
    for i in range(5):
        breed_res[id2breed[top_5_ind[i]]] = json.dumps(top_5_res[i].astype(float))

    print(breed_res)
    return breed_res

if __name__ == "__main__":
    predict(sys.argv[1])