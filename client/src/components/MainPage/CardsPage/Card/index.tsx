import React from "react";
import "./styles.css";
import history from "../../../../history";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { predict } from "../../../../api/predict";

import {
  PREDICT_CAT_BREED,
  PREDICT_CAT_BREED_FAILURE,
  PREDICT_CAT_BREED_SUCCESS,
} from "../../../../constants/actionTypes";
import { PredictContext } from "../../../../contexts/predict";

interface CardComponentProps {
  age: string;
  breed: string;
  breederId: string;
  color: string;
  desc: string;
  image: string;
  name: string;
  sex: string;
  size: string;
  id: string;
  imageString: string;
  key: string;
}

const Card: React.FC<CardComponentProps> = ({
  name,
  age,
  color,
  desc,
  sex,
  size,
  imageString,
}) => {
  const { dispatch } = React.useContext(PredictContext);

  const predictHandler = async () => {
    try {
      dispatch({
        type: PREDICT_CAT_BREED,
      });
      history.push("/predict_result");
      const res = await predict({
        encodeString: imageString,
      });
      dispatch({
        type: PREDICT_CAT_BREED_SUCCESS,
        data: res.data,
      });
    } catch (error) {
      dispatch({
        type: PREDICT_CAT_BREED_FAILURE,
      });
    }
  };
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Typography variant="body1" gutterBottom>
            {name}
          </Typography>

          <img
            className="cat-image"
            src={`data:image/png;base64,${imageString}`}
            alt="cat_image"
          />
        </div>
        <div className="flip-card-back">
          <h1>Age: {age}</h1>
          <p>Color: {color}</p>
          <p>Sex: {sex}</p>
          <p>Size: {size}</p>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              predictHandler();
            }}
          >
            Predict Breed
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
