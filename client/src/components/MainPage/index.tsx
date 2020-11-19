import React from "react";
import { CatsContext } from "../../contexts/cats";
import history from "../../history";

import ErrorPage from "../ErrorPage";
import CardsPage from "./CardsPage";

const MainPage: React.FC = () => {
  const {
    state: { error, data, loading },
  } = React.useContext(CatsContext);

  React.useEffect(() => {
    if (!data && !loading) history.push("/");
  }, [data, loading]);

  return error ? <ErrorPage /> : <CardsPage />;
};

export default MainPage;
