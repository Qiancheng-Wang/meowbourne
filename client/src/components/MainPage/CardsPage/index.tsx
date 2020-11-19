import React from "react";
import { CatsContext } from "../../../contexts/cats";
import Grid from "@material-ui/core/Grid";

import Card from "./Card";

interface CardProps {
  Age: string;
  Breed: string;
  Breeder_ID: string;
  Colour: string;
  Description: string;
  Image: string;
  Name: string;
  Sex: string;
  Size: string;
  _id: string;
  image_string: string;
}

const MainPage: React.FC = () => {
  const {
    state: {
      data: { items },
    },
  } = React.useContext(CatsContext);

  return (
    <Grid container spacing={3}>
      {items.map((c: CardProps) => (
        <Grid item xs={6} sm={3}>
          <Card
            name={c.Name}
            breed={c.Breed}
            breederId={c.Breeder_ID}
            color={c.Colour}
            desc={c.Description}
            image={c.Image}
            sex={c.Sex}
            size={c.Size}
            id={c._id}
            imageString={c.image_string}
            age={c.Age}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default MainPage;
