import React from "react";
import { CatsContext } from "../../contexts/cats";

import ErrorPage from "./ErrorPage";
import CardsPage from "./CardsPage";

const MainPage: React.FC = () => {
  const {
    state: { error },
  } = React.useContext(CatsContext);

  return error ? <ErrorPage /> : <CardsPage />;
};

export default MainPage;
