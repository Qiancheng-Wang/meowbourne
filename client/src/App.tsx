import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

import { CatsContextProvider } from "./contexts/cats";
import { PredictContextProvider } from "./contexts/predict";

import StartButton from "./components/StartButton";
import MainPage from "./components/MainPage";
import PredictPage from "./components/PredictPage";

function App() {
  return (
    <CatsContextProvider>
      <PredictContextProvider>
        <div className="App">
          <Switch>
            <Route path={"/start"} component={StartButton} />
            <Route path={"/mainpage"} component={MainPage} />
            <Route path={"/predict_result"} component={PredictPage} />

            <Redirect from="/" to={"/start"} />
          </Switch>
        </div>
      </PredictContextProvider>
    </CatsContextProvider>
  );
}

export default App;
