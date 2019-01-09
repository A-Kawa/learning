import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../store/context";
import "../../../styles/ListOfItems.scss";
import { Button, Label, Grid } from "semantic-ui-react";
import { getAll } from "../../../indexDB/getAllRecords";

export const ListOfItems = () => {
  const context = useContext(Context);
  getAll();
  if (context.myState.length >= 1) {
    return context.myState.map(form => {
      return (
        <div className="list-div-item" key={form.name + form.ID}>
          <Label className="label-item">
            <Grid columns={2}>
              <Grid.Column className="item-left">
                <Link to={`/form/${form.ID}`}>
                  <h3>{form.name}</h3>
                </Link>
              </Grid.Column>
              <Grid.Column className="item-right">
                {" "}
                <Button
                  onClick={e => {
                    context.deleteRecord(e.target.name);
                  }}
                  name={form.ID}
                  className="button"
                  content="Delete"
                  size="small"
                  color="red"
                />
              </Grid.Column>
            </Grid>
          </Label>
        </div>
      );
    });
  } else if (context.myState.length === 0) {
    return <h1> </h1>;
  } else {
    return <h1>...</h1>;
  }
};
