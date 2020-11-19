import React from "react";
import CatButton from "../../assets/cat_button.png";
import "./styles.css";
import history from "../../history";

import { getCats } from "../../api/cat";

import { CatsContext } from "../../contexts/cats";

import {
  GET_CATS,
  GET_CATS_SUCCESS,
  GET_CATS_FAILURE,
} from "../../constants/actionTypes";

const StartButton: React.FC = () => {
  const {
    state: { loading },
    dispatch,
  } = React.useContext(CatsContext);

  const getCatHandler = async () => {
    try {
      dispatch({
        type: GET_CATS,
      });

      const res = await getCats();
      dispatch({
        type: GET_CATS_SUCCESS,
        data: res.data,
      });
    } catch (error) {
      dispatch({
        type: GET_CATS_FAILURE,
      });
    }
    history.push("/mainpage");
  };

  return (
    <div className={loading ? "ButtonCtn" : "ButtonCtnPause"}>
      <img
        className={loading ? "Cat-logo" : "Image"}
        src={CatButton}
        alt="cat button"
        onClick={() => getCatHandler()}
      />
    </div>
  );
};

export default StartButton;
