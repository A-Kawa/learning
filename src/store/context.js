import React, { useState } from "react";
import { mainForm } from "../const/dataForms";
import { Add } from "../indexDB/addRecord";
import { Delete } from "../indexDB/delete";
import db from "../indexDB/db";

export const Context = React.createContext();

export const Provider = props => {
  const [myState, setState] = useState([mainForm]);
  return (
    <Context.Provider
      value={{
        myState,
        getFromDB: data => {
          setState(data);
        },
        getSingleForm: ID => {
          db.table("forms")
            .get({ ID: ID })
            .then(item => {
              setState(item);
            });
        },
        addRecord: data => {
          Add(data);
          db.table("forms")
            .toArray()
            .then(forms => {
              setState(forms);
            });
        },
        deleteRecord: id => {
          Delete(id);
          db.table("forms")
            .toArray()
            .then(forms => {
              setState(forms);
            });
        }
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
