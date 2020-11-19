import React from "react";
import { PredictContext } from "../../contexts/predict";
import history from "../../history";
import "./styles.css";

import ErrorPage from "../ErrorPage";

const PredictPage: React.FC = () => {
  const {
    state: { error, loading, data },
  } = React.useContext(PredictContext);

  React.useEffect(() => {
    if (!data && !loading) history.push("/");
  }, [data, loading]);

  const result = React.useMemo(() => {
    const resArr: Array<Array<string | number>> = [];
    if (!!data) {
      for (let key in data.result) {
        resArr.push([key, data.result[key]]);
      }
    }

    return resArr;
  }, [data]);

  return error ? (
    <ErrorPage />
  ) : loading ? (
    <div className="Container">
      <div>Loading</div>
    </div>
  ) : (
    <div className="Container">
      {result.map((possibility, index) => (
        <div key={index}>
          {possibility[0]} : {possibility[1]}
        </div>
      ))}
    </div>
  );
};

export default PredictPage;
