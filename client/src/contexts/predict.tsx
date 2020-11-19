import React, { createContext } from "react";
import { initialState, predictReducer } from "../states/predict";

interface Dispatch {
  type: string;
  data?: any;
}

interface PredictProps {
  state: Predict;
  dispatch: (d: Dispatch) => void;
}

interface Predict {
  loading: boolean;
  data: null | any;
  error: boolean;
}

export const PredictContext = createContext({} as PredictProps);

export const PredictContextProvider = (props: any) => {
  const [state, dispatch] = React.useReducer(predictReducer, initialState);
  return (
    <PredictContext.Provider value={{ state, dispatch }}>
      {props.children}
    </PredictContext.Provider>
  );
};
