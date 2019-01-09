import React, { useState, useContext } from "react";
import "../../../styles/AddNewForm.scss";
import { Grid, Button, Icon, Label, Input } from "semantic-ui-react";
import { getForm } from "../../utils/getFormWithName";
import { Context } from "../../../store/context";

export const AddNewForm = () => {
  const [name, setName] = useState(" ");
  const context = useContext(Context);
  return (
    <div className="div-main">
      <Label className="label">
        <Grid columns={2}>
          <Grid.Column className="input">
            <Input
              onChange={event => {
                setName(event.target.value);
              }}
              value={name}
              focus
              placeholder="Add new..."
            />
          </Grid.Column>
          <Grid.Column className="second">
            <Button
              onClick={() => {
                if (name === " ") {
                  alert("Name required!");
                } else {
                  context.addRecord(getForm(name));
                  setName("");
                }
              }}
              className="button"
              icon
              size="small"
              color="green"
            >
              {" "}
              Add
              <Icon name="plus" />
            </Button>
          </Grid.Column>
        </Grid>
      </Label>
    </div>
  );
};
