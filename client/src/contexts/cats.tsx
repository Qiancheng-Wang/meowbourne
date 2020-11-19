import React, { createContext } from "react";
import { initialState, catsReducer } from "../states/cats";

interface Dispatch {
  type: string;
  data?: any;
}

interface CatsProps {
  state: Cat;
  dispatch: (d: Dispatch) => void;
}

interface Cat {
  loading: boolean;
  data: null | any;
  error: boolean;
}

export const CatsContext = createContext({} as CatsProps);

export const CatsContextProvider = (props: any) => {
  const [state, dispatch] = React.useReducer(catsReducer, initialState);
  return (
    <CatsContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CatsContext.Provider>
  );
};
